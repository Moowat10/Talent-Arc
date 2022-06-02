const gql = require("graphql-tag");

module.exports = gql`
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
  type Comment {
    uid: String!
    text: String
  }
  input commentInput {
    uid: String
    text: String
  }
  type Post {
    postID: String!
    uid: Int!
    numberOfLikes: [Int]
    views: [Int]
    comments: [Comment]
    mediaURL: String
    text: String
    createdAt: String
  }
  input newPostInput {
    uid: Int!
    numberOfLikes: [Int]
    views: [Int]
    comments: [commentInput]
    mediaURL: String
    text: String
  }
  input postInput {
    postID: String!
    uid: Int!
    numberOfLikes: [Int]
    views: [Int]
    comments: [commentInput]
    mediaURL: String
    text: String
  }
  type User {
    id: ID!
    uid: String!
    userType: USER_TYPE!
    fullName: String!
    email: String!
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
  input userUIDInput {
    uid: String!
  }
  input updateUserInput {
    uid: String!
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
    uid: String!
    socialFeatures: updateSocialFeaturesInput
    humanFeatures: humanFeatureInput
    previousWork: [String]
  }
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
    UID: String!
    id: String
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
  input uid {
    id: Int!
  }
  type Status {
    bool: Boolean
    mssg: String
  }
  input followRequestInput {
    senderUID: Int!
    receiverUID: Int!
  }
  input applyForAuditionInput {
    AID: Int!
    UID: Int!
  }
  input directMessageInput {
    dmID: String
    senderUID: Int!
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
  type Query {
    getUser(input: userUIDInput!): User!
    getUserPosts(input: uid!): [Post]!
    getUserDirectMessages(input: uid!): [DMResponse]!
    newDirectMessage(input: directMessageInput!): DMResponse!
    sendDirectMessage(input: directMessageInput!): DMResponse!
    filterHumanFeatures(input: humanFeatureInput!): [HumanFeature]
    followRequest(input: followRequestInput!): Status
    applyForAudition(input: applyForAuditionInput!): Status
  }
  type Mutation {
    newUser(input: newUserInput!): User!
    newTalented(input: newTalentedInput!): Talented!
    newAgency(input: newAgencyInput!): Agency!
    newAudition(input: newAuditionManagerOverlay!): AuditionManagerOverlay!
    newPost(input: newPostInput!): Post!
    updateUser(input: updateUserInput!): Status!
    updateTalents(input: updateTalentedInput!): Status!
    updateSocials(input: updateSocialFeaturesInput!): Status!
  }
`;
