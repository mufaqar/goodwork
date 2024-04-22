import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

import { BsInfoSquare } from 'react-icons/bs';
import { IoMdDownload } from 'react-icons/io';

import Setup1 from '../../../../public/images/SimplySnmpAgent/1.png';
import Setup2 from '../../../../public/images/SimplySnmpAgent/2.png';
import Setup3 from '../../../../public/images/SimplySnmpAgent/3.png';
import Setup4 from '../../../../public/images/SimplySnmpAgent/4.png';
import Setup5 from '../../../../public/images/SimplySnmpAgent/5.png';


const RegisterSimplySync = () => {
     return (
          <>
               <div id="link1">
                    <h2 className='md:text-3xl mb-5 mt-10 text-4xl font-bold  text-darkBlue'>
                         Register Simply-Sync
                    </h2>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-7 items-center mb-9 text-darkBlue">
                         <div>
                              <p className='md:text-lg'>1. On the Server, Run “Simply SNMP Configuration” by click “Start” -&gt; “Simply SNMP Configuration”</p>
                         </div>
                         <div>
                              <p className='md:text-lg font-normal'>
                                   2. Choose Tool -&gt; Register. Copy and paste the license key. To obtain a license key file, please contact info@igoodworks.com
                              </p>
                         </div>
                    </div>

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-7 items-center'>
                         <div>
                              <Image src={Setup1} alt='setup1' />
                         </div>
                         <div>
                              <Image src={Setup2} alt='setup2' />
                              <Image src={Setup3} alt='setup2' className='mt-5' />
                         </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-7 items-center mt-10'>
                         <div>
                              <Image src={Setup4} alt='setup1' />
                         </div>
                         <div>
                              <Image src={Setup5} alt='setup2' />
                         </div>
                    </div>
                    
                    
               </div>
          </>
     )
}

export default RegisterSimplySync