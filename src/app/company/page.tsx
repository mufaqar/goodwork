import React from 'react';
import Page_Banner from '../components/page-banner';
import Image from 'next/image';
import About from '../../../public/images/about.png';
import Who_We_are from '../../../public/images/who-we-are.png';
import Partnering from '../../../public/images/partnering.png';
import Link from 'next/link';

const Company = () => {
    return (
        <main>
            <Page_Banner
                title="Company"
                image="/images/company-bg.png"
            />
            <section className="py-16">
                <div className='container mx-auto px-4 flex md:flex-row flex-col gap-12 items-center'>
                    <div className='md:w-7/12 w-full'>
                        <h2 className="text-3xl font-semibold mb-5">
                            <span className="text-darkBlue">
                                About </span> <span className="text-Orange"> Us</span>
                        </h2>
                        <p className='text-lg font-normal text-darkBlue'>
                            GoodWorks provides software solutions that extends and improve IT systemsfor businesses, schools, healthcare providers, and telecoms in over 12 countries. Our focus is to simplify enterprise level tasks and make them available to companies of all sizes at a fraction of the cost.
                        </p>
                        <p className='text-lg font-bold text-darkBlue mt-3'>
                            Currentsoftware product lineup consists of:
                        </p>
                        <ul className='my-10 grid gap-7'>
                            <li className="text-lg bg-[#F6FAFE] py-[10px] px-5 rounded-[10px] w-fit">
                                <span className="text-Orange font-bold">
                                    SimplySync: </span> <span className="text-darkBlue font-medium"> Allows organizations to perform AD data synchronizations</span>
                            </li>
                            <li className="text-lg bg-[#F6FAFE] py-[10px] px-5 rounded-[10px] w-fit">
                                <span className="text-Orange font-bold">
                                    SimplySMTP: </span> <span className="text-darkBlue font-medium"> Easily route outbound Emails for specific domains</span>
                            </li>
                            <li className="text-lg bg-[#F6FAFE] py-[10px] px-5 rounded-[10px] w-fit">
                                <span className="text-Orange font-bold">
                                    SimplySNMP: </span> <span className="text-darkBlue font-medium"> Quickly monitor Windows® systems using SNMP</span>
                            </li>
                        </ul>
                        <p className='text-lg font-normal text-darkBlue'>
                            We strive ourselves on developing a secure, easy-to-use software while providing amazing support.Please contact us if you would like to learn more about any of our software products or services.
                        </p>
                    </div>
                    <div className='md:w-5/12 w-full'>
                        <Image src={About} alt="about" className='w-full' />
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className='container mx-auto px-4 flex md:flex-row flex-col-reverse gap-12 items-center'>
                    <div className='md:w-5/12 w-full'>
                        <Image src={Who_We_are} alt="about" className='w-full' />
                    </div>
                    <div className='md:w-7/12 w-full'>
                        <h2 className="text-3xl font-semibold mb-5">
                            <span className="text-darkBlue">
                                Who are </span> <span className="text-Orange"> we?</span>
                        </h2>
                        <p className='text-lg font-normal text-darkBlue'>
                            Our team is comprised of several Microsoft employees with decades of experience building world-class products. Among those, we have done extensive development on Microsoft® Exchange and SharePoint platforms. The company is based out of Seattle, Washington.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className='container mx-auto px-4 flex md:flex-row flex-col gap-12 items-center'>
                    <div className='md:w-7/12 w-full'>
                        <h2 className="text-3xl font-semibold mb-5">
                            <span className="text-darkBlue">
                                Interested in </span> <span className="text-Orange"> Partnering?</span>
                        </h2>
                        <p className='text-lg font-normal text-darkBlue'>
                            We pride ourselves in our steadfast focus on customer success, and are committed to applying that same level of dedication to the success of our partners. Add value to your clients by delivering straightforward password sync services along with your existing offerings and services.
                        </p>
                        <p className='text-lg font-bold text-darkBlue mt-3'>
                            To learn more, please go to our <Link href="#" className='text-lightBlue underline'>Partners</Link> page
                        </p>
                    </div>
                    <div className='md:w-5/12 w-full'>
                        <Image src={Partnering} alt="about" className='w-full' />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Company