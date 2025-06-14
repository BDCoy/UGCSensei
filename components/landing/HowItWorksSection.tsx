/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

// Define the step data for mapping
const steps = [
  {
    number: "01.",
    icon: "/landing/search-user-1.svg",
    iconAlt: "Search user",
    title: "Discover the Perfect Creators",
    description:
      "Search and filter creators based on demographics, interests, and lifestyle to find the ideal fit for your brand. You can also publish your brief and let interested creators apply directly.",
  },
  {
    number: "02.",
    icon: "/landing/customize-1.svg",
    iconAlt: "Customize",
    title: "Tailor Your Order",
    description:
      "Define your video requirements, set editing preferences, and personalize your brief—or let the creator handle the creative direction for you.",
  },
  {
    number: "03.",
    icon: "/landing/get-video-1.svg",
    iconAlt: "Get video",
    title: "Receive Your Videos",
    description:
      "Once your product is delivered (if shipping is required), your creator will produce and deliver your video within 7–12 days—no effort needed on your part.",
  },
];


export const HowItWorksSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-[50px] py-[50px] w-full">
      <div className="flex flex-col items-center gap-5 pt-[100px] w-full px-4 sm:px-0">
        <h2 className=" font-bold text-black text-3xl sm:text-4xl">
          How it Works
        </h2>
        <p className="  font-nunito font-normal text-black text-base sm:text-lg text-center max-w-md sm:max-w-none">
          Get authentic Creator Videos in just three easy steps:
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-10 sm:gap-[100px] w-full relative px-4 sm:px-0">
        {/* Hide arrows on mobile */}
        <img
          className="hidden sm:block absolute top-[69px] left-[367px] w-[103px] h-[180px]"
          alt="Vector"
          src="/landing/vector-1.svg"
        />
        <img
          className="hidden sm:block absolute top-[70px] left-[800px] w-[103px] h-[180px]"
          alt="Vector"
          src="/landing/vector-2.svg"
        />

        {steps.map((step, index) => (
          <Card
            key={index}
            className="flex-none w-full sm:flex-1 bg-[#eff3ff] rounded-[20px] shadow-[3px_3px_10px_#0000001a] border-none max-w-md sm:max-w-none"
          >
            <CardContent className="flex flex-col items-center gap-5 p-8 sm:p-10 relative">
              <div className="inline-flex flex-col items-start gap-2.5 p-[15px] bg-[#eedac1] rounded-[100px] overflow-hidden">
                <img className="w-10 h-10" alt={step.iconAlt} src={step.icon} />
              </div>

              <h3 className=" font-semibold text-black text-lg sm:text-xl text-center w-full">
                {step.title}
              </h3>

              <p className="  font-nunito font-normal text-black text-sm sm:text-base text-center w-full px-4 sm:px-0">
                {step.description}
              </p>

              <div className="absolute w-[270px] sm:w-[270px] top-[39px] left-10 font-black text-[#175779] text-[26px] sm:text-[32px] text-right ">
                {step.number}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
