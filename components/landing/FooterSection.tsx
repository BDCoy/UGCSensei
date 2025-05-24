// /* eslint-disable @next/next/no-img-element */
// import {
//   ArrowRightIcon,
//   FacebookIcon,
//   InstagramIcon,
//   MailIcon,
//   MapPinIcon,
//   PhoneIcon,
//   TwitterIcon,
//   YoutubeIcon,
// } from "lucide-react";
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Separator } from "@/components/ui/separator";

// // Footer data for mapping
// const contactInfo = [
//   { icon: <MailIcon className="w-5 h-5" />, text: "hello@ugcsensei.com" },
//   { icon: <MapPinIcon className="w-5 h-5" />, text: "San Francisco, CA" },
//   { icon: <PhoneIcon className="w-5 h-5" />, text: "(123) 456-7890" },
// ];

// const socialMedia = [
//   { icon: <InstagramIcon className="w-10 h-10" />, alt: "Instagram" },
//   { icon: <FacebookIcon className="w-10 h-10" />, alt: "Facebook" },
//   { icon: <YoutubeIcon className="w-10 h-10" />, alt: "Youtube" },
//   { icon: <TwitterIcon className="w-10 h-10" />, alt: "Twitter" },
// ];

// const quickLinks = ["Features", "Creators", "Services", "Success Stories"];
// const resources = [
//   "Blog",
//   "Creator Guides",
//   "Help Center",
//   "API Documentation",
// ];
// const legalLinks = ["Terms of service", "Privacy policy", "Refund policy"];

// export const FooterSection = (): JSX.Element => {
//   return (
//     <footer className="flex flex-col items-center pt-5 pb-0 px-0 w-full flex-[0_0_auto] bg-transparent">
//       <div className="flex items-start justify-between relative w-full  flex-[0_0_auto]">
//         {/* Company Info Section */}
//         <div className="flex flex-col w-[400px] items-start gap-5 pl-0 pr-[100px] py-0 self-stretch">
//           <img
//             className="w-[180px] h-[69px] object-cover"
//             alt="Ugc sensei logo"
//             src="/landing/ugc-sensei-logo-2.png"
//           />

//           <p className="self-stretch [font-family:'Nunito',Helvetica] font-normal text-black text-base">
//             Connect with talented creators and get authentic content that
//             converts.
//           </p>

//           {/* Contact Information */}
//           {contactInfo.map((item, index) => (
//             <div
//               key={index}
//               className="inline-flex items-center gap-2.5 flex-[0_0_auto]"
//             >
//               {item.icon}
//               <p className="w-fit mt-[-1.00px] [font-family:'Nunito',Helvetica] font-normal text-black text-base">
//                 {item.text}
//               </p>
//             </div>
//           ))}

//           {/* Social Media Icons */}
//           <div className="inline-flex items-start gap-5 pt-5 pb-0 px-0 flex-[0_0_auto]">
//             {socialMedia.map((item, index) => (
//               <div key={index}>{item.icon}</div>
//             ))}
//           </div>
//         </div>

//         {/* Quick Links Section */}
//         <div className="flex flex-col w-[150px] items-start gap-5">
//           <h3 className="self-stretch [font-family:'Inter',Helvetica] font-semibold text-[#175779] leading-normal mt-[-1.00px] text-base">
//             Quick Links
//           </h3>

//           <div className="w-fit [font-family:'Inter',Helvetica] font-normal text-black text-sm leading-[26px]">
//             {quickLinks.map((link, index) => (
//               <React.Fragment key={index}>
//                 {link}
//                 {index < quickLinks.length - 1 && <br />}
//               </React.Fragment>
//             ))}
//           </div>
//         </div>

//         {/* Resources Section */}
//         <div className="flex flex-col w-[150px] items-start gap-5">
//           <h3 className="self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#175779] text-base leading-normal">
//             Resources
//           </h3>

//           <div className="w-fit [font-family:'Inter',Helvetica] font-normal text-black text-sm leading-[26px]">
//             {resources.map((resource, index) => (
//               <React.Fragment key={index}>
//                 {resource}
//                 {index < resources.length - 1 && <br />}
//               </React.Fragment>
//             ))}
//           </div>
//         </div>

//         {/* Newsletter Section */}
//         <div className="flex flex-col w-[300px] items-start gap-5">
//           <h3 className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#175779] text-base whitespace-nowrap">
//             Stay Updated
//           </h3>

//           <p className="self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-sm">
//             Get the latest updates on creator trends and platform features.
//           </p>

