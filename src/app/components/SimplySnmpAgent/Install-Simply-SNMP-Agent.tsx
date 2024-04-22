import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

import { BsInfoSquare } from 'react-icons/bs';
import { IoMdDownload } from 'react-icons/io';

import Setup1 from '../../../../public/images/setup1.png';
import Setup2 from '../../../../public/images/setup2.png';
import Setup3 from '../../../../public/images/setup3.png';
import Setup4 from '../../../../public/images/setup4.png';

const InstallSimplySNMPAgent = () => {
     return (
          <>
               <div id="link1">
                    <h2 className='md:text-3xl mb-5 mt-6 text-4xl font-bold  text-darkBlue'>
                         Install Simply-SNMP Agent
                    </h2>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-7 items-center mb-9 ">
                         <div>
                              <p className='text-lg'>In the previous tasks, you ensured that your environment met all of the prerequisites for installing a Simply SNMP Agent. In the following task, you will install Simply SNMP Agent on the appropriate computer.</p>
                              <ol className='mt-12 grid gap-3 list-decimal list-inside'>
                                   <li className="text-lg font-semibold text-darkBlue">
                                        Logon to the Server as Domain Administrator.
                                   </li>
                                   <li className='text-lg font-semibold text-darkBlue'>
                                        On the Server, Run Windows Explorer and find <span className='text-lightBlue'>SimplySNMPWin2012Installer64.msi</span> or <span className='text-lightBlue'>SimplySNMPWin2012Installer64.msi</span> in the target folder
                                   </li>
                                   <li className='text-lg font-semibold text-darkBlue'>
                                        Run <span className='text-lightBlue'>SimplySNMPWin2008Installer64.msi</span> or <span className='text-lightBlue'>SimplySNMPWin2012Installer64.msi.</span>
                                   </li>
                              </ol>
                         </div>
                         <div>
                              <div className='bg-[#F0F0F0] p-7 rounded-[10px] border-l-[9px] border-[#219FFF] shadow-[0_15px_30px_rgba(0,0,0,0.03)]'>
                                   <p className='text-lg font-normal text-darkBlue flex gap-4 mb-6'>
                                        <BsInfoSquare size={29} className='text-[#219FFF] w-[130px]' />
                                        If .NET Framework 3.5 is not installed. .NET Framework 3.5 installation windows will pop up. If yoiu are prompted you should install .NET Framework 3.5 and Reboot computer For Windows Server 2003, you must also install Windows Imaging Component (WIC) on the target computer before .NET Framework 3.5 installation:
                                   </p>
                                   <ul>
                                        <li>
                                             <Link href="#" className='text-lg font-normal flex gap-4'>
                                                  <IoMdDownload size={16} className='text-Orange' />
                                                  <span className='text-lightBlue underline'>
                                                       32-bit Windows Imaging Component
                                                  </span>
                                             </Link>
                                        </li>
                                        <li>
                                             <Link href="#" className='text-lg font-normal flex gap-4'>
                                                  <IoMdDownload size={16} className='text-Orange' />
                                                  <span className='text-lightBlue underline'>
                                                       64-bit Windows Imaging Component
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
                                   4. Once you launch the application, you will see the Welcome page, click Next
                              </p>
                              <Image src={Setup1} alt='setup1' />
                         </div>
                         <div>
                              <p className='text-lg font-semibold text-darkBlue mb-5'>
                                   5. On the License Agreement page, select I Agree and then click Next.
                              </p>
                              <Image src={Setup2} alt='setup2' />
                         </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-7  mt-7'>
                         <div>
                              <p className='text-lg font-semibold text-darkBlue mb-5'>
                                   6. Browse folder location to install and choose Just me or Everyone. On the Network Credentials page, click Next.
                              </p>
                              <Image src={Setup3} alt='setup3' />
                         </div>
                         <div>
                              <p className='text-lg font-semibold text-darkBlue mb-12'>
                                   7. On the Confirm Installation page, click Next.
                              </p>
                              <Image src={Setup4} alt='setup4' />
                         </div>
                    </div>
                    <div className='mt-7'>
                         <div>
                              <p className='text-lg font-semibold text-darkBlue text-center'>
                                   8. On the Installation Complete page, click Close.
                              </p>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default InstallSimplySNMPAgent