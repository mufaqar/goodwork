import Image from 'next/image';
import React from 'react';
import Video from '../../../public/images/video.png';
import Link from 'next/link';

const Get_Started = () => {
    return (
        <section id='about' className='py-16'>
            <div className='container mx-auto px-4'>
                <div className='mb-12'>
                    <h2 className='md:text-[42px] text-4xl font-medium text-center text-darkBlue'>
                        Ready to Get Started?
                    </h2>
                    <p className='text-xl font-normal text-center text-darkBlue mt-5'>
                        We offer free evaluation versions so that you can integrate with your existing environment and perform a full proof of concept. We’ll even guide you through the process, free of charge. With the free trial, you’ve got nothing to lose.
                    </p>

                    <div className="aspect-video mx-auto mt-12 max-w-[750px] rounded-[20px] drop-shadow-[0_0_15px_rgba(0,0,0,0.05)]">
                        <iframe
                            className="w-full h-full rounded-[20px]"
                            src="https://www.youtube.com/embed/FF3fuYLnApQ"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                    {/* <Image src={Video} alt="thumbnail" className='mx-auto mt-12' /> */}

                    <div className='my-7 text-center flex gap-4 justify-center'>
                        <Link href="#" className='text-lg font-medium px-[30px] py-[14px] bg-Orange text-white hover:bg-transparent hover:text-Orange border border-Orange rounded-[40px] '>
                            Download
                        </Link>
                        <Link href="#" className='text-lg font-medium px-[30px] py-[14px] bg-transparent text-darkBlue hover:bg-darkBlue hover:text-white border border-darkBlue rounded-[40px] '>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Get_Started