import gql from "graphql-tag";
export const typeDef = gql`
  type Agency {
    id: ID!
    user: User!
    socialFeatures: SocialFeatures
  }
  input newAgencyInput {
    user: newUserInput!
  }
  input updateAgencyInput {
    user: updateUserInput!
    socialFeatures: newSocialFeaturesInput
  }
`;
