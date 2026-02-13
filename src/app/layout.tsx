import type { Metadata } from "next";

import "@fontsource/lora/400.css";
import "@fontsource/lora/500.css";
import "@fontsource/lora/700.css";
import "@fontsource/lora/400-italic.css";
import "@fontsource/lora/500-italic.css";
import "@fontsource/lora/700-italic.css";

import "@fontsource/open-sauce-sans/300.css";
import "@fontsource/open-sauce-sans/400.css";
import "@fontsource/open-sauce-sans/500.css";
import "@fontsource/open-sauce-sans/700.css";

import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Instituto Frisoli",
    default: "Instituto Frisoli | Clínica Geriátrica São Paulo - Excelência",
  },
  description: "Clínica geriátrica de referência em São Paulo. Equipe especializada, cuidado personalizado e abordagem multidisciplinar para longevidade com qualidade.",
  keywords: [
    "clínica geriátrica são paulo",
    "geriatra são paulo",
    "geriatria são paulo",
    "médico geriatra",
    "cuidados com idosos",
    "saúde do idoso",
    "atendimento geriátrico",
    "clínica para idosos",
    "medicina geriátrica",
    "longevidade saudável",
    "envelhecimento ativo",
    "Instituto Frisoli",
    "Vila Olímpia",
    "Roberto Frisoli",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://institutofrisoli.com.br",
    siteName: "Instituto Frisoli",
    title: "Instituto Frisoli | Clínica Geriátrica São Paulo",
    description: "Clínica geriátrica de referência em São Paulo. Equipe especializada, cuidado personalizado e abordagem multidisciplinar para longevidade com qualidade.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Instituto Frisoli - Clínica Geriátrica em São Paulo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instituto Frisoli | Clínica Geriátrica São Paulo",
    description: "Clínica geriátrica de referência em São Paulo. Equipe especializada, cuidado personalizado e abordagem multidisciplinar.",
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
      <body className="antialiased font-sans bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
