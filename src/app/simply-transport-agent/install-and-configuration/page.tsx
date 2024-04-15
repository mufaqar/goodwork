import React from "react";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Image from "next/image";

import i1 from "../../../../public/images/i-1.jpg";
import i2 from "../../../../public/images/i-2.jpg";
import i3 from "../../../../public/images/i-3.jpg";
import i4 from "../../../../public/images/i-4.jpg";
import i5 from "../../../../public/images/i-5.jpg";
import i6 from "../../../../public/images/i-6.jpg";
import i7 from "../../../../public/images/i-7.jpg";
import i8 from "../../../../public/images/i-8.jpg";
import i9 from "../../../../public/images/i-9.jpg";
import i10 from "../../../../public/images/i-10.jpg";
import i11 from "../../../../public/images/i-11.jpg";
import i12 from "../../../../public/images/i-12.jpg";
import i13 from "../../../../public/images/i-13.jpg";
import i14 from "../../../../public/images/i-14.jpg";
import i15 from "../../../../public/images/i-15.jpg";



const Simply_Transport_Agent = () => {
    return (
        <main>
            <Header />
            <Banner
                title="Install & Configuration"
                subTitle="Simply Transport Agent for Exchange 2010/2013. Extend Exchange mail routing based on sender domain or Group."
                image="/images/agent-bg.png"
            />

            <section className="pb-10 mt-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-12">
                    <div>
                            <h2 className="md:text-[42px] md:leading-[49px] text-4xl font-semibold text-darkBlue mb-4">
                                Before You Begin
                            </h2>
                            <h3 className="text-xl pl-2 font-semibold text-darkBlue mb-4">
                                Objectives
                            </h3>
                            <p className="text-lg font-normal text-darkBlue">
                                After completing this installation on an Exchange 2010 Hub server, the
                                computer will have Transport Agent which enable sender based routing
                                server:
                            </p>
                            <h3 className="text-xl pl-2 font-semibold text-darkBlue my-4">
                                Prerequisites
                            </h3>
                            <p className="text-lg font-normal text-darkBlue">
                                Before working on this installation step, target computer must have:
                            </p>
                            <ul className="pl-4 list-disc text-lg font-normal text-darkBlue">
                                <li>NET Framework 3.5</li>
                                <li>Target server should be Exchange Hub Transport</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto mb-12">
                <h2 className="md:text-[42px] md:leading-[49px] text-4xl font-semibold text-darkBlue mb-5">
                    Deploying Simply Exchange Transport Agent
                </h2>
                <p className="text-lg font-normal text-darkBlue">
                    Download password capture agent and extract to any local drive.
                </p>
                <ul className="pl-4 list-disc text-lg font-normal text-darkBlue my-2">
                    <li className="text-blue-500">SimplyExchangeTransportAgent64.msi for x64 bit</li>
                </ul>
                <p className="text-lg font-normal text-darkBlue">In this document, we will use x64 bit module.</p>
            </div>

            <section className="pb-4">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-12">
                        <div>
                            <h2 className="text-3xl font-semibold text-darkBlue mb-4">
                                Install Simply Exchange Transport Agent
                            </h2>
                            <p className="text-lg font-normal text-darkBlue">
                                In the following task, you will install Simply Exchange Transport Agent on the appropriate computer.
                            </p>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4 mt-4">
                                1. Logon to Computer as Domain Administrator.
                            </h3>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                2. On Server, Run Windows Explorer and find SimplyExchangeTransportAgent64.exe in folder.
                            </h3>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                3. Run SimplyExchangeTransportAgent64.exe.
                            </h3>
                            <Image src={i1} alt="overview" className="max-w-[600px]" />
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue my-4">
                                4. On the Welcome page, click Next.
                            </h3>
                            <Image src={i2} alt="overview" className="max-w-[600px]" />
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue my-4">
                                5. On the License Agreement page, select I Agree and then click Next.
                            </h3>
                            <Image src={i3} alt="overview" className="max-w-[600px]" />
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue my-4">
                                6. Browse folder location to install and Choose Just me or Everyone. On the
                                Network Credentials page, click Next.
                            </h3>
                            <Image src={i4} alt="overview" className="max-w-[600px]" />
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue my-4">
                                7. On the Confirm Installation page, click Next.
                            </h3>
                            <Image src={i5} alt="overview" className="max-w-[600px]" />
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue my-4">
                                8. On the Installation Complete page, click Close.
                            </h3>
                            <Image src={i6} alt="overview" className="max-w-[600px]" />
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue my-4">
                                9. Confirm Simply Routing Agent Service exist on service list.
                            </h3>
                            <Image src={i7} alt="overview" className="max-w-[600px]" />
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue my-4">
                                10. Confirm “SimplyExchangeTransportAgent.dll” exist in C:\Program
                                Files\Microsoft\Exchange Server\V14\Public\
                            </h3>
                            <Image src={i8} alt="overview" className="max-w-[600px]" />
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue my-4">
                                11. Run “Exchange management Shell”
                            </h3>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue my-4">
                                12. Stop “Microsoft Exchange Transport” Service
                            </h3>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue my-4">
                                Run following command
                            </h3>
                            <p className="text-lg font-normal text-darkBlue">
                                NET STOP "Microsoft Exchange Transport"
                            </p>
                            <Image src={i9} alt="overview" className="max-w-[600px] mt-4" />
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue my-4">
                                13. Run following two commands on Exchange Powershell
                            </h3>
                            <p className="text-lg font-normal text-darkBlue">
                                Install-TransportAgent "SimplyExchangeTransportAgent" - TransportAgentFactory
                            </p>
                            <p className="text-lg font-normal text-darkBlue">
                                "SimplyExchangeTransportAgent.SimplyRoutingAgentFactory" -
                                AssemblyPath "C:\Program Files\Microsoft\Exchange
                                Server\V14\Public\SimplyExchangeTransportAgent.dll"
                            </p>
                            <h3 className="text-3xl font-semibold text-darkBlue my-4">
                                NOTE:
                            </h3>
                            <p className="text-lg font-normal text-red-500">To get proper version of simply exchange transport agent version (SimplyExchangeTransportAgent.dll).
                                Following DLLs should be sent to GoodWorks. We will send proper version back.</p>
                            <p className="text-lg font-normal text-darkBlue mt-4">
                                DLLs can be found in Exchange HUB server.
                            </p>
                            <p className="text-lg font-normal text-darkBlue">
                                location is C:\Program Files\Microsoft\Exchange Server\V14\Public
                            </p>
                            <p className="text-lg font-normal text-darkBlue mt-4">
                                Microsoft.Exchange.Data.Common.dll
                            </p>
                            <p className="text-lg font-normal text-darkBlue">
                                Microsoft.Exchange.Data.Transport.dll
                            </p>
                            <Image src={i10} alt="overview" className="max-w-[600px] mt-4" />
                            <p className="text-lg font-normal text-darkBlue mt-4">
                                Enable-TransportAgent "SimplyExchangeTransportAgent"
                            </p>
                            <Image src={i11} alt="overview" className="max-w-[600px] mt-4" />
                            <h3 className="text-3xl font-semibold text-darkBlue my-4">
                                IMPORTANT: Exit Powershell
                            </h3>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue my-4">
                                14. Start “Microsoft Exchange Transport” Service
                            </h3>
                            <p className="text-lg font-normal text-darkBlue mt-4">Run following command</p>
                            <p className="text-lg font-normal text-darkBlue mt-4">NET START "Microsoft Exchange Transport"</p>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue my-4">
                                15. Confirm “SimplyExchangeTransportAgent” is registered
                            </h3>
                            <p className="text-lg font-normal text-darkBlue mt-4">Get-TransportAgent</p>
                            <Image src={i12} alt="overview" className="max-w-[600px] mt-4" />

                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-16 mt-5">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-12">
                        <div>
                            <h2 className="md:text-[42px] md:leading-[49px] text-4xl font-semibold text-darkBlue mb-4">
                                Configure Simply Routing Agent Service
                            </h2>
                            <h3 className="text-3xl font-semibold text-darkBlue mb-4">
                                Configure and Register “Simply Routing Agent Service”
                            </h3>
                            <p className="text-lg font-normal text-darkBlue">
                                In the previous tasks, you installed Simply Exchange Transport Agent component in every Hub Transport Server. In the following task, you will
                                configure “Simply Routing Agent Service”.
                            </p>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue my-4">
                                1. Logon to Computer as Domain Administrative.
                            </h3>
                            <p className="text-lg font-normal text-darkBlue py-1">
                                On Server, Run Windows Explore and locate install folder.
                            </p>
                            <p className="text-lg font-normal text-darkBlue py-1">
                                Execute “SimplyTransportAgentSimulator.exe”
                            </p>
                            <Image src={i13} alt="overview" className="max-w-[600px] mt-4" />
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue my-4">
                                2. Choose Tool -&gt; Register
                            </h3>
                            <Image src={i14} alt="overview" className="max-w-[600px] mt-4" />
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue my-4">
                                3. Type license key
                            </h3>
                            <p className="text-lg font-normal text-darkBlue py-1">
                                Evaluation Key is
                                "BZDCHjCSqZSt8KlNz5IxsH9YUvIIFQfr3IehKNYefLo="
                            </p>
                            <p className="text-lg font-normal text-darkBlue py-1">
                                In the evaluation version, only user accounts starting with the name "test"
                                will work
                            </p>
                            <Image src={i15} alt="overview" className="max-w-[600px] mt-4" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Simply_Transport_Agent;
