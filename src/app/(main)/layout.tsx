
import { DM_Sans } from "next/font/google";
import "../../app/globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import DefaultHeader from "../components/layout/DefaultHeader";
import { AnimatedHeader } from "../components/layout/HomeHeader";
import Footer from "../components/layout/Footer";


const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});


type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({  children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`} suppressHydrationWarning>

      <body className="min-h-screen bg-background text-foreground font-sans flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
           <AnimatedHeader />
          <main role="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

