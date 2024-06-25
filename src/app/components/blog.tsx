import Image from "next/image";
import React from "react";
// import { PortableText } from "@port";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";

async function getData() {
  const fetchData = await client.fetch(`*[_type == 'blog']{
    title,
    short_info,
    mainImage{
      asset->{
        url
      }
    },
    Content,
    slug,
  }`);
  console.log("🚀 ~ getData ~ fetchData:", fetchData);
  return fetchData;
}

export default async function Home() {
  const data = await getData();
  console.log("blog", data);
  return (
    <section className="container px-4 mx-auto card1">
     
      <div className="grid gap-8 py-10 lg:grid-cols-3 md:grid-cols-2">
        {data &&
          data.map((item: any, i: number) => (
            <div key={i} className="h-auto rounded-sm shadow-lg">
              <Link href={`/blog/${item?.slug?.current}`}>
              <Image
                src={item?.mainImage.asset.url}
                alt="Main image"
                width={200}
                height={220}
                className="w-full h-[220px] object-cover rounded-[4px]"
              />
              </Link>
              <div className="px-4 py-3">
                <Link href={`/blog/${item?.slug?.current}`}>
                <h2 className=" font-[700] text-xl">
                  {item?.title}
                </h2>
                </Link>
                <p className="py-2 text-[14px]">
                  {item?.short_info}
                </p>
                <p>{item?.Content}</p>

                <Link
                  href={`/blog/${item?.slug?.current}`}
                  className="text-sm font-[400] hover:text-blue-700 mt-5 pb-5   flex gap-2 items-center "
                >
                  Continue Reading <IoMdArrowForward className="text-lg" />
                </Link>
               
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
