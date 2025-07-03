// types.ts
export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
}

export interface Tweet {
  id: string;
  user: User;
  content: string;
  image?: string | null

  createdAt: string;    // ISO string
  replies?: number;
  retweets?: number;
  likes?: number;
}