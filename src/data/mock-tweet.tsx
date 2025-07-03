// mock-tweets.ts
import type { Tweet } from "./types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const mockTweets: Tweet[] = [
  {
    id: "1",
    user: {
      id: "u1",
      name: "Alice Doe",
      username: "alice",
      avatar: "https://example.com/avatar1.jpg",
    },
    content: "Hello, world! This is my first tweet.",
    createdAt: new Date().toISOString(),
    likes: 12,
    replies: 3,
    retweets: 1,
  },
  {
    id: "2",
    user: {
      id: "u2",
      name: "Bob Smith",
      username: "bob",
      avatar: "https://example.com/avatar2.jpg",
    },
    content: "Loving TailwindCSS + React!",
    image: "https://example.com/some-image.jpg",
    createdAt: new Date().toISOString(),
    likes: 24,
    replies: 5,
    retweets: 2,
  },
  {
    id: "3",
    user: {
      id: "u3",
      name: "Charlie Lee",
      username: "charlie",
      avatar: "https://example.com/avatar3.jpg",
    },
    content: "Just finished a 10k run! 🏃‍♂️",
    createdAt: new Date().toISOString(),
    likes: 8,
    replies: 1,
    retweets: 0,
  },
  {
    id: "4",
    user: {
      id: "u4",
      name: "Dana White",
      username: "dana",
      avatar: "https://example.com/avatar4.jpg",
    },
    content: "Check out this amazing sunset!",
    image: "https://example.com/sunset.jpg",
    createdAt: new Date().toISOString(),
    likes: 30,
    replies: 6,
    retweets: 4,
  }
];