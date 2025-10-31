import { Geist, Geist_Mono } from "next/font/google"

import "@mannahouse/ui/globals.css"
import { Providers } from "@/components/providers"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Manna House",
  description: "Manna House Homepage",
} 

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>
          {children}
          <footer className="mt-16 border-t border-white/10 py-6 text-center text-sm text-white/70">
            © {new Date().getFullYear()} Manna House. All rights reserved.
          </footer>
        </Providers>
      </body>
    </html>
  )
}
