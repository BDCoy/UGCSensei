/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "../ui/AuthForms/Logo";

export const HeaderSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Creators", href: "#creators" },
    { label: "Services", href: "#services" },
    { label: "Success Stories", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between h-[70px] px-4 lg:px-8 max-w-[1440px] mx-auto">
        {/* Logo */}
        <Logo />

        {/* Mobile menu button */}
        <button
          className="lg:hidden flex items-center justify-center w-12 h-12 -mr-2 hover:bg-black/5 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-10">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className="text-base font-semibold text-black hover:text-[#175779] transition-colors cursor-pointer px-1 py-2"
                    href={item.href}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-5">
            <Link href="/signin">
              <Button
                variant="ghost"
                className="text-base font-semibold text-black hover:text-[#175779] hover:bg-transparent transition-colors px-4"
              >
                Log in
              </Button>
            </Link>
            <Link href="/signin/signup">
              <Button className="px-8 py-2.5 text-base font-semibold text-white bg-[#175779] rounded-full hover:bg-[#124965] transition-colors">
                Sign up
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className="fixed inset-x-0 top-[70px] bg-white shadow-lg lg:hidden"
            style={{ height: "calc(100vh - 70px)" }}
          >
            <nav className="flex flex-col items-stretch p-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center h-14 px-4 text-lg font-semibold text-black hover:text-[#175779] transition-colors border-b border-gray-100 last:border-none"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <div className="flex flex-col gap-3 mt-6">
                <Link href="/signin">
                  <Button
                    variant="ghost"
                    className="w-full h-12 text-lg font-semibold text-black hover:text-[#175779] hover:bg-black/5 transition-colors"
                  >
                    Log in
                  </Button>
                </Link>
                <Link href="/signin/signup">
                  <Button className="w-full h-12 text-lg font-semibold text-white bg-[#175779] rounded-full hover:bg-[#124965] transition-colors">
                    Sign up
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
