import { authenticated, notAuthorized } from "../auth";
import { UserInputError } from "apollo-server";
export default {
  followRequest: authenticated(
    notAuthorized("USER", async (_, { input }, { database, user }) => {
      const users = await database.Users.findAll({
        where: { id: [user.id, input.receiverUID] },
        include: [
          { model: database.SocialAttributes, as: "SID_SocialAttribute" },
        ],
      });
      console.log(user);
      let Socials;
      let SocialsID;
      var f1;
      var f2;
      users.forEach(async (u) => {
        if (user.id == u.id) {
          Socials = u.SID_SocialAttribute.dataValues;
          SocialsID = Socials.id;
          delete Socials.id;
          if (Socials.following) {
            if (!Socials.following.includes(input.receiverUID))
              Socials.following.push(input.receiverUID);
          } else Socials.following = [input.receiverUID];
          f1 = await database.SocialAttributes.update(Socials, {
            where: {
              id: SocialsID,
            },
          });
          console.log(f1);
        } else if (input.receiverUID == u.id) {
          Socials = u.SID_SocialAttribute.dataValues;
          SocialsID = Socials.id;
          delete Socials.id;
          if (Socials.followers) {
            if (!Socials.followers.includes(user.id))
              Socials.followers.push(user.id);
          } else Socials.followers = [user.id];
          f2 = await database.SocialAttributes.update(Socials, {
            where: {
              id: SocialsID,
            },
          });
          console.log(f2);
        }
      });
      return true;
    })
  ),
};
