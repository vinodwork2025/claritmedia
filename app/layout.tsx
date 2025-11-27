import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Clarit | CLARITY MEDIA - Large Format Print Media & Equipment Supplier',
  description: 'Leading B2B supplier of large-format print media, lamination films, laminators, and vinyl cutters in Bangalore, India. Trusted by print and signage businesses since 2001.',
  keywords: ['large format printing', 'print media', 'lamination films', 'laminators', 'vinyl cutters', 'signage', 'Bangalore', 'India'],
  authors: [{ name: 'Clarit - CLARITY MEDIA' }],
  openGraph: {
    title: 'Clarit | CLARITY MEDIA - Large Format Print Media & Equipment Solutions',
    description: 'Powering India\'s most demanding print & signage projects since 2001',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Clarit - CLARITY MEDIA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
