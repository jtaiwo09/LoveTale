import type { Metadata } from "next";
import { Roboto as FontSans } from "next/font/google";
import "./../globals.css";
import Navbar from "@/components/layouts/Navbar";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
