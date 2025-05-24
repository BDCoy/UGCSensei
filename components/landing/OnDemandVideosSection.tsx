// /* eslint-disable @next/next/no-img-element */
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// interface SolutionCardProps {
//   title: string;
//   subtitle: string;
//   description: string;
//   imageSrc: string;
//   imageAlt: string;
//   isReversed?: boolean;
// }

// const SolutionCard = ({
//   title,
//   subtitle,
//   description,
//   imageSrc,
//   imageAlt,
//   isReversed = false,
// }: SolutionCardProps) => {
//   return (
//     <div
//       className={`
//         flex flex-col md:flex-row items-center justify-between gap-10
//  w-full px-4
//         ${isReversed ? "md:flex-row-reverse" : ""}
//       `}
//     >
//       {/* Blur backgrounds as decorative divs, placed inline before image */}
//       <div className="flex flex-col justify-center gap-8">
//         <div className="w-[183px] h-[170px] bg-[#3b35e0] rounded-[91.5px/85px] blur-[150px]" />
//         <div className="w-[183px] h-[170px] bg-[#ffddb5] rounded-[91.5px/85px] blur-[50px]" />
//       </div>

//       {/* Image */}
//       <img
//         src={imageSrc}
//         alt={imageAlt}
//         className="max-w-[600px] w-full h-auto object-cover "
//       />

