import React from 'react';
import Header from '../components/header';
import Link from 'next/link';
import Fb from '../../../public/images/facebook.png';
import Gogl from '../../../public/images/google.png';
import Twitr from '../../../public/images/twitter.png';
import Lnkdn from '../../../public/images/linkedin.png';
import Image from 'next/image';

const Login = () => {
    return (
        <main className='bg-darkBlue bg-[url("/images/login-bg.png")] bg-blend-multiply bg-center bg-cover bg-no-repeat min-h-screen'>
            <Header />
            <section className="min-h-screen flex items-center justify-center md:mt-0 mt-12">
                <div className='container mx-auto px-4'>
                    <div className='max-w-[499px] m-auto bg-white md:p-[50px] p-5 rounded-[20px]  shadow-[0_15px_30px_rgba(0,0,0,0.05)]'>
                        <h1 className='md:text-[32px] text-2xl font-semibold text-center text-darkBlue mb-2'>
                            Login
                        </h1>
                        <p className='text-lg font-normal text-darkBlue text-center'>
                            Please enter your user name and password.  <Link href="#" className='font-medium text-lightBlue'>
                                Register
                            </Link> if you don't have an account.
                        </p>
                        <form action="#" className='mt-7'>
                            <div className="grid gap-4">
                                <div className="w-full">
                                    <label htmlFor="email" className="hidden mb-2">User ID (Email)</label>
                                    <input className="px-5 py-4 rounded-[30px] text-sm font-normal text-darkBlue focus:outline-none w-full border border-[#F0F0F0]" placeholder="User ID (Email)" type="email" id="email" required />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="password" className="hidden mb-2">Password</label>
                                    <input className="px-5 py-4 rounded-[30px] text-sm font-normal text-darkBlue focus:outline-none w-full border border-[#F0F0F0]" placeholder="Password" type="password" id="password" required />
                                </div>
                                <div className='w-full my-7'>
                                    <button type="submit" className="text-lg font-medium px-[20px] py-[14px] bg-Orange text-white hover:bg-white hover:text-Orange border border-Orange rounded-[40px] w-full">
                                        Login
                                    </button>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <input
                                        className="relative h-6 w-6 border border-[#F0F0F0] outline-0 focus:outline-0 hover:outline-0"
                                        type="checkbox"
                                        value=""
                                        id="remember" />
                                    <label
                                        className="hover:cursor-pointer"
                                        htmlFor="remember">
                                        Remember me?
                                    </label>
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

export default Login