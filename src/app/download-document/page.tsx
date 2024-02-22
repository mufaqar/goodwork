import React from 'react'
import Page_Banner from '../components/page-banner'
import Header from '../components/header'
import Footer from '../components/footer'
import Simp_Filters from '../components/simp-filters'
import IconBox from '../components/icon-box'
import { Filter_Item, Filter_type } from '../const/simpfilters'
import { client } from '../../../sanity/lib/client'
import { QDocuments } from '../../../sanity/lib/queries'


async function fetchData() {

    const passwordtool = await client.fetch(QDocuments, {
        category: 'passwordtool'
    })
    const transportagent = await client.fetch(QDocuments, {
        category: 'transportagent'
    })
    const agentforwindows = await client.fetch(QDocuments, {
        category: 'agentforwindows'
    })

    return {
        passwordtool, transportagent, agentforwindows
    }
}

const Download_Document = async () => {
    const { passwordtool, transportagent, agentforwindows } = await fetchData()
    console.log("🚀 ~ constDownload_Document= ~ passwordtool:", passwordtool)

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
                        {
                            passwordtool?.map((item: any, idx: number) => {
                                return (
                                    <IconBox
                                        title={item.title}
                                        Img_url={item.icon.asset.url}
                                        link={item.file.asset.url || '#'}
                                        custm_class="text-lg"
                                        key={idx}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section className="py-16 bg-[#F6FAFE]">
                <div className='container mx-auto px-4 flex md:flex-row flex-col justify-between gap-7'>
                    <div>
                        <h2 className="md:text-[42px] md:leading-[49px] text-4xl font-semibold mb-5 text-center">
                            <span className="text-darkGreen">
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
                    <h3 className='text-2xl font-semibold text-darkGreen'>
                        Exchange 2010
                    </h3>
                    <div className='grid md:grid-cols-3 grid-cols-1 justify-between gap-9 mt-6'>
                        {
                            transportagent.map((item: any, idx: number) => {
                                return (
                                    <IconBox
                                        title={item.title}
                                        Img_url="/images/file-gren.png"
                                        link={item.file.asset.url || '#'}
                                        custm_class="text-lg"
                                        key={idx}
                                    />
                                )
                            })
                        }
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
                    {
                            agentforwindows?.map((item: any, idx: number) => {
                                return (
                                    <IconBox
                                        title={item.title}
                                        Img_url="/images/file-blu.png"
                                        link={item.file.asset.url || '#'}
                                        custm_class="text-lg"
                                        key={idx}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default Download_Document