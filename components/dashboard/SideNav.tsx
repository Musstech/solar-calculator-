"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export const SideNav = () => {
    const pathname = usePathname();
    const { data: session } = useSession();

    const navItems = [
        { name: "Overview", href: "/dashboard", icon: "📊" },
        { name: "Leads", href: "/dashboard/leads", icon: "👤" },
        { name: "Settings", href: "/dashboard/settings", icon: "⚙️" },
    ];

    return (
        <div className="w-64 bg-navy h-full flex flex-col text-white">
            <div className="p-6">
                <h1 className="text-xl font-display font-bold tracking-tight">MSE Installer</h1>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">Dashboard</p>
            </div>

            <nav className="flex-1 mt-4 px-4 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                                ? "bg-green text-white shadow-lg"
                                : "hover:bg-white/10 text-slate-300"
                                }`}
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-6 border-t border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                    {session?.user?.image ? (
                        <img
                            src={session.user.image}
                            alt="Profile"
                            className="w-8 h-8 rounded-full bg-green"
                        />
                    ) : (
                        <div className="w-8 h-8 rounded-full bg-green flex items-center justify-center font-bold">
                            {session?.user?.name?.charAt(0) || "U"}
                        </div>
                    )}
                    <div className="flex-1 overflow-hidden">
                        <p className="text-sm font-medium truncate">{session?.user?.name || "User"}</p>
                        <p className="text-xs text-slate-400 truncate">{session?.user?.email || "Installer"}</p>
                    </div>
                </div>

                <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                    <span>🚪</span>
                    <span>Sign Out</span>
                </button>
            </div>
        </div>
    );
};
