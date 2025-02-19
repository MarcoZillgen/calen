import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { EventContainer } from "@/context/event";
import { DayContainer } from "@/context/day";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calen",
  description: "Sweet little calendar app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <EventContainer>
        <DayContainer>
          <body
            className={`antialiased w-full h-ful ${geist.className}`}
          >
            {children}
          </body>
        </DayContainer>
      </EventContainer>
    </html>
  );
}
