import "./globals.css";
import NextThemeProvider from "@/providers/theme-provider";

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
      <body>
        <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="grid grid-cols-5 min-h-screen bg-gradient-to-b from-blue-600 to-[#fefefe] dark:bg-gradient-to-b dark:from-black dark:from-35% dark:to-[#626262] dark:text-white ">
            <div className="hidden lg:block lg:col-span-1"/>
            {children}
            <div className="hidden lg:block lg:col-span-1"/>
          </div>
        </NextThemeProvider>
      </body>
    </html>
  );
}
