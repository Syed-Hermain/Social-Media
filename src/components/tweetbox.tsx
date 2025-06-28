import React, { useState, useRef } from "react"
import { FiFeather, FiImage, FiSmile } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import  Picker  from "emoji-picker-react"
import { Dialog, DialogContent, DialogHeader, DialogClose } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@uidotdev/usehooks"
import { useClickOutside } from "@uidotdev/usehooks"
import { FiX } from "react-icons/fi"
import { useClickAway } from "react-use"
import { useEffect } from "react"
// Types
export interface TweetBoxProps {
    tweetContent: string
    setTweetContent: React.Dispatch<React.SetStateAction<string>>
    handlePost: () => void
    tweetImage?: File | null
    setTweetImage?: React.Dispatch<React.SetStateAction<File | null>>
}

export const TweetBox: React.FC<TweetBoxProps> = ({
    tweetContent,
    setTweetContent,
    handlePost,
    tweetImage,
    setTweetImage,
}) => {
    // State and refs
    const [mobileOpen, setMobileOpen] = useState(false)
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const [rawImage, setRawImage] = useState<File | null>(null)
    const [imagePreview, setImagePreview] = useState<string | null>(null)
    const emojiPickerRef = useRef<HTMLDivElement>(null)
    const emojiButtonRef = useRef<HTMLButtonElement>(null)
    const isMobile = useMediaQuery("(max-width: 640px)")

    // Handlers
    const handleEmojiClick = (emojiData: any) => {
        setTweetContent((prev: string) => prev + emojiData.emoji)
        setShowEmojiPicker(false)
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            setRawImage(file)
            setTweetImage && setTweetImage(file)
            setImagePreview(URL.createObjectURL(file))
        }
    }

    // Mobile (Dialog, full screen, Twitter style)
    return (
        <>
            {isMobile && (
                <>
                    <button
                        className="fixed bottom-6 right-6 z-50 bg-twitter-blue hover:bg-twitter-blue/90 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
                        onClick={() => setMobileOpen(true)}
                        aria-label="Compose Tweet"
                    >
                        <FiFeather size={24} />
                    </button>
                    <Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
                        <DialogContent className="p-0 max-w-full w-full rounded-none h-full flex flex-col justify-between bg-white">
                            <DialogHeader className="flex flex-row items-center justify-between px-4 pt-4 pb-2 border-b border-gray-200">
                                <DialogClose asChild>
                                    <button
                                        className="text-twitter-blue text-2xl font-bold"
                                        aria-label="Close"
                                    >
                                        ×
                                    </button>
                                </DialogClose>
                                <span className="font-semibold text-lg">Tweet</span>
                                <span className="w-6" /> {/* Spacer */}
                            </DialogHeader>
                            <div className="flex-1 overflow-auto">
                                <div className="flex items-start px-4 pt-4">
                                    <Avatar className="w-10 h-10">
                                        <AvatarImage src="https://randomuser.me/api/portraits/lego/1.jpg" />
                                        <AvatarFallback>U</AvatarFallback>
                                    </Avatar>
                                    <Textarea
                                        placeholder="What is happening?!"
                                        value={tweetContent}
                                        onChange={(e) => setTweetContent(e.target.value)}
                                        className="ml-3 resize-none border-none shadow-none focus:ring-0 text-lg placeholder:text-gray-500 bg-transparent"
                                        rows={4}
                                        maxLength={280}
                                        autoFocus
                                    />
                                </div>
                                {imagePreview && (
                                    <div className="px-4 pt-2">
                                        <img
                                            src={imagePreview}
                                            alt="preview"
                                            className="rounded-2xl border border-gray-200 max-h-60 max-w-full object-cover"
                                        />
                                    </div>
                                )}
                                {showEmojiPicker && (
                                    <div ref={emojiPickerRef} className="absolute left-4 z-50 mt-2">
                                        <Picker onEmojiClick={handleEmojiClick} />
                                    </div>
                                )}
                            </div>
                            <CardFooter className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
                                <div className="flex items-center gap-4 text-twitter-blue">
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
                                    >
                                        <FiSmile size={22} />
                                    </button>
                                </div>
                                <Button
                                    className=""
                                    onClick={() => {
                                        handlePost()
                                        setRawImage(null)
                                        setImagePreview(null)
                                        setTweetImage && setTweetImage(null)
                                        setMobileOpen(false)
                                    }}
                                    disabled={!tweetContent.trim() && !rawImage}
                                >
                                    Tweet
                                </Button>
                            </CardFooter>
                        </DialogContent>
                    </Dialog>
                </>
            )}
            {/* Desktop version */}
            {!isMobile && (
                <Card className="mb-6 shadow-none border-b border-gray-200 bg-white rounded-none">
                    <div className="flex items-start px-4 pt-4">
                        <Avatar className="w-12 h-12">
                            <AvatarImage src="https://randomuser.me/api/portraits/lego/1.jpg" />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <Textarea
                            placeholder="What is happening?!"
                            value={tweetContent}
                            onChange={(e) => setTweetContent(e.target.value)}
                            className="ml-3 resize-none border-none shadow-none focus:ring-0 text-xl placeholder:text-gray-500 bg-transparent"
                            rows={4}
                            maxLength={280}
                        />
                    </div>
                    {imagePreview && (
                        <div className="px-16 pt-2">
                            <img
                                src={imagePreview}
                                alt="preview"
                                className="rounded-2xl border border-gray-200 max-h-72 max-w-full object-cover"
                            />
                        </div>
                    )}
                    {showEmojiPicker && (
                        <div ref={emojiPickerRef} className="absolute left-20 z-50 mt-2">
                            <Picker onEmojiClick={handleEmojiClick} />
                        </div>
                    )}
                    <CardFooter className="flex items-center justify-between px-16 py-3">
                        <div className="flex items-center gap-4 text-twitter-blue">
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
                        <Button
                            className={cn(
                                "bg-twitter-blue text-white font-bold rounded-full px-6 py-2 transition-colors",
                                "hover:bg-twitter-blue/90",
                                "disabled:opacity-60"
                            )}
                            onClick={() => {
                                handlePost()
                                setRawImage(null)
                                setImagePreview(null)
                                setTweetImage && setTweetImage(null)
                            }}
                            disabled={!tweetContent.trim() && !rawImage}
                        >
                            Tweet
                        </Button>
                    </CardFooter>
                </Card>
            )}
        </>
    )
}
 export default TweetBox;