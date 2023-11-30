import type { Metadata } from 'next'
import { Inter, Montserrat} from 'next/font/google'
import './globals.css'
import 'animate.css/animate.min.css';

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400'
})
export const metadata: Metadata = {
  title: 'Edita',
  description: 'We will be posting upcoming CTFs, writeups and many more fun things here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}</body>
    </html>
  )
}
