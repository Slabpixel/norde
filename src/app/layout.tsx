import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Roboto_Serif } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import SmoothScroll from "@/components/smooth-scroll";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-roboto-serif",
});

const helveticaNeue = localFont({
  src: [
    {
      path: "./fonts/helveticaneue.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/helveticaneue-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/helveticaneue-medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-neue",
});

export const metadata: Metadata = {
  title: "Norde - Sustainability-driven AI",
  description:
    "NORDE Desktop Workspace is designed to bring clarity into complex systems. Instead of overwhelming users with constant streams of data, the interface focuses on filtering what truly matters, allowing intelligence to operate with intention. Inspired by natural systems, this concept explores how AI can adapt, refine, and respond selectively, reducing unnecessary computation while maintaining performance. The result is a workspace that feels calm, precise, and efficient — where every interaction is purposeful and every output is meaningful.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${robotoSerif.variable} ${helveticaNeue.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
