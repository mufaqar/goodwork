import Image from 'next/image'
import React from 'react'

import Setup1 from '../../../../public/images/InstallandConfigureSNMPService/1.png';
import Setup2 from '../../../../public/images/InstallandConfigureSNMPService/2.png';
import Setup3 from '../../../../public/images/InstallandConfigureSNMPService/3.png';


const InstallandConfigureSNMPService = () => {
     return (
          <>
               <div id="link1">
                    <h2 className='md:text-3xl mb-5 mt-10 text-4xl font-bold  text-darkBlue'>
                         Install and Configure SNMP Service
                    </h2>
                    <div className=" gap-7 items-center mb-9 text-darkBlue">
                         <div>
                              <p className='md:text-lg'>Most of the information used by the SNMP service that you will need to configure is available in the SNMP Service Properties window accessed via the Services tab in the Network applet. This window will also appear after the SNMP service is initially installed. The SNMP Service Properties window does differ in appearance between Windows 2008 and 2012, but the information is basically the same. To configure the SNMP service you must be logged into an account with Administrator privileges.<br />
                                   To open the SNMP Service Properties window, double-click the Network applet in the Control Panel, click on the Services tab, select the SNMP Service from the Network Services list, and click the "Properties . . ." button.<br />
                                   The Microsoft SNMP Properties window should now be visible. The three tabs contain most of the SNMP service configuration information that is stored in the Windows registry. The Agent tab contains the values for the sysContact, sysLocation, and sysServices MIB-II variables.</p>
                              <figure className='max-w-[400px] mx-auto my-4'>
                                   <Image src={Setup1} alt='setup1' />
                              </figure>
                         </div>
                         <div>
                              <p className='md:text-lg'>The Traps tab allows you to configure the IP or IPX addresses or DNS host names of the trap destinations. The case-sensitive community name that is encoded in each trap message must also be specified. Up to five trap destination addresses may be entered per community name.</p>
                              <figure className='max-w-[400px] mx-auto my-4'>
                                   <Image src={Setup2} alt='setup1' />
                              </figure>
                         </div>
                         <div>
                              <p className='md:text-lg'>To add a new trap destination community name, click in the combo box and highlight the community name that is there (if any). Enter the new community name and click the Add button. Now click the "Add..." button under the Trap Destinations list box. Enter the address or host name of a trap destination. Repeat this step as necessary.<br /><br />
                                   The Security tab enables the sending of authentication traps and configures the communities that are considered valid by the SNMP agent. If no community names are listed, then all community names are accepted. The agent may also be configured to accept SNMP messages only from specific management hosts; to do this you must specify the host's name or its IP or IPX address.</p>
                              <figure className='max-w-[400px] mx-auto my-4'>
                                   <Image src={Setup3} alt='setup1' />
                              </figure>
                         </div>
                         <div>
                              <p className='md:text-lg'>All security settings are global to the agent. For example, you can't associate a specific community name with only a single management host address. All permitted managers are considered by the SNMP service to be members of all the community names listed. And the concept of read-only community names is not supported.<br /><br />
                                   New or updated properties information is not written to the registry until you click the Apply or OK buttons. Clicking the Cancel button or hitting the Escape key will discard any changes you have made in the Properties window.</p>
                              <figure className='max-w-[400px] mx-auto my-4'>
                              </figure>
                         </div>
                    </div>
               </div>
          </>
     )
}


export default InstallandConfigureSNMPService