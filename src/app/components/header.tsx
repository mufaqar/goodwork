"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { FiLogIn } from 'react-icons/fi';


const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <header className=''>
            <nav className="flex  px-4 py-4 items-center container mx-auto">
                <div className="md:w-3/12 w-3/12 flex items-center">
                    <Link href="/">
                        <Image src="/images/logo.png" alt="logo"
                            width={150}
                            height={50} />
                    </Link>
                </div>
                <div className="md:w-6/12 w-9/12 flex md:justify-center justify-end items-center">

                    <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                        setOpen(!open)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                        <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                    </div>

                    <ul className={`flex md:flex-row flex-col gap-7 ${open ? "absolute top-[60px] left-0 h-screen w-screen bg-white py-8 px-4" : "md:flex hidden"} transition-transform duration-300 ease-in-out `}>
                        <li>
                            <Link href="/"
                                className='flex gap-1 items-center'>
                                Products
                                <BiChevronDown />
                            </Link>
                        </li>
                        <li>
                            <Link href="#"
                                className='flex gap-1 items-center'>
                                Resources
                                <BiChevronDown />
                            </Link>
                        </li>
                        <li>
                            <Link href="#"
                                className='flex gap-1 items-center'>
                                About
                                <BiChevronDown />
                            </Link>
                        </li>
                        <li>
                            <Link href="#"
                                className='flex gap-1 items-center'>
                                Q&A
                            </Link>
                        </li>
                        <li>
                            <Link href="#"
                                className='flex gap-1 items-center'>
                                Contuct Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-3/12 md:block hidden">
                    <ul className='flex gap-10 justify-end items-center"'>
                        <li>
                            <Link href="/"
                                className='flex gap-1 items-center'>
                                <FiLogIn /> Login
                            </Link>
                        </li>
                        <li>
                            <Link href="/"
                                className='flex gap-1 items-center'>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header