import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Social Media App",
  description: "Social media app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full fixed px-4 bg-green-700 md:px-8 lg:px-16 ">
        <Navbar/></div>
        <div className="px-4 md:px-2 lg:px-4 ">{children}</div>
       </body>
    </html>
    </ClerkProvider>
  );
}