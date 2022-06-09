import { authenticated, authorized } from "../auth";
import { UserInputError } from "apollo-server";
import md5 from "md5";
export default {
  async newAgency(_, { input }, { database, createToken }) {
    const socialAttributes = await database.SocialAttributes.create({});
    const user = await database.Users.create({
      SID: socialAttributes.dataValues.id,
      fullName: input.user.fullName,
      email: input.user.email,
      password: md5(input.user.password),
      mobile: input.user.phone,
      userType: "AGENCY",
      address: "mixed address",
      bio: input.user.bio,
      geoLocation: input.user.geoLocation,
      createdAt: new Date(),
    });
    const token = createToken({
      id: user.dataValues.id,
      sid: user.dataValues.SID,
      role: user.dataValues.userType,
    });
    console.log(user.dataValues);
    return {
      user: user.dataValues,
      token,
    };
  },
};
