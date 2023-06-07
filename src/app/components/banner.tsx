import Link from 'next/link'
import React from 'react'

const Banner = () => {
    return (
        <section className='bg-[url("/images/mainBg.png")] bg-top bg-cover bg-no-repeat h-screen py-40 -mt-24'>
            <div className='container mx-auto px-4'>
                <div className='max-w-[929px] mx-auto'>
                    <h1 className='text-6xl font-semibold text-center text-white'>
                        Simply Sync
                    </h1>
                    <p className='text-[28px] leading-[40px] font-semibold text-center text-white'>
                        For Fast, Secure Synchronization of your users between multiple directories such as Active Directory, Azure, LDAP, and Google
                    </p>
                    <div className='my-10 text-center flex gap-4 justify-center'>
                        <Link href="#" className='text-lg font-medium px-[30px] py-[14px] bg-Orange text-white rounded-[40px]'>
                            Try for Free
                        </Link>
                        <Link href="#" className='text-lg font-medium px-[30px] py-[14px] bg-darkBlue text-white rounded-[40px]'>
                            Try for Free
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner