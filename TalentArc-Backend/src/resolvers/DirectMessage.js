import { authenticated, notAuthorized } from "../auth";
import { UserInputError } from "apollo-server";
export default {
  newDirectMessage: authenticated(
    notAuthorized("USER", async (_, { input }, { models, database }) => {
      const dm = new models.directMessages({
        usersID: [input.senderUID, input.recieverUID],
        messages: [{ text: input.mssg, uid: input.senderUID }],
      });
      await dm.save();
      const user = await database.Users.findAll({
        where: { id: [input.senderUID, input.recieverUID] },
        include: [
          { model: database.SocialAttributes, as: "SID_SocialAttribute" },
        ],
      });
      user.forEach(async (u) => {
        if (u.SID_SocialAttribute.dataValues.directMessages)
          u.SID_SocialAttribute.dataValues.directMessages.push(dm._id);
        else u.SID_SocialAttribute.dataValues.directMessages = [dm._id];
        await database.SocialAttributes.update(
          u.SID_SocialAttribute.dataValues,
          {
            where: { id: u.SID_SocialAttribute.id },
          }
        );
      });
      console.log(dm);
      return { dmID: dm._id, usersID: dm.usersID, messages: dm.messages };
    })
  ),
  sendDirectMessage: authenticated(
    notAuthorized("USER", async (_, { input }, { models, database }) => {
      if (!input.dmID)
        throw new UserInputError("Direct Message Id is required");
      const dm = await models.directMessages.findById(input.dmID).exec();
      dm.messages.push({ text: input.mssg, uid: input.senderUID });
      const update = await models.directMessages.findByIdAndUpdate(dm._id, dm);
      console.log(update);
      return { dmID: dm._id, usersID: dm.usersID, messages: dm.messages };
    })
  ),
  getUserDirectMessages: authenticated(
    notAuthorized("USER", async (_, { input }, { models, database }) => {
      const user = await database.Users.findOne({
        where: { id: input.id },
        include: [
          { model: database.SocialAttributes, as: "SID_SocialAttribute" },
        ],
      });
      let messages;
      if (user.dataValues.SID_SocialAttribute.dataValues.directMessages) {
        messages = await Promise.all(
          user.dataValues.SID_SocialAttribute.dataValues.directMessages.map(
            async (mssgID) => {
              mssgID.replace("'", "");
              mssgID = mssgID.substring(1, mssgID.length - 1);
              console.log(mssgID);
              const dm = await models.directMessages.findById(mssgID);
              return {
                dmID: dm._id.toString(),
                usersID: dm.usersID,
                messages: dm.messages,
              };
            }
          )
        );
      }
      console.log(messages.length);
      return messages;
    })
  ),
};
