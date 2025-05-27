/* eslint-disable @next/next/no-img-element */
import React from "react";

export const CallToActionSection = (): JSX.Element => {
  const cards = [
    {
      icon: "/landing/lucide-users.svg",
      title: "The Sensei's Path to Genuine Connection",
      description:
        "True influence stems from authenticity. We connect you with creators whose personal voice and relatable style build genuine trust with their communities. This means content for your brand that feels like a trusted recommendation, not an interruption, fostering deeper audience engagement.",
    },
    {
      icon: "/landing/lucide-users-1.svg",
      title: "Guided Reach into Engaged Communities",
      description:
        "Tap into established, passionate communities. Our creators are niche experts with dedicated followers. We guide you in strategically placing your brand within these conversations, achieving targeted exposure more effectively and authentically than broad advertising.",
    },
    {
      icon: "/landing/lucide-users-3.svg",
      title: "Strategic Content That Converts & Saves",
      description:
        "Experience the power of native, relatable video. UGC crafted with our guidance not only captivates and entertains but also consistently outperforms standard branded content on social platforms. Achieve high-impact results and high-quality assets without the overhead of traditional production.",
    },
  ];

  return (
    <section className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12 text-center max-w-[800px] mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black ">
          Deeper Engagement, Stronger Sales. Simplified UGC Strategy
        </h2>
        <p className="mt-4 text-base sm:text-lg text-black font-nunito">
          We guide you in finding ideal creators and developing compelling video content, all
          managed seamlessly for impactful results without the usual complexities.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-14">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-4 p-6 sm:p-8 bg-[#eff3ff] rounded-2xl shadow-[3px_3px_10px_rgba(0,0,0,0.1)]"
          >
            <div className="w-12 h-12 md:w-[50px] md:h-[50px] bg-[#eedac1] rounded-full flex items-center justify-center">
              <img
                src={card.icon}
                alt={card.title}
                className="w-14 h-12"
              />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black ">
              {card.title}
            </h3>
            <p className="text-base text-black font-nunito leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};