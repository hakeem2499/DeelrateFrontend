import React from 'react'
import Footer from '../_components/Footer'
import { DM_Sans } from "next/font/google";
import "../../globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import Header from '../_components/Header';
import { Toaster } from '@/components/ui/sonner';

const dmSans = DM_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-dm-sans",
    weight: ["400", "500", "700"],
});

const SubmissionRootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" className={`${dmSans.variable} antialiased`} suppressHydrationWarning>
            <body className="min-h-screen bg-background text-foreground font-sans ">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                    <Toaster closeButton={true} />
                </ThemeProvider>
            </body>
        </html>
    )
}

export default SubmissionRootLayout;