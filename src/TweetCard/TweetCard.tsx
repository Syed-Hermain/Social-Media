import { 
        MessageCircle, 
        Repeat2, 
        HeartIcon, 
        ShareIcon } from "lucide-react";
import formatTime from "@/lib/utils"; // your formatTime fn
import type { Tweet } from "@/data/types"; // your Tweet type

interface TweetCardProps {
  tweet: Tweet;
}

export function TweetCard({ tweet }: TweetCardProps) {

  function sanitizeTweetContent(content: string): string {
  // Replace more than 2 consecutive blank lines with exactly 2
  return content.replace(/(\n\s*){3,}/g, "\n\n");
}

  return (
    <article className="flex p-4 border-b border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
      {/* Avatar */}
      <div className="flex-shrink-0">
        <img
          src={tweet.user.avatar}
          alt={tweet.user.name}
          className="h-11 w-11 rounded-full"
        />
      </div>

      {/* Main content */}
      <div className="ml-3 flex-1">
        {/* Header: Name · Username · Time */}
        <header className="flex flex-wrap items-center text-sm">
          <span className="font-bold text-gray-900 dark:text-white">
            {tweet.user.name}
          </span>
          <span className="ml-1 text-gray-500 dark:text-gray-400">
            @{tweet.user.username}
          </span>
          <span className="mx-1 text-gray-500">&middot;</span>
          <time className="text-gray-500 dark:text-gray-400">
            {formatTime(tweet.createdAt)}
          </time>
        </header>

        {/* Text */}
        <p className="mt-1 text-gray-900 dark:text-white leading-relaxed whitespace-pre-wrap">
          {sanitizeTweetContent(tweet.content)}
        </p>

        {/* Optional Image */}
        {tweet.image && (
          <img
            src={tweet.image}
            alt="Tweet media"
            className="mt-3 rounded-xl object-cover w-full max-h-96"
          />
        )}

        {/* Action Bar */}
        <footer className="mt-3 flex justify-between max-w-lg text-gray-500 dark:text-gray-400">
          <button className="flex items-center space-x-2 hover:text-blue-500 transition">
            <MessageCircle className="h-5 w-5" />
            <span className="text-sm">{tweet.replies || ""}</span>
          </button>

          <button className="flex items-center space-x-2 hover:text-green-500 transition">
            <Repeat2 className="h-5 w-5" />
            <span className="text-sm">{tweet.retweets || ""}</span>
          </button>

          <button className="flex items-center space-x-2 hover:text-pink-500 transition">
            <HeartIcon className="h-5 w-5" />
            <span className="text-sm">{tweet.likes || ""}</span>
          </button>

          <button className="flex items-center space-x-2 hover:text-blue-500 transition">
            <ShareIcon className="h-5 w-5" />
          </button>
        </footer>
      </div>
    </article>
  );
}
