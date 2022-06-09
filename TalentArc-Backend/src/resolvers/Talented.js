import { authenticated, authorized } from "../auth";
import { UserInputError } from "apollo-server";
import md5 from "md5";
export default {
  async newTalented(_, { input }, { database, createToken }) {
    const socialAttributes = await database.SocialAttributes.create({});
    const user = await database.Users.create({
      SID: socialAttributes.dataValues.id,
      fullName: input.user.fullName,
      email: input.user.email,
      password: md5(input.user.password),
      mobile: input.user.phone,
      userType: "TALENTED",
      address: "mixed address",
      DOB: input.user.dateOfBirth,
      profileURL: input.user.profileImgURL,
      coverURL: input.user.coverImgURL,
      bio: input.user.bio,
      facebookURL: input.user.facebookURL,
      googleURL: input.user.googleURL,
      instaURL: input.user.instagramURL,
      tiktokURL: input.user.tiktokURL,
      youtubeURL: input.user.youtubeURL,
      nationality: input.user.nationality,
      countryOfResidence: input.user.address.countryOfResidency,
      cityOfResidence: input.user.address.cityOfResidency,
      geoLocation: input.user.geoLocation,
      createdAt: new Date(),
    });
    const talentedAttributes = await database.TalentedAttributes.create({
      UID: user.dataValues.id,
      ethnicity: input.humanFeatures.ethnicity,
      gender: input.humanFeatures.gender,
      height: input.humanFeatures.height,
      weight: input.humanFeatures.weight,
      BMI: input.humanFeatures.BMI,
      hairColor: input.humanFeatures.hairColor,
      eyesColor: input.humanFeatures.eyesColor,
      skinColor: input.humanFeatures.skinColor,
      talents: input.humanFeatures.talents,
      martialArts: input.humanFeatures.martialArts,
      musicianType: input.humanFeatures.musicianType,
      sports: input.humanFeatures.sports,
      nativeLanguage: input.humanFeatures.nativeLanguage,
      nativeLanguageAccent: input.humanFeatures.nativeLanguageAccent,
      secondLanguage: input.humanFeatures.secondLanguage,
    });
    // console.log(query.dataValues);
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
  updateTalents: authenticated(
    authorized("TALENTED", async (_, { input }, { database, user }) => {
      const uid = user.id;
      let updated;
      delete input.uid;
      if (input.humanFeatures) {
        updated = await database.TalentedAttributes.update(
          input.humanFeatures,
          {
            where: {
              UID: uid,
            },
          }
        );
      }
      if (updated) return { bool: true };
      else return { bool: false };
    })
  ),
};
