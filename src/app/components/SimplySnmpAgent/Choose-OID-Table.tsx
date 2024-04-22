import Link from 'next/link';
import React from 'react'
import Image from 'next/image';


import Setup1 from '../../../../public/images/ChooseOIDTable/1.png';
import Setup2 from '../../../../public/images/ChooseOIDTable/2.png';
import Setup3 from '../../../../public/images/ChooseOIDTable/3.png';



const ChooseOIDTable = () => {
     return (
          <>
               <div id="link1">
                    <h2 className='md:text-3xl mb-5 mt-10 text-4xl font-bold text-darkBlue'>
                    Choose OID Table
                    </h2>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-7 items-center mb-4 text-darkBlue">
                         <div>
                              <p className='md:text-lg'>1. On Server, Run “Simply SNMP Configuration” by click “Start” -&gt; “Simply SNMP Configuration”</p>
                              <Image src={Setup1} alt='setup1' className='mt-3'/>
                         </div>
                         <div>
                              <p className='md:text-lg font-normal'>
                              2. Click “Browse” button and Select OID table file, there is sample OID table named “SimplySNMP.oid” in installation bin folder
                              </p>
                              <Image src={Setup2} alt='setup2' className='mt-3'/>
                         </div>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-7 mb-9 text-darkBlue">
                         <div>
                              <p className='md:text-lg'>3. Click “Apply” button</p>
                         </div>
                         <div>
                              <p className='md:text-lg font-normal'>
                              3. Click “Apply” button
                              </p>
                              <Image src={Setup3} alt='setup2' className='mt-3'/>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default ChooseOIDTable