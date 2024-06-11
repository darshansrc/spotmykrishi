import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotmykrishi",
  description:
    "Discover a wide range of high-quality agricultural products and services to help you cultivate your dream garden.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spotmykrishi.vercel.app/",
    title: "Spotmykrishi",
    description:
      "Discover a wide range of high-quality agricultural products and services to help you cultivate your dream garden.",
    siteName: "Spotmykrishi",
    images: [
      {
        url: "https://spotmykrishi.vercel.app/assets/hero.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://spotmykrishi.vercel.app/assets/hero.jpg",
        width: 1800,
        height: 1600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
