'use client';

import { auth } from '@/config/firebase';
import { SettingsContext } from '@/context/setting-context'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'


const IconBox = ({ title, Img_url, link, custm_class }: any) => {
    const { lsuser } = useContext(SettingsContext)

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
            {
                lsuser?.accessToken ? <Link href={ link } target="_blank" className='text-lg font-medium px-[30px] py-[10px] bg-Orange text-white hover:bg-transparent hover:text-Orange border border-Orange rounded-[40px]' download={lsuser?.accessToken ? true : false}>
                    Download
                </Link> : <Link href='/login' className='text-lg font-medium px-[30px] py-[10px] bg-Orange text-white hover:bg-transparent hover:text-Orange border border-Orange rounded-[40px]' >
                    Download
                </Link>
            }

        </div>
    )
}

export default IconBox