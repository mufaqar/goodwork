
import './globals.css'
import { Inter } from 'next/font/google'
import { SettingsProvider } from '@/context/setting-context'


const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'GoodWorks ',
//   description: 'Simply Sync',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SettingsProvider>
          {children}
        </SettingsProvider>
      </body>
    </html>
  )
}
