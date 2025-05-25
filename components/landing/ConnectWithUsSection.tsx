/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";

export const ConnectWithUsSection = (): JSX.Element => {
  const categories = [
    "Cosmetics & Beauty",
    "Apparel & Fashion",
    "Apps & Digital Services",
    "Health & Wellness",
    "Children & Family",
    "Technology & Gadgets",
    "Food & Beverage",
  ];

  const creators = [
    {
      name: "Tonia L.",
      location: "California",
      profileImage: "/landing/2198423539-1.png",
      contentImage: "/landing/image-1.png",
    },
    {
      name: "Samuel P.",
      location: "Georgia",
      profileImage: "/landing/2198423539-1-1.png",
      contentImage: "/landing/image-1-1.png",
    },
    {
      name: "Regan T.",
      location: "Florida",
      profileImage: "/landing/2198423539-1-2.png",
      contentImage: "/landing/image-1-2.png",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-[100px] flex flex-col items-center gap-8 sm:gap-10 lg:gap-[50px]">
      {/* Background blur elements */}
      <div className="absolute w-[319px] h-[321px] top-[203px] left-[-61px] bg-[#ffddb5] rounded-full blur-[175px]" />
      <div className="absolute w-[319px] h-[321px] top-[834px] left-[1153px] bg-[#ffddb5] rounded-full blur-[175px]" />

      {/* Section header */}
      <div className="flex flex-col items-center gap-5 max-w-[1250px] px-4 sm:px-6">
        <h2 className=" font-bold text-3xl sm:text-4xl lg:text-5xl text-center leading-tight">
          <span className="text-black">Connect with </span>
          <span className="text-[#175779]">400K+</span>
          <span className="text-black"> Talented Creators</span>
        </h2>
        <p className="text-center text-base sm:text-lg font-nunito max-w-[800px]">
          Each creator is chosen for their unique voice, engagement, and ability
          to craft authentic content. Find the &apos;Sensei-Approved&apos; match
          to champion your brand.
        </p>
      </div>

      {/* Category filters */}
      <ScrollArea className="w-full max-w-[1250px] px-4 sm:px-6">
        <div className="flex items-start gap-3 sm:gap-5 pb-2">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-4 sm:px-[25px] py-2 bg-white rounded-full border border-[#d9d9d9] text-sm font-nunito text-black whitespace-nowrap"
            >
              {category}
            </Badge>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {/* Creator cards */}
      <div className="relative z-10 grid w-full max-w-[1250px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6">
        <div className="bg-[url('/landing/grid-1-1.png')] bg-contain absolute top-0 bottom-0 left-0 right-0 opacity-30 -z-10"></div>
        {creators.map((creator, index) => (
          <Card
            key={index}
            className="bg-[#175779] rounded-[20px] shadow-[3px_3px_10px_#0000001a] overflow-hidden"
          >
            <CardContent className="flex flex-col items-center gap-5 p-5 relative">
              {/* Creator header */}
              <div className="flex items-center justify-between w-full gap-5">
                <img
                  className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] object-cover rounded-full"
                  alt="Creator profile"
                  src={creator.profileImage}
                />
                <div className="flex flex-col items-start gap-[5px] flex-1">
                  <img
                    className="w-[60px] sm:w-[70px] h-[11px] object-cover"
                    alt="5 stars rating"
                    src="/landing/5-stars-1-3.png"
                  />
                  <h3 className="font-semibold text-white text-base sm:text-lg">
                    {creator.name}
                  </h3>
                  <p className="font-nunito text-white text-xs">
                    {creator.location}
                  </p>
                </div>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-2.5 rounded-[100px] bg-white">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M1.33337 1H11.3334M11.3334 1V11M11.3334 1L1.33337 11"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>

              {/* Creator content */}
              <div className="relative w-full">
                <img
                  className="w-full h-auto object-cover rounded-lg"
                  alt="Creator content"
                  src={creator.contentImage}
                />
                <img
                  className="absolute w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  alt="Play button"
                  src="/landing/playfill-1.svg"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Explore button */}
      <Link href="/signin/signup">
        <Button className="px-8 sm:px-[50px] py-3 bg-[#175779] rounded-full  font-bold text-base sm:text-lg text-white hover:bg-[#124965] transition-colors">
          Explore All Creators
        </Button>
      </Link>
    </section>
  );
};
