import React from 'react';
import Banner from '../components/banner';
import Link from 'next/link';
import Product1 from '../../../public/images/product1.png';
import Product2 from '../../../public/images/product2.png';
import Product3 from '../../../public/images/product3.png';
import Image from 'next/image';

const Products = () => {
    return (
        <main>
            <Banner
                title="Products"
                subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                image="/images/product-bg.png"
            />

            <section className="py-16">
                <div className='container mx-auto px-4 flex md:flex-row flex-col gap-12 items-center'>
                    <div className='md:w-1/2 w-full'>
                        <h2 className="md:text-[32px] md:leading-[38px] text-2xl font-semibold mb-5">
                            <span className="text-Orange">Simply Sync  </span>
                            <span className="text-darkBlue"> Password</span>
                        </h2>
                        <p className='text-lg font-normal text-darkBlue'>
                            Simply Sync Password allows organizations to synchronize their passwords from their local Active Directory site to external Active Directory sites or other external systems. Simply Sync Password is a great alternative for organizations that don’t want the added complexity and cost that comes with establishing a trust relationship between Active Directory or deploying an AD FS infrastructure.
                        </p>
                        <p className='text-lg font-normal text-darkBlue mt-2'>
                            AD FS is great for large organizations, but in many cases it just doesn’t make sense for small and medium size organizations. Simply Sync Password allows to be extended to synchronize user AD properties and group AD properties from their local Active Directory site to external Active Directory sites
                        </p>
                        <div className='mt-7 text-center flex gap-4'>
                            <Link href="#" className='text-lg font-medium px-[30px] py-[14px] bg-Orange text-white hover:bg-transparent hover:text-Orange border border-Orange rounded-[40px] '>
                                Try for Free
                            </Link>
                            <Link href="#" className='text-lg font-medium px-[30px] py-[14px] bg-transparent text-darkBlue hover:bg-darkBlue hover:text-white rounded-[40px] border border-darkBlue'>
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full'>
                        <Image src={Product1} alt="Product1" className='w-full' />
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className='container mx-auto px-4 flex md:flex-row flex-col-reverse gap-12 items-center'>
                    <div className='md:w-1/2 w-full'>
                        <Image src={Product2} alt="Product2" className='w-full' />
                    </div>
                    <div className='md:w-1/2 w-full'>
                        <h2 className="md:text-[32px] md:leading-[38px] text-2xl font-semibold mb-5">
                            <span className="text-[#00AC4F]">
                                Simply </span> <span className="text-darkBlue"> Transport Agent</span>
                        </h2>
                        <p className='text-lg font-normal text-darkBlue'>
                            Our team is comprised of several Microsoft employees with decades of experience building world-class products. Among those, we have done extensive development on Microsoft® Exchange and SharePoint platforms. The company is based out of Seattle, Washington.
                        </p>
                        <div className='mt-7 text-center flex gap-4'>
                            <Link href="#" className='text-lg font-medium px-[30px] py-[14px] bg-[#00AC4F] text-white hover:bg-transparent hover:text-[#00AC4F] border border-[#00AC4F] rounded-[40px] '>
                                Try for Free
                            </Link>
                            <Link href="#" className='text-lg font-medium px-[30px] py-[14px] bg-transparent text-darkBlue hover:bg-darkBlue hover:text-white rounded-[40px] border border-darkBlue'>
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className='container mx-auto px-4 flex md:flex-row flex-col gap-12 items-center'>
                    <div className='md:w-1/2 w-full'>
                        <h2 className="md:text-[32px] md:leading-[38px] text-2xl font-semibold mb-5">
                            <span className="text-lightBlue">
                                Simply </span> <span className="text-darkBlue"> SNMP Agent</span>
                        </h2>
                        <p className='text-lg font-normal text-darkBlue'>
                            Simply SNMP Agent for Windows allows organizations to monitor any windows performance values like Exchange / Lync / Sharepoint Server using the SNMP protocol.
                        </p>
                        <div className='mt-7 text-center flex gap-4'>
                            <Link href="#" className='text-lg font-medium px-[30px] py-[14px] bg-lightBlue text-white hover:bg-transparent hover:text-lightBlue border border-lightBlue rounded-[40px] '>
                                Try for Free
                            </Link>
                            <Link href="#" className='text-lg font-medium px-[30px] py-[14px] bg-transparent text-darkBlue hover:bg-darkBlue hover:text-white rounded-[40px] border border-darkBlue'>
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full'>
                        <Image src={Product3} alt="Product3" className='w-full' />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Products