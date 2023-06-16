import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { BsInfoSquare } from 'react-icons/bs';
import { IoMdDownload } from 'react-icons/io';
import Setup1 from '../../../public/images/setup1.png';
import Setup2 from '../../../public/images/setup2.png';
import Setup3 from '../../../public/images/setup3.png';
import Setup4 from '../../../public/images/setup4.png';

const SnmpTabs = () => {
    const [openTab, setOpenTab] = React.useState(1);
    const handleFaq = (id: any) => {
        if (openTab === id) {
            return setOpenTab(1)
        }
        setOpenTab(id)
    }
    return (
        <div className="flex flex-wrap">
            <div className="w-full">
                <ul
                    className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row gap-4 max-w-[942px] mx-auto"
                    role="tablist"
                >
                    {Tabs_Data.map((item: any, idx: number) => {
                        return <li key={idx} className="flex-auto text-center">
                            <span
                                className={
                                    "w-fit mx-auto md:block py-[14px] md:px-[30px] px-[9px] rounded-[40px] md:text-base text-sm font-semibold cursor-pointer  " +
                                    (openTab === item.id
                                        ? "text-white bg-lightBlue "
                                        : "text-darkBlue bg-white border border-darkBlue/10 hover:bg-lightBlue hover:text-white ")
                                }
                                onClick={() => handleFaq(item.id)}
                                data-toggle="tab"
                                role="tablist"
                            >
                                {item.title}
                            </span>
                        </li>
                    })}

                </ul>
                <div className="relative flex flex-col min-w-0 mt-12">
                    <div className="py-5 flex-auto">
                        <div className="tab-content tab-space">
                            {Tabs_Data.map((item: any, idx: number) => {
                                return <div key={idx} className={openTab === item.id ? "block" : "hidden"} id="link1">
                                    <div className="grid md:grid-cols-2 grid-cols-1 gap-7 items-center mb-9 ">
                                        <div>
                                            <h2 className="text-3xl font-semibold text-darkBlue mb-4">
                                                {item.title}
                                            </h2>
                                            {item.content?.map((item: any, _idx: number) => {
                                                return <p key={_idx} className="text-lg font-normal text-darkBlue">
                                                    {item.para}
                                                </p>
                                            })}
                                            <ol className='mt-12 grid gap-3 list-decimal list-inside'>
                                                <li className="text-lg font-semibold text-darkBlue">
                                                    Logon to the Server as Domain Administrator.
                                                </li>
                                                <li className='text-lg font-semibold text-darkBlue'>
                                                    On the Server, Run Windows Explorer and find <span className='text-lightBlue'>SimplySNMPWin2012Installer64.msi</span> or <span className='text-lightBlue'>SimplySNMPWin2012Installer64.msi</span> in the target folder
                                                </li>
                                                <li className='text-lg font-semibold text-darkBlue'>
                                                    Run <span className='text-lightBlue'>SimplySNMPWin2008Installer64.msi</span> or <span className='text-lightBlue'>SimplySNMPWin2012Installer64.msi.</span>
                                                </li>
                                            </ol>
                                        </div>
                                        <div>
                                            <div className='bg-[#F0F0F0] p-7 rounded-[10px] border-l-[9px] border-[#219FFF] shadow-[0_15px_30px_rgba(0,0,0,0.03)]'>
                                                <p className='text-lg font-normal text-darkBlue flex gap-4 mb-6'>
                                                    <BsInfoSquare size={29} className='text-[#219FFF] w-[130px]' />
                                                    If .NET Framework 3.5 is not installed. .NET Framework 3.5 installation windows will pop up. If yoiu are prompted you should install .NET Framework 3.5 and Reboot computer For Windows Server 2003, you must also install Windows Imaging Component (WIC) on the target computer before .NET Framework 3.5 installation:
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
                                    </div>
                                    <div className='grid md:grid-cols-2 grid-cols-1 gap-7 items-center'>
                                        <div>
                                            <p className='text-lg font-semibold text-darkBlue mb-5'>
                                                4. Once you launch the application, you will see the Welcome page, click Next
                                            </p>
                                            <Image src={Setup1} alt='setup1' />
                                        </div>
                                        <div>
                                            <p className='text-lg font-semibold text-darkBlue mb-5'>
                                                5. On the License Agreement page, select I Agree and then click Next.
                                            </p>
                                            <Image src={Setup2} alt='setup2' />
                                        </div>
                                    </div>
                                    <div className='grid md:grid-cols-2 grid-cols-1 gap-7  mt-7'>
                                        <div>
                                            <p className='text-lg font-semibold text-darkBlue mb-5'>
                                                6. Browse folder location to install and choose Just me or Everyone. On the Network Credentials page, click Next.
                                            </p>
                                            <Image src={Setup3} alt='setup3' />
                                        </div>
                                        <div>
                                            <p className='text-lg font-semibold text-darkBlue mb-12'>
                                                7. On the Confirm Installation page, click Next.
                                            </p>
                                            <Image src={Setup4} alt='setup4' />
                                        </div>
                                    </div>
                                    <div className='mt-7'>
                                        <div>
                                            <p className='text-lg font-semibold text-darkBlue text-center'>
                                                8. On the Installation Complete page, click Close.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SnmpTabs

export const Tabs_Data = [
    {
        id: 1,
        title: "Install Simply-SNMP Agent",
        content: [
            {
                para: "In the previous tasks, you ensured that your environment met all of the prerequisites for installing a Simply SNMP Agent. In the following task, you will install Simply SNMP Agent on the appropriate computer.",
            },
        ]
    },
    {
        id: 2,
        title: "Register Simply-Sync",
        content: [
            {
                para: "In the previous tasks, you ensured that your environment met all of the prerequisites for installing a Simply SNMP Agent. In the following task, you will install Simply SNMP Agent on the appropriate computer.",
            },
        ]
    },
    {
        id: 3,
        title: "Choose OID Table",
        content: [
            {
                para: "In the previous tasks, you ensured that your environment met all of the prerequisites for installing a Simply SNMP Agent. In the following task, you will install Simply SNMP Agent on the appropriate computer.",
            },
        ]
    },
    {
        id: 4,
        title: "Test Simply-SNMP Agent",
        content: [
            {
                para: "In the previous tasks, you ensured that your environment met all of the prerequisites for installing a Simply SNMP Agent. In the following task, you will install Simply SNMP Agent on the appropriate computer.",
            },
        ]
    },
    {
        id: 5,
        title: "Make OID Table for my SNMP Manager",
        content: [
            {
                para: "In the previous tasks, you ensured that your environment met all of the prerequisites for installing a Simply SNMP Agent. In the following task, you will install Simply SNMP Agent on the appropriate computer.",
            },
        ]
    },
    {
        id: 6,
        title: "Install and Configure SNMP Service",
        content: [
            {
                para: "In the previous tasks, you ensured that your environment met all of the prerequisites for installing a Simply SNMP Agent. In the following task, you will install Simply SNMP Agent on the appropriate computer.",
            },
        ]
    },
]