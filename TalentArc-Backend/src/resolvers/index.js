import { UserInputError } from "apollo-server";
import { authenticated, authorized } from "../auth";
import User from "./User";
import Post from "./Post";
import DirectMessage from "./DirectMessage";
import Talented from "./Talented";
import Social from "./Social";
import Agency from "./Agency";
import Audition from "./Audition";
import SearchFilter from "./SearchFilter";
import FollowingLogic from "./FollowingLogic";

/**
 * Anything Query / Mutation resolver
 * using a user for a DB query
 * requires user authenication
 */

export default {
  Query: {
    getUserAndToken: User.getUserAndToken,
    getUserPosts: Post.getUserPosts,
    getUserDirectMessages: DirectMessage.getUserDirectMessages,
    sendDirectMessage: DirectMessage.sendDirectMessage,
    filterHumanFeatures: SearchFilter.filterHumanFeatures,
    followRequest: FollowingLogic.followRequest,
    applyForAudition: Audition.applyForAudition,
  },
  Mutation: {
    newUser: User.newUser,
    newTalented: Talented.newTalented,
    newAgency: Agency.newAgency,
    newAudition: Audition.newAudition,
    updateUser: User.updateUser,
    newPost: Post.newPost,
    newDirectMessage: DirectMessage.newDirectMessage,
    updateTalents: Talented.updateTalents,
    updateSocials: Social.updateSocials,
  },
};
