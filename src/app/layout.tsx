import '@/styles/tailwind.css'
import { ApplicationLayout } from './application-layout'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="text-zinc-950 antialiased lg:bg-zinc-100"
    >
      <head>

      </head>
      <body>
        <ApplicationLayout>
          {children}
        </ApplicationLayout>
      </body>
    </html>
  )
}
