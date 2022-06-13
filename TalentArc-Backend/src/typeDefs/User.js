import gql from "graphql-tag";
export const typeDef = gql`
  type User {
    uid: ID!
    id: String!
    userType: USER_TYPE!
    fullName: String!
    email: String!
    password: String
    address: Address
    phone: String
    bio: String
    dateOfBirth: String
    nationality: String
    geoLocation: GeoLocation
    profileImgURL: String
    coverImgURL: String
    facebookURL: String
    googleURL: String
    youtubeURL: String
    instagramURL: String
    tiktokURL: String
    isPublicChat: Boolean!
  }
  input userInput {
    uid: String
    userType: USER_TYPE
    fullName: String
    email: String
    address: addressInput
    phone: String
    bio: String
    nationality: String
    geoLocation: geoLocationInput
    dateOfBirth: String
    profileImgURL: String
    coverImgURL: String
    facebookURL: String
    googleURL: String
    youtubeURL: String
    instagramURL: String
    tiktokURL: String
    isPublicChat: Boolean
  }
  input newUserInput {
    uid: String
    userType: USER_TYPE
    fullName: String!
    email: String!
    password: String!
    address: addressInput
    phone: String
    bio: String
    nationality: String
    geoLocation: geoLocationInput
    dateOfBirth: String
    profileImgURL: String
    coverImgURL: String
    facebookURL: String
    googleURL: String
    youtubeURL: String
    instagramURL: String
    tiktokURL: String
    isPublicChat: Boolean
  }
  input userLogInInput {
    email: String!
    password: String!
  }
  input updateUserInput {
    userType: USER_TYPE
    fullName: String
    email: String
    address: addressInput
    phone: String
    bio: String
    nationality: String
    geoLocation: geoLocationInput
    dateOfBirth: String
    profileImgURL: String
    coverImgURL: String
    facebookURL: String
    googleURL: String
    youtubeURL: String
    instagramURL: String
    tiktokURL: String
    isPublicChat: Boolean
  }
`;
