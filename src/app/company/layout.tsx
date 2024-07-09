import React from 'react'

export const metadata = {
    title: "About Us: Innovators in Software Solutions",
    description:
      "Learn about our mission to provide innovative software solutions like Simply Sync Password and Simply Transport Agent.",
    alternates: {
      canonical: `https://igoodworks.com/company`,
    },
    twitter: {
      title: "igoodworks",
      description:
        "GoodWorks provides software solutions that extends and improve IT systemsfor businesses, schools, healthcare providers, and telecoms in over 12 countries. Our focus is to simplify enterprise level tasks and make them available to companies of all sizes at a fraction of the cost",
      creator: "@igoodworks",
      images: [
        "https://igoodworks.com/_next/image?url=%2Fimages%2Flogo.png&w=384&q=75",
      ],
    },
    openGraph: {
      title: "igoodworks",
      description:
        "GoodWorks provides software solutions that extends and improve IT systemsfor businesses, schools, healthcare providers, and telecoms in over 12 countries. Our focus is to simplify enterprise level tasks and make them available to companies of all sizes at a fraction of the cost",
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