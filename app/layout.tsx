import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'AllThingsBaby - Eco-Friendly Baby Products',
  description: 'Pure beginnings naturally. Shop premium eco-friendly baby products from swaddles to toys.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.jpg',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
