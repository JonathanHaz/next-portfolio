import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Jonathan Hazan • Portfolio",
  description: "Created by Jonathan Hazan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <Header/>
        {children}
        </body>
    </html>
  );
}
