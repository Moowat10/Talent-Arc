import gql from "graphql-tag";
export const typeDef = gql`
  type SocialFeatures {
    id: String!
    following: [String]
    followers: [String]
    directMessages: [Message]
    likes: [String]
    posts: [Post]
    previousWork: [String]
    listOfTalentedPreviouslyWorked: [Talented]
    listOfAuditions: [AuditionManagerOverlay]
    listOfSimpleInterviews: [SimpleInterview]
    listOfAdvancedInterviews: [AdvancedInterview]
  }
  input newSocialFeaturesInput {
    following: [String]
    followers: [String]
    directMessages: [directMessageInput]
    likes: [String]
    posts: [postInput]
    previousWork: [String]
    listOfTalentedPreviouslyWorked: [newTalentedInput]
    listOfAuditions: [newAuditionManagerOverlay]
    listOfSimpleInterviews: [simpleInterviewInput]
    listOfAdvancedInterviews: [advancedInterviewInput]
  }
  input updateSocialFeaturesInput {
    id: String!
    following: [String]
    followers: [String]
    directMessages: [directMessageInput]
    likes: [String]
    posts: [postInput]
    previousWork: [String]
    listOfTalentedPreviouslyWorked: [newTalentedInput]
    listOfAuditions: [newAuditionManagerOverlay]
    listOfSimpleInterviews: [simpleInterviewInput]
    listOfAdvancedInterviews: [advancedInterviewInput]
  }
`;
