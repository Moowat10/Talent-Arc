import { authenticated, authorized } from "../auth";
import { UserInputError } from "apollo-server";
export default {
  newAudition: authenticated(
    authorized("AGENCY", async (_, { input }, { database, user }) => {
      input["UID"] = user.id;
      const audition = await database.Auditions.create(input);
      return audition.dataValues;
    })
  ),
  applyForAudition: authenticated(
    authorized("TALENTED", async (_, { input }, { database, user }) => {
      const audition = await database.Auditions.findByPk(input.AID);
      const data = audition.dataValues;
      if (data.listOfActors) {
        if (!data.listOfActors.includes(user.id))
          data.listOfActors.push(user.id);
        else
          return { bool: false, mssg: "User is already applied to audition" };
      } else data.listOfActors = [user.id];
      const id = data.id;
      delete data.id;
      const update = await database.Auditions.update(data, {
        where: {
          id: id,
        },
      });
      if (update) {
        return {
          bool: true,
          mssg: "Audiotion with ID " + input.AID + " updated successfully",
        };
      } else
        return {
          bool: false,
          mssg: "Error in updating Audiotion with ID " + input.AID,
        };
    })
  ),
};
