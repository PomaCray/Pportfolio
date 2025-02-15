import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AnimatePresence, motion } from "framer-motion";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'POMA',
  description: 'By dev.Poma',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
