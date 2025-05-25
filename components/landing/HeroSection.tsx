/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeroSection = (): JSX.Element => {
  const partnerLogos = [
    {
      src: "/landing/logo-light-0ca3c974.svg",
      alt: "Logo light",
      width: "66px",
      height: "16px",
    },
    {
      src: "/landing/meta-platforms-inc--logo-svg-1.png",
      alt: "Meta",
      width: "70px",
      height: "14px",
    },
    {
      src: "/landing/youtube-logo-1.png",
      alt: "Youtube",
      width: "70px",
      height: "15px",
    },
    {
      src: "/landing/logo-instagram-1-1.png",
      alt: "Instagram",
      width: "70px",
      height: "18px",
    },
    {
      src: "/landing/amazon-logo-svg-1.png",
      alt: "Amazon",
      width: "70px",
      height: "21px",
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-40 w-full max-w-[1250px] px-4 sm:px-6 lg:px-0">
      {/* LEFT SIDE */}
      <div className="flex flex-col items-start justify-center gap-10 w-full max-w-full sm:max-w-[90%] lg:max-w-[600px]">
        <div className="flex items-end gap-2.5">
          <img
            className="w-[80px] h-[20px] sm:w-[100px] sm:h-[25px] object-cover"
            alt="Thousands of creators"
            src="/landing/thousands-of-creators-1.png"
          />
          <h2 className="font-['Inter'] font-bold text-lg sm:text-xl text-black whitespace-nowrap">
            Thousands of Creators
          </h2>
        </div>

        <h1 className="font-['Inter'] font-bold text-3xl sm:text-4xl md:text-6xl lg:text-[74px] leading-[1.1]">
          <span className="text-[#175779]">One Goal:</span>
          <br />
          <span className="text-black">Your Success!</span>
        </h1>
        <Link href="/sigin/signup">
          <Button className="px-6 py-5 text-base font-bold font-['Inter'] text-white bg-[#175779] rounded-full lg:px-[50px]">
            Begin Your UGC Journey
          </Button>
        </Link>

        <div className="flex flex-wrap items-center gap-4 pt-8 lg:gap-[30px]">
          {partnerLogos.map((logo, index) => (
            <img
              key={index}
              className="object-contain"
              style={{ width: logo.width, height: logo.height }}
              alt={logo.alt}
              src={logo.src}
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative w-full mt-6 lg:mt-0 lg:w-auto">
        {/* grid background only on lg+ */}
        <img
          className="hidden lg:block absolute top-0 left-0 w-[650px] h-[520px] opacity-40 object-cover"
          alt="Grid"
          src="/landing/grid-1-1.png"
        />

        {/* decorative blurs only on lg+ */}
        <div className="hidden lg:block absolute top-[276px] left-[39px] w-[183px] h-[170px] bg-[#3b35e0] rounded-[91.5px/85px] blur-[150px]" />
        <div className="hidden lg:block absolute top-[58px] left-[493px] w-[183px] h-[170px] bg-[#ffddb5] rounded-[91.5px/85px] blur-[50px]" />

        {/* main hero image */}
        <img
          className="relative w-full h-auto sm:h-[300px] md:h-[400px] lg:w-[544px] lg:h-[508px] object-contain"
          alt="Videos"
          src="/landing/videos-1.png"
        />
      </div>
    </section>
  );
};
