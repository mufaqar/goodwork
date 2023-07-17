import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Article1 from '../../../public/images/forum.png';

const Forum = () => {
    return (
        <section className='py-16 relative bg-[#F6FAFE] overflow-hidden'>
            <Image src="/images/frame.png"
                width={1152}
                height={557}
                alt="fram" className='absolute left-0 inset-y-0 md:block hidden z-auto' />
            <div className='container mx-auto px-4 relative z-10'>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
                    <div>
                        <h2 className="text-3xl font-semibold text-darkBlue mb-4">
                            Forums
                        </h2>
                        <p className="text-lg font-normal text-darkBlue">
                            Have a question? Please click through to easily find documentation, modifications, solutions, ideas, and other information that relates to our software. You can request to post some articles of your own if you wish.
                            Unable to find the information you were looking for, or have a question/comment? Please feel free to contact support via the online ticketing system.
                        </p>
                        <div className='my-7 text-center flex gap-4'>
                            <Link href="/register" className='text-lg font-medium px-[30px] py-[14px] bg-lightBlue text-white hover:bg-transparent hover:text-lightBlue border border-lightBlue rounded-[40px] '>
                                Visit Forum
                            </Link>
                            <Link href="/contact-us" className='text-lg font-medium px-[30px] py-[14px] bg-transparent text-darkBlue hover:bg-darkBlue hover:text-white border border-darkBlue rounded-[40px] '>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Image src={Article1} alt="img" />
                    </div>
                </div>
            </div>
            <Image src="/images/frame-1.png"
                width={333}
                height={500}
                alt="fram1" className='absolute right-0 inset-y-0 md:block hidden z-auto' />
        </section>
    )
}

export default Forum