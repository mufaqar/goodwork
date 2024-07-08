import React from 'react'

export const metadata = {
    title: "Download Software | GoodWorks",
    description:
      "Download the latest software from Good Works. Access our powerful tools to streamline your workflow and boost productivity with ease.",
    alternates: {
      canonical: `https://igoodworks.com/download-software`,
    },
    twitter: {
      title: "igoodworks",
      description:
        "For Fast, Secure Synchronization of your users between multiple directories such as Active Directory, Azure, LDAP, and Google",
      creator: "@igoodworks",
      images: [
        "https://igoodworks.com/_next/image?url=%2Fimages%2Flogo.png&w=384&q=75",
      ],
    },
    openGraph: {
      title: "igoodworks",
      description:
        "For Fast, Secure Synchronization of your users between multiple directories such as Active Directory, Azure, LDAP, and Google",
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