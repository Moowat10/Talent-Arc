import { authenticated, notAuthorized } from "../auth";
import { UserInputError } from "apollo-server";
export default {
  updateSocials: authenticated(
    notAuthorized("USER", async (_, { input }, { database, user }) => {
      const id = user.sid;
      let updated;

      updated = await database.SocialAttributes.update(input, {
        where: {
          id: id,
        },
      });

      if (updated) return { bool: true };
      else return { bool: false };
    })
  ),
};
