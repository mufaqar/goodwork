import React from 'react';

const Simp_Filters = ({filter, name, values } : any) => {
    return (
        <div>
            <div className=''>
                    <label htmlFor={name} className="text-lg font-normal text-darkBlue ">{filter}</label>
                    <select name={name} id={name} className='px-5 py-4 rounded-[5px] text-sm font-normal text-darkBlue focus:outline-none w-full border border-[#F0F0F0] mt-4'>

                        {values?.map((_sub_item: any, _idx: any) => {
                            return <option key={_idx}
                                value={_sub_item.value}>{_sub_item.value}</option>
                        })}
                    </select>
                </div>
            
        </div>
    )
}

export default Simp_Filters