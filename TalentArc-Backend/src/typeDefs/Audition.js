import gql from "graphql-tag";
export const typeDef = gql`
  type AuditionManagerOverlay {
    ID: ID!
    id: String!
    UID: String!
    auditionName: String!
    roleDetails: String
    creationDate: String!
    endDate: String
    description: String
    videoURL: String
    listOfActors: [String]
    listOfWinningActors: [String]
  }
  input newAuditionManagerOverlay {
    auditionName: String!
    roleDetails: String
    creationDate: String!
    endDate: String!
    description: String
    videoURL: String
    listOfActors: [String]
    listOfWinningActors: [String]
  }
  input updateAuditionManagerOverlayInput {
    id: String!
    UID: String
    auditionName: String
    roleDetails: String
    endDate: String
    description: String
    videoURL: String
    listOfActors: [String]
    listOfWinningActors: [String]
  }
  input applyForAuditionInput {
    AID: Int!
  }
`;
