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
  title: "DJ Japa | O DJ que transforma seu evento em Brasília",
  description: "DJ profissional de Brasília com 15+ anos de experiência. Casamentos, festas particulares, eventos corporativos e formaturas. Som de qualidade, equipamentos modernos e energia inesquecível.",
  keywords: [
    "DJ Brasília",
    "DJ casamento Brasília",
    "DJ festa Brasília",
    "DJ evento corporativo Brasília",
    "DJ formatura Brasília",
    "som profissional Brasília",
    "equipamento de som Brasília",
    "DJ japonês Brasília",
    "DJ para eventos Brasília",
    "música para casamento Brasília"
  ],
  authors: [{ name: "DJ Japa" }],
  creator: "DJ Japa",
  publisher: "DJ Japa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://djjapa.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "DJ Japa | O DJ que transforma seu evento em Brasília",
    description: "DJ de Brasília com mais de 15 anos de experiência. Casamentos, festas e eventos corporativos com energia e som de qualidade.",
    url: 'https://djjapa.com.br',
    siteName: 'DJ Japa',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DJ Japa em Brasília - Experiência musical inesquecível',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "DJ Japa | O DJ que transforma seu evento em Brasília",
    description: "DJ em Brasília com 15+ anos de experiência. Som de qualidade, energia garantida e momentos inesquecíveis.",
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
    google: 'seu-codigo-de-verificacao-google',
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
