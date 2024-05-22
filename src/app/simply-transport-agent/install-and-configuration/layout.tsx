import React from 'react'

export const metadata = {
    title: "Install & Configuration | GoodWorks",
    description:
      "Simply Transport Agent for Exchange 2010/2013. Extend Exchange mail routing based on sender domain or Group",
    alternates: {
      canonical: `https://igoodworks.com/simply-transport-agent/install-and-configuration`,
    },
    twitter: {
      title: "igoodworks",
      description:
        "Simply Transport Agent for Exchange 2010/2013. Extend Exchange mail routing based on sender domain or Group",
      creator: "@igoodworks",
      images: [
        "https://igoodworks.com/_next/image?url=%2Fimages%2Flogo.png&w=384&q=75",
      ],
    },
    openGraph: {
      title: "igoodworks",
      description:
        "Simply Transport Agent for Exchange 2010/2013. Extend Exchange mail routing based on sender domain or Group",
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