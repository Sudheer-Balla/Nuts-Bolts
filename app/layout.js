"use client";
import Nav from "./components/nav";
import Footer from "./components/footer";
import SmoothScroller from "./components/SmoothScroller";
import "./globals.css";
import { Nunito } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Nuts & Bolts</title>
        <meta name="description" content="Nuts & Bolts Auto Store" />
        <link rel="icon" href="/gallery/favicon.ico" />
      </head>

      <body className="font-nunito">
        <NextUIProvider>
          <div>
            <SmoothScroller />
            <Nav />
            {children}
            <Footer />
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
