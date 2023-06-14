import Image from 'next/image'
import React from 'react'

const Trusted = () => {
    return (
        <section className='py-16 bg-[#F6FAFE] '>
            <div className='container mx-auto px-4'>
                <div>
                    <p className='md:text-[28px] md:leading-[40px] text-xl font-medium text-center text-darkBlue'>
                        GoodWorks is trusted by these and many more great customers!
                    </p>
                </div>
                <div className='grid md:grid-cols-5 grid-cols-2 gap-10 justify-center mt-5'>
                    {Partner_Logo.map((item: any, index: any) => {
                        return (
                            <Image key={index}
                                src={item.img}
                                alt='img'
                                width={200}
                                height={100}
                                className='h-full w-full object-contain filter grayscale hover:grayscale-0'
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Trusted

export const Partner_Logo = [
    {
        img: "/images/firstnet.png",
    },
    {
        img: "/images/openhost.png",
    },
    {
        img: "/images/mandic.png",
    },
    {
        img: "/images/citymd.png",
    },
    {
        img: "/images/civeo.png",
    },
    {
        img: "/images/pierpoint.png",
    },
    {
        img: "/images/tribune.png",
    },
    {
        img: "/images/skymail.png",
    },
    {
        img: "/images/redblade.png",
    },
    {
        img: "/images/warnerbros.png",
    },
];