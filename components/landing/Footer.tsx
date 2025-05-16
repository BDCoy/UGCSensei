import React from 'react';
import Link from 'next/link';
import { Instagram, Twitter, Facebook, Youtube, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const mainLinks = [
    { href: '#features', label: 'Features' },
    { href: '#creators', label: 'Creators' },
    { href: '#services', label: 'Services' },
    { href: '#success', label: 'Success Stories' },
  ];

  const resourceLinks = [
    { href: '/blog', label: 'Blog' },
    { href: '/guides', label: 'Creator Guides' },
    { href: '/help', label: 'Help Center' },
    { href: '/api', label: 'API Documentation' },
  ];

  const legalLinks = [
    { href: '/terms', label: 'Terms of Service' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/cookies', label: 'Cookie Policy' },
    { href: '/accessibility', label: 'Accessibility' },
  ];

  const socialLinks = [
    { href: '#instagram', icon: Instagram, label: 'Instagram' },
    { href: '#twitter', icon: Twitter, label: 'Twitter' },
    { href: '#facebook', icon: Facebook, label: 'Facebook' },
    { href: '#youtube', icon: Youtube, label: 'YouTube' },
    { href: '#linkedin', icon: Linkedin, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand and Contact - Left Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <img src="/sensei_logo.svg" alt="Logo" className="h-8 w-auto" />
            </Link>
            
            <p className="text-gray-600 mb-6">
              Connect with talented creators and get authentic content that converts.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-[#4B9FD6]" />
                <a href="mailto:hello@ugcsensei.com" className="hover:text-[#4B9FD6] transition-colors">
                  hello@ugcsensei.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-5 h-5 text-[#4B9FD6]" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-[#4B9FD6]" />
                <a href="tel:+1234567890" className="hover:text-[#4B9FD6] transition-colors">
                  (123) 456-7890
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#4B9FD6] hover:text-white transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Center Column */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
              <nav className="grid gap-3">
                {mainLinks.map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-gray-600 hover:text-[#4B9FD6] transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <nav className="grid gap-3">
                {resourceLinks.map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-gray-600 hover:text-[#4B9FD6] transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Newsletter and Legal - Right Column */}
          <div className="lg:col-span-4">
            <h3 className="font-semibold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-4">
              Get the latest updates on creator trends and platform features.
            </p>
            
            <form className="mb-8">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4B9FD6] focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-[#4B9FD6] text-white px-6 py-2 rounded-lg hover:bg-[#3D8CBF] transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {year} UGC Sensei. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#app-store" className="transition-opacity hover:opacity-80">
                <img 
                  src="https://ext.same-assets.com/2921571504/3018777734.svg" 
                  alt="Download on the App Store" 
                  className="h-8" 
                />
              </a>
              <a href="#play-store" className="transition-opacity hover:opacity-80">
                <img 
                  src="https://ext.same-assets.com/2921571504/4065543851.svg" 
                  alt="Get it on Google Play" 
                  className="h-8" 
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;