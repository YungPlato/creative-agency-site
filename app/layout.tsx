import './globals.css';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://CreativeDisplayName.com'),
  title: 'Creative Display Name - AI Solutions & Branding for Small Businesses',
  description:
    'AI-driven branding, local SEO, automation, and insights for small businesses.',
  openGraph: {
    type: 'website',
    title: 'Creative Display Name - AI Solutions & Branding for Small Businesses',
    description:
      'AI branding, automation, local SEO, and insights tailored for small business growth.',
    url: 'https://CreativeDisplayName.com/',
    siteName: 'Creative Display Name',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Creative Display Name - AI Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creative Display Name - AI Solutions & Branding for Small Businesses',
    description:
      'AI branding, automation, local SEO, and insights tailored for small business growth.',
    images: ['/og-image.jpg']
  }
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="text-gray-200">
        {children}
      </body>
    </html>
  );
}

