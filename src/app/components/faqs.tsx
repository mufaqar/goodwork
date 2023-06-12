import Link from "next/link";
import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export default function Faqs() {
    const [dropdown, setDropdown] = useState(1);
    const handleMenu = (id: any) => {
        if (dropdown === id) {
            return setDropdown(1)
        }
        setDropdown(id)
        //setDropdown(!dropdown)

    }

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className='mb-12'>
                    <h2 className='text-[42px] font-medium text-center text-darkBlue'>
                        Frequently Asked Questions
                    </h2>
                    <p className='text-xl font-normal text-center text-darkBlue mt-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                </div>
                <div className="grid gap-5">
                    {Faqs_Data.map((item: any, idx: number) => {
                        return <div key={idx} className="w-full border border-[#F0F0F0] rounded-[10px] p-[30px] ">
                            <div className="">
                                <div className="flex justify-between cursor-pointer" onClick={() => handleMenu(item.id)}>
                                    <p className="text-lg font-semibold text-darkBlue " >
                                        {item.id}. {item.question}
                                    </p>
                                    <span className="text-lightBlue">
                                        {
                                            dropdown === item.id ? (
                                                <BiChevronUp size={24} />
                                            ) :
                                                (
                                                    <BiChevronDown size={24} />
                                                )
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className={`${dropdown === item.id ? 'flex' : 'hidden'} `}>
                                <p className="text-base font-medium text-darkBlue mt-5" >
                                    {item.answer}
                                </p>
                            </div>
                        </div>

                    })}
                </div>
            </div>
        </section>
    );
}


export const Faqs_Data = [
    {
        id: 1,
        question: 'Can I sync an Active Directory user’s password between different active directory forests?',
        answer: 'Simply Sync Password tool enables password sync between different forests in Active Directory without the need to open any ports on your firewall. Simply Sync Password also doesn’t require any trust relationship between forests.'
    },
    {
        id: 2,
        question: "We are Exchange hosting provider. Many customers want to sync user's password from their Active Directory to our Active Directory",
        answer: 'Simply Sync Password tool enables password sync between different forests in Active Directory without the need to open any ports on your firewall. Simply Sync Password also doesn’t require any trust relationship between forests.'
    },
    {
        id: 3,
        question: 'Can I sync an Active Directory user’s password with target systems other than Active Directory?',
        answer: 'Simply Sync Password tool enables password sync between different forests in Active Directory without the need to open any ports on your firewall. Simply Sync Password also doesn’t require any trust relationship between forests.'
    },
    {
        id: 4,
        question: 'I want to route Exchange mail based on sender domain',
        answer: 'Simply Sync Password tool enables password sync between different forests in Active Directory without the need to open any ports on your firewall. Simply Sync Password also doesn’t require any trust relationship between forests.'
    },
]