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
        img: "/images/trusted1.png",
    },
    {
        img: "/images/trusted2.png",
    },
    {
        img: "/images/trusted3.png",
    },
    {
        img: "/images/trusted4.png",
    },
    {
        img: "/images/trusted5.png",
    },
    {
        img: "/images/trusted6.png",
    },
    {
        img: "/images/trusted7.png",
    },
    {
        img: "/images/trusted8.png",
    },
    {
        img: "/images/trusted9.png",
    },
    {
        img: "/images/trusted10.png",
    },
];