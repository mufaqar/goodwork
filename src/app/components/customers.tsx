import Image from 'next/image';
import React from 'react'


interface Logo_Type {
    image: string;
}
const Customers_Sec = () => {
    return (
        <div className='grid md:grid-cols-4 grid-cols-2 gap-10 justify-center mt-5'>
            {Partners_Logo.map((item: Logo_Type, index: any) => {
                return (
                    <Image key={index}
                        src={item.image}
                        alt='image'
                        width={200}
                        height={100}
                        className='h-full w-full object-contain filter grayscale hover:grayscale-0'
                    />
                );
            })}
        </div>
    )
}

export default Customers_Sec

export const Partners_Logo = [
    {
        image: "/images/mandic.png",
    },
    {
        image: "/images/citymd.png",
    },
    {
        image: "/images/civeo.png",
    },
    {
        image: "/images/pierpoint.png",
    },
    {
        image: "/images/tribune.png",
    },
    {
        image: "/images/skymail.png",
    },
    {
        image: "/images/redblade.png",
    },
    {
        image: "/images/warnerbros.png",
    },
];