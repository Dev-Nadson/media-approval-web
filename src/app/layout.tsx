import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { PageContainer } from "@/components/ui/page";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  adjustFontFallback: false,

  fallback: ['system-ui', 'Arial', 'sans-serif'],
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
      lang="pt-BR"
      className={googleSans.className}
      suppressHydrationWarning={true}
    >
      <body className="min-h-full min-w-full">
        <Providers>
          <PageContainer>
            {children}
          </PageContainer>
        </Providers>
      </body>
    </html>
  );
}
