// import Link from "next/link";
import { client } from "../../../../sanity/lib/client";
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Page_Banner from "../../components/page-banner";
import BlockContent from "@sanity/block-content-to-react";

async function getData(slug) {
  const fetchData =
    await client.fetch(`*[_type == 'blog' && slug.current == '${slug}'][0] {
    content,
    title,
    mainImage {
      asset->{
        url
      }
    },
    
  }`);
  console.log("🚀 ~ getData ~ fetchData:", fetchData);
  return {
    blog: fetchData,
  };
}

export default async function BlogArticle(props) {
  const { blog } = await getData(props.params.slug);
  console.log("🚀 ~ BlogArticle ~ blog", blog);

  return (
    <>
      <Header />
      <Page_Banner title={blog?.title} image="/images/faq-bg.png" />

      <section className="container px-4 py-4 mx-auto" id="PortableText">
        <div>
          <div className="card1">
            <Image
              src={blog?.mainImage?.asset?.url}
              alt="Main image"
              width={500}
              height={500}
              className="object-cover w-full"
            />
            <BlockContent
              blocks={blog?.content}
              projectId="4yd06oe7"
              dataset="production"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
