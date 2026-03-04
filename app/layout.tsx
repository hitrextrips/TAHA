import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'TAHA Depannage et Remorquage | 24h/7j Liege, Seraing',
  description: 'Service de depannage et remorquage professionnel a Liege et Seraing. Disponible 24h/24, 7j/7. Remorquage, depannage batterie, ouverture de porte. Appelez +32 474 43 95 53.',
  keywords: 'depannage, remorquage, Liege, Seraing, Belgique, 24h, towing, batterie, ouverture porte',
  openGraph: {
    title: 'TAHA Depannage et Remorquage',
    description: 'Service de depannage et remorquage professionnel 24h/24 a Liege et Seraing.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#e8650a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
