import React, { useEffect, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type Message = {
    id: string;
    sender: string;
    content: string;
    timestamp: string;
};

type ChatMessagesProps = {
    messages: Message[];
    currentUser: string;
};

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages, currentUser }) => {
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <ScrollArea className="flex-1 h-full p-4 bg-muted rounded-md">
            <div className="flex flex-col gap-3">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex flex-col ${msg.sender === currentUser ? "items-end" : "items-start"}`}
                    >
                        <div className="flex items-center gap-2">
                            {msg.sender !== currentUser && (
                                <Avatar className="w-7 h-7">
                                    <AvatarFallback>{msg.sender[0]?.toUpperCase()}</AvatarFallback>
                                </Avatar>
                            )}
                            <div
                                className={`px-4 py-2 rounded-2xl max-w-[70%] break-words ${
                                    msg.sender === currentUser
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-muted text-muted-foreground"
                                }`}
                            >
                                {msg.content}
                            </div>
                        </div>
                        <span className="text-xs text-muted-foreground mt-1">
                            {msg.sender} • {new Date(msg.timestamp).toLocaleTimeString()}
                        </span>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
        </ScrollArea>
    );
};

export default ChatMessages;