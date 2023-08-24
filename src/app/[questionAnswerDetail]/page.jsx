'use client'

import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Page_Banner from '../components/page-banner';
import Link from 'next/link';
import Image from 'next/image';
import Author from '../../../public/images/user.png';
import Support from '../../../public/images/support.png';
import { client } from '../../../sanity/lib/client';
import { useParams } from 'next/navigation'
import { QSingleFaq } from '../../../sanity/lib/queries';
import { dateFormate } from '@/lib';
import BlockContent from "@sanity/block-content-to-react";
import { projectId } from '../../../sanity/env';


const Question_Answer_Detail = () => {

    const params = useParams()
    const slug = params?.questionAnswerDetail
    const [detail, setDetail] = useState()
    console.log("🚀 ~ file: page.tsx:20 ~ detail:", detail)

    useEffect(() => {    
       client.fetch(QSingleFaq, { slug }).then((data) => setDetail(data))
    },[])

    return (
        <main>
            <Header />
            <Page_Banner
                title="Q&A"
                image="/images/qa-bg.png"
            />
            <section className="py-16">
                <div className='container mx-auto px-4'>
                    <div className='flex gap-1 justify-between mb-5'>
                        <Link href="/question-answer" className='bg-darkGreen hover:bg-white md:px-[30px] px-4 py-[10px] rounded-[40px] md:text-lg text-xs font-medium text-white hover:text-darkGreen border border-darkGreen'>
                            Back to List
                        </Link>
                    </div>
                    <div className='bg-[#F6FAFE] md:p-12 p-5 rounded-[28px] max-w-[1042px]'>
                        <div className='flex justify-between'>
                            <h2 className='md:text-2xl text-base font-medium text-darkBlue'>
                                {detail?.question}
                            </h2>
                            <div className='flex gap-2 items-center'>
                                <Image src={Author} alt="uset" />
                                <p className='grid'>
                                    <span className='md:text-lg text-base font-medium text-darkBlue'>
                                        {detail?.createdby} <span className='text-sm font-medium text-darkBlue/50'>
                                            . {dateFormate(detail?._createdAt)}
                                        </span>
                                    </span>
                                    <span className='text-sm font-medium text-darkBlue/50'>
                                        Member
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='h-[1px] bg-darkBlue/10 my-5'></div>
                        <BlockContent
                        blocks={detail?.answer}
                        projectId={projectId}
                        dataset="production"
                      />
                    </div>
                    <div className='bg-[#F3F3F3] md:p-12 p-5 rounded-[28px] max-w-[1042px] md:ml-auto mt-7'>
                        <div className='flex justify-between'>
                            <h2 className='md:text-2xl text-base font-medium text-darkBlue'>
                                re: {detail?.question}
                            </h2>
                            <div className='flex gap-2 items-center'>
                                <Image src={Support} alt="uset" />
                                <p className='grid'>
                                    <span className='md:text-lg text-base font-medium text-darkBlue'>
                                        Support <span className='text-sm font-medium text-darkBlue/50'>
                                            . {dateFormate(detail?._createdAt)}
                                        </span>
                                    </span>
                                    <span className='text-sm font-medium text-darkBlue/50'>
                                        Member
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='h-[1px] bg-darkBlue/10 my-5'></div>
                        <div className='text-lg font-normal text-darkBlue mb-3'>
                            <BlockContent
                            blocks={detail?.issue}
                            projectId={projectId}
                            dataset="production"
                          />

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Question_Answer_Detail