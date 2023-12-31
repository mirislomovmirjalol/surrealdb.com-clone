import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {Providers} from "@/app/providers";
import React from "react";
import NavigationBar from "@/app/components/UI/NavigationBar";

const inter = Inter({subsets: ['latin']})
export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html className="bg-base text-base-invert min-h-screen" lang="en">
        <body className={inter.className}>
        <Providers>
            <NavigationBar/>
            <div className="container p-6 md:p-0">
                {children}
            </div>
        </Providers>
        </body>
        </html>
    )
}
