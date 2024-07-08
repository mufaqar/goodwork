import { openGraph, twitter } from "@/lib/seoMeta";
import "./globals.css";
import { SettingsProvider } from "@/context/setting-context";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";

export const metadata = {
  title: "GoodWorks: Your Trusted Software Solutions Provider",
  description:" GoodWorks is your go-to destination for cutting-edge software solutions, helping businesses thrive with innovative technologies and expert support.",
  alternates: {
    canonical: `https://igoodworks.com/`,
  },
  twitter: { ...twitter },
  openGraph: { ...openGraph },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics measurementId="G-8L47HPDD0B" />
      <body>
        <SettingsProvider>{children}</SettingsProvider>
      </body>
    </html>
  );
}
