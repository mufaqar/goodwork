import React from 'react'

export const metadata = {
    title: "Simply Sync Passwords Tool | GoodWorks Software Solutions",
    description:
      "Discover the efficiency of Simply Sync Passwords Tool, part of GoodWorks Software Solutions' innovative software lineup.",
    alternates: {
      canonical: `https://igoodworks.com/simply-sync`,
    },
    twitter: {
      title: "igoodworks",
      description:
        "Simply Sync Password for Active Directory, Office 365, Google & More. Easy, Fast and Secure Sync for AD password.",
      creator: "@igoodworks",
      images: [
        "https://igoodworks.com/_next/image?url=%2Fimages%2Flogo.png&w=384&q=75",
      ],
    },
    openGraph: {
      title: "igoodworks",
      description:
        "Simply Sync Password for Active Directory, Office 365, Google & More. Easy, Fast and Secure Sync for AD password.",
      siteName: "igoodworks",
      images: [
        {
          url: "https://igoodworks.com/_next/image?url=%2Fimages%2Flogo.png&w=384&q=75",
          width: 1200,
          height: 630,
        },
      ],
    },
  };

const Layout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <div>{children}</div>
  )
}

export default Layout