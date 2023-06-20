"use client"
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Banner from '../components/banner';
import Link from 'next/link';
import { BsCheckLg } from 'react-icons/bs';
import Image from 'next/image';
import Senario1 from '../../../public/images/senario1.png';
import Senario2 from '../../../public/images/senario2.png';
import Senario3 from '../../../public/images/senario3.png';
import Senario4 from '../../../public/images/senario4.png';
import SyncTabs from '../components/sync-Tabs';
import IconBox from '../components/icon-box';
import bg_img from '../../../public/images/senario-bg.png';
import { Scenario_Data } from '../const/scenario';

const Simply_Simp_Agent = () => {
    return (
        <main>
            <Header />
            <Banner
                title="Simply Sync Tool"
                subTitle='Simply Sync Password for Active Directory, Office 365, Google & More.
                            Easy, Fast and Secure Sync for AD password.'
                image="/images/sync-bg.png"
            />
            <section className="py-16">
                <div className='container mx-auto px-4'>
                    <div className='max-w-[645px] mx-auto mb-7'>
                        <h2 className="md:text-[42px] md:leading-[49px] text-4xl font-semibold text-darkBlue text-center">
                            Simply Sync Password v3.5
                        </h2>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-7'>
                        <div>
                            <h2 className="text-3xl font-semibold text-darkBlue mb-4">
                                Overview
                            </h2>
                            <p className='text-lg font-normal text-darkBlue/50'>
                                Simply Sync Password allows organizations to synchronize their passwords and active directory properties from their local Active Directory site to an external Active Directory sites or other external systems.
                            </p>
                            <p className='text-lg font-normal text-darkBlue/50'>
                                Simply Sync Password is a great alternative for organizations that do not want the added complexity and cost that comes with establishing a trust relationship between Active Directory sites or deploying an AD FS infrastructure. AD FS is great for large organizations, but in many cases it just doesn’t make sense for small and medium size organizations.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-semibold text-Orange mb-4">
                                Features:
                            </h2>
                            <ul className='grid gap-3'>
                                <li className='text-lg font-normal text-darkBlue flex gap-3'>
                                    <BsCheckLg size={20} className='text-Orange w-9' /> <span className='w-full'>Simple and secure Password Synchronization</span>
                                </li>
                                <li className='text-lg font-normal text-darkBlue flex gap-3'>
                                    <BsCheckLg size={20} className='text-Orange w-9' /> <span className='w-full'>Synchronization of User, Groups, and other Active Directory properties</span>
                                </li>
                                <li className='text-lg font-normal text-darkBlue flex gap-3'>
                                    <BsCheckLg size={20} className='text-Orange w-9' /> <span className='w-full'>Creation/Deletion of Users, Groups, and Active Directory properties between 2 AD's</span>
                                </li>
                                <li className='text-lg font-normal text-darkBlue flex gap-3'>
                                    <BsCheckLg size={20} className='text-Orange w-9' /> <span className='w-full'>Multi-tenant set up specifically for Service Provider</span>
                                </li>
                                <li className='text-lg font-normal text-darkBlue flex gap-3'>
                                    <BsCheckLg size={20} className='text-Orange w-9' /> <span className='w-full'>Easily control client configuration from Simply Sync Server</span>
                                </li>
                                <li className='text-lg font-normal text-darkBlue flex gap-3'>
                                    <BsCheckLg size={20} className='text-Orange w-9' /> <span className='w-full'>Manage and provision client license keys from Simply Sync Server</span>
                                </li>
                                <li className='text-lg font-normal text-darkBlue flex gap-3'>
                                    <BsCheckLg size={20} className='text-Orange w-9' /> <span className='w-full'>Simply Sync Password Upgrade Guide[PDF Version]</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-[#F6FAFE]">
                <div className='container mx-auto px-4'>
                    <div className='max-w-[950px] mx-auto mb-7'>
                        <h2 className="md:text-[42px] md:leading-[49px] text-4xl font-semibold text-darkBlue text-center mb-5">
                            Components
                        </h2>
                        <p className='text-xl font-normal text-darkBlue/50 text-center'>
                            Here’s a quick overview of how the solution works. Simply Sync Password consists of 2 main components and one add-on component:
                        </p>
                    </div>
                    <SyncTabs />
                    <div className='mt-7 text-center'>
                        <Link href="#" className='text-lgfont-medium px-[30px] py-[14px] bg-Orange text-white hover:bg-transparent hover:text-Orange border border-Orange rounded-[40px]'>
                            See more documents
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className='container mx-auto px-4'>
                    <div className='mb-7'>
                        <h2 className="md:text-[42px] md:leading-[49px] text-4xl font-semibold text-darkBlue">
                            Requirements
                        </h2>
                    </div>
                    <div className='flex md:flex-row flex-col md:gap-48 gap-12 '>
                        <div className='max-w-[395px] w-full grid gap-7'>
                            <div className='p-7 rounded-[10px] border border-[#F0F0F0] shadow-[0_15px_30px_0_rgba(0,0,0,0.05)] grid content-between'>
                                <h3 className='text-[22px] font-semibold text-lightBlue'>
                                    Password Capture Agent
                                </h3>
                                <p className='text-lg font-medium text-darkBlue'>
                                    .Net Framework 4.0Windows Server 2003 or higher Domain ControllerReboot is required after installation
                                </p>
                            </div>
                            <div className='p-7 rounded-[10px] border border-[#F0F0F0] shadow-[0_15px_30px_0_rgba(0,0,0,0.05)] grid content-between'>
                                <h3 className='text-[22px] font-semibold text-lightBlue'>
                                    Password Sync Server
                                </h3>
                                <p className='text-lg font-medium text-darkBlue'>
                                    .Net Framework 4.0 Windows Server 2003 or higher
                                </p>
                            </div>
                            <div className='p-7 rounded-[10px] border border-[#F0F0F0] shadow-[0_15px_30px_0_rgba(0,0,0,0.05)] grid content-between'>
                                <h3 className='text-[22px] font-semibold text-lightBlue'>
                                    Password Sync AD Plug-In
                                </h3>
                                <p className='text-lg font-medium text-darkBlue'>
                                    .Net Framework 4.0 Windows Server 2003 or higher
                                </p>
                            </div>
                        </div>
                        <div className='w-full'>
                            <h2 className='text-3xl font-medium text-Orange mb-8'>
                                Download trial version
                            </h2>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-7'>
                                <IconBox
                                    Img_url="/images/file-blu.png"
                                    title="Simply sync password capture agent 64 bit"
                                    link="#"
                                    custm_class=" text-[22px]" />
                                <IconBox
                                    Img_url="/images/puzle.png"
                                    title="Simply sync AD Plug-In 64 bit"
                                    link="#"
                                    custm_class=" text-[22px]" />
                                <IconBox
                                    Img_url="/images/layers.png"
                                    title="Simply sync password server 64 bit"
                                    link="#"
                                    custm_class=" text-[22px]" />
                                <IconBox
                                    Img_url="/images/box.png"
                                    title="Simply sync password Office 365 Agent 64 bit"
                                    link="#"
                                    custm_class=" text-[22px]" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="relative py-16 bg-gradient-to-tl from-[#1A3375] to-darkBlue ">
                <Image src={bg_img} alt='scenarioBg.png' width={1920}
                    height={50}
                    className='absolute top-0 bottom-0 left-0 right-0 h-full w-full object-cover object-center' />
                <div className='container mx-auto px-4'>
                    <div className='relative z-auto grid md:grid-cols-2 grid-cols-1 gap-7'>
                        {Scenario_Data.map((item: any, idx: number) => {
                            return <div key={idx} className='flex flex-col gap-7 justify-between '>
                                <div>
                                    <h2 className='text-3xl font-medium text-Orange mb-3'>
                                        {item.title}
                                    </h2>
                                    {item.content?.map((item: any, _idx: number) => {
                                        return <p key={_idx} className="text-lg font-medium text-white">
                                            {item.para}
                                        </p>
                                    })}
                                </div>
                                <div className=''>
                                    <Image src={item.img} alt="img" className='object-cover h-full w-full' />
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className='container mx-auto px-4 flex md:flex-row flex-col md:gap-24 gap-7 items-center justify-between'>
                    <div className='max-w-[555px]'>
                        <h2 className='text-3xl font-semibold text-Orange mb-8'>
                            Pricing
                        </h2>
                        <p className='text-lg font-normal text-darkBlue'>
                            Simply Password Synch is licensed per Capture Agent, Password Sync Server Installation and the number of user account you plan to support.
                        </p>
                        <p className='text-lg font-normal text-darkBlue'>
                            For Hosting providers volume pricing is available, please contact <Link href="mailto:info@igoodworks.com" target='_blank' className='text-Orange'> info@igoodworks.com</Link> for all purchase options.
                        </p>
                    </div>
                    <div className='max-w-[499px] md:mr-0 mr-auto bg-white md:p-[50px] p-5 rounded-[20px] border border-[#F0F0F0] shadow-[0_15px_30px_rgba(0,0,0,0.05)]'>
                        <h1 className='md:text-[32px] text-2xl font-semibold text-center text-darkBlue mb-2'>
                            Contact Us
                        </h1>
                        <p className='text-xl font-normal text-darkBlue/50 text-center'>
                            Leave your information in the form below and our manager will contact you.
                        </p>
                        <form action="#" className='mt-7'>
                            <div className="grid gap-4">
                                <div className="w-full">
                                    <label htmlFor="name" className="hidden mb-2">Name</label>
                                    <input className="px-5 py-4 rounded-[30px] text-sm font-normal placeholder:text-darkBlue text-darkBlue focus:outline-none w-full border border-[#DFE3ED]" placeholder="Name" type="text" id="name" required />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="phone" className="hidden mb-2">Password</label>
                                    <input className="px-5 py-4 rounded-[30px] text-sm font-normal placeholder:text-darkBlue text-darkBlue focus:outline-none w-full border border-[#DFE3ED]" placeholder="Phone" type="tel" id="phone" required />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="email" className="hidden mb-2">Email</label>
                                    <input className="px-5 py-4 rounded-[30px] text-sm font-normal placeholder:text-darkBlue text-darkBlue focus:outline-none w-full border border-[#DFE3ED]" placeholder="Email" type="email" id="email" required />
                                </div>
                                <div className='w-full my-7'>
                                    <button type="submit" className="text-lg font-medium px-[20px] py-[14px] bg-Orange text-white hover:bg-white hover:text-Orange border border-Orange rounded-[40px] w-full">
                                        Get a Consultation
                                    </button>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <input
                                        className="relative h-6 w-6 border border-[#F0F0F0] outline-0 focus:outline-0 hover:outline-0"
                                        type="checkbox"
                                        value=""
                                        id="remember" />
                                    <p
                                        className="hover:cursor-pointer text-sm font-normal text-darkBlue">
                                        I have read and agree to the <Link href="#" className='text-lightBlue font-medium underline'>Privacy Policy</Link> and <Link href="#" className='text-lightBlue font-medium underline'>Terms of Service.</Link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Simply_Simp_Agent