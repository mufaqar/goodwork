import Image from 'next/image';
import React from 'react';
import View_icon from '../../../public/images/view-icon.png';
import Cmnt_icon from '../../../public/images/comnt-icon.png';


const QA_Tabs = () => {

    const [openTab, setOpenTab] = React.useState(1);
    const handleFaq = (id: any) => {
        if (openTab === id) {
            return setOpenTab(id)
        }
        setOpenTab(id)
    }

    return (
        <div className='container mx-auto px-4'>
            <div className='flex md:gap-12 gap-4'>
                <div className='md:w-1/4 w-[35%]'>
                    <h2 className='md:text-[22px] md:leading-[25.89px] text-lg font-medium text-darkBlue mb-5'>
                        Categories
                    </h2>
                    <ul className='grid gap-2'>
                        {Question_Data?.map((item: any, idx: any) => {
                            return <li key={idx} onClick={() => handleFaq(item.id)}
                                className={`${openTab === item.id ? "bg-[#F6FAFE] text-lightBlue " : "  hover:bg-[#F6FAFE] hover:text-lightBlue bg-transparent text-darkBlue/50"}  md:px-5 px-[6px] md:py-[13px] py-[5px] rounded-[50px] cursor-pointer flex md:gap-3 gap-1 items-center md:text-lg text-[10px] font-semibold  `}>
                                <div className={`md:p-2 p-1 rounded-[3px] bg-${item.color}`}></div> {item.title}
                            </li>
                        })}
                    </ul>
                </div>
                <div className='md:w-3/4 w-[65%]'>
                    <div className='flex gap-1 justify-between mb-5'>
                        <QA_Filters />
                        <button className='bg-darkGreen hover:bg-white md:px-[30px] px-1 md:py-[10px] py-0 rounded-[40px] md:text-lg text-xs font-medium text-white hover:text-darkGreen border border-darkGreen'>
                            Create a New Thread
                        </button>
                    </div>
                    <ul className={`grid gap-4 `}>
                        <li className={`hover:bg-[#F6FAFE] flex md:flex-row flex-col gap-1 justify-between md:items-center border-l-2 md:px-5 px-[5px] border-Orange`}>
                            <p className='grid gap-1'>
                                <span className='md:text-2xl text-base font-medium text-darkBlue'>
                                    Issue with simply Sync PW v3.7
                                </span>
                                <span className='md:text-sm text-xs font-medium text-darkBlue/50'>
                                    Created by Raphael. Post at 3/14/2017.
                                </span>
                            </p>
                            <p className='flex gap-5'>
                                <span className='flex gap-2 md:text-sm text-xs font-medium text-darkBlue/50'>
                                    <Image src={View_icon} alt="view-icon" />
                                    4688
                                </span>
                                <span className='flex gap-2 md:text-sm text-xs font-medium text-darkBlue/50'>
                                    <Image src={Cmnt_icon} alt="cmnt-icon" />
                                    0
                                </span>
                            </p>
                        </li>
                        <li className={`hover:bg-[#F6FAFE] flex md:flex-row flex-col gap-1 justify-between md:items-center border-l-2 md:px-5 px-[5px] border-darkGreen`}>
                            <p className='grid gap-1'>
                                <span className='md:text-2xl text-base font-medium text-darkBlue'>
                                    Issue with simply Sync PW v3.7
                                </span>
                                <span className='md:text-sm text-xs font-medium text-darkBlue/50'>
                                    Created by Raphael. Post at 3/14/2017.
                                </span>
                            </p>
                            <p className='flex gap-5'>
                                <span className='flex gap-2 md:text-sm text-xs font-medium text-darkBlue/50'>
                                    <Image src={View_icon} alt="view-icon" />
                                    4688
                                </span>
                                <span className='flex gap-2 md:text-sm text-xs font-medium text-darkBlue/50'>
                                    <Image src={Cmnt_icon} alt="cmnt-icon" />
                                    0
                                </span>
                            </p>
                        </li>
                        <li className={`hover:bg-[#F6FAFE] flex md:flex-row flex-col gap-1 justify-between md:items-center border-l-2 md:px-5 px-[5px] border-Orange`}>
                            <p className='grid gap-1'>
                                <span className='md:text-2xl text-base font-medium text-darkBlue'>
                                    Issue with simply Sync PW v3.7
                                </span>
                                <span className='md:text-sm text-xs font-medium text-darkBlue/50'>
                                    Created by Raphael. Post at 3/14/2017.
                                </span>
                            </p>
                            <p className='flex gap-5'>
                                <span className='flex gap-2 md:text-sm text-xs font-medium text-darkBlue/50'>
                                    <Image src={View_icon} alt="view-icon" />
                                    4688
                                </span>
                                <span className='flex gap-2 md:text-sm text-xs font-medium text-darkBlue/50'>
                                    <Image src={Cmnt_icon} alt="cmnt-icon" />
                                    0
                                </span>
                            </p>
                        </li>
                        <li className={`hover:bg-[#F6FAFE] flex md:flex-row flex-col gap-1 justify-between md:items-center border-l-2 md:px-5 px-[5px] border-lightBlue`}>
                            <p className='grid gap-1'>
                                <span className='md:text-2xl text-base font-medium text-darkBlue'>
                                    Issue with simply Sync PW v3.7
                                </span>
                                <span className='md:text-sm text-xs font-medium text-darkBlue/50'>
                                    Created by Raphael. Post at 3/14/2017.
                                </span>
                            </p>
                            <p className='flex gap-5'>
                                <span className='flex gap-2 md:text-sm text-xs font-medium text-darkBlue/50'>
                                    <Image src={View_icon} alt="view-icon" />
                                    4688
                                </span>
                                <span className='flex gap-2 md:text-sm text-xs font-medium text-darkBlue/50'>
                                    <Image src={Cmnt_icon} alt="cmnt-icon" />
                                    0
                                </span>
                            </p>
                        </li>
                        <li className={`hover:bg-[#F6FAFE] flex md:flex-row flex-col gap-1 justify-between md:items-center border-l-2 md:px-5 px-[5px] border-Orange`}>
                            <p className='grid gap-1'>
                                <span className='md:text-2xl text-base font-medium text-darkBlue'>
                                    Issue with simply Sync PW v3.7
                                </span>
                                <span className='md:text-sm text-xs font-medium text-darkBlue/50'>
                                    Created by Raphael. Post at 3/14/2017.
                                </span>
                            </p>
                            <p className='flex gap-5'>
                                <span className='flex gap-2 md:text-sm text-xs font-medium text-darkBlue/50'>
                                    <Image src={View_icon} alt="view-icon" />
                                    4688
                                </span>
                                <span className='flex gap-2 md:text-sm text-xs font-medium text-darkBlue/50'>
                                    <Image src={Cmnt_icon} alt="cmnt-icon" />
                                    0
                                </span>
                            </p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default QA_Tabs

export const QA_Filters = () => {
    return (
        <div className='max-w-[91px]'>
            <label htmlFor="que_ans" className="md:text-lg text-xs font-normal text-darkBlue hidden">Latest</label>
            <select name="que_ans" id="que_ans" className='bg-[#F5F5F5] md:px-[10px] px-0 py-3 rounded-[5px] md:text-sm text-xs font-normal text-darkBlue focus:outline-none w-full'>
                <option className='bg-white' value="Latest">Latest</option>
                <option className='bg-white' value="Latest">Latest</option>
                <option className='bg-white' value="Latest">Latest</option>
            </select>
        </div>
    )
}


export const Question_Data = [
    {
        id: 1,
        title: "All Discussions",
        color: "darkBlue",
        answers: [
            {
                ans: "Issue with simply Sync PW v3.7",
                meta: "Created by Raphael. Post at 3/14/2017.",
                view: "4688",
                cmnt: '0',
            },
        ],
    },
    {
        id: 2,
        title: "Simply Sync Password",
        color: "Orange",
        answers: [
            {
                ans: "Issue with simply Sync PW v3.7",
                meta: "Created by Raphael. Post at 3/14/2017.",
                view: "5657",
                cmnt: '0',
            },
        ],
    },
    {
        id: 3,
        title: "Simply Exchange Transport Agent",
        color: "darkGreen",
        answers: [
            {
                ans: "Issue with simply Sync PW v3.7",
                meta: "Created by Raphael. Post at 3/14/2017.",
                view: "1234",
                cmnt: '0',
            },
        ],
    },
    {
        id: 4,
        title: "Simply SNMP Agent",
        color: "lightBlue",
        answers: [
            {
                ans: "Issue with simply Sync PW v3.7",
                meta: "Created by Raphael. Post at 3/14/2017.",
                view: "4688",
                cmnt: '0',
            },
        ],
    },
]