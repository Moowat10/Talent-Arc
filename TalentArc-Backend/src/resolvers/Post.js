import { authenticated, notAuthorized } from "../auth";
import { UserInputError } from "apollo-server";

export default {
  newPost: authenticated(
    notAuthorized("USER", async (_, { input }, { models, database, user }) => {
      const u = await database.Users.findOne({
        where: { id: user.id },
        include: [
          { model: database.SocialAttributes, as: "SID_SocialAttribute" },
        ],
      });
      input["uid"] = user.id;
      let post = new models.Posts(input);
      post.save(function (err) {
        if (err) return console.log(err);
        // saved!
      });
      console.log(post._id.toString());
      if (u.dataValues.SID_SocialAttribute.dataValues.posts) {
        u.dataValues.SID_SocialAttribute.dataValues.posts.push(
          post._id.toString()
        );
      } else
        u.dataValues.SID_SocialAttribute.dataValues.posts = [
          post._id.toString(),
        ];

      database.SocialAttributes.update(
        u.dataValues.SID_SocialAttribute.dataValues,
        {
          where: {
            id: u.dataValues.SID_SocialAttribute.dataValues.id,
          },
        }
      );

      const id = post._id.toString();
      delete post._id;
      post["postID"] = id;
      console.log(post);
      return post;
    })
  ),
  getUserPosts: authenticated(
    notAuthorized("USER", async (_, args, { models, database, user }) => {
      const u = await database.Users.findOne({
        where: { id: user.id },
        include: [
          { model: database.SocialAttributes, as: "SID_SocialAttribute" },
        ],
      });
      if (u.SID_SocialAttribute.dataValues.posts) {
        const posts = await Promise.all(
          u.SID_SocialAttribute.dataValues.posts.map(async (post) => {
            let doc = await models.Posts.findById(post);
            const id = doc._id.toString();
            delete doc._id;
            doc["postID"] = id;
            return doc;
          })
        );
        console.log(posts);
        return posts;
      }
    })
  ),
  updatePost: async (_, { input }, { models, database, user }) => {
    const postID = input.postID;
    delete input.postID;
    const post = await models.Posts.findByIdAndUpdate(postID, input, {
      returnOriginal: false,
    });
    post["postID"] = post.id;
    delete post.id;
    return post;
  },
  updatePostComments: async (_, { input }, { models, database, user }) => {
    const postID = input.postID;
    input.comment.uid = user.id;
    const post = await models.Posts.findByIdAndUpdate(
      postID,
      {
        $push: { comments: input.comment },
      },
      { upsert: true, returnOriginal: false }
    );
    console.log({ post, input });
    post["postID"] = post.id;
    delete post.id;
    return post;
  },
  incrementPostLikes: async (_, { input }, { models, database, user }) => {
    const postID = input.id;
    delete input.id;
    const post = await models.Posts.findByIdAndUpdate(
      postID,
      {
        $addToSet: { numberOfLikes: user.id },
      },
      { upsert: true, returnOriginal: false }
    );
    post["postID"] = post.id;
    delete post.id;
    return post;
  },
};
