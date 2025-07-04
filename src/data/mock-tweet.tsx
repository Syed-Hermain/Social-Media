// mock-tweets.ts
import type { Tweet } from "./types";

export const mockTweets: Tweet[] = [
  {
    id: "1",
    user: {
      id: "u1",
      name: "Alice Doe",
      username: "alice",
      avatar: "https://randomuser.me/api/portraits/women/34.jpg",
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
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
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
      avatar: "https://randomuser.me/api/portraits/men/18.jpg",
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
      avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    },
    content: "Check out this amazing sunset!",
    image: "https://example.com/sunset.jpg",
    createdAt: new Date().toISOString(),
    likes: 30,
    replies: 6,
    retweets: 4,
  },
  {
    id: "5",
    user: {
      id: "u5",
      name: "Eva Green",
      username: "eva",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    content: "Coffee break ☕️ Anyone else?",
    createdAt: new Date().toISOString(),
    likes: 15,
    replies: 2,
    retweets: 1,
  },
  {
    id: "6",
    user: {
      id: "u6",
      name: "Frank Ocean",
      username: "franko",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    content: "Listening to some good music today.",
    createdAt: new Date().toISOString(),
    likes: 18,
    replies: 4,
    retweets: 2,
  },
  {
    id: "7",
    user: {
      id: "u7",
      name: "Grace Hopper",
      username: "grace",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    content: "Debugging code late at night hits different.",
    createdAt: new Date().toISOString(),
    likes: 22,
    replies: 3,
    retweets: 3,
  },
  {
    id: "8",
    user: {
      id: "u8",
      name: "Henry Ford",
      username: "henryf",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    content: "Innovation distinguishes between a leader and a follower.",
    createdAt: new Date().toISOString(),
    likes: 27,
    replies: 5,
    retweets: 5,
  },
  {
    id: "9",
    user: {
      id: "u9",
      name: "Ivy Chen",
      username: "ivychen",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    content: "Just baked some cookies! 🍪",
    image: "https://example.com/cookies.jpg",
    createdAt: new Date().toISOString(),
    likes: 19,
    replies: 2,
    retweets: 1,
  },
  {
    id: "10",
    user: {
      id: "u10",
      name: "Jack Black",
      username: "jackb",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    content: "Movie night recommendations?",
    createdAt: new Date().toISOString(),
    likes: 13,
    replies: 4,
    retweets: 0,
  },
  {
    id: "11",
    user: {
      id: "u11",
      name: "Kara Zor-El",
      username: "kara",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    content: "Super excited for the weekend! 🎉",
    createdAt: new Date().toISOString(),
    likes: 21,
    replies: 3,
    retweets: 2,
  },
  {
    id: "12",
    user: {
      id: "u12",
      name: "Leo Messi",
      username: "leom",
      avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    content: "Scored a hat-trick today! ⚽️",
    image: "https://example.com/football.jpg",
    createdAt: new Date().toISOString(),
    likes: 40,
    replies: 10,
    retweets: 8,
  },
  // 8 more tweets below
  {
    id: "13",
    user: {
      id: "u13",
      name: "Mona Lisa",
      username: "monalisa",
      avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    content: "Painting all day, every day. 🎨",
    createdAt: new Date().toISOString(),
    likes: 17,
    replies: 2,
    retweets: 1,
  },
  {
    id: "14",
    user: {
      id: "u14",
      name: "Neil Armstrong",
      username: "neil",
      avatar: "https://randomuser.me/api/portraits/men/60.jpg",
    },
    content: "One small step for man, one giant leap for mankind.",
    image: "https://example.com/moon.jpg",
    createdAt: new Date().toISOString(),
    likes: 55,
    replies: 12,
    retweets: 20,
  },
  {
    id: "15",
    user: {
      id: "u15",
      name: "Olivia Wilde",
      username: "olivia",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    content: "Reading a great book this weekend!",
    createdAt: new Date().toISOString(),
    likes: 14,
    replies: 1,
    retweets: 0,
  },
  {
    id: "16",
    user: {
      id: "u16",
      name: "Paul Atreides",
      username: "paul",
      avatar: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    content: "Desert walks are the best. 🌵",
    image: "https://example.com/desert.jpg",
    createdAt: new Date().toISOString(),
    likes: 20,
    replies: 3,
    retweets: 2,
  },
  {
    id: "17",
    user: {
      id: "u17",
      name: "Quincy Jones",
      username: "quincy",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    content: "Music is the universal language.",
    createdAt: new Date().toISOString(),
    likes: 29,
    replies: 4,
    retweets: 3,
  },
  {
    id: "18",
    user: {
      id: "u18",
      name: "Rita Ora",
      username: "rita",
      avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    content: "Studio time! New music coming soon. 🎤",
    createdAt: new Date().toISOString(),
    likes: 26,
    replies: 5,
    retweets: 4,
  },
  {
    id: "19",
    user: {
      id: "u19",
      name: "Steve Jobs",
      username: "steve",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    content: "Stay hungry, stay foolish.",
    createdAt: new Date().toISOString(),
    likes: 60,
    replies: 8,
    retweets: 15,
  },
  {
    id: "20",
    user: {
      id: "u20",
      name: "Tina Fey",
      username: "tina",
      avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    content: "Comedy writing is my cardio.",
    createdAt: new Date().toISOString(),
    likes: 23,
    replies: 2,
    retweets: 2,
  },
];