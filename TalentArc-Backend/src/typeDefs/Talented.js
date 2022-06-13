import gql from "graphql-tag";
export const typeDef = gql`
  type Talented {
    id: ID!
    user: User!
    socialFeatures: SocialFeatures
    humanFeatures: HumanFeature!
    previousWork: [String]
  }

  input newTalentedInput {
    user: newUserInput!
    humanFeatures: humanFeatureInput!
  }
  input updateTalentedInput {
    socialFeatures: updateSocialFeaturesInput
    humanFeatures: humanFeatureInput
    previousWork: [String]
  }
`;
