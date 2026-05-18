import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import localFont from 'next/font/local'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const bmono = localFont({
  src: '../public/font/bmono-semibold.ttf',
  variable: '--font-bmono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LoginExample',
  description: 'Continue with your preferred provider',
  icons: {
    icon: '/favicon.svg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${bmono.variable}`} suppressHydrationWarning>
      <body className="font-manrope antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
