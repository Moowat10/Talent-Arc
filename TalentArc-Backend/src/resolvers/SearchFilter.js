import { authenticated, authorized } from "../auth";
import { UserInputError } from "apollo-server";
export default {
  filterHumanFeatures: authenticated(
    authorized("AGENCY", async (_, { input }, { database }) => {
      const list = await database.TalentedAttributes.findAll({
        where: input,
      });
      console.log(list);
      return list;
    })
  ),
};
