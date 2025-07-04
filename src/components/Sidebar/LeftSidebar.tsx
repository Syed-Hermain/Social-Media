import { NavLink } from "react-router";
import { Home, Search, Bell, MessageSquare, Bookmark } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

import SidebarTweet from "../TweetBox/SidebarTweet";

const user = {
  name: "John Doe",
  username: "johndoe",
  avatarUrl: "https://randomuser.me/api/portraits/lego/1.jpg",
};


interface LeftSidebarProps {
  tweetContent: string
  setTweetContent: React.Dispatch<React.SetStateAction<string>>
  tweetImage: File | null
  setTweetImage: React.Dispatch<React.SetStateAction<File | null>>
  handlePost: () => Promise<void>
}



export function LeftSidebar({
  tweetContent,
  setTweetContent,
  tweetImage,
  setTweetImage,
  handlePost,
}: LeftSidebarProps) {
  const navItems = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/search", label: "Search", Icon: Search },
  { to: "/notifications", label: "Notifications", Icon: Bell },
  { to: "/bookmarks", label: "Bookmarks", Icon: Bookmark },
  { to: "/messages", label: "Messages", Icon: MessageSquare },
  {
    to: "/profile",
    Icon: () => (
      <div className="flex items-center space-x-2">
        <img
          src={user.avatarUrl}
          alt={`${user.name}’s avatar`}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {user.name}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            @{user.username}
          </span>
        </div>
      </div>
    ),
    hideformobile: true, // Hide this item on mobile
  },
];
  
  return (
    <>
      {/* Sidebar for desktop/tablet */}
      <aside
        className="
  hidden sm:flex flex-col justify-between
  sticky top-6 h-fit
  w-20 lg:w-64
  space-y-1 lg:space-y-3
  px-2 lg:px-4 py-2 lg:py-6
"
      >
        <nav className="space-y-1">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                [
                  "flex items-center w-full rounded-full transition-colors duration-150",
                  "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800",
                  isActive &&
                    "bg-blue-100 dark:bg-blue-900 font-semibold text-blue-500",
                  "px-4 py-3 lg:px-6",
                ]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              <Icon className="w-7 h-7" />
              <span className="hidden lg:inline ml-4">{label}</span>
            </NavLink>
          ))}
        </nav>
        

        {/* */}
          <SidebarTweet
          tweetContent={tweetContent}
        setTweetContent={setTweetContent}
        tweetImage={tweetImage}
        setTweetImage={setTweetImage}
        handlePost={handlePost}

          />

        <div className="hidden lg:block pt-4 border-t border-gray-200 dark:border-gray-700">
          <ModeToggle />
        </div>
      </aside>

      {/* Bottom nav for mobile */}
      <nav
        className="
          block sm:hidden
    fixed bottom-0 left-0 right-0 z-60
    bg-red-500
    border-t border-black
    p-2

        "
      >
        {navItems.map(({ to, Icon }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              [
                "flex flex-col items-center justify-center px-2 py-1 rounded-md",
                "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800",
                isActive && "bg-blue-100 dark:bg-blue-900 font-semibold",
                "transition-colors duration-150",
              ]
                .filter(Boolean)
                .join(" ")
            }
          >
            <Icon className="w-6 h-6" />
          </NavLink>
        ))}
      </nav>


    </>
  );
}
