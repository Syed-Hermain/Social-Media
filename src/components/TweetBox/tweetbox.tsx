import React, { useState, useRef, useEffect } from "react";
import { FiFeather, FiImage, FiSmile } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import TextareaAutosize from "react-textarea-autosize";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import Picker from "emoji-picker-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogClose,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@uidotdev/usehooks";
import { FiX } from "react-icons/fi";
import { useClickAway } from "react-use";

// Types
export interface TweetBoxProps {
  tweetContent: string;
  setTweetContent: React.Dispatch<React.SetStateAction<string>>;
  handlePost: () => void;
  tweetImage?: File | null;
  setTweetImage?: React.Dispatch<React.SetStateAction<File | null>>;
}

export const TweetBox: React.FC<TweetBoxProps> = ({
  tweetContent,
  setTweetContent,
  handlePost,
  tweetImage,
  setTweetImage,
}) => {
  // State and refs
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [rawImage, setRawImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const emojiPickerRef = useRef<HTMLDivElement>(null);
  const emojiButtonRef = useRef<HTMLButtonElement>(null);
  const isMobile = useMediaQuery("(max-width: 640px)");

  // Handlers
  const handleEmojiClick = (emojiData: any) => {
    setTweetContent((prev: string) => prev + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setRawImage(file);
      setTweetImage && setTweetImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Mobile (Dialog, full screen, Twitter style)
  return (
    <>
      {isMobile && (
        <>
          <button
            className={cn(
              "fixed bottom-15 right-6 z-50 rounded-full p-4 shadow-lg flex items-center justify-center",
              "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
            onClick={() => setMobileOpen(true)}
            aria-label="Compose Tweet"
          >
            <FiFeather size={24} />
          </button>
          <Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
            <DialogContent
              className={cn(
                "p-0 max-w-full w-full rounded-none h-full flex flex-col justify-between",
                "bg-background"
              )}
            >
              <DialogHeader
                className={cn(
                  "flex flex-row items-center justify-between px-4 pt-4 pb-2 border-b relative"
                )}
              >
                {/* Close button or left spacer */}
                <div style={{ width: 32 }} />
                {/* Centered Tweet text */}
                <span className="font-semibold text-lg absolute left-[46%] transform -translate-x-1/2">
                  Tweet
                </span>
                {/* Tweet button on the right */}
                <Button
                  className={cn(
                    "font-bold rounded-full px-6 py-2 transition-colors ml-auto",
                    "bg-primary text-primary-foreground hover:bg-primary/90",
                    "disabled:opacity-60"
                  )}
                  onClick={() => {
                    handlePost();
                    setRawImage(null);
                    setImagePreview(null);
                    setTweetImage && setTweetImage(null);
                    setMobileOpen(false);
                  }}
                  disabled={!tweetContent.trim() && !rawImage}
                >
                  Tweet
                </Button>
              </DialogHeader>
              <div className="flex-1 overflow-auto">
                <div className="flex items-start px-4 pt-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="https://randomuser.me/api/portraits/lego/1.jpg" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <TextareaAutosize
                                value={tweetContent}
                                onChange={e => {
                                    if (e.target.value.length <= 250) setTweetContent(e.target.value)
                                }}
                                placeholder="What's happening?"
                                maxLength={250}
                                minRows={3}
                                maxRows={10}
                                className="w-full ml-2 h-24 text-lg bg-transparent border-none outline-none resize-none placeholder-gray-500"
                                
                            />
                </div>
                {/* Move the button group here, just below the textarea */}
                <div className={cn("flex items-center px-4 pt-2")}>
                  <div className="flex items-center gap-3 ml-13 text-primary">
                    <label className="cursor-pointer" htmlFor="img-upload">
                      <FiImage size={22} />
                    </label>
                    <input
                      id="img-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                    <button
                      type="button"
                      ref={emojiButtonRef}
                      onClick={() => setShowEmojiPicker((v) => !v)}
                      className="ml-1"
                    >
                      <FiSmile size={22} />
                    </button>
                  </div>
                </div>
                {imagePreview && (
                  <div className="px-4 pt-2 flex items-start relative">
                    {/* Spacer for alignment */}
                    <div className="w-12 sm:w-16 ml-12" />
                    <img
                      src={imagePreview}
                      alt="preview"
                      className={cn(
                        "rounded-2xl border max-h-72 max-w-full object-cover",
                        "border-muted"
                      )}
                    />
                    <button
                      type="button"
                      className="absolute top-2 right-2 bg-black/60 rounded-full p-1 text-white hover:bg-black/80"
                      aria-label="Remove image"
                      onClick={() => {
                        setRawImage(null);
                        setImagePreview(null);
                        setTweetImage && setTweetImage(null);
                      }}
                    >
                      <FiX size={18} />
                    </button>
                  </div>
                )}

                {showEmojiPicker && (
                  <div
                    ref={emojiPickerRef}
                    className="absolute left-4 z-50 mt-2"
                  >
                    <Picker onEmojiClick={handleEmojiClick} />
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </>
      )}
      {/* Desktop version */}
      {!isMobile && (
        <Card
          className={cn(
            "mb-6 shadow-none border-b bg-background rounded-none",
            "border-muted"
          )}
        >
          <div className="flex items-start px-4 pt-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://randomuser.me/api/portraits/lego/1.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            

            <TextareaAutosize
                  value={tweetContent}
                  onChange={(e) => {
                    if (e.target.value.length <= 250) {
                      setTweetContent(e.target.value);
                    }
                  }}
                  placeholder="What's happening?"
                  maxLength={250}
                  minRows={3} /* initial height */
                  maxRows={10} /* prevents runaway growth */
                  className={cn(
                "ml-3 resize-none border-none outline-none ring-0 focus:outline-none focus:ring-0 focus:border-transparent",
    "text-xl placeholder:text-muted-foreground bg-transparent w-full"
              )}
                  style={{ overflow: "hidden" }}
                />







          </div>
          {imagePreview && (
            <div className="px-16 pt-2 flex items-start">
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="preview"
                  className={cn(
                    "rounded-2xl border max-h-72 max-w-full object-cover",
                    "border-muted"
                  )}
                />
                <button
                  type="button"
                  className="absolute top-2 right-2 bg-black/60 rounded-full p-1 text-white hover:bg-black/80"
                  aria-label="Remove image"
                  onClick={() => {
                    setRawImage(null);
                    setImagePreview(null);
                    setTweetImage && setTweetImage(null);
                  }}
                >
                  <FiX size={18} />
                </button>
              </div>
            </div>
          )}
          {showEmojiPicker && (
            <div ref={emojiPickerRef} className="absolute left-20 z-50 mt-2">
              <Picker onEmojiClick={handleEmojiClick} />
            </div>
          )}
          <CardFooter
            className={cn("flex items-center justify-between px-16 py-3")}
          >
            <div className="flex items-center w-full">
              <div className={cn("flex items-center gap-4 text-primary ml-3")}>
                <label className="cursor-pointer" htmlFor="img-upload-desktop">
                  <FiImage size={22} />
                </label>
                <input
                  id="img-upload-desktop"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <button
                  type="button"
                  ref={emojiButtonRef}
                  onClick={() => setShowEmojiPicker((v) => !v)}
                >
                  <FiSmile size={22} />
                </button>
              </div>
              <div className="ml-79">
                <Button
                  className={cn(
                    "bg-primary text-primary-foreground font-bold rounded-full px-6 py-2 transition-colors",
                    "hover:bg-primary/90",
                    "disabled:opacity-60"
                  )}
                  onClick={() => {
                    handlePost();
                    setRawImage(null);
                    setImagePreview(null);
                    setTweetImage && setTweetImage(null);
                  }}
                  disabled={!tweetContent.trim() && !rawImage}
                >
                  Tweet
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  );
};
export default TweetBox;
