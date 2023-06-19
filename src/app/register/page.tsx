import React from 'react';
import Header from '../components/header';
import Link from 'next/link';
import Fb from '../../../public/images/facebook.png';
import Gogl from '../../../public/images/google.png';
import Twitr from '../../../public/images/twitter.png';
import Lnkdn from '../../../public/images/linkedin.png';
import Image from 'next/image';

const Register = () => {
    return (
        <main className='bg-darkBlue bg-[url("/images/register-bg.png")] bg-blend-multiply bg-center bg-cover bg-no-repeat min-h-screen'>
            <Header />
            <section className="min-h-screen flex items-center justify-center mt-12">
                <div className='container mx-auto px-4'>
                    <div className='max-w-[499px] m-auto bg-white md:p-[50px] p-5 rounded-[20px]  shadow-[0_15px_30px_rgba(0,0,0,0.05)]'>
                        <h1 className='md:text-[32px] text-2xl font-semibold text-center text-darkBlue mb-2'>
                            Create a New Account
                        </h1>
                        <p className='text-lg font-normal text-darkBlue/50 text-center'>
                            Use the form below to create a new account.
                        </p>
                        <form action="#" className='mt-7'>
                            <div className="grid gap-4">
                                <div className="w-full">
                                    <label htmlFor="name" className="hidden mb-2">Display Name</label>
                                    <input className="px-5 py-4 rounded-[30px] text-sm font-normal placeholder:text-darkBlue text-darkBlue focus:outline-none w-full border border-[#DFE3ED]" placeholder="Display Name" type="text" id="name" required />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="email" className="hidden mb-2">Email</label>
                                    <input className="px-5 py-4 rounded-[30px] text-sm font-normal placeholder:text-darkBlue text-darkBlue focus:outline-none w-full border border-[#DFE3ED]" placeholder="Email" type="email" id="email" required />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="password" className="hidden mb-2">Password</label>
                                    <input className="px-5 py-4 rounded-[30px] text-sm font-normal placeholder:text-darkBlue text-darkBlue focus:outline-none w-full border border-[#DFE3ED]" placeholder="Password" type="password" id="password" required />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="confirm-password" className="hidden mb-2">Confirm Password</label>
                                    <input className="px-5 py-4 rounded-[30px] text-sm font-normal placeholder:text-darkBlue text-darkBlue focus:outline-none w-full border border-[#DFE3ED]" placeholder="Confirm Password" type="password" id="confirm-password" required />
                                </div>
                                <div className="max-w-[265px] mx-auto w-full">
                                    <p className='text-sm font-normal text-darkBlue/50 text-center'>
                                        Passwords are required to be a minimum of 6 characters in length.
                                    </p>
                                </div>
                                <div className='w-full mt-7'>
                                    <button type="submit" className="text-lg font-medium px-[20px] py-[14px] bg-Orange text-white hover:bg-white hover:text-Orange border border-Orange rounded-[40px] w-full">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <footer>
                <div className='container mx-auto px-4 py-12'>
                    <ul className='flex gap-5 my-5 text-white justify-center'>
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
                    <p className='text-sm font-normal text-white/30 text-center'>
                        Copyright © 2014. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </main>
    )
}

export default Register