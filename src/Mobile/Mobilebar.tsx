import React from "react";
import { FiHome, FiSearch, FiBell, FiMail } from "react-icons/fi";
import { useScrollDirection } from "@/hooks/Scrolling";

const navItems = [
    { icon: <FiHome size={24} />, label: "Home" },
    { icon: <FiSearch size={24} />, label: "Search" },
    { icon: <FiBell size={24} />, label: "Notifications" },
    { icon: <FiMail size={24} />, label: "Messages" },
];

const Mobilebar: React.FC = () => {
    const scrollDirection= useScrollDirection();
    return(
    <>
        <nav className={`
        fixed top-0 left-0 right-0 bg-background border-b border-gray-600 flex justify-between items-center h-12 px-4 z-50 md:hidden 
        ${scrollDirection==="down" ? "-translate-y-full":"translate-y-0"} `}>
            <span className="font-bold text-lg text-blue-500">MyApp</span>
            <button className="text-gray-600 hover:text-blue-500 focus:outline-none">
                <FiBell size={22} />
            </button>
        </nav>
        
    
        <nav className={`fixed bottom-0 left-0 right-0 bg-background border-t border-gray-600 flex justify-around items-center h-14 z-50 md:hidden
            ${scrollDirection ==="down" ? "translate-y-full":"translate-y-0"}`}>
            {navItems.map((item, idx) => (
                <button
                    key={item.label}
                    className="flex flex-col items-center hover:text-blue-500 focus:outline-none"
                    aria-label={item.label}
                >
                    {item.icon}   
                </button>
            ))}
        </nav>
    </>
)}


export default Mobilebar;