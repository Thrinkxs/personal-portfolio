'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './_components/NavBar'
import Footer from './_components/Footer'
import { Providers } from './_components/providers'
import { Toaster } from 'sonner'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'codeThrinkxs',
  description: 'My new portfolio app'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${inter.className} bg-black`}>
        <Providers>
          <Header />
          <Toaster position='top-right' richColors expand closeButton />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
