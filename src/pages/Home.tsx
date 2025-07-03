import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TweetBox from "@/components/TweetBox/tweetbox";
import { LeftSidebar } from "@/components/Sidebar/LeftSidebar";
import RightSidebar from "@/components/Sidebar/RightSidebar";
import { TweetCard } from "@/TweetCard/TweetCard";
import type { Tweet } from "@/data/types";
import { mockTweets } from "@/data/mock-tweet";


function Home() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [tweetContent, setTweetContent] = useState("");
  const [tweetImage, setTweetImage] = useState<File | null>(null);

  useEffect(()=>{
    setTweets(mockTweets);
  },[])
  const handlePost = () => {
    if (!tweetContent.trim()) return;
    if (tweetImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newTweet: Tweet = {
          id: Date.now().toString(),
          user: {
            id: "u"+Date.now().toString(),
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
        id: Date.now().toString(),
        user: {
          id: "u"+Date.now().toString(),
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
      <LeftSidebar
      tweetContent={tweetContent}
        setTweetContent={setTweetContent}
        tweetImage={tweetImage}
        setTweetImage={setTweetImage}
        handlePost={handlePost}
      />
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
            <TweetCard key={tweet.id} tweet={tweet} />
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
