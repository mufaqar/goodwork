import React from 'react'

export const metadata = {
    title: "Frequently Asked Questions | GoodWorks",
    description:
      "Find answers to common questions on our FAQs page. Get detailed information about our products,services, and support to help you make the most of Good Works",
    alternates: {
      canonical: `https://igoodworks.com/faqs`,
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