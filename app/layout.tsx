import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Slay Desi Clothing | Launching Soon',
  description:
    "Desi men's and women's traditional wear, launching soon. Join the waitlist for early access and launch offers.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
