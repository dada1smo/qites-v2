import type { Metadata } from 'next';
import { Inter, Space_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/src/ui/components/Nav';
import { Analytics } from '@vercel/analytics/react';
import ScreenSizeWarning from '@/src/infraestructure/components/ScreenSizeWarning';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  adjustFontFallback: false,
  preload: false,
});

const space_mono = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono',
  weight: ['400', '700'],
  adjustFontFallback: false,
  preload: false,
});

export const metadata: Metadata = {
  title: 'Qites',
  description: 'Fique quites com suas amizades',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} ${space_mono.variable}`}>
        <div className="amber-gradient-bg" />
        <ScreenSizeWarning />
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
