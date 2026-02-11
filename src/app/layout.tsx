import type { Metadata } from "next";
// import localFont from "next/font/local"; // Removing missing local fonts
// import localFont from "next/font/local"; // Removing missing local fonts
import { Lora } from "next/font/google"; // Lora for Titles
// Open Sauce Sans for Body/Subtitles
import "@fontsource/open-sauce-sans/300.css";
import "@fontsource/open-sauce-sans/400.css";
import "@fontsource/open-sauce-sans/500.css";
import "@fontsource/open-sauce-sans/600.css";
import "@fontsource/open-sauce-sans/700.css";

import { SiteHeader } from "@/components/layout/SiteHeader"; // Importing Header
import "./globals.css";

// Lora: Elegant serif for titles
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Instituto Frisoli",
    default: "Instituto Frisoli | Excelência em Geriatria e Longevidade",
  },
  description: "Medicina de excelência em São Paulo. Geriatria, Clínica Médica e Longevidade com abordagem integral e personalizada na Vila Olímpia.",
  keywords: ["Geriatria", "Sāo Paulo", "Longevidade", "Clínica Médica", "Vila Olímpia", "Check-up", "Saúde do Idoso", "Roberto Frisoli"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://institutofrisoli.com.br",
    siteName: "Instituto Frisoli",
    images: [
      {
        url: "/images/1.jpeg", // Pointing to a valid image for OG
        width: 1200,
        height: 630,
        alt: "Instituto Frisoli",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logotipo1.png",
    shortcut: "/images/logotipo1.png",
    apple: "/images/logotipo1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${lora.variable} antialiased bg-brand-light text-brand-charcoal overflow-x-hidden selection:bg-brand-amber selection:text-white`}
      >
        <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.035] bg-noise mix-blend-overlay"></div>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
