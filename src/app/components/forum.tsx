import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Article1 from '../../../public/images/forum.png';

const Forum = () => {
    return (
        <section className='py-16'>
            <div className='container mx-auto px-4'>
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
                            <Link href="#" className='text-lg font-medium px-[30px] py-[14px] bg-lightBlue text-white rounded-[40px] border border-lightBlue'>
                                Visit Forum
                            </Link>
                            <Link href="#" className='text-lg font-medium px-[30px] py-[14px] bg-transparent text-darkBlue rounded-[40px] border border-darkBlue'>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Image src={Article1} alt="img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Forum