import React from 'react'
import Page_Banner from '../components/page-banner'
import Header from '../components/header'
import Footer from '../components/footer'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import { IoMdDownload } from 'react-icons/io'
import Simp_Filters from '../components/simp-filters'
import IconBox from '../components/icon-box'
import { Filter_Item, Filter_type } from '../const/simpfilters'

const Download_Document = () => {
    return (
        <main>
            <Header />
            <Page_Banner
                title="Download Document"
                image="/images/document-bg.png"
            />

            <section className="py-16">
                <div className='container mx-auto px-4 flex md:flex-row flex-col justify-between gap-7'>
                    <div>
                        <h2 className="md:text-[42px] md:leading-[49px] text-4xl font-semibold mb-5 text-center">
                            <span className="text-Orange">
                                Simply Sync</span> <span className="text-darkBlue"> Password Tool</span>
                        </h2>
                    </div>
                    <div className='max-w-[360px]'>
                        {Filter_Item.slice(0, 1).map((item: Filter_type, idx: number) => {
                            return <Simp_Filters key={idx} id={item.id} name={item.name} filter={item.filter} values={item.values} />
                        })}
                    </div>
                </div>
                <div className='container mx-auto px-4 mt-12'>
                    <h3 className='text-2xl font-semibold text-Orange'>
                        The Simply Sync Tool Version 3.8 [.NET Framework 4.7.2 required] - latest
                    </h3>
                    <div className='grid md:grid-cols-4 grid-cols-1 justify-between gap-9 mt-6'>
                        <IconBox
                            title="Simply Sync Password 3.8 Overview"
                            Img_url="/images/eye-blu.png"
                            link="#" />
                        <IconBox
                            title="Simply Sync Password Capture Agent 3.8 Installation"
                            Img_url="/images/pdf-blu.png"
                            link="#" />
                        <IconBox
                            title="Simply Sync AD Plug-In 3.8 Installation"
                            Img_url="/images/pdf-blu.png"
                            link="#" />
                        <IconBox
                            title="Simply Sync Password Server 3.8 Installation"
                            Img_url="/images/pdf-blu.png"
                            link="#" />
                        <IconBox
                            title="Simply Sync Password Upgrade Guide"
                            Img_url="/images/pdf-blu.png"
                            link="#" />
                        <IconBox
                            title="Simply Sync Password Capture Agent Deployment Guide for Hosting Provider"
                            Img_url="/images/pdf-blu.png"
                            link="#" />
                        <IconBox
                            title="Simply Sync Password Office 365 Agent 3.8 Installation"
                            Img_url="/images/pdf-blu.png"
                            link="#" />
                        <IconBox
                            title="Simply Sync Password OpenLdap Agent 3.8 Installation"
                            Img_url="/images/pdf-blu.png"
                            link="#" />
                        <IconBox
                            title="Simply Sync Password Google Agent 3.8 Installation"
                            Img_url="/images/pdf-blu.png"
                            link="#" />
                        <IconBox
                            title="Simply Sync Password RDBMS Agent 3.8 Installation"
                            Img_url="/images/pdf-blu.png"
                            link="#" />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-[#F6FAFE]">
                <div className='container mx-auto px-4 flex md:flex-row flex-col justify-between gap-7'>
                    <div>
                        <h2 className="md:text-[42px] md:leading-[49px] text-4xl font-semibold mb-5 text-center">
                            <span className="text-[#00AC4F]">
                                Simply Transport </span> <span className="text-darkBlue"> Agent</span>
                        </h2>
                    </div>
                    <div className='max-w-[397px]'>
                        {Filter_Item.slice(1, 2).map((item: Filter_type, idx: number) => {
                            return <Simp_Filters key={idx} id={item.id} name={item.name} filter={item.filter} values={item.values} />
                        })}
                    </div>
                </div>
                <div className='container mx-auto px-4 mt-12'>
                    <h3 className='text-2xl font-semibold text-[#00AC4F]'>
                        Exchange 2010
                    </h3>
                    <div className='grid md:grid-cols-3 grid-cols-1 justify-between gap-9 mt-6'>
                        <IconBox
                            title="Simply Exchange Transport Agent Overview"
                            Img_url="/images/eye-gren.png"
                            link="#" />
                        <IconBox
                            title="Simply Exchange Transport Agent Installation"
                            Img_url="/images/pdf-gren.png"
                            link="#" />
                        <IconBox
                            title="Simply Exchange Transport Agent Administration"
                            Img_url="/images/pdf-gren.png"
                            link="#" />
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className='container mx-auto px-4 flex md:flex-row flex-col justify-between gap-7'>
                    <div>
                        <h2 className="md:text-[42px] md:leading-[49px] text-4xl font-semibold mb-5 text-center">
                            <span className="text-lightBlue">
                                Simply SNMP </span> <span className="text-darkBlue"> Agent for Windows</span>
                        </h2>
                    </div>
                    <div className='max-w-[360px]'>
                        {Filter_Item.slice(2, 3).map((item: Filter_type, idx: number) => {
                            return <Simp_Filters key={idx} id={item.id} name={item.name} filter={item.filter} values={item.values} />
                        })}
                    </div>
                </div>
                <div className='container mx-auto px-4 mt-12'>
                    <h3 className='text-2xl font-semibold text-lightBlue'>
                        Windows 2012
                    </h3>
                    <div className='grid md:grid-cols-3 grid-cols-1 justify-between gap-9 mt-6'>
                        <IconBox
                            title="Simply SNMP Agent Installation"
                            Img_url="/images/pdf-blu.png"
                            link="#" />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default Download_Document