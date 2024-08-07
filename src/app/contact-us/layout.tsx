import React from 'react'

export const metadata = {
    title: "Contact Us | GoodWorks",
    description:
      "GoodWorks Communications may amend this policy from time to time. If we make any substantial changes in the way we use your personal information we will update this page accordingly.",
    alternates: {
      canonical: `https://igoodworks.com/contact-us`,
    },
    twitter: {
      title: "igoodworks",
      description:
        "GoodWorks Communications may amend this policy from time to time. If we make any substantial changes in the way we use your personal information we will update this page accordingly.",
      creator: "@igoodworks",
      images: [
        "https://igoodworks.com/_next/image?url=%2Fimages%2Flogo.png&w=384&q=75",
      ],
    },
    openGraph: {
      title: "igoodworks",
      description:
        "GoodWorks Communications may amend this policy from time to time. If we make any substantial changes in the way we use your personal information we will update this page accordingly.",
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