import React from 'react'

export const metadata = {
    title: "Simply SNMP Agent | GoodWorks",
    description:
      "Simply SNMP Agent for Windows. Enable windows performance monitoring utilizing SNMP",
    alternates: {
      canonical: `https://igoodworks.com/simply-sync`,
    },
    twitter: {
      title: "igoodworks",
      description:
        "Simply SNMP Agent for Windows. Enable windows performance monitoring utilizing SNMP",
      creator: "@igoodworks",
      images: [
        "https://igoodworks.com/_next/image?url=%2Fimages%2Flogo.png&w=384&q=75",
      ],
    },
    openGraph: {
      title: "igoodworks",
      description:
        "Simply SNMP Agent for Windows. Enable windows performance monitoring utilizing SNMP",
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