
import './globals.css'
import { SettingsProvider } from '@/context/setting-context'



export const metadata = {
  title: 'GoodWorks ',
  description: 'Simply Sync',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SettingsProvider>
          {children}
        </SettingsProvider>
      </body>
    </html>
  )
}
