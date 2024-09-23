import { Comment } from "./types/Comment";
import { Post } from "./types/Posts";
import { User } from "./types/User";

export const users: User[] = [
  {
    username: "ElonX",
    password: "IDONTCARE",
    firstName: "Elon",
    lastName: "Musk",
  },
  {
    username: "MarkZuck",
    password: "letsfightelon",
    firstName: "Mark",
    lastName: "Zuckerberg",
  },
];

export const posts: Post[] = [
  {
    postId: "1",
    postText: 'What do you think about "X" icon?',
    dateISOString: "2023-08-06T08:50:37.794Z",
    username: "ElonX",
  },
  {
    postId: "2",
    postText: "I'm stealing Twitter with Thread",
    dateISOString: "2023-08-07T08:50:37.794Z",
    username: "MarkZuck",
  },
];

export const comments: Comment[] = [
  {
    commentId: "1",
    commentText: "Pretty cool!",
    dateISOString: "2023-08-06T08:59:37.794Z",
    username: "MarkZuck",
    postId: "1",
  },
  {
    commentId: "2",
    commentText: "Just kidding. No.",
    dateISOString: "2023-08-06T09:30:37.794Z",
    username: "MarkZuck",
    postId: "1",
  },
];
