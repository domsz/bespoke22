import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: {
    template: '%s - B22',
    default: 'B22 - Bespoke Workwear',
  },
  description: '',
}

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`text-zinc-950 dark:bg-zinc-900 dark:text-white ${poppins.className}`}
    >
      <head>
      </head>
      <body>{children}</body>
    </html>
  )
}
