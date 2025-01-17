import React from 'react'
import "@/css/globals.css"
import "@/css/index.css"
import "@/css/contacts.css"
import "@/css/services.css"
import "@/css/terms.css"
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const inter = Poppins({ weight: "400", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'INCREDIBLES',
  description: 'Incredible website/web development services',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
