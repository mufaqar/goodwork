import Link from 'next/link'
import React from 'react'

const Banner = () => {
    return (
        <section className='bg-[url("/images/mainBg.png")] bg-top bg-cover bg-no-repeat min-h-[599px] py-60 -mt-36'>
            <div className='container mx-auto px-4'>
                <div className='max-w-[929px] mx-auto'>
                    <h1 className='md:text-6xl text-5xl font-semibold text-center text-white mb-5'>
                        Simply Sync
                    </h1>
                    <p className='md:text-[28px] md:leading-[40px] text-xl font-semibold text-center text-white'>
                        For Fast, Secure Synchronization of your users between multiple directories such as Active Directory, Azure, LDAP, and Google
                    </p>
                    <div className='my-10 text-center flex gap-4 justify-center'>
                        <Link href="#" className='text-lg font-medium px-[30px] py-[14px] bg-Orange text-white hover:bg-transparent hover:text-Orange border border-Orange rounded-[40px]'>
                            Try for Free
                        </Link>
                        <Link href="#" className='text-lg font-medium px-[30px] py-[14px] bg-darkBlue text-white hover:bg-transparent hover:text-darkBlue border border-darkBlue rounded-[40px]'>
                            Try for Free
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner