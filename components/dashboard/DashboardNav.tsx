"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  FileVideo,
  MessageSquare,
  CreditCard,
  LogOut,
} from "lucide-react";
import { signOut } from "@/utils/auth-helpers/client";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Creators", href: "/dashboard/creators", icon: Users },
  { name: "Campaigns", href: "/dashboard/campaigns", icon: FileVideo },
  { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
  { name: "Account", href: "/dashboard/account", icon: CreditCard },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors",
                isActive
                  ? "bg-[#175779] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              <Icon className={cn(
                "w-5 h-5",
                isActive ? "text-white" : "text-gray-400"
              )} />
              {item.name}
            </Link>
          );
        })}
      </div>

      <div className="mt-auto pt-4 border-t">
        <button
          onClick={signOut}
          className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors w-full"
        >
          <LogOut className="w-5 h-5 text-gray-400" />
          Sign Out
        </button>
      </div>
    </nav>
  );
}