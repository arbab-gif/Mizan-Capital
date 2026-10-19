import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const creato = localFont({
  variable: "--font-creato",
  src: [
    { path: "../fonts/CreatoDisplay-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/CreatoDisplay-Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/CreatoDisplay-Bold.otf", weight: "700", style: "normal" },
  ],
});

const ivar = localFont({
  variable: "--font-ivar",
  src: [
    { path: "../fonts/IvarDisplay-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/IvarDisplay-Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/IvarDisplay-SemiBold.otf", weight: "600", style: "normal" },
  ],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mizan Capital — Islamic Impact Investment",
  description:
    "Invest in asset-backed opportunities designed around Islamic principles, while helping support businesses, nonprofits, and projects that create lasting community impact.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${creato.variable} ${ivar.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
