import { client } from "../../../../sanity/lib/client";

export async function generateMetadata({ params, searchParams }) {
    const slug = params.slug
    const fetchData = await client.fetch(`*[_type == 'blog' && slug.current == '${slug}'][0] {
    content,
    title,
    short_info,
    mainImage {
      asset->{
        url
      }
    },
  }`);
  console.log("🚀 ~ generateMetadata ~ fetchData:", fetchData)

    

    return {
      title: fetchData?.title,
      description: fetchData?.short_info ,
      alternates: {
        canonical: `https://igoodworks.com/${slug}`,
      },
    }
  }

export default function RootLayout({children}) {
  return (
    <html lang="en">
        <body>
          {children}      
        </body>
    </html>
  );
}
