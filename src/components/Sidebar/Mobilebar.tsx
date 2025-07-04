import React from "react";
import { FiHome, FiSearch, FiBell, FiMail } from "react-icons/fi";

const navItems = [
    { icon: <FiHome size={24} />, label: "Home" },
    { icon: <FiSearch size={24} />, label: "Search" },
    { icon: <FiBell size={24} />, label: "Notifications" },
    { icon: <FiMail size={24} />, label: "Messages" },
];

const Mobilebar: React.FC = () => (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-14 z-50 md:hidden">
        {navItems.map((item, idx) => (
            <button
                key={item.label}
                className="flex flex-col items-center text-gray-600 hover:text-blue-500 focus:outline-none"
                aria-label={item.label}
            >
                {item.icon}
            </button>
        ))}
    </nav>
);

export default Mobilebar;