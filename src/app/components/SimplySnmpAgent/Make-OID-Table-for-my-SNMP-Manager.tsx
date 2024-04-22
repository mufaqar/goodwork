import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

import { BsInfoSquare } from 'react-icons/bs';
import { IoMdDownload } from 'react-icons/io';

import Setup1 from '../../../../public/images/MakeOIDTableForMySNMPManager/1.png';
import Setup2 from '../../../../public/images/MakeOIDTableForMySNMPManager/2.png';
import Setup3 from '../../../../public/images/MakeOIDTableForMySNMPManager/3.png';
import Setup4 from '../../../../public/images/MakeOIDTableForMySNMPManager/4.png';
import Setup5 from '../../../../public/images/MakeOIDTableForMySNMPManager/5.png';

const MakeOIDTableForMySNMPManager = () => {
     return (
          <>
               <div id="link1">
                    <h2 className='md:text-3xl mb-5 mt-6 text-4xl font-bold  text-darkBlue'>
                         Install Simply-SNMP Agent
                    </h2>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-7 items-center mb-9 ">
                         <div>
                              <p className='text-lg'>
                                   <strong>Create OID Table</strong>
                                   In the previous tasks, you installed and registered Simply SNMP Agent.<br />
                                   In the following task, you will create and configure the OID Table.</p>
                         </div>
                         <div>
                              <div className='bg-[#F0F0F0] p-7 rounded-[10px] border-l-[9px] border-[#219FFF] shadow-[0_15px_30px_rgba(0,0,0,0.03)]'>
                                   <p className='text-lg font-normal text-darkBlue flex gap-4 mb-6'>
                                        <BsInfoSquare size={29} className='text-[#219FFF] w-[130px]' />
                                        Simple SNMP Agent is offered in two different versions, Basic and Pro:
                                   </p>
                                   <ul>
                                        <li>
                                             <Link href="#" className='text-lg font-normal flex gap-4'>
                                                  <IoMdDownload size={16} className='text-Orange' />
                                                  <span className='text-lightBlue underline'>
                                                  Basis allows up to 20 OID’s
                                                  </span>
                                             </Link>
                                        </li>
                                        <li>
                                             <Link href="#" className='text-lg font-normal flex gap-4'>
                                                  <IoMdDownload size={16} className='text-Orange' />
                                                  <span className='text-lightBlue underline'>
                                                  Pro provided unlimited OID’s
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
                              1. On Server, Run “Simply SNMP Configuration” by click “Start” -&gt; “Simply SNMP Configuration”
                              </p>
                              <Image src={Setup1} alt='setup1' />
                         </div>
                         <div>
                              <p className='text-lg font-semibold text-darkBlue mb-5'>
                              2. Choose “File’ and “OID Table Configuration”
                              </p>
                              <Image src={Setup2} alt='setup2' />
                         </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5 items-center'>
                         <div>
                              <p className='text-lg font-semibold text-darkBlue my-5'>
                              3. Choose desired “Counter’ and Click on “Add &gt;&gt;” button
                              </p>
                              <Image src={Setup3} alt='setup1'/>
                         </div>
                         <div>
                              <p className='text-lg font-semibold text-darkBlue mb-5'>
                              4. Save OID Table by selecting “File and Choose “Save OID Table”.
                              </p>
                              <Image src={Setup4} alt='setup2' />
                         </div>
                    </div>

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5 items-center'>
                         <div>
                              <p className='text-lg font-semibold text-darkBlue my-5'>
                              5. To save OID Table for another machine. you can type “Server Name” and Click “Apply” button.
                              </p>
                              <Image src={Setup5} alt='setup1'/>
                         </div>
                        
                    </div>
                    
               </div>
          </>
     )
}

export default MakeOIDTableForMySNMPManager