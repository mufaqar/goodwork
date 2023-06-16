import React, { useState } from "react";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { Faqs_Data } from "../const/faqsData";

export default function Faqs_Sec() {
    const [open, setOpen] = useState(1);
    const handleFaq = (id: any) => {
        if (open === id) {
            return setOpen(1)
        }
        setOpen(id)
        //setDropdown(!dropdown)

    }

    return (
        <>
            {Faqs_Data.map((item: any, idx: number) => {
                return <div key={idx} className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                    <div className="">
                        <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(item.id)}>
                            <p className="text-lg font-semibold text-darkBlue " >
                                {item.id}. {item.question}
                            </p>
                            <span className="text-lightBlue">
                                
                                        <AiOutlinePlus size={24} 
                                        className={`${ open === item.id ? "rotate-45 transform transition duration-200 text-darkBlue" : "rotate-0 transform transition duration-200"}`} />
                                   
                            </span>
                        </div>
                    </div>
                    <div className={`${open === item.id ? 'flex' : 'hidden'} `}>
                        <p className="text-base font-medium text-darkBlue mt-5" >
                            {item.answer}
                        </p>
                    </div>
                </div>

            })}
        </>
    );
}