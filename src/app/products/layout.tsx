import React from 'react'

export const metadata = {
    title: "Products | GoodWorks",
    description:
      "Simply Sync Password allows organizations to synchronize their passwords from their local Active Directory site to external Active Directory sites or other external systems. Simply Sync Password is a great alternative for organizations that don’t want the added complexity and cost that comes with establishing a trust relationship between Active Directory or deploying an AD FS infrastructure.",
    alternates: {
      canonical: `https://igoodworks.com/products`,
    },
    twitter: {
      title: "igoodworks",
      description:
        "Simply Sync Password allows organizations to synchronize their passwords from their local Active Directory site to external Active Directory sites or other external systems. Simply Sync Password is a great alternative for organizations that don’t want the added complexity and cost that comes with establishing a trust relationship between Active Directory or deploying an AD FS infrastructure.",
      creator: "@igoodworks",
      images: [
        "https://igoodworks.com/_next/image?url=%2Fimages%2Flogo.png&w=384&q=75",
      ],
    },
    openGraph: {
      title: "igoodworks",
      description:
        "Simply Sync Password allows organizations to synchronize their passwords from their local Active Directory site to external Active Directory sites or other external systems. Simply Sync Password is a great alternative for organizations that don’t want the added complexity and cost that comes with establishing a trust relationship between Active Directory or deploying an AD FS infrastructure.",
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