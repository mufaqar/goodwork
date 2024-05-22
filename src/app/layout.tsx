
import { openGraph, twitter } from '@/lib/seoMeta'
import './globals.css'
import { SettingsProvider } from '@/context/setting-context'



export const metadata = {
  title: 'GoodWorks',
  description: 'For Fast, Secure Synchronization of your users between multiple directories such as Active Directory, Azure, LDAP, and Google  ',
  alternates: {
    canonical: `https://igoodworks.com/`,
  },
  twitter: {...twitter},
  openGraph: {...openGraph}
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
