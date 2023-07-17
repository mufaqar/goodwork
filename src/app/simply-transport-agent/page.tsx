import React from 'react';
import Banner from '../components/banner';
import Footer from '../components/footer';
import Header from '../components/header';
import Image from 'next/image';
import Overview from '../../../public/images/overview.png';
import Img_Domain from '../../../public/images/domain.png';
import Link from 'next/link';

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
                <div className='container mx-auto px-4'>
                    <div className='max-w-[660px] mx-auto mb-7'>
                        <h2 className="md:text-[42px] md:leading-[49px] text-4xl font-semibold text-darkBlue text-center">
                            Simply Exchange Transport Agent
                        </h2>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-12'>
                        <div>
                            <h2 className="text-3xl font-semibold text-darkBlue mb-4">
                                Overview
                            </h2>
                            <p className='text-lg font-normal text-darkBlue'>
                                Simply Transport Agent allows Exchange to route outgoing mail based on sender domain or based on a distribution group in Active Directory.
                            </p>
                            <p className='text-lg font-normal text-darkBlue'>
                                Exchange 2010 does not provide any option on the Send Connectors or Transport rules to allow sender based routing. If you need to route all outgoing mail from a specific domain, or members of a certain group to an encryption server to encrypt outgoing mail before sending out to external users. Simply Transport Agent will help you to archive this goal.
                            </p>
                        </div>
                        <div>
                            <Image src={Overview} alt="overview" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-[#F6FAFE]">
                <div className='container mx-auto px-4'>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-12'>
                        <div>
                            <div className='mb-7'>
                                <h2 className="text-3xl font-semibold text-darkBlue mb-4">
                                    Sender Domain Based Routing
                                </h2>
                                <p className='text-lg font-normal text-darkBlue'>
                                    This feature is typically useful for hosting provider which host multiple domain in the same Exchange organization.
                                </p>
                                <p className='text-lg font-normal text-darkBlue'>
                                    Hosting providers sometimes need to route specific domains to different target mail systems. For example some customer domains should be encrypted for outgoing mail or should use dedicated outgoing spam filters. Hosting providers can achieve this scenario using Simply Transport Agent.
                                </p>
                            </div>
                            <div className='mb-7'>
                                <h2 className="text-3xl font-semibold text-darkBlue mb-4">
                                    Distribution Group Based Routing
                                </h2>
                                <p className='text-lg font-normal text-darkBlue'>
                                    Some organizations want to separate some department staff's outgoing mail to be routed to a dedicated path. For example, all legal department staff's outgoing mail could be routed to an encryption server using Simply Transport Agent.
                                </p>
                            </div>
                            <div className=''>
                                <h2 className="text-3xl font-semibold text-darkBlue mb-4">
                                    Rewrite sender address
                                </h2>
                                <p className='text-lg font-normal text-darkBlue'>
                                    This feature is pretty much the same as the rewrite feature of Exchange Edge Server, however Simply Transport Agent doesn’t require a rewrite entry on each HUB server.
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
                <div className='container mx-auto px-4 mt-12'>
                    <h3 className='text-2xl font-semibold text-darkGreen'>
                        Download trial version
                    </h3>
                    <div className='grid md:grid-cols-4 grid-cols-1 justify-between gap-9 mt-6'>
                        <div className='max-w-[354px]'>
                            <Image
                                src="/images/file-gren.png"
                                alt='icon'
                                width={50}
                                height={50} />
                            <p className='text-lg font-medium text-darkBlue mt-6 mb-5'>
                                Simply Exchange Transport Agent Management 64 bit for Exchange 2010
                            </p>
                            <Link href="#" className='text-lg font-medium text-lightBlue underline hover:no-underline'>
                                Download
                            </Link>
                        </div>
                        <div className='max-w-[354px]'>
                            <Image
                                src="/images/file-gren.png"
                                alt='icon'
                                width={50}
                                height={50} />
                            <p className='text-lg font-medium text-darkBlue mt-6 mb-5'>
                                Simply Exchange Transport Agent 64 bit (Exchange 2010 SP1)
                            </p>
                            <Link href="#" className='text-lg font-medium text-lightBlue underline hover:no-underline'>
                                Download
                            </Link>
                        </div>
                        <div className='max-w-[354px]'>
                            <Image
                                src="/images/file-gren.png"
                                alt='icon'
                                width={50}
                                height={50} />
                            <p className='text-lg font-medium text-darkBlue mt-6 mb-5'>
                                Simply Exchange Transport Agent 64 bit (Exchange 2010 SP2)
                            </p>
                            <Link href="#" className='text-lg font-medium text-lightBlue underline hover:no-underline'>
                                Download
                            </Link>
                        </div>
                        <div className='max-w-[354px]'>
                            <Image
                                src="/images/file-gren.png"
                                alt='icon'
                                width={50}
                                height={50} />
                            <p className='text-lg font-medium text-darkBlue mt-6 mb-5'>
                                Simply Exchange Transport Agent 64 bit (Exchange 2010 SP3)
                            </p>
                            <Link href="#" className='text-lg font-medium text-lightBlue underline hover:no-underline'>
                                Download
                            </Link>
                        </div>
                    </div>
                    <div className='mt-14 text-center'>
                        <Link href="/download-software" className='text-lg font-medium px-[30px] py-[10px] bg-Orange text-white hover:bg-transparent hover:text-Orange border border-Orange rounded-[40px]'>
                            See more download
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default Simply_Transport_Agent