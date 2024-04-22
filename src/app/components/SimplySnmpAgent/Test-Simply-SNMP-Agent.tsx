import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

import { BsInfoSquare } from 'react-icons/bs';
import { IoMdDownload } from 'react-icons/io';

import Setup1 from '../../../../public/images/TestSimplySNMPAgent/1.png';
import Setup2 from '../../../../public/images/TestSimplySNMPAgent/2.jpg';


const TestSimplySNMPAgent = () => {
     return (
          <>
               <div id="link1">
                    <h2 className='md:text-3xl mb-5 mt-10 text-4xl font-bold  text-darkBlue'>
                    Test Simply-SNMP Agent
                    </h2>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-7 items-center mb-9 text-darkBlue">
                         <div>
                              <p className='md:text-lg'>1. On the Server, Run any SNMP Manager. In this document, we will use “SNMPUtilG” as an example</p>
                         </div>
                         <div>
                              <p className='md:text-lg font-normal'>
                              2. Type Community, OID number and Click “Execute Command” buttonYou can find OID number by opening “SimplySNMP.oid” file.“1.3.6.1.4.1.2000” is the predefined prefix.
                              </p>
                         </div>
                    </div>

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-7'>
                         <div>
                              <Image src={Setup1} alt='setup1' />
                         </div>
                         <div>
                              <Image src={Setup2} alt='setup2' />
                         </div>
                    </div>
               </div>
          </>
     )
}

export default TestSimplySNMPAgent