import React from 'react';
import Header from '../components/header';
import Link from 'next/link';
import Fb from '../../../public/images/facebook.png';
import Gogl from '../../../public/images/google.png';
import Twitr from '../../../public/images/twitter.png';
import Lnkdn from '../../../public/images/linkedin.png';
import Image from 'next/image';

const Contact_Us = () => {
    return (
        <main className='bg-darkBlue bg-[url("/images/contact-bg.png")] bg-blend-multiply bg-center bg-cover bg-no-repeat min-h-screen'>
            <Header />
            <section className="min-h-screen flex items-center justify-center mt-12">
                <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-7 items-center'>
                    <div>
                        <h1 className='md:text-6xl text-5xl font-semibold text-white mb-5'>
                            Contact Us
                        </h1>
                        <h2 className="md:text-[42px] md:leading-[49px] text-4xl font-semibold mb-5">
                            <span className="text-white">
                                Do you have a general question?  </span> <span className="text-Orange"> Drop us a line.</span>
                        </h2>
                        <ul className='flex gap-5 mt-7 text-white'>
                            <li>
                                <Link href="#">
                                    <Image src={Gogl} alt="facebook" className='filter hover:contrast-50' />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <Image src={Fb} alt="facebook" className='filter hover:contrast-50' />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <Image src={Twitr} alt="facebook" className='filter hover:contrast-50' />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <Image src={Lnkdn} alt="facebook" className='filter hover:contrast-50' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='max-w-[499px] m-auto bg-white md:p-[50px] p-5 rounded-[20px]  shadow-[0_15px_30px_rgba(0,0,0,0.05)]'>
                        <h1 className='md:text-[32px] text-2xl font-semibold text-center text-darkBlue mb-2'>
                            <span className="text-darkBlue">
                                Reach out to Good </span> <span className="text-Orange"> Works</span> <span className="text-darkBlue"> to get started </span>
                        </h1>
                        <p className='text-lg font-normal text-darkBlue text-center'>
                            Use the form below to create a new account.
                        </p>
                        <form action="#" className='mt-7'>
                            <div className="grid gap-4">
                                <div className="w-full">
                                    <label htmlFor="name" className="hidden mb-2">Name</label>
                                    <input className="px-5 py-4 rounded-[30px] text-sm font-normal text-darkBlue focus:outline-none w-full border border-[#F0F0F0]" placeholder="Your Name*" type="text" id="name" required />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="email" className="hidden mb-2">Email</label>
                                    <input className="px-5 py-4 rounded-[30px] text-sm font-normal text-darkBlue focus:outline-none w-full border border-[#F0F0F0]" placeholder="Your Email*" type="email" id="email" required />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="phone" className="hidden mb-2">Phone</label>
                                    <input className="px-5 py-4 rounded-[30px] text-sm font-normal text-darkBlue focus:outline-none w-full border border-[#F0F0F0]" placeholder="Phone Number*" type="tel" id="phone" required />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="company" className="hidden mb-2">Company Name</label>
                                    <input className="px-5 py-4 rounded-[30px] text-sm font-normal text-darkBlue focus:outline-none w-full border border-[#F0F0F0]" placeholder="Company Name*" type="text" id="company" required />
                                </div>
                                <div className="w-full">
                                    <textarea id="note" className="px-5 py-4 rounded-[19px] text-sm font-normal text-darkBlue focus:outline-none w-full border border-[#F0F0F0] h-[126px]" rows={3} placeholder="Note"></textarea>
                                </div>
                                <div className='w-full mt-7'>
                                    <button type="submit" className="text-lg font-medium px-[20px] py-[14px] bg-Orange text-white hover:bg-white hover:text-Orange border border-Orange rounded-[40px] w-full">
                                        Send
                                    </button>
                                </div>
                                <div className="max-w-[359px] mx-auto w-full">
                                    <p className='text-sm font-normal text-darkBlue'>
                                        I have read and agree to the <Link href="#" className='text-lightBlue font-medium underline'>Privacy Policy</Link> and <Link href="#" className='text-lightBlue font-medium underline'>Terms of Service.</Link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <footer>
                <div className='container mx-auto px-4 py-12'>
                    <p className='text-xs font-normal text-white/30'>
                        Privacy Policy
                    </p>
                    <p className='text-xs font-normal text-white/30'>
                        Statement of intent From time to time, you will be asked to submit personal information about yourself (e.g. name and email address etc) in order to receive or use services on our website. By entering your details in the fields requested, you enable GoodWorks Communications Ltd to provide you with the services you select. Whenever you provide such personal information, we will treat that information in accordance with this policy. Our services are designed to give you the information that you want to receive. Once information is input and you have downloaded our trial version of our products you are giving us permission to use this information. We therefore may contact you from time to time with newsletters, product information and product updates. GoodWorks Communications Ltd will act in accordance with current legislation and aim to meet current Internet best practice. Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to http://www.igoodworks.com. You may opt out of Google's use of cookies by visiting the Google advertising opt-out page or Network Advertising Initiative opt out page.
                    </p>
                    <p className='text-xs font-normal text-white/30 mt-3'>
                        Changes to this Privacy Policy
                    </p>
                    <p className='text-xs font-normal text-white/30'>
                        GoodWorks Communications may amend this policy from time to time. If we make any substantial changes in the way we use your personal information we will update this page accordingly.
                    </p>
                </div>
            </footer>
        </main>
    )
}

export default Contact_Us