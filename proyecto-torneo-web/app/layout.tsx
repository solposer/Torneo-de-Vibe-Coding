import type { Metadata } from "next";
import "./globals.css";
import Header from './ui/header';
import { Press_Start_2P, Space_Grotesk, Sixtyfour_Convergence } from 'next/font/google';

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--fuente-torneo-vibe',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--fuente-parrafos',
  display: 'swap',
});

const sixtyfourConvergence = Sixtyfour_Convergence({
  weight: '400',
  subsets: ['latin'],
  variable: '--fuente-subtitulos',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Torneo de Vibecoding",
  description: "Torneo de Vibecoding",
  icons: {
    icon: "/logo-torneo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${pressStart2P.variable} ${spaceGrotesk.variable} ${sixtyfourConvergence.variable}`}
    >
      <body className='fuente-parrafos'>
        <Header />
        <div id='cuerpo-doc'>
          {children}
        </div>        
      </body>
    </html>
  );
}
