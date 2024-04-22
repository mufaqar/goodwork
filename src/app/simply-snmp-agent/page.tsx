"use client"
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Banner from '../components/banner';
import Link from 'next/link';
import { BsInfoSquare } from 'react-icons/bs';
import { IoMdDownload } from 'react-icons/io';
import Image from 'next/image';
import Sn_Icon1 from '../../../public/images/sn-icon1.png';
import Sn_Icon2 from '../../../public/images/sn-icon2.png';
import SnmpTabs from '../components/snmp-tabs';
import InstallSimplySNMPAgent from '../components/SimplySnmpAgent/Install-Simply-SNMP-Agent';
import RegisterSimplySync from '../components/SimplySnmpAgent/Register Simply-Sync';
import ChooseOIDTable from '../components/SimplySnmpAgent/Choose-OID-Table';
import TestSimplySNMPAgent from '../components/SimplySnmpAgent/Test-Simply-SNMP-Agent';
import MakeOIDTableForMySNMPManager from '../components/SimplySnmpAgent/Make-OID-Table-for-my-SNMP-Manager';
import InstallandConfigureSNMPService from '../components/SimplySnmpAgent/Install-and-Configure-SNMP-Service';

const Simply_Simp_Agent = () => {
    return (
        <main>
            <Header />
            <Banner
                title="Simply SNMP Agent"
                subTitle='Simply SNMP Agent for Windows. Enable windows performance monitoring utilizing SNMP.'
                image="/images/snmp-bg.png"
            />
            <section className="py-16">
                <div className='container mx-auto px-4'>
                    <div className='mb-12 text-lightBlue'>
                        <h2 className="md:text-[42px] md:leading-[49px] text-4xl font-semibold">
                            Simply SNMP Agent
                        </h2>
                        <h2 className="md:text-3xl mt-6 text-2xl font-bold">
                            Installation & Configuration for performance Monitoring
                        </h2>
                        <button className='bg-green-600 mt-2 text-white py-1.5 px-4 rounded-md'>Simply SNMP Agent Installation Download</button>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-7'>
                        <div>
                            <h2 className="text-3xl font-semibold text-lightBlue mb-4">
                                Simply-SNMP Agent for Windows
                            </h2>
                            <p className='text-lg font-normal text-darkBlue mb-7'>
                                You are an administrator who currently maintains Windows servers and you need an SNMP Agent to integrate to an existing SNMP Manager so that you can overcome administrative difficulties and lower operating costs. Simply-SNMP Agent will allow you to deliver the functionality and simplicity you require in successfully monitoring a distributed environment.
                            </p>
                            {/* <Link href="#" className='md:text-lg text-sm font-medium md:px-[30px] px-[9px] py-[14px] bg-Orange text-white hover:bg-transparent hover:text-Orange border border-Orange rounded-[40px]'>
                                Download Simply SNMP Agent Installation
                            </Link> */}
                        </div>
                        <div>
                            <h2 className="text-3xl font-semibold text-lightBlue mb-4">
                                Before You Begin Simply-SNMP installation
                            </h2>
                            <p className='text-lg font-bold text-darkBlue mb-4'>
                                Objectives
                            </p>
                            <p className='text-lg font-normal text-darkBlue'>
                                After completing this installation on a computer, your SNMP
                            </p>
                            <p className='text-lg font-normal text-darkBlue'>
                                Manager will be able to get performance value from windows using SNMP protocol.
                            </p>
                            <p className='text-lg font-bold text-darkBlue my-4'>
                                Prerequisites
                            </p>
                            <p className='text-lg font-normal text-darkBlue mb-4'>
                                Before installation, your target computer must have:
                            </p>
                            <ul className='list-inside list-disc'>
                                <li className='text-lg font-normal text-darkBlue'>
                                    .NET Framework 3.5
                                </li>
                                <li className='text-lg font-normal text-darkBlue'>
                                    SNMP Service
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='bg-[#F0F0F0] p-7 rounded-[10px] mt-12 border-l-[9px] border-[#219FFF]  shadow-[0_15px_30px_rgba(0,0,0,0.03)]'>
                        <p className='text-lg font-normal text-darkBlue flex gap-4 mb-6'>
                            <BsInfoSquare size={29} className='text-[#219FFF]' />
                            For Windows Server 2003, you must also install Windows Imaging Component (WIC) on the target computer:
                        </p>
                        <ul>
                            <li>
                                <Link href="#" className='text-lg font-normal flex gap-4'>
                                    <IoMdDownload size={16} className='text-Orange' />
                                    <span className='text-lightBlue underline'>
                                        32-bit Windows Imaging Component
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='text-lg font-normal flex gap-4'>
                                    <IoMdDownload size={16} className='text-Orange' />
                                    <span className='text-lightBlue underline'>
                                        64-bit Windows Imaging Component
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-[#F6FAFE]">
                <div className='container mx-auto px-4 flex md:flex-row flex-col gap-12'>
                    <div className='md:w-2/5 w-full'>
                        <h2 className="text-3xl font-semibold text-darkBlue mb-5">
                            Components of the Simply-SNMP Agent
                        </h2>
                        <p className='text-lg font-normal text-darkBlue mb-7 p-7 bg-white border-[#F0F0F0] border rounded-[10px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]'>
                            SimpleSNMPAgent: This is the Windows SNMP Extension Agent
                        </p>
                        <p className='text-lg font-normal text-darkBlue mb-7 p-7 bg-white border-[#F0F0F0] border rounded-[10px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]'>
                            SimplySNMPConfiguration: This application is to create the OID table. OID table refers to Windows performance.
                        </p>
                    </div>
                    <div className='md:w-3/5 w-full'>
                        <h2 className="text-3xl font-semibold text-lightBlue mb-5">
                            Deploying Simply-SNMP Agent
                        </h2>
                        <p className='text-lg font-normal text-darkBlue mb-7'>
                            Download Simply-SNMP agent and extract to any local drive.
                        </p>
                        <div className='grid md:grid-cols-2 grid-cols-1 gap-7'>
                            <div>
                                <Image src={Sn_Icon1} alt='sn-icon1' />
                                <p className='text-[22px] leading-[30px] font-normal text-darkBlue my-5'>
                                    Simply SNMP Agent For Windows 2008 64 bit
                                </p>
                                <Link href="#" className='text-xl font-normal text-lightBlue underline hover:no-underline'>
                                    Download
                                </Link>
                            </div>
                            <div>
                                <Image src={Sn_Icon2} alt='sn-icon2' />
                                <p className='text-[22px] leading-[30px] font-normal text-darkBlue my-5'>
                                    Simply SNMP Agent For Windows 2008 32 bit
                                </p>
                                <Link href="#" className='text-xl font-normal text-lightBlue underline hover:no-underline'>
                                    Download
                                </Link>
                            </div>
                        </div>
                        <div className='mt-7'>
                            <Link href="/download-software" className='text-lgfont-medium px-[30px] py-[14px] bg-Orange text-white hover:bg-transparent hover:text-Orange border border-Orange rounded-[40px]'>
                                See more download
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-16 container mx-auto px-4'>
                <div>
                    <div className=''>
                        <h2 className='md:text-[42px] md:leading-[49px] text-4xl font-medium  text-darkBlue'>
                            Installation & Configuration for Performace Monitoring
                        </h2>
                    </div>
                    <div>
                        <InstallSimplySNMPAgent/>
                        <RegisterSimplySync/>
                        <ChooseOIDTable/>
                        <TestSimplySNMPAgent/>
                        <MakeOIDTableForMySNMPManager/>
                        <InstallandConfigureSNMPService/>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Simply_Simp_Agent
