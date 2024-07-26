import { client } from "../../../../sanity/lib/client";

export async function generateMetadata({ params }: any) {
  // read route params
  const slug = params.slug;

  // fetch data
  const fetchData =
    await client.fetch(`*[_type == 'blog' && slug.current == '${slug}'][0] {
    content,
    title,
    short_info,
    mainImage {
      asset->{
        url
      }
    },
  }`);

  return {
    title: fetchData?.title,
    description: fetchData?.short_info,
    alternates: {
      canonical: `https://igoodworks.com/${slug}`,
    },
  };
}

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
