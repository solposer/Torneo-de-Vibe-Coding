import type { Metadata } from "next";
import "./globals.css";
import Header from './ui/header';
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Torneo de Vibecoding",
  description: "Participa en el Torneo de Vibecoding y usa la IA para acelerar el desarrollo de soluciones.",
  icons: {
    icon: "/logo-torneo.png",
  },
  openGraph: {
    title: "Torneo de Vibecoding",
    description: "Participa en el Torneo de Vibecoding.",
    images: ["/logo-torneo.png"],
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
    >
      
      <body className='fuente-parrafos'>
        <Header></Header>
        <div id='cuerpo-doc'>
          {children}
        </div>        
        <Analytics/>
      </body>
    </html>
  );
}
