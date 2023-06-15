import React from 'react'
import Page_Banner from '../components/page-banner'
import Header from '../components/header'
import Footer from '../components/footer'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import { IoMdDownload } from 'react-icons/io'

const Download_Software = () => {
    return (
        <main>
            <Header />
            <Page_Banner
                title="Download Software"
                image="/images/download-bg.png"
            />
            <section className="py-16">
                <div className='container mx-auto px-4'>
                    <div className='max-w-[645px] mx-auto mb-12'>
                        <h2 className="md:text-[42px] md:leading-[49px] text-4xl font-semibold mb-5 text-center">
                            <span className="text-Orange">
                                Simply Sync</span> <span className="text-darkBlue"> Password Tool</span>
                        </h2>
                        <p className='text-xl font-normal text-center text-darkBlue'>
                            Version compatibility Table
                        </p>
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

            <section className="py-16">
                <div className='container mx-auto px-4'>
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
            </section>
            <Footer />
        </main>
    )
}

export default Download_Software