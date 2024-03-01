import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import Container from "@/components/Container";
import SessionProvider from "./SessionProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JCS Imóveis",
  description: "Compre ou alugue um imóvel de sua escolha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>
            <main className="flex flex-col min-h-screen bg-secondary">
              <NavBar />
              <section className="flex-grow">
                <Container>{children}</Container>
              </section>
            </main>
            <Toaster />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
