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
        <aside
            className="
                fixed inset-y-0 left-0 w-64
                bg-white dark:bg-gray-900
                border-r border-gray-200 dark:border-gray-700
                flex flex-col justify-between
                py-6 px-4
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
                            ]
                                .filter(Boolean)
                                .join(" ")
                        }
                    >
                        <Icon className="w-5 h-5 mr-3" />
                        <span>{label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <ModeToggle />
            </div>
        </aside>
    );
}