//       {/* Content Card */}
//       <Card className=" w-full border-none shadow-none">
//         <CardContent className="flex flex-col gap-5 p-0">
//           <div className={`${isReversed ? "md:pl-20" : "md:pr-20"}`}>
//             <h3 className=" font-bold text-black text-3xl leading-normal whitespace-nowrap mt-0">
//               {title}
//             </h3>
//             <h4 className=" font-bold text-[#175779] text-xl mt-5">
//               {subtitle}
//             </h4>
//             <p className=" text-black text-lg mt-5">
//               {description}
//             </p>
//             <Button className="mt-5 px-[50px] py-3 bg-[#175779] rounded-[100px]  font-bold text-white text-base">
//               Learn More
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export const OnDemandVideosSection = (): JSX.Element => {
//   const solutions = [
//     {
//       title: "For Brands",
//       subtitle: "Craft Your Winning UGC Formula:",
//       description:
//         "Develop truly scroll-stopping videos, expertly optimized for TikTok, Meta, and beyond. We guide you in selecting ideal creators, leveraging effective templates, and testing diverse styles to uncover the content that truly captivates your audience and drives action. Learn more about our brand partnership.",
//       imageSrc: "/landing/brands-1.png",
//       imageAlt: "Brands",
//       isReversed: false,
//     },
//     {
//       title: "For Agencies",
//       subtitle: "Elevate Your Client Campaigns with Expert UGC:",
//       description:
//         "Empower your agency to deliver exceptional UGC without the typical overhead. Our platform streamlines production, provides access to a vetted network of professional creators, and offers project management ease. Deliver strategically sound, stunning video results that make your clients shine. Discover our agency solutions.",
//       imageSrc: "/landing/agency.png",
//       imageAlt: "Agency",
//       isReversed: true,
//     },
//   ];

//   return (
//     <section className="flex flex-col items-center gap-[50px] max-w-7xl relative self-stretch w-full">
//       <header className="inline-flex flex-col items-center gap-5 pt-[100px] pb-0 px-0">
//         <h2 className=" font-bold text-black text-4xl tracking-[0] leading-normal">
//           Strategic UGC Solutions for Every Ambition
//         </h2>
//         <p className="self-stretch  font-normal text-black text-lg text-center tracking-[0] leading-normal">
//           Tailored video creation that evolves with your vision, empowering
//           businesses of all sizes.
//         </p>
//       </header>

//       {solutions.map((solution, index) => (
//         <SolutionCard
//           key={index}
//           title={solution.title}
//           subtitle={solution.subtitle}
//           description={solution.description}
//           imageSrc={solution.imageSrc}
//           imageAlt={solution.imageAlt}
//           isReversed={solution.isReversed}
//         />
//       ))}
//     </section>
//   );
// };

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button";

interface SolutionCardProps {
  title: string;
  subtitle: string;
  description: string;
  images: { src: string; alt: string }[];
  isReversed?: boolean;
}

const SolutionCard = ({
  title,
  subtitle,
  description,
  images,
  isReversed = false,
}: SolutionCardProps) => {
  return (
    <div
      className={`
        flex relative flex-col md:flex-row items-center justify-between gap-10 w-full px-4
        ${isReversed ? "md:flex-row-reverse" : ""}
      `}
    >
      {isReversed && (
        <div className="top-11 left-[1016px] absolute w-[183px] h-[170px] bg-[#3b35e0] rounded-[91.5px/85px] blur-[150px]" />
      )}
      {isReversed && (
        <div className="w-[183px] top-1.5 left-[851px] rounded-[91.5px/85px] absolute h-[170px] bg-[#ffddb5] blur-[50px]" />
      )}
      {!isReversed && (
        <div className="top-[251px] left-[177px] absolute w-[183px] h-[170px] bg-[#3b35e0] rounded-[91.5px/85px] blur-[150px]" />
      )}
      {!isReversed && (
        <div className="w-[183px] top-[378px] left-[216px] rounded-[91.5px/85px] absolute h-[170px] bg-[#ffddb5] blur-[50px]" />
      )}

      {/* Images Container */}
      <div
        className={`
          flex flex-col gap-4 p-2  rounded-md
           w-full z-10
          ${isReversed ? "md:ml-10" : "md:mr-10"}
        `}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="rounded-md object-cover w-full h-auto "
          />
        ))}
      </div>

      {/* Content */}
      <div
        className={`
         w-full
          ${isReversed ? "text-left md:text-left" : "text-left md:text-left"}
        `}
      >
        <h3 className=" font-bold text-black text-3xl leading-normal whitespace-nowrap mt-0">
          {title}
        </h3>
        <h4 className=" font-bold text-[#175779] text-xl mt-5">{subtitle}</h4>
        <p className=" text-black text-lg mt-5">{description}</p>
        <Button className="mt-5 px-[50px] py-3 bg-[#175779] rounded-full  font-bold text-white text-base">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export const OnDemandVideosSection = (): JSX.Element => {
  const solutions = [
    {
      title: "For Brands",
      subtitle: "Craft Your Winning UGC Formula:",
      description:
        "Develop truly scroll-stopping videos, expertly optimized for TikTok, Meta, and beyond. We guide you in selecting ideal creators, leveraging effective templates, and testing diverse styles to uncover the content that truly captivates your audience and drives action. Learn more about our brand partnership.",
      images: [{ src: "/landing/brands-1.png", alt: "Makeup compact" }],
      isReversed: false,
    },
    {
      title: "For Agencies",
      subtitle: "Elevate Your Client Campaigns with Expert UGC:",
      description:
        "Empower your agency to deliver exceptional UGC without the typical overhead. Our platform streamlines production, provides access to a vetted network of professional creators, and offers project management ease. Deliver strategically sound, stunning video results that make your clients shine. Discover our agency solutions.",
      images: [{ src: "/landing/agency.png", alt: "Woman with coffee" }],
      isReversed: true,
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[50px] w-full ">
      <header className="flex flex-col items-center gap-5 px-4 text-center ">
        <h2 className=" font-bold text-black text-4xl leading-normal">
          Strategic UGC Solutions for Every Ambition
        </h2>
        <p className=" font-normal text-black text-lg leading-normal">
          Tailored video creation that evolves with your vision, empowering
          businesses of all sizes.
        </p>
      </header>

      {solutions.map((solution, index) => (
        <SolutionCard
          key={index}
          title={solution.title}
          subtitle={solution.subtitle}
          description={solution.description}
          images={solution.images}
          isReversed={solution.isReversed}
        />
      ))}
    </section>
  );
};
