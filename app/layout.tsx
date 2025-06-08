import './globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'SnapSort | Smart Media Viewer',
  description:
    'SnapSort is an open-source image viewer/organizer that uses face detection and vector search (FAISS) to group and browse photos intelligently. Built with face_recognition, PyQt5, and blazing-fast indexing.',
  keywords: [
    'SnapSort',
    'face recognition',
    'photo organizer',
    'image sorting',
    'open-source face detection',
    'image clustering',
    'PyQt5 photo manager',
    'AI photo sorter'
  ],
  authors: [{ name: 'Abhishek Singh Kushwaha', url: 'https://github.com/ASK-03/SnapSort' }],
  metadataBase: new URL('https://snapsort.vercel.app'), 
  openGraph: {
    title: 'SnapSort - Smart Photo Organization by Faces',
    description:
      'Organize and browse your photo collection with intelligent face grouping using SnapSort.',
    url: 'https://snapsort.vercel.app',
    siteName: 'SnapSort',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://snapsort.ai/og-image.jpg', // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: 'SnapSort - Organize Photos by Faces',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SnapSort - Smart Photo Organizer by Faces',
    description:
      'Easily manage and search your photos using face detection with SnapSort.',
    site: '@A_S_K_0_3', // Replace with your Twitter handle if any
    images: ['https://snapsort.ai/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/snapsort-logo.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </head>
      <body className={`${manrope.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
