import "./globals.css";
import NextThemeProvider from "./../providers/theme-provider";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nguyen Viet Khoi",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="grid grid-cols-10 min-h-screen bg-gradient-to-b from-[#6dd3e7] to-[#fefefe] dark:bg-gradient-to-b dark:from-black dark:from-35% dark:to-stone-900">
            <div className="hidden lg:block lg:col-span-1" />
            {children}
            <div className="hidden lg:block lg:col-span-1" />
          </div>
        </NextThemeProvider>
      </body>
    </html>
  );
}
