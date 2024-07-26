import type { Metadata } from "next";
import { Roboto as FontSans } from "next/font/google";
import "./../globals.css";
import Sidebar from "@/components/layouts/Sidebar";
import { Suspense } from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.className}>
        <div className="flex">
          <Suspense fallback={<div>Loading...</div>}>
            <Sidebar />
          </Suspense>
          <main className="flex-1 px-8 bg-[#F6F7F9] flex items-center justify-center">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
