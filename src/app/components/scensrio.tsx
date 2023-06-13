import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const User_censrio = () => {
    return (
        <section className='py-16 bg-darkBlue bg-blend-multiply bg-[url("/images/scenarioBg.png")] bg-center bg-cover bg-no-repeat'>
            <div className='container mx-auto md:px-0 px-4'>
                <div className='mb-12'>
                    <h2 className='md:text-[42px] text-4xl font-medium text-center text-white'>
                        Simply Password Sync User Scenario
                    </h2>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-8'>
                    {Data.map((item: any, index: any) => {
                        return (
                            <div key={index}
                                className='bg-darkBlue/50 p-5 rounded-[20px]'>
                                <div className='bg-[#152B64] p-7 rounded-[20px] h-[130px]'>
                                    <Image src={item.img} alt="img" width={200} height={20} className='mx-auto h-full w-full object-contain ' />
                                </div>
                                <div className='text-center'>
                                    <h3 className='text-2xl font-medium text-center text-white my-5'>
                                        {item.title}
                                    </h3>
                                    <Link href="#" className='text-base font-normal text-center text-lightBlue hover:text-white'>
                                        {item.btn_txt}
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className='mt-12 max-w-[750px] mx-auto'>
                    <p className='text-xl font-normal text-center text-white/50 mb-7'>
                        Not sure which scenario is right for your business? Get a free consultation by filling out the form below
                    </p>
                    <form action="#">
                        <div className="items-center flex sm:flex-row flex-col gap-2">
                            <div className="relative md:w-[30%] w-full">
                                <label htmlFor="name" className="hidden mb-2">Email address</label>
                                <input className="px-5 py-4 rounded-[30px] text-sm font-normal text-darkBlue focus:outline-none w-full" placeholder="Name" type="text" id="name" required />
                            </div>
                            <div className="relative md:w-[40%] w-full">
                                <label htmlFor="email" className="hidden mb-2">Email address</label>
                                <input className="px-5 py-4 rounded-[30px] text-sm font-normal text-darkBlue focus:outline-none w-full" placeholder="Email" type="email" id="email" required />
                            </div>
                            <div className='md:w-[30%] w-full'>
                                <button type="submit" className="text-lg font-medium px-[20px] py-[14px] bg-Orange text-white hover:bg-white hover:text-Orange border border-Orange hover:border-white rounded-[40px] w-full">
                                    Get a Consultation
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default User_censrio

export const Data = [
    {
        img: '/images/icon1.png',
        title: 'AD to AD (or DB)',
        btn_txt: 'Learn More',
    },
    {
        img: '/images/icon2.png',
        title: 'AD to Office 365 AD to Google',
        btn_txt: 'Learn More',
    },
    {
        img: '/images/icon3.png',
        title: 'AD to Hosting Shared AD',
        btn_txt: 'Learn More',
    },
    {
        img: '/images/icon4.png',
        title: 'Hosting Provider to 3rd Party Service',
        btn_txt: 'Learn More',
    },
]