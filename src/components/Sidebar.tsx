import { NavLink } from "react-router";
import { Home, Search, Bell, MessageSquare, Bookmark } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

const navItems = [
    { to: "/", label: "Home", Icon: Home },
    { to: "/search", label: "Search", Icon: Search },
    { to: "/notifications", label: "Notifications", Icon: Bell },
    { to: "/messages", label: "Messages", Icon: MessageSquare },
    { to: "/bookmarks", label: "Bookmarks", Icon: Bookmark },
];

export function Sidebar() {
    return (
        <>
            {/* Sidebar for desktop/tablet */}
            <aside
                className="
                    hidden sm:fixed sm:inset-y-0 sm:left-0 sm:w-20 lg:w-64
                    sm:bg-white sm:dark:bg-gray-900
                    sm:border-r sm:border-gray-200 sm:dark:border-gray-700
                    sm:flex sm:flex-col sm:justify-between
                    sm:py-6 sm:px-4
                "
            >
                <nav className="space-y-1">
                    {navItems.map(({ to, label, Icon }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end
                            className={({ isActive }) =>
                                [
                                    "flex items-center px-3 py-2 rounded-md",
                                    "text-gray-700 dark:text-gray-200",
                                    "hover:bg-gray-100 dark:hover:bg-gray-800",
                                    isActive && "bg-blue-100 dark:bg-blue-900 font-semibold",
                                    "transition-colors duration-150",
                                    "justify-center lg:justify-start",
                                ]
                                    .filter(Boolean)
                                    .join(" ")
                            }
                        >
                            <Icon className="w-6 h-6 mr-0 lg:mr-3" />
                            <span className="hidden lg:inline">{label}</span>
                        </NavLink>
                    ))}
                </nav>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700 hidden lg:block">
                    <ModeToggle />
                </div>
            </aside>

            {/* Bottom nav for mobile */}
            <nav
                className="
                    fixed bottom-0 left-0 right-0 z-50
                    bg-white dark:bg-gray-900
                    border-t border-gray-200 dark:border-gray-700
                    flex justify-around items-center
                    py-2
                    sm:hidden
                "
            >
                {navItems.map(({ to, label, Icon }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end
                        className={({ isActive }) =>
                            [
                                "flex flex-col items-center justify-center px-2 py-1 rounded-md",
                                "text-gray-700 dark:text-gray-200",
                                "hover:bg-gray-100 dark:hover:bg-gray-800",
                                isActive && "bg-blue-100 dark:bg-blue-900 font-semibold",
                                "transition-colors duration-150",
                            ]
                                .filter(Boolean)
                                .join(" ")
                        }
                    >
                        <Icon className="w-6 h-6" />
                        {/* Optionally show label on mobile: */}
                        {/* <span className="text-xs">{label}</span> */}
                    </NavLink>
                ))}
                <ModeToggle />
            </nav>
        </>
    );
}