import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import MissionFilter from "./components/MissionFilter";

export const metadata: Metadata = {
  title: "40K Buddy",
  description: "Lets get a new 40k game tracker buddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Navbar />
        <MissionFilter />
      </body>
    </html>
  );
}
