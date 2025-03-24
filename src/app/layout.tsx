import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Snowfall from "@/components/Snowfall";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "S-BOT - Your ultimate WhatsApp automation tool",
  description: "S-BOT is a WhatsApp automation tool with features like RPG games, downloaders, and search capabilities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} dark`}>
      <ClientBody>
        <Snowfall />
        {children}
      </ClientBody>
    </html>
  );
}
