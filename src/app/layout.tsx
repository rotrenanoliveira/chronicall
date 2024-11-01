import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'chronicall',
  description: 'Chronicall é um aplicativo de monitoramento de saúde focado em atividades físicas e doenças crônicas.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="light">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
