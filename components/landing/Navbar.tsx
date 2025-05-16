'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X } from 'lucide-react';

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Creators", href: "#creators" },
  { label: "Services", href: "#services" },
  { label: "Success stories", href: "#success" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-20">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/sensei_logo.svg" 
              alt="UGC Sensei" 
              width={40} 
              height={40} 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className={`font-medium transition-colors duration-200 relative group py-2 ${
                  isScrolled ? 'text-gray-700 hover:text-[#4B9FD6]' : 'text-white hover:text-white/80'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100 ${
                  isScrolled ? 'bg-[#4B9FD6]' : 'bg-white'
                }`} />
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/signin"
              className={`font-medium px-4 py-2 rounded-lg transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:text-[#4B9FD6]' : 'text-white hover:text-white/80'
              }`}
            >
              Log in
            </Link>
            <Link
              href="/signin/signup"
              className="bg-[#4B9FD6] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#3D8CBF] transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 mb-1.5 transition-all duration-200 ${isScrolled ? 'bg-gray-900' : 'bg-white'}`} />
            <div className={`w-6 h-0.5 mb-1.5 transition-all duration-200 ${isScrolled ? 'bg-gray-900' : 'bg-white'}`} />
            <div className={`w-6 h-0.5 transition-all duration-200 ${isScrolled ? 'bg-gray-900' : 'bg-white'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Image 
              src="/sensei_logo.svg" 
              alt="UGC Sensei" 
              width={40} 
              height={40} 
              className="h-10 w-auto" 
            />
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gray-900" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6">
            <div className="space-y-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="w-full text-left text-lg font-medium text-gray-900 py-3 hover:text-[#4B9FD6] transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <Link
                href="/signin"
                className="block w-full text-lg font-medium text-gray-900 py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-center mb-4"
              >
                Log in
              </Link>
              <Link
                href="/signin/signup"
                className="block w-full bg-[#4B9FD6] text-white text-lg font-semibold py-4 px-6 rounded-lg hover:bg-[#3D8CBF] transition-colors duration-200 text-center shadow-lg"
              >
                Sign up
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
