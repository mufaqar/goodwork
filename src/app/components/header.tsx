"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { FiLogIn } from 'react-icons/fi';
import { NavLinks, NavLinksType } from '../const/navlinks';

const Header = () => {

    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(null);
    const handleMenu = (id: any) => {
        if (dropdown === id) {
            return setDropdown(null)
        }
        setDropdown(id)
        //setDropdown(!dropdown)

    }

    return (
        <header className='relative z-50'>
            <nav className="flex  px-4 py-4 items-center container mx-auto">
                <div className="md:w-3/12 w-6/12 flex items-center">
                    <Link href="/">
                        <Image src="/images/logo.png" alt="logo"
                            width={166}
                            height={63}
                            className='' />
                    </Link>
                </div>
                <div className="md:w-6/12 w-6/12 flex md:justify-center justify-end items-center">

                    <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                        setOpen(!open)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                        <span className={`h-1 bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                    </div>

                    <ul className={`flex md:flex-row flex-col gap-7 ${open ? "absolute top-[90px] left-0 h-screen w-screen bg-darkBlue py-8 px-4" : "md:flex hidden"} transition-transform duration-300 ease-in-out `}>
                        {NavLinks.map((item: NavLinksType, idx: number) => {
                            return <li key={idx}>
                                <span className="flex items-center justify-between">
                                    <Link href={item.link}
                                        onClick={() => { setDropdown(null), setOpen(false) }}
                                        className='flex gap-1 items-center text-base font-normal text-white hover:text-Orange'>
                                        {item.name}
                                    </Link>
                                    {
                                        item.sub_menu ? (
                                            <span className="cursor-pointer text-white">
                                                <BiChevronDown onMouseEnter={() => handleMenu(item.id)} />
                                            </span>
                                        ) :
                                            ''
                                    }
                                </span>
                                <ul onMouseLeave={() => setDropdown(null)} className={` flex-col md:absolute md:px-5 md:pb-5 pb-0 pt-5 2xl:top-[81px] top-[71px] gap-4 bg-darkBlue ${dropdown === item.id ? 'flex' : 'hidden'} `}>
                                    {item.sub_menu?.map((sub_item: any, _idx: any) => {
                                        return <li key={_idx}>
                                            <Link
                                                onClick={() => { setDropdown(null), setOpen(false) }}
                                                href={sub_item.link} className="text-base font-normal text-white hover:text-Orange" >
                                                {sub_item.name}
                                            </Link>
                                        </li>
                                    })}
                                </ul>
                            </li>
                        })}
                    </ul>
                </div>
                <div className="w-3/12 md:block hidden">
                    <ul className='flex justify-end items-center"'>
                        <li>
                            <Link href="/login"
                                className='flex gap-1 items-center text-base font-medium py-2 px-5 bg-transparent text-lightBlue hover:bg-transparent hover:text-Orange border border-transparent rounded-[30px]'>
                                <FiLogIn /> Login
                            </Link>
                        </li>
                        <li>
                            <Link href="/"
                                className='flex gap-1 items-center text-base font-medium py-2 px-5 bg-Orange text-white hover:bg-transparent hover:text-Orange border border-Orange rounded-[30px]'>
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