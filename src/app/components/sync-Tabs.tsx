import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { BsInfoSquare } from 'react-icons/bs';
import { IoMdDownload } from 'react-icons/io';
import Senario1 from '../../../public/images/senario1.png';
import Senario2 from '../../../public/images/senario2.png';
import Senario3 from '../../../public/images/senario3.png';
import Senario4 from '../../../public/images/senario4.png';

const SyncTabs = () => {
    const [openTab, setOpenTab] = React.useState(1);
    const handleFaq = (id: any) => {
        if (openTab === id) {
            return setOpenTab(id)
        }
        setOpenTab(id)
    }
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row gap-8"
                        role="tablist"
                    >
                        {Tabs_Data.map((item: any, idx: number) => {
                            return <li key={idx} className="flex-auto text-center">
                                <span
                                    className={
                                        "w-full md:block py-[14px] md:px-[30px] px-[9px] rounded-[40px] md:text-base text-sm font-semibold cursor-pointer  " +
                                        (openTab === item.id
                                            ? "text-white bg-lightBlue "
                                            : "text-darkBlue bg-transparent border border-darkBlue/10 hover:bg-lightBlue hover:text-white ")
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
                                        <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
                                            <div>
                                                <Image src={item.img} alt="img" />
                                            </div>
                                            <div>
                                                <h2 className="text-3xl font-semibold mb-4 text-darkBlue">
                                                    {item.title}
                                                </h2>
                                                {item.content?.map((item: any, _idx: number) => {
                                                    return <p key={_idx} className="text-lg font-normal text-darkBlue">
                                                        {item.para}
                                                    </p>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SyncTabs

export const Tabs_Data = [
    {
        id: 1,
        title: "Simply Sync Password Client (Password Capture Agent)",
        img: Senario1,
        content: [
            {
                para: "The role of the Password Capture Agent is to intercept password changes as they occur on the domain controllers. Since you don’t know which domain controller a user is going to use to reset their password, the Password Capture Agent must be installed on all domain controllers. The Password Capture Agent does not interfere with the password change process, it simply intercepts the change request as it happens. When a user’s password is changed, the client intercepts it, and passes it off to the Password Sync Server.",
            },
        ]
    },
    {
        id: 2,
        title: "Simply Sync Password Server",
        img: Senario1,
        content: [
            {
                para: "The role of the Password Capture Agent is to intercept password changes as they occur on the domain controllers. Since you don’t know which domain controller a user is going to use to reset their password, the Password Capture Agent must be installed on all domain controllers. The Password Capture Agent does not interfere with the password change process, it simply intercepts the change request as it happens. When a user’s password is changed, the client intercepts it, and passes it off to the Password Sync Server.",
            },
        ]
    },
    {
        id: 3,
        title: "Simply Sync AD Plug-In",
        img: Senario1,
        content: [
            {
                para: "The role of the Password Capture Agent is to intercept password changes as they occur on the domain controllers. Since you don’t know which domain controller a user is going to use to reset their password, the Password Capture Agent must be installed on all domain controllers. The Password Capture Agent does not interfere with the password change process, it simply intercepts the change request as it happens. When a user’s password is changed, the client intercepts it, and passes it off to the Password Sync Server.",
            },
        ]
    },
]