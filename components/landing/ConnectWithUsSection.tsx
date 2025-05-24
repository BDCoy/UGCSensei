/* eslint-disable @next/next/no-img-element */
import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const ConnectWithUsSection = (): JSX.Element => {
  // Category data for the filter badges
  const categories = [
    "Cosmetics & Beauty",
    "Apparel & Fashion",
    "Apps & Digital Services",
    "Health & Wellness",
    "Children & Family",
    "Technology & Gadgets",
    "Food & Beverage",
  ];

  // Creator data for the cards
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
    <section
      className=" relative w-full py-[100px] flex flex-col items-center gap-[50px]
                "
    >
      {/* Background blur elements */}
      <div
        className="absolute w-[319px] h-[321px] top-[203px] left-[-61px]
                      bg-[#ffddb5] rounded-full blur-[175px]"
      />
      <div
        className="absolute w-[319px] h-[321px] top-[834px] left-[1153px]
                      bg-[#ffddb5] rounded-full blur-[175px]"
      />

      {/* Section header */}
      <div className="flex flex-col items-center gap-5 max-w-[1250px]">
        <h2 className="font-bold text-4xl leading-normal font-['Inter']">
          <span className="text-black">Connect with </span>
          <span className="text-[#175779]">400K+</span>
          <span className="text-black"> Talented Creators</span>
        </h2>
        <p className="text-center text-lg ">
          Each creator is chosen for their unique voice, engagement, and ability
          to craft authentic content. Find the ‘Sensei-Approved’ match to
          champion your brand.
        </p>
      </div>

      {/* Category filters */}
      <ScrollArea className="w-full max-w-[1250px]">
        <div className="flex items-start gap-5 pb-2">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-[25px] py-2 bg-white rounded-full border border-[#d9d9d9]
                          text-sm text-black whitespace-nowrap"
            >
              {category}
            </Badge>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {/* Creator cards - now a responsive grid */}
      <div className=" relative z-10 grid w-full max-w-[1250px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className=" bg-[url('/landing/grid-1-1.png')] bg-contain absolute top-0 bottom-0 left-0 right-0 opacity-30 -z-10"></div>
        {creators.map((creator, index) => (
          <Card
            key={index}
            className="bg-[#175779] rounded-[20px] shadow-[3px_3px_10px_#0000001a] overflow-hidden"
          >
            <CardContent className="flex flex-col items-center gap-5 p-5 relative">
              {/* Creator header */}
              <div className="flex items-center justify-between w-full gap-5">
                <img
                  className="w-[60px] h-[60px] object-cover rounded-full"
                  alt="Creator profile"
                  src={creator.profileImage}
                />
                <div className="flex flex-col items-start gap-[5px] flex-1">
                  <img
                    className="w-[70px] h-[11px] object-cover"
                    alt="5 stars rating"
                    src="/landing/5-stars-1-3.png"
                  />
                  <h3 className="font-['Inter'] font-semibold text-white text-lg">
                    {creator.name}
                  </h3>
                  <p className=" text-white text-xs">{creator.location}</p>
                </div>
                <ArrowUpRightIcon className="text-white" />
              </div>

              {/* Creator content */}
              <div className="relative w-full">
                <img
                  className="w-full h-auto object-cover"
                  alt="Creator content"
                  src={creator.contentImage}
                />
                <img
                  className="absolute w-[75px] h-[75px] top-1/2 left-1/2
                             transform -translate-x-1/2 -translate-y-1/2"
                  alt="Play button"
                  src="/landing/playfill-1.svg"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Explore button */}
      <Button
        className="px-[50px] py-3 bg-[#175779] rounded-full
                         font-['Inter'] font-bold text-base text-white"
      >
        Explore All Creators
      </Button>
    </section>
  );
};
