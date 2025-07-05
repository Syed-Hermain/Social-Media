// TopBar.tsx
import { useState, useRef, useEffect } from "react";
import { FiBell, FiBookmark, FiSettings, FiUser } from "react-icons/fi";
import { ModeToggle } from "@/components/mode-toggle"; // Use your own component if different
import { useScrollDirection } from "@/hooks/Scrolling";

const MobileTop: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const scrollDirection = useScrollDirection();
  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !(sidebarRef.current as HTMLElement).contains(e.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <>
    <div
      className={`fixed top-0 left-0 right-0 bg-background border-b border-gray-600 flex justify-around items-center h-14 z-50 md:hidden
    transform transition-transform duration-300 ease-in-out
    ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}`}
    >
      {/* Profile + Brand */}
      <div className="flex items-center space-x-5">
        <img
          src="https://randomuser.me/api/portraits/lego/1.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />
        <span className="font-bold text-lg text-gray-800 dark:text-gray-100">
          Zwitter
        </span>
      </div>

      {/* Notification Icon */}
      <button className="text-gray-600 dark:text-gray-300 hover:text-blue-500 focus:outline-none">
        <FiBell size={22} />
      </button>

      
      
    </div>
    {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          sidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Sidebar Drawer */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Content */}
        <div className="p-4 space-y-6">
          {/* Profile Section */}
          <div className="flex items-center space-x-3">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold text-lg text-gray-900 dark:text-white">
                Hermain Irfan
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                @hermain
              </p>
            </div>
          </div>

          {/* Followers / Following */}
          <div className="flex space-x-4 text-sm text-gray-700 dark:text-gray-300">
            <span>
              <span className="font-semibold">120</span> Following
            </span>
            <span>
              <span className="font-semibold">305</span> Followers
            </span>
          </div>

          <hr className="border-gray-200 dark:border-gray-700" />

          {/* Sidebar Links */}
          <div className="space-y-4 text-gray-800 dark:text-gray-200">
            <button className="flex items-center space-x-3 hover:text-blue-500">
              <FiUser />
              <span>Profile</span>
            </button>

            <button className="flex items-center space-x-3 hover:text-blue-500">
              <FiBookmark />
              <span>Bookmarks</span>
            </button>

            <button className="flex items-center space-x-3 hover:text-blue-500">
              <FiSettings />
              <span>Settings</span>
            </button>

            <ModeToggle />
          </div>
        </div>
      </div>
      </>
  );
};

export default MobileTop;
