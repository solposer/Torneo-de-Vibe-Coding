import type { Metadata } from "next";
import "./globals.css";
import Header from './ui/header';

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
    >
      
      <body className='fuente-parrafos'>
        <Header></Header>
        <div id='cuerpo-doc'>
          {children}
        </div>        
      </body>
    </html>
  );
}
