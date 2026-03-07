import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins, Syne, Anton } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import CustomCursor from '@/components/ui/custom-cursor'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const syne = Syne({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-anton',
});

export const metadata: Metadata = {
  title: 'Sylaka Bhargav | Full Stack Developer',
  description: 'Full Stack Developer with strong foundations in Data Structures, Object-Oriented Programming, and Cloud Computing. Experienced in building scalable applications using React.js, Node.js, Express.js, and PostgreSQL.',
  generator: 'v0.app',
  keywords: ['Full Stack Developer', 'React.js', 'Node.js', 'Cloud Computing', 'AWS', 'Portfolio'],
  authors: [{ name: 'Sylaka Bhargav' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2C3E50',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} ${syne.variable} ${anton.variable} font-sans antialiased`}>
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
