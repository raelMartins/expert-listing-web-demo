import type {Metadata} from 'next';

import './globals.css';
import {sfPro, sfProRounded, manrope, outfit} from '@/app/style/fonts';
import {Providers} from '@/app/providers';

export const metadata: Metadata = {
  metadataBase: new URL('https://app.doorhive.io'),
  title: {
    default: 'Expert Listing',
    template: '%s | Expert Listing',
  },
  description: 'Expert Listing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sfPro.variable} ${sfProRounded.variable} ${manrope.variable} ${outfit.variable} ${sfProRounded.className}`}
        style={{maxWidth: `2000px`, margin: `0 auto`, overflowX: `clip`}}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
