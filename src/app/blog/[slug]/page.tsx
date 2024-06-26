import Link from "next/link";
import { client } from "../../../../sanity/lib/client";
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Page_Banner from "../../components/page-banner";
import { PortableText } from "@portabletext/react";

async function getData(slug: any) {
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

export default async function BlogArticle(props: any) {
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
              className="w-full  object-cover"
            />  
            <PortableText value={blog?.content} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
