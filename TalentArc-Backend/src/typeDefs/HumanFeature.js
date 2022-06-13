import gql from "graphql-tag";
export const typeDef = gql`
  type HumanFeature {
    id: String!
    UID: String
    ethnicity: String
    gender: String
    height: String
    weight: String
    BMI: String
    hairColor: String
    eyesColor: String
    skinColor: String
    talents: [String]
    martialArts: [String]
    musicianType: [String]
    sports: [String]
    nativeLanguage: String
    nativeLanguageAccent: String
    secondLanguage: String
  }
  input humanFeatureInput {
    id: String
    UID: String
    ethnicity: String
    gender: String
    height: String
    weight: String
    BMI: String
    hairColor: String
    eyesColor: String
    skinColor: String
    talents: [String]
    martialArts: [String]
    musicianType: [String]
    sports: [String]
    nativeLanguage: String
    nativeLanguageAccent: String
    secondLanguage: String
  }
`;
