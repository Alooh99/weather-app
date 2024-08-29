import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather App",
  description: "Next JS weather app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Link to the new favicon */}
        <link rel="icon" href="/sun.ico" />
        {/* Optionally, you can specify a different size or type */}
        {/* <link rel="icon" href="/sun-icon.png" type="image/png" sizes="16x16" /> */}
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
