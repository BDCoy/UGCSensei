/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

export const HeaderSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#" },
    { label: "Creators", href: "#" },
    { label: "Services", href: "#" },
    { label: "Success Stories", href: "#" },
  ];

  return (
    <header className="flex items-center justify-between py-5 px-4 lg:px-0 w-full bg-transparent mb-10">
      <img
        className="h-[30px] lg:h-[40px] w-auto object-contain"
        alt="UGC Sensei Logo"
        src="/landing/ugc-sensei-logo-2.png"
      />

      {/* Mobile menu button */}
      <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-10">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-10">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className="font-bold text-base text-black cursor-pointer"
                  href={item.href}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-5">
          <Button variant="ghost" className="font-bold text-base text-black">
            Log in
          </Button>
          <Button className="px-[35px] py-2 font-bold text-base text-white bg-[#175779] rounded-[100px] hover:bg-[#124965]">
            Sign up
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[70px] bg-white z-50 lg:hidden">
          <div className="flex flex-col items-center gap-6 p-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="font-bold text-lg text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col items-center gap-4 mt-4">
              <Button
                variant="ghost"
                className="font-bold text-lg text-black w-full"
              >
                Log in
              </Button>
              <Button className="px-[35px] py-2 font-bold text-lg text-white bg-[#175779] rounded-[100px] hover:bg-[#124965] w-full">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
