import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UGC Sensei – Connect Brands with Creators for Authentic Content",
  description:
    "UGC Sensei is the leading platform where brands find talented creators to produce authentic, high-performing user-generated content for TikTok, Instagram, YouTube, and more.",
  keywords: [
    "UGC platform",
    "creator marketing",
    "influencer content",
    "brand collaborations",
    "user-generated content",
  ].join(", "),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
