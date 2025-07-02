import React from "react";

const trends = [
    { topic: "Technology", hashtag: "#AI", tweets: "120K" },
    { topic: "Sports", hashtag: "#Euro2024", tweets: "85K" },
    { topic: "Music", hashtag: "#NewMusicFriday", tweets: "60K" },
];

const suggestions = [
    {
        name: "Jane Doe",
        username: "@janedoe",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "John Smith",
        username: "@johnsmith",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Alice Lee",
        username: "@alicelee",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
];

const RightSidebar: React.FC = () => (
    <aside className="hidden lg:block w-80 space-y-6 px-4">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden">
            <h2 className="px-4 py-2 font-semibold">Trends for you</h2>
            <ul>
                {trends.map((trend, idx) => (
                    <li key={idx} className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                        <div className="text-xs text-gray-500">{trend.topic}</div>
                        <div className="font-semibold">{trend.hashtag}</div>
                        <div className="text-xs text-gray-400">{trend.tweets} Tweets</div>
                    </li>
                ))}
            </ul>
            <button className="w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium">
                Show more
            </button>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden">
            <h2 className="px-4 py-2 font-semibold">Who to follow</h2>
            <ul>
                {suggestions.map((user, idx) => (
                    <li key={idx} className="flex items-center px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800">
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-10 h-10 rounded-full mr-3"
                        />
                        <div className="flex-1">
                            <div className="font-semibold">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.username}</div>
                        </div>
                        <button className="ml-2 px-4 py-1 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600">
                            Follow
                        </button>
                    </li>
                ))}
            </ul>
            <button className="w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium">
                Show more
            </button>
        </div>
    </aside>
);

export default RightSidebar;