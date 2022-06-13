import gql from "graphql-tag";
export const typeDef = gql`
  type SimpleInterview {
    id: ID!
    meetingID: String!
    agencyID: String!
    auditionID: String!
    address: Address
    geoLocation: GeoLocation
    numberOfInterviews: Int
    startingDateAndTime: String
    timeOfSingleInterview: Float
    actorID: String!
  }
  type AdvancedInterview {
    id: ID!
    meetingID: String!
    agencyID: String!
    auditionID: String!
    address: Address
    geoLocation: GeoLocation
    dateAndTime: String!
    Location: String
    actorsIDs: [String]!
  }
  input simpleInterviewInput {
    meetingID: String!
    agencyID: String!
    auditionID: String!
    address: addressInput
    geoLocation: geoLocationInput
    numberOfInterviews: Int
    startingDateAndTime: String
    timeOfSingleInterview: Float
    actorID: String!
  }
  input advancedInterviewInput {
    meetingID: String!
    agencyID: String!
    auditionID: String!
    address: addressInput
    geoLocation: geoLocationInput
    dateAndTime: String!
    Location: String
    actorsIDs: [String]!
  }
`;
