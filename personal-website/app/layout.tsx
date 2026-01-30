import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const tan_mon_cheri = localFont({
  src: "./fonts/tan-mon-cheri.ttf",
  variable: "--font-mon-cheri",
});

const tan_twinkle = localFont({
  src: "./fonts/TANTWINKLE.otf",
  variable: "--font-mon-twinkle",
});

export const metadata: Metadata = {
  title: "Rebecca Lee",
  description: "Rebecca Lee - Junior at Northeastern | AI Concentration",
  icons: "/icon.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${tan_mon_cheri.variable} ${tan_twinkle.variable}`} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}