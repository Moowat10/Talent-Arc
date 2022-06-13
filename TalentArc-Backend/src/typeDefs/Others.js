import gql from "graphql-tag";
export const typeDef = gql`
  input uid {
    id: Int!
  }
  input id {
    id: String!
  }
  type Status {
    bool: Boolean
    mssg: String
  }
  input followRequestInput {
    receiverUID: Int!
  }

  input directMessageInput {
    dmID: String
    recieverUID: Int!
    mssg: String
  }
  type Message {
    text: String
    uid: Int
  }
  type DMResponse {
    dmID: String!
    usersID: [Int]
    messages: [Message]
  }
  type AuthenticatedUser {
    user: User!
    token: String!
  }
  enum USER_TYPE {
    NORMAL
    AGENCY
    TALENTED
  }
  type Address {
    countryOfResidency: String!
    cityOfResidency: String!
  }

  input addressInput {
    countryOfResidency: String!
    cityOfResidency: String!
  }
  type GeoLocation {
    lat: String!
    lng: String!
  }
  input geoLocationInput {
    lat: String!
    lng: String!
  }
`;
