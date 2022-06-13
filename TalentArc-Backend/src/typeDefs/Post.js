import gql from "graphql-tag";
export const typeDef = gql`
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
    numberOfLikes: [Int]
    views: [Int]
    comments: [commentInput]
    mediaURL: String
    text: String
  }
  input postInput {
    postID: String!
    numberOfLikes: [Int]
    views: [Int]
    comments: [commentInput]
    mediaURL: String
    text: String
  }
  input postCommentInput {
    postID: String!
    comment: commentInput
  }
  type Comment {
    uid: String!
    text: String
  }
  input commentInput {
    uid: String
    text: String
  }
`;
