// app/layout.tsx or app/layout.js
import './globals.css'
import { Poppins, JetBrains_Mono, Playfair_Display } from 'next/font/google'

// Google Fonts
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata = {
  title: 'Proof of Witness',
  description: 'ZK Builder Community',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <body className="bg-[#FEFAE0] font-poppins">{children}</body>
    </html>
  )
}
