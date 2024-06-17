import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monad Builders",
  description:
    "Monad Builders is a community built explorer to showcase and discover everything Monad including, NFTs, games, DeFi and more",
  applicationName: "Monad Builders",
  keywords: [
    "Monad",
    "Monad Builders",
    "Monad Explorer",
    "Monad NFTs",
    "Monad Games",
    "Monad DeFi",
    "Monad Community",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/monad-builders.jpeg" type="image/jpeg" />
      </Head>
      <body className={inter.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
