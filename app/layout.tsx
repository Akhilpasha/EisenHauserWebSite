import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display as PlayfairDisplay, Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import NewsletterPopup from "@/components/newsletter-popup"

const playfair = PlayfairDisplay({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ThriftVibe | Sustainable Style, Second-Hand Soul",
  description:
    "Discover unique, pre-loved clothing at ThriftVibe. Sustainable fashion that's good for your style and the planet.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <NewsletterPopup />
      </body>
    </html>
  )
}



import './globals.css'