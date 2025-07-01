import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";
import {
Card,
CardHeader,
CardContent,
CardFooter,
} from "@/components/ui/card";
import ChatMessages from "@/components/Chat/ChatMessages";
import ChatInput from "@/components/Chat/ChatInput";
// Mock data for conversations and messages
const IniConversations = [
{
    id: 1,
    name: "Jane Doe",
    username: "janedoe",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    lastMessage: "See you soon!",
    time: "2m",
    unread: true,
},
{
    id: 2,
    name: "John Smith",
    username: "johnsmith",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    lastMessage: "Thanks for the update.",
    time: "10m",
    unread: false,
},
// Add more conversations as needed
];

const IniMessages = [
{
    id: 1,
    sender: "janedoe",
    content: "Hey, how are you?",
    timestamp: "2023-10-01T12:00:00Z",
},{
    id: 2,
    sender: "johnsmith",
    content: "I'm good, thanks! How about you?",
    timestamp: "2023-10-01T12:01:00Z",
},{
    id: 3,
    sender: "pablo",
    content: "Doing well. Ready for the meeting?",
    timestamp: "2023-10-01T12:02:00Z",
},
{
    id: 4,
    sender: "kate",
    content: "Looking forward to it!",
    timestamp: "2023-10-01T12:03:00Z",
}
// Add more messages as needed
];

export default function Messages() {
const [selected, setSelected] =
    React.useState<number | null>(IniConversations[0].id);

  // State for messages
  const [messagesState, setMessagesState] =
    React.useState(IniMessages);

  const handleSend = (message: string) => {
    const newMessage = {
      id: Date.now(),
      sender: "currentUser",
      content: message,
      timestamp: new Date().toISOString(),
    };
    setMessagesState((prev) => [...prev, newMessage]);
  };

return (
    <div className="flex h-screen bg-background">
        {/* Sidebar is assumed to be outside this component */}
        {/* Conversation List */}
        <aside className="hidden md:flex flex-col w-[350px] border-r">
            <div className="p-4 border-b">
                <h2 className="text-xl font-bold">Messages</h2>
            </div>
            <ScrollArea className="flex-1">
                {IniConversations.map((conv) => (
                    <button
                        key={conv.id}
                        className={cn(
                            "flex items-center w-full px-4 py-3 hover:bg-muted transition text-left",
                            selected === conv.id && "bg-muted"
                        )}
                        onClick={() => setSelected(conv.id)}
                    >
                        <Avatar className="mr-3">
                            <AvatarImage src={conv.avatar} alt={conv.name} />
                            <AvatarFallback>{conv.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                                <span className="font-medium truncate">{conv.name}</span>
                                <span className="text-xs text-muted-foreground">{conv.time}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className={cn("text-sm truncate", conv.unread && "font-semibold")}>
                                    {conv.lastMessage}
                                </span>
                                {conv.unread && (
                                    <span className="ml-2 w-2 h-2 rounded-full bg-primary inline-block" />
                                )}
                            </div>
                        </div>
                    </button>
                ))}
            </ScrollArea>
        </aside>

        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col ml-0 md:ml-0">
            {/* Mobile header */}
            <div className="md:hidden flex items-center p-4 border-b">
                <h2 className="text-xl font-bold flex-1">Messages</h2>
            </div>
            {/* Chat header */}
            <CardHeader className="hidden md:flex items-center gap-3 border-b">
                <Avatar>
                    <AvatarImage src={IniConversations.find(c => c.id === selected)?.avatar} />
                    <AvatarFallback>
                        {IniConversations.find(c => c.id === selected)?.name[0]}
                    </AvatarFallback>
                </Avatar>
                <div>
                    <div className="font-medium">{IniConversations.find(c => c.id === selected)?.name}</div>
                    <div className="text-xs text-muted-foreground">
                        @{IniConversations.find(c => c.id === selected)?.username}
                    </div>
                </div>
            </CardHeader>
            {/* Messages */}
            <ChatMessages
          messages={messagesState.filter(
            (msg) => msg.id === selected
          )}
        />

        {/* Pass handleSend, not undefined */}
        <ChatInput onSend={handleSend} />

        </main>
    </div>
);
}