export const typeDefs = `#graphql
  type User {
    username: String!
    password: String!
    firstName: String!
    lastName: String!
    posts: [Post]!
  }

  type Post {
    postId: String!
    postText: String!
    dateISOString: String!
    comments: [Comment]
    username: String!
    user: User!
  }

  type Comment {
    commentId: String!
    commentText: String!
    dateISOString: String!
    postId: String!
    username: String!
    user: User!
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts: [Post]
  }

  type Mutation {
    addPost(postText: String!, username: String!): Post
    addComment(postId: String!, commentText: String!, username: String!): Comment
  }
`;