//           <div className="relative w-[310px] h-[37px] mr-[-10.00px]">
//             <div className="flex items-center absolute top-0 left-0">
//               <Input
//                 className="w-[287px] h-[37px] px-[18px] py-2.5 rounded-[5px] border border-solid border-[#d9d9d9] [font-family:'Inter',Helvetica] font-normal text-[#d9d9d9] text-[13px]"
//                 placeholder="Enter your email..."
//               />
//               <Button className="flex w-[122px] justify-center gap-[5px] px-5 py-2.5 absolute top-0 left-[181px] items-center bg-[#175779] rounded-[100px] [font-family:'Inter',Helvetica] font-bold text-white text-sm">
//                 Subscribe
//                 <ArrowRightIcon className="w-3.5 h-3.5" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Separator */}
//       <div className="inline-flex flex-col items-start gap-2.5 pt-[50px] pb-5 px-0 flex-[0_0_auto]">
//         <Separator className="w-[1250px] mt-[-1.00px]" />
//       </div>

//       {/* Footer Bottom */}
//       <div className="flex  items-start justify-between w-full flex-[0_0_auto]">
//         <p className="flex-1 mt-[-1.00px] [font-family:'Nunito',Helvetica] font-normal text-black text-xs">
//           © 2025 UGC Sensei. All rights reserved.
//         </p>

//         <div className="inline-flex items-start justify-center gap-5 flex-[0_0_auto]">
//           {legalLinks.map((link, index) => (
//             <p
//               key={index}
//               className="w-fit mt-[-1.00px] [font-family:'Nunito',Helvetica] font-normal text-black text-xs"
//             >
//               {link}
//             </p>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };
/* eslint-disable @next/next/no-img-element */
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
    <footer className="flex flex-col items-center pt-5 pb-6 px-4 sm:px-6 lg:px-0 w-full bg-transparent">
      <div className="flex flex-col lg:flex-row items-start justify-between w-full  gap-10 lg:gap-0">
        {/* Company Info */}
        <div className="flex flex-col w-full max-w-full lg:w-[400px] gap-5 pr-0 lg:pr-[100px]">
          <img
            src="/landing/ugc-sensei-logo-2.png"
            alt="UGC Sensei Logo"
            className="w-[180px] h-[69px] object-cover"
          />
          <p className="w-full max-w-full lg:w-[300px] text-base text-left text-black">
            Connect with talented creators and get authentic content that
            converts.
          </p>

          {contactInfo.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5">
              {item.icon}
              <p className="text-base text-left text-black">{item.text}</p>
            </div>
          ))}

          {/* Social icons */}
          <div className="flex items-center gap-5 pt-5">
            {socialMedia.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-center items-center rounded-full bg-[#eedac1] p-[15px]"
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col w-full max-w-full sm:max-w-[150px] gap-5">
          <p className="text-base font-semibold text-[#175779] font-[Inter] whitespace-nowrap">
            Quick Links
          </p>
          <p className="text-sm text-left text-black font-[Inter] leading-[26px] whitespace-pre-line">
            {quickLinks.join("\n")}
          </p>
        </div>

        {/* Resources */}
        <div className="flex flex-col w-full max-w-full sm:max-w-[150px] gap-5">
          <p className="text-base font-semibold text-[#175779] font-[Inter] whitespace-nowrap">
            Resources
          </p>
          <p className="text-sm text-left text-black font-[Inter] leading-[26px] whitespace-pre-line">
            {resources.join("\n")}
          </p>
        </div>

        {/* Stay Updated */}
        <div className="lg:flex flex-col w-full max-w-full sm:max-w-[300px] gap-5 hidden ">
          <p className="text-base font-semibold text-[#175779] font-[Inter] whitespace-nowrap">
            Stay Updated
          </p>
          <p className="text-sm text-left text-black font-[Inter]">
            Get the latest updates on creator trends and platform features.
          </p>

          <div className="relative w-full max-w-[310px] h-[37px]">
            <Input
              placeholder="Enter your email..."
              className="w-full max-w-[287px] h-[37px] px-[18px] py-2.5 rounded-[5px] border border-[#d9d9d9] text-[#d9d9d9] text-[13px] font-[Inter]"
            />
            <Button className="absolute top-0 left-auto right-0 flex w-[122px] gap-[5px] px-5 py-2.5 rounded-full bg-[#175779] font-bold text-white items-center">
              Subscribe
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="w-full flex flex-col items-start gap-2.5 pt-[50px] pb-5">
        <Separator className="w-full " />
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full  gap-3 sm:gap-0">
        <p className="flex-1 text-xs text-left text-black ">
          © 2025 UGC Sensei. All rights reserved.
        </p>

        <div className="flex flex-wrap sm:flex-nowrap items-center gap-5">
          {legalLinks.map((link, idx) => (
            <p
              key={idx}
              className="text-xs text-left text-black  whitespace-nowrap"
            >
              {link}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
};
