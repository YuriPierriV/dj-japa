import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "DJ Japa | Transforme seu evento em uma experiência inesquecível",
  description: "DJ profissional especializado em casamentos, eventos corporativos, festas particulares e formaturas. Som de qualidade, equipamentos modernos e 15+ anos de experiência. Atendimento em São Paulo e região.",
  keywords: [
    "DJ São Paulo",
    "DJ casamento",
    "DJ festa",
    "DJ evento corporativo",
    "DJ formatura",
    "som profissional",
    "equipamento de som",
    "festa SP",
    "DJ japonês",
    "evento inesquecível"
  ],
  authors: [{ name: "DJ Japa" }],
  creator: "DJ Japa",
  publisher: "DJ Japa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://djjapa.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "DJ Japa | Transforme seu evento em uma experiência inesquecível",
    description: "DJ profissional com 15+ anos de experiência. Som de qualidade, equipamentos modernos e energia garantida para seu evento.",
    url: 'https://djjapa.com',
    siteName: 'DJ Japa',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DJ Japa - Experiência musical inesquecível',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "DJ Japa | Transforme seu evento em uma experiência inesquecível",
    description: "DJ profissional com 15+ anos de experiência. Som de qualidade e energia garantida!",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${notoSansJP.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#10D7FF" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
