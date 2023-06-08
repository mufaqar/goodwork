import Image from 'next/image';
import React from 'react';
import Video from '../../../public/images/video.png';
import Link from 'next/link';

const Get_Started = () => {
    return (
        <section className='py-16'>
            <div className='container mx-auto px-4'>
                <div className='mb-12'>
                    <h2 className='text-[42px] font-medium text-center text-darkBlue'>
                        Ready to Get Started?
                    </h2>
                    <p className='text-xl font-normal text-center text-darkBlue mt-5'>
                        We offer free evaluation versions so that you can integrate with your existing environment and perform a full proof of concept. We’ll even guide you through the process, free of charge. With the free trial, you’ve got nothing to lose.
                    </p>
                    <Image src={Video} alt="thumbnail" className='mx-auto mt-12' />
                    <div className='my-7 text-center flex gap-4 justify-center'>
                        <Link href="#" className='text-lg font-medium px-[30px] py-[14px] bg-Orange text-white rounded-[40px] border border-Orange'>
                            Download
                        </Link>
                        <Link href="#" className='text-lg font-medium px-[30px] py-[14px] bg-transparent text-darkBlue rounded-[40px] border border-darkBlue'>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Get_Started