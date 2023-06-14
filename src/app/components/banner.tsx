import Link from 'next/link'
import React from 'react'

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
    return (
        <section className='bg-top bg-cover bg-no-repeat pt-52 pb-20 -mt-36'
            style={{ backgroundImage: `url(${image})` }}>
            <div className='container mx-auto px-4'>
                <div className='max-w-[929px] mx-auto'>
                    {title && (
                        <h1 className='md:text-6xl text-5xl font-semibold text-center text-white mb-5'>
                            {title}
                        </h1>
                    )}
                    {subTitle && (
                        <p className='md:text-[28px] md:leading-[40px] text-xl font-semibold text-center text-white'>
                            {subTitle}
                        </p>
                    )}
                    {buttontext && (
                        <div className='mt-10 mb-20 text-center flex gap-4 justify-center'>
                            <Link href={buttonLink} className='text-lg font-medium px-[30px] py-[14px] bg-Orange text-white hover:bg-transparent hover:text-Orange border border-Orange rounded-[40px]'>
                                {buttontext}
                            </Link>
                            <Link href={buttonLink2} className='text-lg font-medium px-[30px] py-[14px] bg-darkBlue text-white hover:bg-transparent hover:text-darkBlue border border-darkBlue rounded-[40px]'>
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