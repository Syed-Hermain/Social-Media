import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TweetBox from "@/components/tweetbox";
import { LeftSidebar } from "@/components/Sidebar/LeftSidebar";
import RightSidebar from "@/components/Sidebar/RightSidebar";
type Tweet = {
  id: number;
  user: {
    name: string;
    avatar: string;
    username: string;
  };
  image?: string | null;
  content: string;
  createdAt: string;
};

const initialTweets: Tweet[] = [
  {
    id: 1,
    user: {
      name: "Alice Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      username: "alicej",
    },
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    content: "Excited to join this new social media platform! 🚀",
    createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
  },
  {
    id: 2,
    user: {
      name: "Bob Smith",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      username: "bobsmith",
    },
    image: null,
    content: "Loving the dark mode UI. Great job team! 🌙",
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
  },
  {
    id: 3,
    user: {
      name: "Charlie Brown",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
      username: "charliebrown",
    },
    image:
      "https://i.pinimg.com/736x/4f/0e/a1/4f0ea10b5847c047a44c02f221c1130a.jpg",
    content: "Just had the best coffee ever! ☕️",
    createdAt: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
  },
];

function formatTime(dateString: string) {
  const date = new Date(dateString);
  const diff = Math.floor((Date.now() - date.getTime()) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return date.toLocaleDateString();
}

function Home() {
  const [tweets, setTweets] = useState<Tweet[]>(initialTweets);
  const [tweetContent, setTweetContent] = useState("");
  const [tweetImage, setTweetImage] = useState<File | null>(null);

  const handlePost = () => {
    if (!tweetContent.trim()) return;
    if (tweetImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newTweet: Tweet = {
          id: Date.now(),
          user: {
            name: "You",
            avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
            username: "you",
          },
          content: tweetContent,
          image: reader.result as string,
          createdAt: new Date().toISOString(),
        };
        setTweets([newTweet, ...tweets]);
        setTweetContent("");
        setTweetImage(null);
      };
      reader.readAsDataURL(tweetImage);
    } else {
      const newTweet: Tweet = {
        id: Date.now(),
        user: {
          name: "You",
          avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
          username: "you",
        },
        content: tweetContent,
        image: null,
        createdAt: new Date().toISOString(),
      };
      setTweets([newTweet, ...tweets]);
      setTweetContent("");
      setTweetImage(null);
    }
  };

  return (
    <div className="bg-background min-h-screen">
  <div className="container mx-auto max-w-6xl grid grid-cols-[auto_1fr_auto] gap-x-4 py-6">
    {/* Left Sidebar */}
    <aside className="hidden sm:flex flex-col sticky top-6 h-fit w-20 lg:w-64 space-y-2 px-2">
      <LeftSidebar/>
    </aside>


      <main
        className="col-start-2"
      >
        <div className="max-w-2xl mx-auto space-y-4 px-4 sm:px-0">

        <TweetBox
          tweetContent={tweetContent}
          setTweetContent={setTweetContent}
          handlePost={handlePost}
          tweetImage={tweetImage} // Placeholder, implement image handling if needed
          setTweetImage={setTweetImage} //
        />
        <div className="space-y-4">
          {tweets.map((tweet) => (
            <Card key={tweet.id} className="shadow-md">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <Avatar>
                  <AvatarImage src={tweet.user.avatar} />
                  <AvatarFallback>{tweet.user.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{tweet.user.name}</div>
                  <div className="text-xs text-muted-foreground">
                    @{tweet.user.username} · {formatTime(tweet.createdAt)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base">{tweet.content}</p>
                {tweet.image && (
                  <img
                    src={tweet.image}
                    alt="Tweet image"
                    className="mt-2 rounded-md border border-gray-200 w-full mx-auto object-contain"
                    style={{
                      maxHeight: "400px",
                      height: "auto",
                      width: "100%",
                    }}
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </main>
      {/* Right Sidebar */}
      <aside className="hidden lg:block w-80 space-y-6 px-4">
      {/* …trends / who to follow… */}
      <RightSidebar/>
    </aside>

    </div>
    </div>
  );
}

export default Home;
