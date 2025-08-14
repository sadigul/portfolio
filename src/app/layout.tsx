'use client'

import './globals.css'
import { Poppins } from 'next/font/google'
import Navbar from './Home/navbar' // adjust if you're using '@/components/Navbar'
import { ParallaxProvider } from 'react-scroll-parallax'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  text-gray-900`}>
        <ParallaxProvider>
          <Navbar />
          <main className="pt-24">{children}</main>
        </ParallaxProvider>
      </body>
    </html>
  )
}
