import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { PageContainer } from "@/components/ui/page";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gerencia Ai",
  description: "Gerenciador de mídias para aprovação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={googleSans.className}
      suppressHydrationWarning={true}
    >
      <body className="min-h-full min-w-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <PageContainer>
            {children}
          </PageContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
