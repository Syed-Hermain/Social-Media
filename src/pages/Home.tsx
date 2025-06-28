import { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type Tweet = {
    id: number;
    user: {
        name: string;
        avatar: string;
        username: string;
    };
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

    const handlePost = () => {
        if (!tweetContent.trim()) return;
        const newTweet: Tweet = {
            id: Date.now(),
            user: {
                name: "You",
                avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
                username: "you",
            },
            content: tweetContent,
            createdAt: new Date().toISOString(),
        };
        setTweets([newTweet, ...tweets]);
        setTweetContent("");
    };

    return (
        <div className="max-w-xl mx-auto py-8 px-2">
            <Card className="mb-6 shadow-lg">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src="https://randomuser.me/api/portraits/lego/1.jpg" />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <span className="font-semibold">What's on your mind?</span>
                    </div>
                </CardHeader>
                <CardContent>
                    <Textarea
                        placeholder="Write your tweet..."
                        value={tweetContent}
                        onChange={(e) => setTweetContent(e.target.value)}
                        className="resize-none"
                        rows={3}
                        maxLength={280}
                    />
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button onClick={handlePost} disabled={!tweetContent.trim()}>
                        Post
                    </Button>
                </CardFooter>
            </Card>
            <div className="space-y-4">
                {tweets.map((tweet) => (
                    <Card key={tweet.id} className="shadow-md">
                        <CardHeader className="flex flex-row items-center gap-3 pb-2">
                            <Avatar>
                                <AvatarImage src={tweet.user.avatar} />
                                <AvatarFallback>
                                    {tweet.user.name[0]}
                                </AvatarFallback>
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
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Home;

