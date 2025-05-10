import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Providers from "./providers";
import {ClerkProvider} from '@clerk/nextjs';
import {Toaster} from 'sonner';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Homecoming",
  description: "Home at every corner!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
            <Navbar />
            <main className='container py-10'>{children}</main>
            </Providers>
        </body>
      </html>
      </ClerkProvider>
  );
}
