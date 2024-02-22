import React from 'react'
import Page_Banner from '../components/page-banner'
import Header from '../components/header'
import Footer from '../components/footer'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import Simp_Filters from '../components/simp-filters'
import IconBox from '../components/icon-box'
import { Filter_Item, Filter_type } from '../const/simpfilters'
import { client } from '../../../sanity/lib/client'
import { QSoftwares } from '../../../sanity/lib/queries'


async function fetchData() {

    const passwordtool = await client.fetch(QSoftwares, {
        category: 'passwordtool'
    })
    const transportagent = await client.fetch(QSoftwares, {
        category: 'transportagent'
    })
    const agentforwindows = await client.fetch(QSoftwares, {
        category: 'agentforwindows'
    })

    return {
        passwordtool, transportagent, agentforwindows
    }
}

const Download_Software = async () => {
    const { passwordtool, transportagent, agentforwindows } = await fetchData()
    return (
        <main>
            <Header />
            <Page_Banner
                title="Download Software"
                image="/images/download-bg.png"
            />

            <section className="py-16">
                <div className='container mx-auto px-4 flex md:flex-row flex-col justify-between gap-7'>
                    <div>
                        <h2 className="md:text-[42px] md:leading-[49px] text-4xl font-semibold mb-5 text-center">
                            <span className="text-Orange">
                                Simply Sync</span> <span className="text-darkBlue"> Password Tool</span>
                        </h2>
                        <div className='max-w-[378px] bg-[#F0F0F0] p-4 rounded-[10px] border-l-[9px] border-[#219FFF]  shadow-[0_15px_30px_rgba(0,0,0,0.03)]'>
                            <p className='text-lg font-normal text-darkBlue mb-6'>
                                Simply Sync Tool Version 3.8 new feature
                            </p>
                            <ul className='list-disc list-inside marker:text-Orange'>
                                <li className='text-lg font-normal text-lightBlue'>
                                    TLS1.3 support
                                </li>
                                <li className='text-lg font-normal text-lightBlue'>
                                    Consolidated Management Tool
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='max-w-[360px]'>
                        {Filter_Item.slice(0, 1).map((item: Filter_type, idx: number) => {
                            return <Simp_Filters key={idx} id={item.id} name={item.name} filter={item.filter} values={item.values} />
                        })}
                    </div>
                </div>
                <div className='container mx-auto px-4 mt-12'>
                    <h3 className='text-2xl font-semibold text-Orange'>
                        The Simply Sync Tool Version 3.8 - latest
                    </h3>
                    <div className='grid md:grid-cols-3 grid-cols-1 justify-between gap-9 mt-6'>
                        {
                            passwordtool?.map((item: any, idx: number) => {
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

            <section className="py-16">
                <div className='container mx-auto px-4'>
                    <div>
                        <h3 className='text-2xl font-semibold text-Orange mb-7'>
                            Version compatibility Table
                        </h3>
                    </div>
                    <table className="table-auto w-full grid gap-5">
                        <thead>
                            <tr className="text-center w-full flex justify-between">
                                <th className="
                           w-[15%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-semibold
                           text-darkBlue
                           border-l border-transparent">

                                </th>
                                <th className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-semibold
                           text-darkBlue">
                                    Client 2.5
                                </th>
                                <th
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-semibold
                           text-darkBlue">
                                    Client 2.5
                                </th>
                                <th
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-semibold
                           text-darkBlue">
                                    Client 2.5
                                </th>
                                <th
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-semibold
                           text-darkBlue">
                                    Client 2.5
                                </th>
                                <th
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-semibold
                           text-darkBlue">
                                    Client 2.5
                                </th>
                                <th
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-semibold
                           text-darkBlue">
                                    Client 2.5
                                </th>
                                <th
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-semibold
                           text-darkBlue
                           border-r border-transparent">
                                    Client 2.5
                                </th>
                            </tr>
                        </thead>
                        <tbody className='[&>*:nth-child(odd)]:bg-[#F6FAFE]'>
                            <tr className="text-center w-full flex justify-between items-center sm:px-5 px-0 py-2">
                                <td className="
                           w-[15%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue
                           border-l border-transparent">
                                    Sync Server 2.5
                                </td>
                                <td className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue/50">
                                    <AiOutlineClose className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue/50">
                                    <AiOutlineClose className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue/50">
                                    <AiOutlineClose className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue/50">
                                    <AiOutlineClose className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue/50">
                                    <AiOutlineClose className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue/50
                           border-r border-transparent">
                                    <AiOutlineClose className='mx-auto' />
                                </td>
                            </tr>
                            <tr className="text-center w-full flex justify-between items-center sm:px-5 px-0 py-2">
                                <td className="
                           w-[15%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue
                           border-l border-transparent">
                                    Sync Server 2.5
                                </td>
                                <td className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue/50">
                                    <AiOutlineClose className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue/50">
                                    <AiOutlineClose className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue/50">
                                    <AiOutlineClose className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue/50">
                                    <AiOutlineClose className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue/50
                           border-r border-transparent">
                                    <AiOutlineClose className='mx-auto' />
                                </td>
                            </tr>
                            <tr className="text-center w-full flex justify-between items-center sm:px-5 px-0 py-2">
                                <td className="
                           w-[15%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue
                           border-l border-transparent">
                                    Sync Server 2.5
                                </td>
                                <td className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue/50">
                                    <AiOutlineClose className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue/50">
                                    <AiOutlineClose className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue/50">
                                    <AiOutlineClose className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue/50
                           border-r border-transparent">
                                    <AiOutlineClose className='mx-auto' />
                                </td>
                            </tr>
                            <tr className="text-center w-full flex justify-between items-center sm:px-5 px-0 py-2">
                                <td className="
                           w-[15%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue
                           border-l border-transparent">
                                    Sync Server 2.5
                                </td>
                                <td className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue/50">
                                    <AiOutlineClose className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue/50">
                                    <AiOutlineClose className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue/50
                           border-r border-transparent">
                                    <AiOutlineClose className='mx-auto' />
                                </td>
                            </tr>
                            <tr className="text-center w-full flex justify-between items-center sm:px-5 px-0 py-2">
                                <td className="
                           w-[15%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue
                           border-l border-transparent">
                                    Sync Server 2.5
                                </td>
                                <td className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                          text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                          text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                          text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                          text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue/50">
                                    <AiOutlineClose className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue/50
                           border-r border-transparent">
                                    <AiOutlineClose className='mx-auto' />
                                </td>
                            </tr>
                            <tr className="text-center w-full flex justify-between items-center sm:px-5 px-0 py-2">
                                <td className="
                           w-[15%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue
                           border-l border-transparent">
                                    Sync Server 2.5
                                </td>
                                <td className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue/50
                           border-r border-transparent">
                                    <AiOutlineClose className='mx-auto' />
                                </td>
                            </tr>
                            <tr className="text-center w-full flex justify-between items-center sm:px-5 px-0 py-2">
                                <td className="
                           w-[15%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-darkBlue
                           border-l border-transparent">
                                    Sync Server 2.5
                                </td>
                                <td className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-Orange">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                                <td
                                    className="
                           w-[12%]
                           md:min-w-[78px]
                           min-w-[30px]
                           sm:text-lg
                           text-[9px]
                           font-normal
                           text-Orange
                           border-r border-transparent">
                                    <BsFillCheckCircleFill className='mx-auto' />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <p className='text-lg font-normal text-darkBlue/50 text-right mt-5'>
                            The new version of Simply Sync Server supports the legacy Simply Sync Clients.
                        </p>
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

export default Download_Software