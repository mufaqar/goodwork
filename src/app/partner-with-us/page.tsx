import React from 'react';
import Page_Banner from '../components/page-banner';
import Provider_img from '../../../public/images/provider.png';
import Allience from '../../../public/images/allience.png';
import Image from 'next/image';
import Icon1 from '../../../public/images/pro-icon1.png';
import Icon2 from '../../../public/images/pro-icon2.png';
import Icon3 from '../../../public/images/pro-icon3.png';
import Link from 'next/link';

const Partner_with_Us = () => {
    return (
        <main>
            <Page_Banner
                title="Partner With Us"
                image="/images/partner-bg.png"
            />
            <section className="py-16">
                <div className='container mx-auto px-4 flex md:flex-row flex-col gap-12 items-center'>
                    <div className='md:w-7/12 w-full'>
                        <h2 className="md:text-[42px] md:leading-[49px] text-4xl font-semibold mb-5">
                            <span className="text-darkBlue">
                                Service  </span> <span className="text-Orange"> Providers</span>
                        </h2>
                        <p className='text-lg font-normal text-darkBlue'>
                            For Hosters, VARs, Office 365 Resellers, ISVs, Service Providers etc.
                        </p>
                        <p className='text-lg font-normal text-darkBlue mt-3'>
                            Looking to capitalize on the fast-growing service provider marketplace, looking for additional revenue streams, or just want to capitalize on the influence you have in helping customers choose solutions?
                        </p>
                        <p className='text-lg font-normal text-darkBlue mt-3'>
                            Grow your business, your brand, and your profits by integrating our software solutions into your existing services portfolio.Our Reseller Partner Program lets you own the customer, set your own profit margins, and handle support and billin while our team supports you every step of the way. Your customers enjoy business-class solution that they can rely on—it’s why over we support over half-million user accounts in over 12 countries worldwide.
                        </p>
                        <p className='text-lg font-normal text-darkBlue mt-3'>
                            Our Partner Program was designed to give our partners aggressive incentives and generous volume discounts on our products. Our program is designed to enable all types of businesses to incorporate software into their current product and service offerings. IGoodWorks is committed to providing you the support necessary for success.
                        </p>
                    </div>
                    <div className='md:w-5/12 w-full'>
                        <Image src={Provider_img} alt="about" className='w-full' />
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className='container mx-auto px-4 flex md:flex-row flex-col-reverse gap-12 items-center'>
                    <div className='md:w-5/12 w-full'>
                        <Image src={Allience} alt="about" className='w-full' />
                    </div>
                    <div className='md:w-7/12 w-full'>
                        <h2 className="md:text-[42px] md:leading-[49px] text-4xl font-semibold mb-5">
                            <span className="text-darkBlue">
                                Software </span> <span className="text-Orange"> Alliance</span>
                        </h2>
                        <p className='text-lg font-normal text-darkBlue'>
                            Interested in instantaneously enabling password sync functionality for your software? If you are a Software provider with an enterprise application, whether on premise or in the cloud (SaaS), we would like to work with you.
                        </p>
                        <p className='text-lg font-normal text-darkBlue mt-3'>
                            Leverage our API’s to provide secure password sync and user management capabilities to your existing software.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-[#F6FAFE]">
                <div className='container mx-auto px-4 grid md:grid-cols-3 grid-cols-1 gap-7'>
                    <div>
                        <Image src={Icon1} alt="pro-icon1" className='mx-auto' />
                        <p className='text-2xl font-normal text-darkBlue text-center mt-6'>
                            Grow revenues in the rapidly expanding Identity Management market
                        </p>
                    </div>
                    <div>
                        <Image src={Icon2} alt="pro-icon2" className='mx-auto' />
                        <p className='text-2xl font-normal text-darkBlue text-center mt-6'>
                            Enhance your business with an additional source of recurring revenues
                        </p>
                    </div>
                    <div>
                        <Image src={Icon3} alt="pro-icon3" className='mx-auto' />
                        <p className='text-2xl font-normal text-darkBlue text-center mt-6'>
                            Leverage our free training, developer support, and free demo/trial program
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className='container mx-auto px-4'>
                    <div>
                        <p className='text-xl font-medium text-darkBlue text-center '>
                            Applying for our partner program is easy, contact us to find out more. Meet few of our partner requirements and we’ll work closely with you to develop a plan for success!
                        </p>
                        <div className='text-center mt-7'>
                            <Link href="#" className='text-lg font-medium px-[30px] py-[10px] bg-[#00AC4F] text-white hover:bg-transparent hover:text-[#00AC4F] border border-[#00AC4F] rounded-[40px]'>
                                INQUIRE ABOUT OUR PARTNER PROGRAM
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Partner_with_Us