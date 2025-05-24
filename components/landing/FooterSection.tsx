/* eslint-disable @next/next/no-img-element */
import {
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const contactInfo = [
  {
    icon: <MailIcon className="w-5 h-5 stroke-[#175779]" />,
    text: "hello@ugcsensei.com",
  },
  {
    icon: <MapPinIcon className="w-5 h-5 stroke-[#175779]" />,
    text: "San Francisco, CA",
  },
  {
    icon: <PhoneIcon className="w-5 h-5 stroke-[#175779]" />,
    text: "(123) 456-7890",
  },
];

const socialMedia = [
  {
    icon: <InstagramIcon className="w-5 h-5 stroke-[#175779]" />,
    alt: "Instagram",
  },
  {
    icon: <FacebookIcon className="w-5 h-5 stroke-[#175779]" />,
    alt: "Facebook",
  },
  {
    icon: <YoutubeIcon className="w-5 h-5 stroke-[#175779]" />,
    alt: "Youtube",
  },
  {
    icon: <TwitterIcon className="w-5 h-5 stroke-[#175779]" />,
    alt: "Twitter",
  },
];

const quickLinks = ["Features", "Creators", "Services", "Success Stories"];
const resources = [
  "Blog",
  "Creator Guides",
  "Help Center",
  "API Documentation",
];
const legalLinks = ["Terms of service", "Privacy policy", "Refund policy"];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-center pt-16 sm:pt-20 lg:pt-24 pb-6 px-4 sm:px-6 lg:px-8 w-full  mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 w-full">
        {/* Company Info */}
        <div className="flex flex-col gap-6">
          <img
            src="/landing/ugc-sensei-logo-2.png"
            alt="UGC Sensei Logo"
            className="w-[180px] h-auto"
          />
          <p className="text-base text-black max-w-[400px]">
            Connect with talented creators and get authentic content that converts.
          </p>

          {contactInfo.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5">
              {item.icon}
              <p className="text-base text-black">{item.text}</p>
            </div>
          ))}

          {/* Social icons */}
          <div className="flex items-center gap-4 pt-4">
            {socialMedia.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-center items-center p-3 rounded-full bg-[#eedac1] hover:bg-[#e5c9a3] transition-colors cursor-pointer"
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-5">
          <h3 className="text-lg font-semibold text-[#175779]">
            Quick Links
          </h3>
          <div className="flex flex-col gap-3">
            {quickLinks.map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="text-base text-black hover:text-[#175779] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-5">
          <h3 className="text-lg font-semibold text-[#175779]">
            Resources
          </h3>
          <div className="flex flex-col gap-3">
            {resources.map((resource, idx) => (
              <a
                key={idx}
                href="#"
                className="text-base text-black hover:text-[#175779] transition-colors"
              >
                {resource}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-5">
          <h3 className="text-lg font-semibold text-[#175779]">
            Stay Updated
          </h3>
          <p className="text-base text-black">
            Get the latest updates on creator trends and platform features.
          </p>

          <div className="relative">
            <Input
              placeholder="Enter your email..."
              className="pr-[130px] h-[44px] text-base"
            />
            <Button 
              className="absolute right-1 top-1 flex items-center gap-2 px-4 py-2 bg-[#175779] rounded-full hover:bg-[#124965] transition-colors"
            >
              Subscribe
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Footer Bottom */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full gap-4 sm:gap-0">
        <p className="text-sm text-black">
          © 2025 UGC Sensei. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {legalLinks.map((link, idx) => (
            <a
              key={idx}
              href="#"
              className="text-sm text-black hover:text-[#175779] transition-colors whitespace-nowrap"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};