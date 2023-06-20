import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const IconBox = ({ title, Img_url, link, custm_class }: any) => {
    return (
        <div className='max-w-[354px]'>
            <Image
                src={Img_url}
                alt='icon'
                width={50}
                height={50} />
            <p className={`font-medium text-darkBlue mt-6 mb-5 ${custm_class}`}>
                {title}
            </p>
            <Link href={link} className='text-lg font-medium px-[30px] py-[10px] bg-Orange text-white hover:bg-transparent hover:text-Orange border border-Orange rounded-[40px]'>
                Download
            </Link>
        </div>
    )
}

export default IconBox