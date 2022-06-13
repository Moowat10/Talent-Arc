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

const NEW_DM = "NEW_DM";

export default {
  Query: {
    getUserAndToken: User.getUserAndToken,
    getTalents: Talented.getTalents,
    getUserPosts: Post.getUserPosts,
    incrementPostLikes: Post.incrementPostLikes,
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
    updatePost: Post.updatePost,
    updatePostComments: Post.updatePostComments,
    newDirectMessage: DirectMessage.newDirectMessage,
    updateTalents: Talented.updateTalents,
    updateSocials: Social.updateSocials,
  },
  Subscription: {
    directMessagesListener: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator([NEW_DM]),
    },
  },
};
