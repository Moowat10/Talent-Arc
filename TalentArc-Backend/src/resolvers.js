import { UserInputError } from "apollo-server";
import Users from "../sequelize-auto/Users";
import models from "./mongodb";
import database from "./database";
import { SocialAttributes } from "./database/models";
import { password } from "pg/lib/defaults";
import { model } from "mongoose";
const { da, tr } = require("date-fns/locale");
/**
 * Anything Query / Mutation resolver
 * using a user for a DB query
 * requires user authenication
 */

module.exports = {
  Query: {
    async getUserPosts(_, { input }) {
      const user = await database.Users.findOne({
        where: { id: input.id },
        include: [
          { model: database.SocialAttributes, as: "SID_SocialAttribute" },
        ],
      });
      if (user.SID_SocialAttribute.dataValues.posts) {
        const posts = await Promise.all(
          user.SID_SocialAttribute.dataValues.posts.map(async (post) => {
            let doc = await models.Posts.findById(post);
            const id = doc._id.toString();
            delete doc._id;
            doc["postID"] = id;
            return doc;
          })
        );
        console.log(posts);
        return posts;
      }
    },
    async newDirectMessage(_, { input }) {
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
    },
    async sendDirectMessage(_, { input }) {
      if (!input.dmID)
        throw new UserInputError("Direct Message Id is required");
      const dm = await models.directMessages.findById(input.dmID).exec();
      dm.messages.push({ text: input.mssg, uid: input.senderUID });
      const update = await models.directMessages.findByIdAndUpdate(dm._id, dm);
      console.log(update);
      return { dmID: dm._id, usersID: dm.usersID, messages: dm.messages };
    },
    async getUserDirectMessages(_, { input }) {
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
    },
    async filterHumanFeatures(_, { input }) {
      delete input.id;
      delete input.UID;
      const list = await database.TalentedAttributes.findAll({
        where: input,
      });
      console.log(list);
      return list;
    },
    async followRequest(_, { input }) {
      const user = await database.Users.findAll({
        where: { id: [input.senderUID, input.receiverUID] },
        include: [
          { model: database.SocialAttributes, as: "SID_SocialAttribute" },
        ],
      });
      console.log(user);
      let Socials;
      let SocialsID;
      var f1;
      var f2;
      user.forEach(async (u) => {
        if (input.senderUID == u.id) {
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
            if (!Socials.followers.includes(input.senderUID))
              Socials.followers.push(input.senderUID);
          } else Socials.followers = [input.senderUID];
          f2 = await database.SocialAttributes.update(Socials, {
            where: {
              id: SocialsID,
            },
          });
          console.log(f2);
        }
      });
      return true;
    },
    async applyForAudition(_, { input }) {
      const audition = await database.Auditions.findByPk(input.AID);
      const data = audition.dataValues;
      if (data.listOfActors) {
        if (!data.listOfActors.includes(input.UID))
          data.listOfActors.push(input.UID);
        else
          return { bool: false, mssg: "User is already applied to audition" };
      } else data.listOfActors = [input.UID];
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
    },
  },
  Mutation: {
    async newUser(_, { input }) {
      const user = await database.Users.create({
        fullName: input.fullName,
        email: input.email,
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
      console.log(user.dataValues);
      return user.dataValues;
    },
    async newTalented(_, { input }) {
      const socialAttributes = await database.SocialAttributes.create({});
      const user = await database.Users.create({
        SID: socialAttributes.dataValues.id,
        fullName: input.user.fullName,
        email: input.user.email,
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
      return {
        user: user.dataValues,
        socialFeatures: socialAttributes.dataValues,
        humanFeatures: talentedAttributes.dataValues,
      };
    },

    async newAgency(_, { input }) {
      const socialAttributes = await database.SocialAttributes.create({});
      const user = await database.Users.create({
        SID: socialAttributes.dataValues.id,
        fullName: input.user.fullName,
        email: input.user.email,
        mobile: input.user.phone,
        userType: "AGENCY",
        address: "mixed address",
        bio: input.user.bio,
        geoLocation: input.user.geoLocation,
        createdAt: new Date(),
      });
      return {
        user: user.dataValues,
      };
    },
    async newAudition(_, { input }) {
      const user = await database.Users.findOne({
        where: {
          id: input.UID,
        },
      });
      if (!user) {
        throw new UserInputError("Error in user id cannot create audition");
      }
      if (user.dataValues.userType === "AGENCY") {
        delete input.id;
        const audition = await database.Auditions.create(input);
        return audition.dataValues;
      } else throw new UserInputError("User must be an AGENCY");
    },
    async updateUser(_, { input }) {
      const uid = input.uid;
      delete input.uid;
      const updated = await database.Users.update(input, {
        where: {
          id: uid,
        },
      });
      if (updated) return { bool: true };
      else return { bool: false };
    },
    async newPost(_, { input }) {
      const user = await database.Users.findOne({
        where: { id: input.uid },
        include: [
          { model: database.SocialAttributes, as: "SID_SocialAttribute" },
        ],
      });

      let post = new models.Posts(input);
      post.save(function (err) {
        if (err) return console.log(err);
        // saved!
      });
      console.log(post._id.toString());
      if (user.dataValues.SID_SocialAttribute.dataValues.posts) {
        user.dataValues.SID_SocialAttribute.dataValues.posts.push(
          post._id.toString()
        );
      } else
        user.dataValues.SID_SocialAttribute.dataValues.posts = [
          post._id.toString(),
        ];

      database.SocialAttributes.update(
        user.dataValues.SID_SocialAttribute.dataValues,
        {
          where: {
            id: user.dataValues.SID_SocialAttribute.dataValues.id,
          },
        }
      );

      const id = post._id.toString();
      delete post._id;
      post["postID"] = id;
      console.log(post);
      return post;
    },
    async updateTalents(_, { input }) {
      const uid = input.uid;
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
    },
    async updateSocials(_, { input }) {
      const id = input.id;
      let updated;
      delete input.id;

      updated = await database.SocialAttributes.update(input, {
        where: {
          id: id,
        },
      });

      if (updated) return { bool: true };
      else return { bool: false };
    },
  },
};
