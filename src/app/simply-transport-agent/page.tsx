import React from "react";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";
import Link from "next/link";

import Overview from "../../../public/images/overview.png";
import sta1 from "../../../public/images/sta-1.jpg";
import sta2 from "../../../public/images/sta-2.jpg";
import sta3 from "../../../public/images/sta-3.jpg";
import sta4 from "../../../public/images/sta-4.jpg";
import sta5 from "../../../public/images/sta-5.jpg";
import sta6 from "../../../public/images/sta-6.jpg";
import sta7 from "../../../public/images/sta-7.jpg";
import sta8 from "../../../public/images/sta-8.jpg";
import sta9 from "../../../public/images/sta-9.jpg";
import sta10 from "../../../public/images/sta-10.jpg";
import sta11 from "../../../public/images/sta-11.jpg";
import sta12 from "../../../public/images/sta-12.jpg";
import sta13 from "../../../public/images/sta-13.jpg";
import sta14 from "../../../public/images/sta-14.jpg";
import sta15 from "../../../public/images/sta-15.jpg";
import sta16 from "../../../public/images/sta-16.jpg";
import sta17 from "../../../public/images/sta-17.jpg";
import sta18 from "../../../public/images/sta-18.jpg";
import sta19 from "../../../public/images/sta-19.jpg";
import Img_Domain from "../../../public/images/domain.png";

