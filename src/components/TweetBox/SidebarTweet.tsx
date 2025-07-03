import React, { useRef, useState } from "react";
import type { ChangeEvent } from "react";
import { Image, Twitter } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "../ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
interface TweetBoxProps {
  tweetContent: string;
  setTweetContent: React.Dispatch<React.SetStateAction<string>>;
  tweetImage: File | null;
  setTweetImage: React.Dispatch<React.SetStateAction<File | null>>;
  handlePost: () => Promise<void>;
}

export default function SidebarTweet({
  tweetContent,
  setTweetContent,
  tweetImage,
  setTweetImage,
  handlePost,
}: TweetBoxProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onSelectImage = () => fileInputRef.current?.click();
  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setTweetImage(file);
  };
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-full font-semibold"
        type="button"
        onClick={() => setOpen(true)}
      >
        Post
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={cn(
            "fixed top-18 left-1/2 transform -translate-x-1/2  translate-y-0",
            "max-w-xl w-full p-0 rounded-2xl overflow-hidden shadow-2xl transform"
          )}
        >
          <div className="flex flex-col">
            {/* Header */}
            <div className="flex items-center px-4 py-3 border-b">
              <button
                className="rounded-full hover:bg-gray-100 p-2 transition"
                onClick={() => setOpen(false)}
                type="button"
              >
                <svg viewBox="0 0 24 24" width={24} height={24} fill="none">
                  <path
                    d="M18 6L6 18"
                    stroke="#0f1419"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#0f1419"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <span className="flex-1 text-center font-bold text-lg">Post</span>
            </div>
            {/* Body */}
            <div className="flex px-4 pt-4 pb-2">
              {/* Avatar */}
              <div className="mr-3">
                <div className="w-12 h-12 rounded-full bg-gray-300" />
              </div>
              {/* Input and Image */}
              <div className="flex-1">
                <textarea
                  value={tweetContent}
                  onChange={(e) => {
                    if (e.target.value.length <= 250)
                      setTweetContent(e.target.value);
                  }}
                  placeholder="What's happening?"
                  maxLength={250}
                  className="w-full h-24 text-lg bg-transparent border-none outline-none resize-none placeholder-gray-500"
                  style={{ minHeight: 80 }}
                />
                {tweetImage && (
                  <div className="relative mt-2">
                    <img
                      src={URL.createObjectURL(tweetImage)}
                      alt="preview"
                      className="max-h-60 w-full object-cover rounded-2xl border"
                    />
                    <button
                      onClick={() => setTweetImage(null)}
                      className="absolute top-2 left-2 bg-black bg-opacity-60 p-1 rounded-full hover:bg-opacity-80"
                      type="button"
                      aria-label="Remove image"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width={20}
                        height={20}
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          fill="white"
                          fillOpacity="0.8"
                        />
                        <path
                          d="M15 9L9 15"
                          stroke="#0f1419"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M9 9L15 15"
                          stroke="#0f1419"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
            {/* Footer */}
            <div className="flex items-center px-4 pb-3 pt-2">
              <div className="flex items-center space-x-2 text-blue-500">
                <button
                  type="button"
                  onClick={onSelectImage}
                  className="p-2 rounded-full hover:bg-blue-100 transition"
                  aria-label="Add image"
                >
                  <Image className="w-6 h-6" />
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={onImageChange}
                  accept="image/*"
                  className="hidden"
                />
              </div>
              <div className="flex-1" />
              <div className="flex items-center space-x-2">
                <span
                  className={`text-xs ${
                    tweetContent.length === 250
                      ? "text-red-500"
                      : "text-gray-400"
                  }`}
                >
                  {tweetContent.length}/250
                </span>
                <button
                  onClick={async () => {
                    if (!tweetContent.trim()) return;
                    await handlePost();
                    setTweetContent("");
                    setTweetImage(null);
                    setOpen(false);
                  }}
                  className={`bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-2 rounded-full transition disabled:opacity-60 disabled:cursor-not-allowed`}
                  disabled={!tweetContent.trim()}
                  type="button"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
