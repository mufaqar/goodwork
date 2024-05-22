import React from 'react'

export const metadata = {
    title: "Partner With Us | GoodWorks",
    description:
      "Looking to capitalize on the fast-growing service provider marketplace, looking for additional revenue streams, or just want to capitalize on the influence you have in helping customers choose solutions?",
    alternates: {
      canonical: `https://igoodworks.com/partner-with-us`,
    },
    twitter: {
      title: "igoodworks",
      description:
        "Looking to capitalize on the fast-growing service provider marketplace, looking for additional revenue streams, or just want to capitalize on the influence you have in helping customers choose solutions?",
      creator: "@igoodworks",
      images: [
        "https://igoodworks.com/_next/image?url=%2Fimages%2Flogo.png&w=384&q=75",
      ],
    },
    openGraph: {
      title: "igoodworks",
      description:
        "Looking to capitalize on the fast-growing service provider marketplace, looking for additional revenue streams, or just want to capitalize on the influence you have in helping customers choose solutions?",
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