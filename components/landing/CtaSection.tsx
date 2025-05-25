/* eslint-disable @next/next/no-img-element */
import {
  ArrowRightIcon,
  CalendarCheck2Icon,
  ClockIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export const CtaSection = (): JSX.Element => {
  const features = [
    {
      icon: <ClockIcon className="w-[34px] h-[34px]" />,
      title: "Quick 15-minute overview",
      description: "See the entire process in action.",
    },
    {
      icon: <UsersIcon className="w-[34px] h-[34px]" />,
      title: "Find perfect Creators",
      description: "Learn how to match with ideal talent.",
    },
    {
      icon: <CalendarCheck2Icon className="w-[34px] h-[34px]" />,
      title: "Flexible Scheduling",
      description: "Pick a time that works for you.",
    },
  ];

  return (
    <Card
      className="
      flex flex-col sm:flex-row w-full  min-h-[682px]
      items-center sm:items-center gap-10 sm:gap-[120px] px-6 sm:px-[50px] py-0
      relative bg-[#f4f4f4] rounded-[20px] overflow-hidden
      shadow-[3px_3px_10px_#0000001a] border-none
    "
    >
      <div className="w-[172px] top-[51px] left-[50px] rounded-[86px/85px] absolute h-[170px] bg-[#ffddb5] blur-[50px]" />

      <CardContent className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-[120px] w-full p-0 min-h-[600px]">
        <img
          className="absolute w-[602px] h-[682px] top- left-[-50px] bg-blend-multiply -z-10 opacity-5 object-cover"
          alt="Grid"
          src="/landing/grid-1-1.png"
        />

        {/* Image centered on mobile, fixed size on desktop */}
        <img
          className="w-full max-w-[400px] sm:max-w-[378px] mx-auto rounded-md"
          alt="Image"
          src="/landing/image-1-4.png"
        />

        {/* Content centered vertically & horizontally on mobile */}
        <div className="flex flex-col items-center sm:items-start justify-center gap-[30px] flex-1 self-stretch max-w-full sm:max-w-none px-4 sm:px-0 text-center sm:text-left">
          <div className="flex flex-col gap-[30px] w-full">
            <h2 className="mt-[-1px] font-['Inter',Helvetica] font-bold text-[34px] sm:text-[46px] leading-tight">
              <span className="text-black">Ready to </span>
              <span className="text-[#175779]">Transform</span>
              <span className="text-black">
                {" "}
                your <br />
                Content Strategy?
              </span>
            </h2>

            <p className="font-['Nunito',Helvetica] font-normal text-black text-lg sm:text-xl leading-relaxed">
              Book a personalized demo to see how our platform can help you
              create engaging content that converts. Our experts will show you
              how to:
            </p>

            <div className="flex flex-col gap-5 w-full items-center sm:items-start">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="inline-flex items-start justify-center gap-5"
                >
                  {feature.icon}
                  <div className="inline-flex flex-col items-start gap-[5px]">
                    <h3 className="mt-[-1px] font-['Inter',Helvetica] font-bold text-black text-xl whitespace-nowrap">
                      {feature.title}
                    </h3>
                    <p className="font-['Nunito',Helvetica] font-normal text-black text-lg leading-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link href="/signin/signup">
            <Button className="flex w-[278px] gap-2.5 px-[50px] py-3 items-center bg-[#175779] rounded-[100px] text-white hover:bg-[#124a68] mt-4">
              <span className="font-['Inter',Helvetica] font-bold text-base whitespace-nowrap">
                Schedule your Demo
              </span>
              <ArrowRightIcon className="w-[18px] h-[18px]" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
