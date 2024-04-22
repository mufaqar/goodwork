'use client'
import { SettingsContext } from '@/context/setting-context';
import Link from 'next/link'
import React, { useContext } from 'react'

interface IPageBanner {
    title?: string;
    subTitle?: string;
    image: string;
    buttontext?: string;
    buttonLink?: string | number | any;
    buttontext2?: string;
    buttonLink2?: string | number | any;
}

const Banner = ({ title, subTitle, buttontext, buttonLink, buttontext2, buttonLink2, image }: IPageBanner) => {

    const { lsuser } = useContext(SettingsContext)

    return (
        <section className='relative -mt-28'>
                <img src={image} alt="Banner Image" className='w-full min-h-[470px]  2xl:min-h-[599px] object-cover'/>
            <div className='container mx-auto px-4'>
                <div className='max-w-[929px] mx-auto w-full px-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    {title && (
                        <h1 className='md:text-6xl text-5xl font-semibold text-center text-white mb-5 mt-12'>
                            {title}
                        </h1>
                    )}
                    {subTitle && (
                        <p className='md:text-[28px] md:leading-[40px] text-xl font-normal text-center text-white'>
                            {subTitle}
                        </p>
                    )}
                    {buttontext && (
                        <div className='mt-10 text-center flex gap-4 justify-center'>
                            <Link href={lsuser ? '/contact-us' : buttonLink } className='text-lg font-medium px-[30px] py-[14px] bg-Orange text-white hover:bg-white hover:text-Orange border border-Orange hover:border-white rounded-[40px]'>
                                {buttontext}
                            </Link>
                            <Link href={buttonLink2} className='text-lg font-medium px-[30px] py-[14px] bg-darkBlue text-white hover:bg-white hover:text-darkBlue border border-darkBlue hover:border-white rounded-[40px]'>
                                {buttontext2}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Banner