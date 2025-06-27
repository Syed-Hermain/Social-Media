import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sun, Moon, Send } from "lucide-react";
import { useTheme } from "./components/ui/theme-provider";
const posts = [
  {
    id: 1,
    user: {
      name: "Jane Doe",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    content: "Excited to join this awesome platform! 🚀",
    time: "2m ago",
  },
  {
    id: 2,
    user: {
      name: "John Smith",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    content: "Loving the new dark mode! 🌑",
    time: "10m ago",
  },
];

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b bg-card/80 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight">Social<span className="text-primary">Hub</span></span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>
      </header>

      {/* Main Content */}
      <main className="max-w-xl mx-auto py-10 px-4">
        {/* New Post */}
        <Card className="mb-8 shadow-lg bg-card/90">
          <CardHeader>
            <CardTitle>Create Post</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-3">
              <Avatar>
                <AvatarImage src="https://randomuser.me/api/portraits/men/1.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <Textarea placeholder="What's on your mind?" className="resize-none" />
                <div className="flex justify-end">
                  <Button size="sm" className="gap-1">
                    <Send className="w-4 h-4" /> Post
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.id} className="shadow-md bg-card/80 hover:scale-[1.01] transition-transform">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <Avatar>
                  <AvatarImage src={post.user.avatar} />
                  <AvatarFallback>
                    {post.user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{post.user.name}</div>
                  <div className="text-xs text-muted-foreground">{post.time}</div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base">{post.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;