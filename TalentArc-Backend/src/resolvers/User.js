import { authenticated, authorized, createToken } from "../auth";
import { UserInputError } from "apollo-server";
import md5 from "md5";
export default {
  async newUser(_, { input }, { database }) {
    const hash = md5(input.password);
    const user = await database.Users.create({
      fullName: input.fullName,
      email: input.email,
      password: hash,
      mobile: input.phone,
      userType: "NORMAL",
      address: "mixed address",
      DOB: input.dateOfBirth,
      profileURL: input.profileImgURL,
      coverURL: input.coverImgURL,
      bio: input.bio,
      facebookURL: input.facebookURL,
      googleURL: input.googleURL,
      instaURL: input.instagramURL,
      tiktokURL: input.tiktokURL,
      youtubeURL: input.youtubeURL,
      nationality: input.nationality,
      countryOfResidence: input.address.countryOfResidency,
      cityOfResidence: input.address.cityOfResidency,
      geoLocation: input.geoLocation,
      createdAt: new Date(),
    });
    const token = createToken(user.dataValues.id, user.dataValues.userType);
    console.log(user.dataValues);
    return { user: user.dataValues, token: token };
  },
  getUserAndToken: async (_, { input }, { database }) => {
    const user = await database.Users.findOne({
      where: {
        email: input.email,
      },
    });
    if (user) {
      if (md5(input.password) === user.dataValues.password) {
        const token = createToken(user.dataValues.id, user.dataValues.userType);
        return { user: user.dataValues, token };
      } else throw new UserInputError("Wrong password");
    } else {
      throw new UserInputError("This email is not registered");
    }
  },
  updateUser: authenticated(async (_, { input }, { database, user }) => {
    const uid = user.id;
    delete input.uid;
    const updated = await database.Users.update(input, {
      where: {
        id: uid,
      },
    });
    if (updated) return { bool: true };
    else return { bool: false };
  }),
};
