import './globals.css'
import { Playfair_Display } from 'next/font/google'

// Google Fonts (keeping only the ones not available locally)
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  // style: ['normal', 'italic'],
  variable: '--font-display',
})

export const metadata = {
  title: 'Proof of Witness',
  description: 'ZK Builder Community',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable}`}>
      <body className="bg-[#FEFAE0] font-poppins">{children}</body>
    </html>
  )
}
