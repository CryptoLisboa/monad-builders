import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Monad Builders",
    description: "Monad Builders is an explorer powered by the House of Molandak to discover everything Monad including, NFTs, games, DeFi and more",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NextUIProvider>{children}</NextUIProvider>
            </body>
        </html>
    );
}
