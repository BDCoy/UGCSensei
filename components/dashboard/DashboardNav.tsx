"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  //   Users,
  //   FileVideo,
  //   Settings,
  LogOut,
} from "lucide-react";
import { signOut } from "@/utils/auth-helpers/client";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg hover:bg-[#175779] hover:text-white transition-colors",
                pathname === item.href
                  ? "bg-[#175779] text-white"
                  : "text-gray-700"
              )}
            >
              <Icon className="w-5 h-5" />
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="mt-auto pt-4 border-t">
        <button onClick={signOut}  className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-red-100 hover:text-red-600 transition-colors w-full">
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </nav>
  );
}
