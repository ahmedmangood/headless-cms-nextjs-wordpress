import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Main } from "@/components/craft";
import { cn } from "@/lib/utils";
import { Nav } from "@/components/layoutComponents/Navbar";
import { Footer } from "@/components/layoutComponents/Footer";
// website font
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Main Metadata
export const metadata: Metadata = {
  title: "My Blog",
  description:
    "My Blog is blog system that i publish all my articles about technologies.",
  metadataBase: new URL("https://wp.9d8.dev"),
};

// Revalidate content every hour
export const revalidate = 3600;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <Main>{children}</Main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