const Simply_Transport_Agent = () => {
    return (
        <main>
            <Header />
            <Banner
                title="Simply Transport Agent"
                subTitle="Simply Transport Agent for Exchange 2010/2013. Extend Exchange mail routing based on sender domain or Group."
                image="/images/agent-bg.png"
            />

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-[660px] mx-auto mb-12">
                        <h2 className="md:text-[42px] md:leading-[49px] text-4xl font-semibold text-darkBlue text-center">
                            Simply Exchange Transport Agent
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
                        <div>
                            <h2 className="text-3xl font-semibold text-darkBlue mb-4">
                                Overview
                            </h2>
                            <p className="text-lg font-normal text-darkBlue">
                                Simply Transport Agent allows Exchange to route outgoing mail
                                based on sender domain or based on a distribution group in
                                Active Directory.
                            </p>
                            <p className="text-lg font-normal text-darkBlue">
                                Exchange 2010 does not provide any option on the Send Connectors
                                or Transport rules to allow sender based routing. If you need to
                                route all outgoing mail from a specific domain, or members of a
                                certain group to an encryption server to encrypt outgoing mail
                                before sending out to external users. Simply Transport Agent
                                will help you to archive this goal.
                            </p>
                        </div>
                        <div>
                            <Image src={Overview} alt="overview" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-10">
                <div className="container mx-auto px-4">
                    <div className="w-full mx-auto mb-7">
                        <h2 className="md:text-[42px] md:leading-[49px] text-4xl font-semibold text-darkBlue text-center">
                            How to configure Global Routing Table
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-12">
                        <div>
                            <h2 className="text-3xl font-semibold text-darkBlue mb-4">
                                1. Run “SimplyManagementTool.msc”
                            </h2>
                            <Image src={sta1} alt="overview" className="max-w-[600px]" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-12">
                        <div>
                            <h2 className="text-3xl font-semibold text-darkBlue mb-4">
                                2. Verify you create SendConnector using proper Address Space,
                                this address space is not target domain you will send to. This
                                address spaces is next hop.
                            </h2>
                            <Image src={sta2} alt="overview" className="max-w-[600px]" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-12">
                        <div>
                            <h2 className="text-3xl font-semibold text-darkBlue mb-4">
                                3. Create Routing Table to set specific domain sending to
                                designated “SendConnectoer”
                            </h2>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                a. Click “Global Routing Table” on left pane
                            </h3>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                b. Click “New Routing” on Actions pane
                            </h3>
                            <Image src={sta3} alt="overview" className="max-w-[600px]" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-12">
                        <div>
                            <h2 className="text-3xl font-semibold text-darkBlue mb-4">
                                3. Type routing info
                            </h2>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                a. Routing Name: Routing name
                            </h3>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                b. Sender Domain: “prov.com”
                            </h3>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                c. Recipient Domain: “*” is all domai{" "}
                                <span className="text-[#F83D06]">
                                    (If you want to scope specific domain, type domain name)
                                </span>
                            </h3>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                d. Next Hop: Next Hop in sender connector as address space
                            </h3>
                            <Image src={sta4} alt="overview" className="max-w-[600px]" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-12">
                        <div>
                            <h2 className="text-3xl font-semibold text-darkBlue mb-4">
                                4. Review Routing Table you created
                            </h2>

                            <Image src={sta5} alt="overview" className="max-w-[600px]" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-full mx-auto mb-12">
                        <h2 className="md:text-[42px] md:leading-[49px] text-4xl font-semibold text-darkBlue text-center">
                            How to configure Routing Group per server
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
                        <div>
                            <p className="text-lg font-normal text-darkBlue">
                                Create Server Routing table. Server Routing table is belong to
                                each server. This routing table is only applied to server. This
                                server routing table is based on Active directory group. Any
                                user sending from in designated group will be applied. This
                                server routing table take have the precedence of over global
                                routing table
                            </p>
                            <h3 className="text-xl mt-5 pl-6 font-semibold text-darkBlue mb-4">
                                1. Click “Server Routing Table” on left pane and choose proper
                                server name.
                            </h3>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                2. Click “New Group” in Actions pane.
                            </h3>
                        </div>
                        <div>
                            <Image src={sta6} alt="overview" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-12">
                        <div>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                a. Group Name: Group name
                            </h3>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                b. Priority: 0 is highest, bigger is lower priority.
                            </h3>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                c. Choose Active Directory Group by clicking button “…”
                            </h3>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                d. Recipient Domain: * is all recipients.
                            </h3>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                e. Next Hop: Next Hop in sender connector as address space.
                            </h3>
                            <Image src={sta7} alt="overview" className="max-w-[600px]" />
                            <Image
                                src={sta8}
                                alt="overview"
                                className="max-w-[600px] mt-4 "
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-full mx-auto mb-12">
                        <h2 className="md:text-[42px] md:leading-[49px] text-4xl font-semibold text-darkBlue text-center">
                            How to create a Rewrite Entry
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
                        <div>
                            <p className="text-lg font-normal text-darkBlue">
                                This rewrite entry table is to change sender address; you can
                                archive this same task by creating rewrite entry on Exchange
                                Edge server.
                            </p>
                            <p className="text-lg font-normal text-darkBlue">
                                However you should create same rewrite entry table in each all
                                edge server.
                            </p>
                            <p className="text-lg font-normal text-darkBlue">
                                This feature of Simply Exchange Transport Agent is able to
                                simplify and manage rewriting sender address at central
                                management tool.
                            </p>
                        </div>
                        <div>
                            <Image src={sta9} alt="overview" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-12">
                        <div>
                            <h2 className="text-3xl font-semibold text-darkBlue mb-4">
                                Routing Scenario Example
                            </h2>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                1. SendConnector lists
                            </h3>

                            <div className="relative overflow-x-auto my-5">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Address Space
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Smart Hosts
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-6 py-4 text-white">ArchivingSendConnector</td>
                                            <td className="px-6 py-4">to.archiving.com</td>
                                            <td className="px-6 py-4">10.10.0.1</td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-6 py-4 text-white">ReviewSendConnector</td>
                                            <td className="px-6 py-4">to.review.com</td>
                                            <td className="px-6 py-4">10.10.0.1</td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-6 py-4 text-white">EncryptionSendConnector</td>
                                            <td className="px-6 py-4">to.encrypt.com</td>
                                            <td className="px-6 py-4">10.10.0.1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <Image src={sta10} alt="overview" className="max-w-[600px]" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-12">
                        <div>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                2. Global Routing
                            </h3>
                            <div className="relative overflow-x-auto my-5">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Type
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Sender Domain
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Recipient Domain
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-6 py-4 text-white">Global Routing </td>
                                            <td className="px-6 py-4">GR1</td>
                                            <td className="px-6 py-4">igoodworks.com</td>
                                            <td className="px-6 py-4">*</td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-6 py-4 text-white">Global Routing </td>
                                            <td className="px-6 py-4">GR2</td>
                                            <td className="px-6 py-4">igoodworks.com</td>
                                            <td className="px-6 py-4">yahoo.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <Image src={sta11} alt="overview" className="max-w-[600px]" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-12">
                        <div>
                            <h2 className="text-3xl font-semibold text-darkBlue mb-4">
                                Simulation
                            </h2>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                • Send to james@hostmail.com from test1@prov.com
                            </h3>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                • Result: Next hop is “to.archiving.com” by RE1 and GR1
                            </h3>
                            <Image src={sta12} alt="overview" className="max-w-[600px]" />
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                • Send to peter@yahoo.com from test1@prov.com
                            </h3>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                • Result: Next hop is “to.review.com” by RE1 and GR2
                            </h3>
                            <Image src={sta13} alt="overview" className="max-w-[600px]" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-12">
                        <div>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                3. Routing Group
                            </h3>
                            <div className="relative overflow-x-auto my-5">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Type
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Active Directory Group
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Recipient Domain
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Next Hop
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-6 py-4 text-white">Routing Group</td>
                                            <td className="px-6 py-4">RG1</td>
                                            <td className="px-6 py-4">LegalDL</td>
                                            <td className="px-6 py-4">google.com</td>
                                            <td className="px-6 py-4">to.encrypt.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                • sales@igoodworks.com is a member of LegalDL
                            </h3>
                            <Image src={sta14} alt="overview" className="max-w-[600px]" />
                            <Image src={sta15} alt="overview" className="max-w-[600px] my-5" />
                            <Image src={sta16} alt="overview" className="max-w-[600px]" />
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4 mt-4">
                                • Send to peter@google.com from sales@prov.com
                            </h3>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                • Result: Next hop is “to.encrypt.com” by RE1 and RG1
                            </h3>
                            <Image src={sta17} alt="overview" className="max-w-[600px]" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-12">
                        <div>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                4. Rewrite Entry
                            </h3>
                            <div className="relative overflow-x-auto my-5">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Type
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Domain
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Email Address
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                New Address
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-6 py-4 text-white">Rewrite Entry</td>
                                            <td className="px-6 py-4">RE1</td>
                                            <td className="px-6 py-4">prov.com</td>
                                            <td className="px-6 py-4">*</td>
                                            <td className="px-6 py-4">igoodworks.com</td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-6 py-4 text-white">Rewrite Entry</td>
                                            <td className="px-6 py-4">RE2</td>
                                            <td className="px-6 py-4">prov.com</td>
                                            <td className="px-6 py-4">*</td>
                                            <td className="px-6 py-4">david@prov.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <Image src={sta18} alt="overview" className="max-w-[600px]" />

                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4 mt-4">
                                • Send to peter@google.com from david@prov.com
                            </h3>
                            <h3 className="text-xl pl-6 font-semibold text-darkBlue mb-4">
                                • Result: Next hop is “to.encrypt.com” by RE2 and RG1
                            </h3>
                            <Image src={sta19} alt="overview" className="max-w-[600px]" />
                        </div>
                    </div>
                </div>
            </section>








            <section className="py-16 bg-[#F6FAFE]">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
                        <div>
                            <div className="mb-7">
                                <h2 className="text-3xl font-semibold text-darkBlue mb-4">
                                    Sender Domain Based Routing
                                </h2>
                                <p className="text-lg font-normal text-darkBlue">
                                    This feature is typically useful for hosting provider which
                                    host multiple domain in the same Exchange organization.
                                </p>
                                <p className="text-lg font-normal text-darkBlue">
                                    Hosting providers sometimes need to route specific domains to
                                    different target mail systems. For example some customer
                                    domains should be encrypted for outgoing mail or should use
                                    dedicated outgoing spam filters. Hosting providers can achieve
                                    this scenario using Simply Transport Agent.
                                </p>
                            </div>
                            <div className="mb-7">
                                <h2 className="text-3xl font-semibold text-darkBlue mb-4">
                                    Distribution Group Based Routing
                                </h2>
                                <p className="text-lg font-normal text-darkBlue">
                                    Some organizations want to separate some department staff's
                                    outgoing mail to be routed to a dedicated path. For example,
                                    all legal department staff's outgoing mail could be routed to
                                    an encryption server using Simply Transport Agent.
                                </p>
                            </div>
                            <div className="">
                                <h2 className="text-3xl font-semibold text-darkBlue mb-4">
                                    Rewrite sender address
                                </h2>
                                <p className="text-lg font-normal text-darkBlue">
                                    This feature is pretty much the same as the rewrite feature of
                                    Exchange Edge Server, however Simply Transport Agent doesn’t
                                    require a rewrite entry on each HUB server.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-semibold text-darkGreen mb-4">
                                Deploying Simply-SNMP Agent
                            </h2>
                            <Image src={Img_Domain} alt="overview" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 mt-12">
                    <h3 className="text-2xl font-semibold text-darkGreen">
                        Download trial version
                    </h3>
                    <div className="grid md:grid-cols-4 grid-cols-1 justify-between gap-9 mt-6">
                        <div className="max-w-[354px]">
                            <Image
                                src="/images/file-gren.png"
                                alt="icon"
                                width={50}
                                height={50}
                            />
                            <p className="text-lg font-medium text-darkBlue mt-6 mb-5">
                                Simply Exchange Transport Agent Management 64 bit for Exchange
                                2010
                            </p>
                            <Link
                                href="#"
                                className="text-lg font-medium text-lightBlue underline hover:no-underline"
                            >
                                Download
                            </Link>
                        </div>
                        <div className="max-w-[354px]">
                            <Image
                                src="/images/file-gren.png"
                                alt="icon"
                                width={50}
                                height={50}
                            />
                            <p className="text-lg font-medium text-darkBlue mt-6 mb-5">
                                Simply Exchange Transport Agent 64 bit (Exchange 2010 SP1)
                            </p>
                            <Link
                                href="#"
                                className="text-lg font-medium text-lightBlue underline hover:no-underline"
                            >
                                Download
                            </Link>
                        </div>
                        <div className="max-w-[354px]">
                            <Image
                                src="/images/file-gren.png"
                                alt="icon"
                                width={50}
                                height={50}
                            />
                            <p className="text-lg font-medium text-darkBlue mt-6 mb-5">
                                Simply Exchange Transport Agent 64 bit (Exchange 2010 SP2)
                            </p>
                            <Link
                                href="#"
                                className="text-lg font-medium text-lightBlue underline hover:no-underline"
                            >
                                Download
                            </Link>
                        </div>
                        <div className="max-w-[354px]">
                            <Image
                                src="/images/file-gren.png"
                                alt="icon"
                                width={50}
                                height={50}
                            />
                            <p className="text-lg font-medium text-darkBlue mt-6 mb-5">
                                Simply Exchange Transport Agent 64 bit (Exchange 2010 SP3)
                            </p>
                            <Link
                                href="#"
                                className="text-lg font-medium text-lightBlue underline hover:no-underline"
                            >
                                Download
                            </Link>
                        </div>
                    </div>
                    <div className="mt-14 text-center">
                        <Link
                            href="/download-software"
                            className="text-lg font-medium px-[30px] py-[10px] bg-Orange text-white hover:bg-transparent hover:text-Orange border border-Orange rounded-[40px]"
                        >
                            See more download
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Simply_Transport_Agent;
