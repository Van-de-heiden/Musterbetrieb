import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Grünwerk Gartenbau – Ihr Garten in besten Händen",
  description:
    "Grünwerk Gartenbau – professionelle Gartengestaltung, Gartenpflege und Neuanlagen in Wien und Umgebung.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
