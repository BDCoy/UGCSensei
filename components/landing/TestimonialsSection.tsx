/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    company: "Grateful Earth",
    quote:
      "This platform has been a game-changer for us. We immediately saw a better ROAS and lower acquisition costs with their recommended ad structures, allowing us to scale larger. The ability to tap into the creator network has been invaluable; even without being a video producer, we can quickly get high-quality content that consistently outperforms our own influencer-discovered ads. Presenting real, everyday people in these videos has significantly increased customer interaction and purchase intent, with a 30-50% rise in the past couple of months.",
    author: {
      name: "Lorenzo S.",
      position: "CEO",
      image: "/landing/2198423539-2.png",
      video: "/landing/image-1.png",
    },
    stats: [
      { value: "30-50%", label: "increase in sales" },
      { value: "+120%", label: "boost in net profit" },
    ],
  },
  {
    company: "Main Chick",
    quote:
      "The creators on UGC Sensei are simply phenomenal. For years now, a significant portion of our top-performing TikTok ads have originated directly from their platform, consistently surpassing the results we've seen from influencers we've found independently. We're continually amazed by the consistently high quality of content UGC Sensei creators deliver.",
    author: {
      name: "Erick D.",
      position: "Founder",
      image: "/landing/2198423539-3.jpeg",
      video: "/landing/image-1-2.png",
    },
    stats: [
      { value: "150%", label: "increase in sales" },
      { value: "+250%", label: "boost in net profit" },
    ],
  },
  {
    company: "Renaud's Patisserie",
    quote:
      "UGC Sensei has been a lifesaver for our bakery! I used to struggle when customers wanted engaging video content for our pastries but had no existing footage and a tight deadline. As someone who's definitely not a video producer, being able to simply tap into UGC Sensei and get 10 fantastic videos. Now, we always have a solid starting toolkit of delicious content ready to go!",
    author: {
      name: "Renaud G.",
      position: "Owner",
      image: "/landing/2198423539-5.jpeg",
      video: "/landing/image-1-3.png",
    },
    stats: [
      { value: "125%", label: "increase in sales" },
      { value: "+180%", label: "boost in net profit" },
    ],
  },
];

export const TestimonialsSection = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Card id="testimonials" className="relative z-10 flex flex-col justify-start items-start gap-6 sm:gap-8 lg:gap-[30px] p-6 sm:p-8 lg:p-[50px] rounded-[20px] bg-[#175779] shadow-lg w-full overflow-hidden">
      <div className="bg-[url('/landing/grid-1-1.png')] bg-cover absolute top-0 bottom-0 left-0 right-0 opacity-5 -z-10"></div>

      {/* Header Text */}
      <div className="flex flex-col justify-start items-start gap-3 sm:gap-5 w-full">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
          Real Success with the UGC Sensei Approach.
        </h2>
        <p className="text-base sm:text-lg text-white font-nunito">
          Join thousands of successful brands who have transformed their social media presence.
        </p>
      </div>

      {/* Divider Line */}
      <div className="w-full h-px bg-[#3B35E0] opacity-30" />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 sm:gap-10 lg:gap-20 w-full">
        {/* Video with Play Button */}
        <div className="relative w-full lg:w-[335px] flex-shrink-0">
          <img
            src={currentTestimonial.author.video}
            alt={`${currentTestimonial.company} video`}
            className="w-full h-auto rounded-[20px] object-cover aspect-[3/4]"
          />
          <div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              src="/landing/playfill-1.svg"
              alt="Play button"
              className="w-[46px] h-[46px] sm:w-[60px] sm:h-[60px] lg:w-[75px] lg:h-[75px]"
            />
          </div>
        </div>

        {/* Testimonial Text & Info */}
        <div className="flex flex-col justify-start items-start flex-grow gap-6 sm:gap-8">
          {/* Company & Navigation */}
          <div className="flex justify-between items-center w-full">
            <p className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white">
              {currentTestimonial.company}
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <button
                onClick={prevSlide}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Previous testimonial"
              >
                <img
                  src="/landing/lucide-move-left.svg"
                  alt="Previous"
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[34px] lg:h-[34px]"
                />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Next testimonial"
              >
                <img
                  src="/landing/lucide-move-right.svg"
                  alt="Next"
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[34px] lg:h-[34px]"
                />
              </button>
            </div>
          </div>

          {/* Quote */}
          <p className="text-base font-nunito sm:text-lg lg:text-xl text-white leading-relaxed">
            {currentTestimonial.quote}
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4 sm:gap-5">
            <img
              src={currentTestimonial.author.image}
              alt={currentTestimonial.author.name}
              className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full object-cover"
            />
            <div className="flex flex-col gap-1">
              <img
                src="/landing/5-stars-1-3.png"
                alt="5 stars rating"
                className="w-[50px] h-[8px] sm:w-[70px] sm:h-[11px]"
              />
              <p className="text-base sm:text-lg font-semibold text-white">
                {currentTestimonial.author.name}
              </p>
              <p className="text-xs text-white font-nunito">
                {currentTestimonial.author.position}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-[60px] mt-4">
            {currentTestimonial.stats.map((stat, index) => (
              <div key={index} className="flex items-start gap-4 sm:gap-5">
                <img
                  src="/landing/lucide-circle-check.svg"
                  alt="Check icon"
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[34px] lg:h-[34px]"
                />
                <div className="flex flex-col">
                  <p className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-base font-nunito sm:text-lg text-white">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};