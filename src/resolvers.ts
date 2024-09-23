import { nanoid } from "nanoid";
import { comments, posts, users } from "./db.js";
import { Post } from "./types/Posts.js";
import { User } from "./types/User.js";
import { Comment } from "./types/Comment.js";
import sleep from "sleep-promise";

//define how to return data
export const resolvers = {
  Query: {
    users: () => {
      return users;
    },
    user: (_, args) => {
      return users.find((user) => user.username === args.username);
    },
    posts: () => {
      const result = [...posts];
      result.sort((a, b) => (a.dateISOString > b.dateISOString ? -1 : 1));
      return result;
    },
  },

  User: {
    posts(parent: User) {
      return posts.filter((post) => post.username === parent.username);
    },
  },

  Post: {
    comments(parent: Post) {
      return comments.filter((comment) => comment.postId === parent.postId);
    },
    user(parent: Comment) {
      return users.find((user) => user.username === parent.username);
    },
  },

  Comment: {
    user(parent: Comment) {
      return users.find((user) => user.username === parent.username);
    },
  },

  Mutation: {
    async addPost(_, args) {
      const newPost: Post = {
        postId: nanoid(),
        postText: args.postText,
        dateISOString: new Date().toISOString(),
        username: args.username,
      };
      posts.push(newPost);
      await sleep(750);
      return newPost;
    },

    async addComment(_, args) {
      const newComment: Comment = {
        commentId: nanoid(),
        commentText: args.commentText,
        dateISOString: new Date().toISOString(),
        username: args.username,
        postId: args.postId,
      };
      comments.push(newComment);
      await sleep(750);
      return newComment;
    },
  },
};
