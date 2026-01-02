import type { Metadata } from "next";
import { Source_Sans_3, Merriweather } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "600", "700"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Jefferson County, West Virginia",
  description: "Official website of Jefferson County, West Virginia - Government services, community information, and resources for residents and visitors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} ${merriweather.variable} font-sans`}>{children}</body>
    </html>
  );
}

