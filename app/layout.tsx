import "./globals.css";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import { Toaster } from "@/components/ui/Toasts/toaster";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title:
    "UGC Sensei – Connect Brands with Creators for Authentic, High-Impact UGC",
  description:
    "UGC Sensei is the premier platform connecting brands with 400K+ talented creators to produce authentic, high-performing user-generated content for TikTok, Instagram, YouTube, and more. Simplify your UGC strategy with expert guidance, seamless management, and content that drives engagement and sales.",
  keywords: [
    "UGC platform",
    "user-generated content",
    "creator marketing",
    "brand collaborations",
    "influencer content",
    "TikTok marketing",
    "Instagram creators",
    "YouTube content",
    "authentic content",
    "video content creation",
    "social media advertising",
    "content strategy",
    "digital marketing",
    "creator network",
    "agency solutions",
    "content production",
    "targeted audience engagement",
    "ROI-driven marketing",
  ].join(", "),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${nunito.variable}`}>
        {children}
        <Suspense>
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}
