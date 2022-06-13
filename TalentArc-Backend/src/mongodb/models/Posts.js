const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = Schema(
  {
    uid: {
      type: Number,
      required: true,
    },
    numberOfLikes: [Number],
    views: Array,
    comments: Array,
    mediaURL: String,
    text: String,
  },
  { timestamps: true }
);

const Posts = mongoose.model("Posts", Post);

export default Posts;
