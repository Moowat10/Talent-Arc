import { typeDef as User } from "./User";
import { typeDef as Agency } from "./Agency";
import { typeDef as Audition } from "./Audition";
import { typeDef as Interview } from "./Interview";
import { typeDef as Post } from "./Post";
import { typeDef as SocialFeature } from "./SocialFeature";
import { typeDef as Talented } from "./Talented";
import { typeDef as HumanFeature } from "./HumanFeature";
import { typeDef as Others } from "./Others";
import gql from "graphql-tag";
const schema = gql`
  type Query {
    getUserAndToken(input: userLogInInput!): AuthenticatedUser!
    getUserByID(input: uid!): User!
    getTalents: HumanFeature
    getUserPosts: [Post]
    incrementPostLikes(input: id!): Post!
    getUserDirectMessages: [DMResponse]
    sendDirectMessage(input: directMessageInput!): DMResponse!
    filterHumanFeatures(input: humanFeatureInput!): [HumanFeature]
    followRequest(input: followRequestInput!): Status
    applyForAudition(input: applyForAuditionInput!): Status
  }
  type Mutation {
    newUser(input: newUserInput!): AuthenticatedUser!
    newTalented(input: newTalentedInput!): AuthenticatedUser!
    newAgency(input: newAgencyInput!): AuthenticatedUser!
    newAudition(input: newAuditionManagerOverlay!): AuditionManagerOverlay!
    newPost(input: newPostInput!): Post!
    updatePost(input: postInput!): Post!
    updatePostComments(input: postCommentInput!): Post!
    newDirectMessage(input: directMessageInput!): DMResponse!
    updateUser(input: updateUserInput!): Status!
    updateTalents(input: updateTalentedInput!): Status!
    updateSocials(input: updateSocialFeaturesInput!): Status!
  }
  type Subscription {
    directMessagesListener: DMResponse
  }
`;
export default [
  schema,
  User,
  Agency,
  SocialFeature,
  HumanFeature,
  Talented,
  Audition,
  Interview,
  Post,
  Others,
];
