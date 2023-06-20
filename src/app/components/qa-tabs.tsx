import Image from 'next/image';
import React from 'react';
import View_icon from '../../../public/images/view-icon.png';
import Cmnt_icon from '../../../public/images/comnt-icon.png';


const QA_Tabs = () => {

    const [openTab, setOpenTab] = React.useState(1);
    const handleFaq = (id: any) => {
        if (openTab === id) {
            return setOpenTab(1)
        }
        setOpenTab(id)
    }

    return (
        <div className='container mx-auto px-4'>
            <div className='flex gap-12'>
                <div className='w-1/4'>
                    <h2 className='text-[22px] leading-[25.89px] font-medium text-darkBlue mb-5'>
                        Categories
                    </h2>
                    <ul className='grid gap-2'>
                        {Question_Data?.map((item: any, idx: any) => {
                            return <li key={idx} onClick={() => handleFaq(item.id)}
                                className={`${openTab === item.id ? "bg-[#F6FAFE] text-lightBlue " : "  bg-transparent text-darkBlue/50"}  px-5 py-[13px] rounded-[50px] cursor-pointer flex gap-3 items-center text-lg font-semibold  `}>
                                <div className={`p-2 rounded-[3px] bg-${item.color}`}></div> {item.title}
                            </li>
                        })}
                    </ul>
                </div>
                <div className='w-3/4'>
                    <div className='flex justify-between mb-7'>
                        <QA_Filters />
                        <button className='bg-darkGreen px-[30px] py-[10px] rounded-[40px] text-lg font-medium text-white'>
                            Create a New Thread
                        </button>
                    </div>
                    {Question_Data?.map((item: any, idx: any) => {
                        return <ul key={idx} className={`grid gap-4 ${openTab === item.id ? "block" : "hidden"}`}>
                            {item.answers?.map((sub_item: any, _idx: number) => {
                                return <li key={_idx} className={`flex justify-between items-center border-l-2 px-5 border-${item.color}`}>
                                    <p className='grid'>
                                        <span className='text-2xl font-medium text-darkBlue'>
                                            {sub_item.ans}
                                        </span>
                                        <span className='text-sm font-medium text-darkBlue/50'>
                                            {sub_item.meta}
                                        </span>
                                    </p>
                                    <p className='flex gap-5'>
                                        <span className='flex gap-2 text-sm font-medium text-darkBlue/50'>
                                            <Image src={View_icon} alt="view-icon" />
                                            4688
                                        </span>
                                        <span className='flex gap-2 text-sm font-medium text-darkBlue/50'>
                                            <Image src={Cmnt_icon} alt="cmnt-icon" />
                                            0
                                        </span>
                                    </p>
                                </li>
                            })}
                        </ul>
                    })}
                </div>
            </div>
        </div>
    )
}

export default QA_Tabs

export const QA_Filters = ({ filter, name, values }: any) => {
    return (
        <div className='max-w-[91px]'>
            <label htmlFor={name} className="text-lg font-normal text-darkBlue ">{filter}</label>
            <select name={name} id={name} className='bg-[#F5F5F5] px-[10px] py-3 rounded-[5px] text-sm font-normal text-darkBlue focus:outline-none w-full'>
                <option
                    value="Latest">Latest</option>
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
                mete: "Created by Raphael. Post at 3/14/2017.",
            },
            {
                ans: "Issue with simply Sync PW v3.7",
                mete: "Created by Raphael. Post at 3/14/2017.",
            },
            {
                ans: "Issue with simply Sync PW v3.7",
                mete: "Created by Raphael. Post at 3/14/2017.",
            },
            {
                ans: "Issue with simply Sync PW v3.7",
                mete: "Created by Raphael. Post at 3/14/2017.",
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
            },
        ],
    },
]