import React from 'react'
import Page_Banner from '../components/page-banner'
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';
import Customers_Sec from '../components/customers';


const Customers = () => {
    return (
        <main>
            <Header />
            <Page_Banner
                title="Customers"
                image="/images/customer-bg.png"
            />
            <section className="py-16">
                <div className='container mx-auto px-4'>
                    <div className='max-w-[645px] mx-auto mb-12'>
                        <h2 className="md:text-[42px] md:leading-[49px] text-4xl font-semibold mb-5 text-center">
                            <span className="text-Orange">
                                GoodWorks  </span> <span className="text-darkBlue"> is trusted by these and many more great customers!</span>

                        </h2>
                    </div>

                    <Customers_Sec />
                </div>
            </section>

            <section className="py-16">
                <div className='container mx-auto px-4'>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-7'>
                        <div className='bg-[#F6FAFE] p-7 rounded-[20px] border border-[#F0F0F0] shadow-[0_15px_30px_0_rgba(0,0,0,0.05)] grid content-between'>
                            <div>
                                <Image
                                    src="/images/firstnet.png"
                                    alt='img'
                                    width={268}
                                    height={65}
                                    className=''
                                />
                                <p className='text-lg font-normal text-darkBlue'>
                                    “Simply Password Sync is an awesome product that just works and has been crucial in ensuring we provide a unified password experience for our customers using our Hosted Exchange and Hosted Lync offerings. The sales and support provided by the GoodWorks Communications team has always been prompt and efficient and it’s been a pleasure doing business with them.”
                                </p>
                            </div>
                            <p className='text-lg font-bold text-darkBlue text-right'>
                                - Kevin Boddy
                            </p>
                        </div>
                        <div className='bg-[#F6FAFE] p-7 rounded-[20px] border border-[#F0F0F0] shadow-[0_15px_30px_0_rgba(0,0,0,0.05)] grid content-between'>
                            <div>
                                <Image
                                    src="/images/openhost.png"
                                    alt='img'
                                    width={268}
                                    height={65}
                                    className=''
                                />
                                <p className='text-lg font-normal text-darkBlue'>
                                    “You software is very good because it's a working answer to AD Synchronization/Password synchronization. Single-Sign-On via ADFS is just too painful to deploy. Your support is very good too and was readily available to help us in getting to deployment.”
                                </p>
                            </div>
                            <p className='text-lg font-bold text-darkBlue text-right'>
                                - Jordan Roy
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Customers
