import React, { useRef } from "react"
import type { ChangeEvent } from "react"
import { Image, Twitter } from "lucide-react"
interface TweetBoxProps {
  tweetContent: string
  setTweetContent: React.Dispatch<React.SetStateAction<string>>
  tweetImage: File | null
  setTweetImage: React.Dispatch<React.SetStateAction<File | null>>
  handlePost: () => Promise<void>
}

export default function SidebarTweet({
  tweetContent,
  setTweetContent,
  tweetImage,
  setTweetImage,
  handlePost,
}: TweetBoxProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const onSelectImage = () => fileInputRef.current?.click()
  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setTweetImage(file)
  }

  return (
    <div className="space-y-3 p-4 border rounded-lg bg-white">
      <textarea
        defaultValue={tweetContent}
        placeholder="What's happening?"
        className="w-full h-24 p-2 border rounded resize-none focus:ring-2 focus:ring-blue-400 outline-none"
      />

      {tweetImage && (
        <div className="relative">
          <img
            src={URL.createObjectURL(tweetImage)}
            alt="preview"
            className="max-h-40 w-full object-contain rounded"
          />
          <button
            onClick={() => setTweetImage(null)}
            className="absolute top-2 right-2 bg-black bg-opacity-50 p-1 rounded-full hover:bg-opacity-75"
          >
            <Twitter className="w-4 h-4 text-white" />
          </button>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-blue-500">
          <Image
            onClick={onSelectImage}
            className="w-6 h-6 cursor-pointer hover:text-blue-600"
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={onImageChange}
            accept="image/*"
            className="hidden"
          />
        </div>
        <button
          onClick={async () => {
            const textarea = document.querySelector<HTMLTextAreaElement>('textarea');
            if (textarea) setTweetContent(textarea.value);
            await handlePost();
          }}
          className="bg-blue-500 text-white px-4 py-1 rounded-full"
        >
          Tweet
        </button>
      </div>
    </div>
  )
}