import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { ChatWidget } from "@/components/ui/ChatWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MSE Solar Calculator",
  description: "Professional Solar Estimation Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased font-sans`}
      >
        <Providers>
          {children}
          <ChatWidget />
        </Providers>
      </body>
    </html>
  );
}
