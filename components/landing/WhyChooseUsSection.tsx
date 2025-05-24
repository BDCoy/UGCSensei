/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const comparisonData = [
  {
    feature: "High value, low cost",
    ugcSensei: true,
    influencers: false,
    productionStudio: false,
  },
  {
    feature: "Quick delivery",
    ugcSensei: true,
    influencers: false,
    productionStudio: false,
  },
  {
    feature: "Simple process",
    ugcSensei: true,
    influencers: false,
    productionStudio: false,
  },
  {
    feature: "Customizable",
    ugcSensei: true,
    influencers: true,
    productionStudio: true,
  },
  {
    feature: "Growth-ready content",
    ugcSensei: true,
    influencers: false,
    productionStudio: true,
  },
  {
    feature: "Real and relatable",
    ugcSensei: true,
    influencers: true,
    productionStudio: false,
  },
  {
    feature: "Launch-ready",
    ugcSensei: true,
    influencers: false,
    productionStudio: true,
  },
];

export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[50px] w-full py-[100px] px-4 sm:px-6">
      <div className="flex flex-col items-center gap-5 max-w-[600px] mx-auto">
        <h2 className="font-bold text-4xl text-black  text-center">
          Why Partner with a UGC Sensei?
        </h2>
        <p className="text-lg text-center text-black">
          See how we compare to traditional content creation methods.
        </p>
      </div>

      {/* Responsive scroll wrapper */}
      <div className="w-full  overflow-x-auto rounded-[10px]">
        <Table className="min-w-[600px] border-collapse overflow-hidden rounded-[10px]">
          <TableHeader>
            <TableRow>
              <TableHead className="bg-white h-20 w-[40%] min-w-[180px]">Feature</TableHead>
              <TableHead className="bg-[#175779] h-20 min-w-[120px] rounded-tl-[10px]">
                <div className="flex items-center justify-center">
                  <img
                    className="w-[120px] h-[45px] object-contain"
                    alt="UGC Sensei logo"
                    src="/landing/ugc-sensei-logo-white-2-1.png"
                  />
                </div>
              </TableHead>
              <TableHead className="bg-[#eedac1] h-20 min-w-[120px] text-center">
                <div className="text-[17px] text-black ">
                  Influencers
                </div>
              </TableHead>
              <TableHead className="bg-[#eedac1] h-20 min-w-[120px] text-center rounded-tr-[10px]">
                <div className="text-[17px] text-black ">
                  Production Studio
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonData.map((row, index) => (
              <TableRow
                key={index}
                className={`border-none ${index % 2 === 0 ? "bg-white" : "bg-[#eff3ff]"}`}
              >
                <TableCell className="h-20 px-3 sm:px-5 py-2.5 text-sm sm:text-base whitespace-normal">
                  {row.feature}
                </TableCell>
                <TableCell
                  className={`h-20 bg-white border-l border-r border-[#175779] ${
                    index === comparisonData.length - 1 ? "border-b rounded-bl-lg rounded-br-lg" : ""
                  }`}
                >
                  <div className="flex items-center justify-center">
                    {row.ugcSensei && (
                      <img
                        className="w-[40px] sm:w-[52px] h-[40px] sm:h-[52px]"
                        alt="CheckIcon circle fill"
                        src="/landing/checkcirclefill.svg"
                      />
                    )}
                  </div>
                </TableCell>
                <TableCell className="h-20">
                  <div className="flex items-center justify-center">
                    {row.influencers ? (
                      <img
                        className="w-[40px] sm:w-[52px] h-[40px] sm:h-[52px]"
                        alt="CheckIcon circle fill"
                        src="/landing/checkcirclefill.svg"
                      />
                    ) : (
                      <img className="w-6 sm:w-10 h-6 sm:h-10" alt="X" src="/landing/x.svg" />
                    )}
                  </div>
                </TableCell>
                <TableCell className="h-20">
                  <div className="flex items-center justify-center">
                    {row.productionStudio ? (
                      <img
                        className="w-[40px] sm:w-[52px] h-[40px] sm:h-[52px]"
                        alt="CheckIcon circle fill"
                        src="/landing/checkcirclefill.svg"
                      />
                    ) : (
                      <img className="w-6 sm:w-10 h-6 sm:h-10" alt="X" src="/landing/x.svg" />
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Button className="bg-[#175779] text-white rounded-[100px] px-[40px] sm:px-[50px] py-3 font-bold text-base  whitespace-nowrap">
        Get Started Now
      </Button>
    </section>
  );
};
