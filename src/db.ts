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
  {
    username: "John.w",
    password: "ilovedogs",
    firstName: "John",
    lastName: "Wick",
  },
  {
    username: "Tswap",
    password: "ilovetosing",
    firstName: "Taylor",
    lastName: "Swap",
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
  {
    postId: "l76KBtYgCGg7hCVY5ZTJc",
    dateISOString: "2024-09-23T11:50:33.081Z",
    postText: "GraphQL is quite interesting",
    username: "ElonX"
  }
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
  {
    commentId: "V_5FBjO7ODlSw0LuuDZtw",
    commentText: "The learning curve is a bit steep.",
    dateISOString: "2024-09-23T11:51:13.212Z",
    postId: "l76KBtYgCGg7hCVY5ZTJc",
    username: "MarkZuck"
  },
  {
    commentId: "-oAp2LLwRTtcs_71xkhv0",
    commentText: "But we gonna use it on Facebook for sure.",
    dateISOString: "2024-09-23T11:51:50.414Z",
    postId: "l76KBtYgCGg7hCVY5ZTJc",
    username: "MarkZuck"
  },
  {
    commentId: "rOoA6Zz6lvXGv7krdDkH8",
    commentText: "Let me know if it works !!!",
    dateISOString: "2024-09-23T11:52:23.561Z",
    postId: "l76KBtYgCGg7hCVY5ZTJc",
    username: "ElonX"
  }
];
