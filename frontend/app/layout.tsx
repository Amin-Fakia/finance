import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import { Toaster } from "react-hot-toast";
import { Check } from "lucide-react";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "FinanceFlow — Manage Your Money",
  description: "Modern personal finance management dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${geist.variable} ${geistMono.variable}`}>
      <body className="min-h-full flex font-(family-name:--font-geist) bg-background text-text-primary">
        <Sidebar />
        <Toaster toastOptions={{style: {backgroundColor: "#6b8e23", color: "#ffffff"},icon: <Check />}}/>
        <div className="flex-1 flex flex-col min-h-screen overflow-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
