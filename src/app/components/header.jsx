"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { FiLogIn } from 'react-icons/fi';
import { NavLinks, NavLinksType } from '../const/navlinks';
import { SettingsContext } from '@/context/setting-context';
import { signOut } from 'firebase/auth';
import { auth } from '@/config/firebase';
import { useRouter } from 'next/navigation'

const Header = () => {
    const router = useRouter()
    const { lsuser, lsSetUser } = useContext(SettingsContext)
    const [state, setState] = useState(false)

    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(null);
    const handleMenu = (id) => {
        if (dropdown === id) {
            return setDropdown(null)
        }
        setDropdown(id)
        //setDropdown(!dropdown)
    }
    const [subNav, setSubNav] = useState(null);
    const handleSubNav = (id) => {
        if (subNav === id) {
            return setSubNav(null)
        }
        setSubNav(id)
        //setSubNav(!subNav)
    }

    const handleLogout = () => {
        signOut(auth);
        localStorage.removeItem('user')
        lsSetUser()
        router.push('/login')
    }

    useEffect(() => {
        setTimeout(() => {
            setState(true)
        }, 1600)
    }, [])

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
                        {/* main pages */}
                        {NavLinks.map((item, idx) => {
                            return <li key={idx}>
                                <span className="flex items-center justify-between ">
                                    <Link href={item.link}
                                        onMouseEnter={() => handleMenu(item.id)}
                                        onClick={() => { setDropdown(null), setSubNav(null), setOpen(false) }}
                                        className='flex gap-1 items-center text-base font-normal text-white hover:font-bold'>
                                        {item.name}
                                    </Link>
                                    {
                                        item.sub_menu ? (
                                            <span className="cursor-pointer text-white">
                                                <BiChevronDown onMouseEnter={() => setDropdown(item.id)} />
                                            </span>
                                        ) :
                                            ''
                                    }
                                </span>
                                {/* sub pages */}
                                {
                                    item.sub_menu ? (
                                        <ul onMouseLeave={() => setDropdown(null)} className={` flex-col md:absolute md:px-5 md:pb-5 pb-0 pt-5 2xl:top-[81px] top-[71px] gap-4 bg-darkBlue ${dropdown === item.id ? 'flex' : 'hidden'} `}>
                                            {item.sub_menu?.map((sub_item, _idx) => {
                                                return <li key={_idx}>
                                                    <span className="flex items-center justify-between group cursor-pointer"  
                                                    onMouseEnter={() => handleSubNav(sub_item.id)}>
                                                        <Link
                                                            onClick={() => { setDropdown(null), setSubNav(null), setOpen(false) }}
                                                            href={sub_item.link} className="text-base font-normal text-white hover:text-Orange" >
                                                            {sub_item.name}
                                                        </Link>
                                                        {
                                                            sub_item.sub_menu1 ? (
                                                                <span className="cursor-pointer text-white">
                                                                    <BiChevronDown onMouseEnter={() => setSubNav(sub_item.id)} />
                                                                </span>
                                                            ) :
                                                                ''
                                                        }
                                                    </span>
                                                    {/* inner Sub pages */}
                                                    {
                                                        sub_item.sub_menu1 ? (
                                                            <ul onMouseLeave={() => setSubNav(null)} className={` flex-col md:absolute md:px-5 md:pb-5 pb-0 pt-5 2xl:top-[81px] top-[71px] gap-4 bg-darkBlue md:w-full md:left-full ${subNav === sub_item.id ? 'flex' : 'hidden'} `}>
                                                                {sub_item.sub_menu1?.map((_sub_item, _idx) => {
                                                                    return <li key={_idx}>
                                                                        <Link
                                                                            onClick={() => { setDropdown(null), setOpen(false) }}
                                                                            href={_sub_item.link} className="text-base font-normal text-white hover:text-Orange" >
                                                                            {_sub_item.name}
                                                                        </Link>
                                                                    </li>
                                                                })}
                                                            </ul>
                                                        ) :
                                                            ''
                                                    }
                                                </li>
                                            })}
                                        </ul>
                                    ) :
                                        ''
                                }
                            </li>
                        })}
                    </ul>

                </div>
                <div className="w-3/12 md:block hidden">
                    {
                        state && <ul className='flex justify-end items-center"'>
                            {
                                lsuser?.accessToken ? <li>
                                    <button onClick={() => handleLogout()}
                                        className='flex gap-1 items-center text-base font-medium py-2 px-5 bg-transparent text-lightBlue hover:bg-transparent hover:text-white border border-transparent rounded-[30px]'>
                                        <FiLogIn /> Logout
                                    </button>
                                </li> : <li>
                                    <Link href="/login"
                                        className='flex gap-1 items-center text-base font-medium py-2 px-5 bg-transparent text-lightBlue hover:bg-transparent hover:text-white border border-transparent rounded-[30px]'>
                                        <FiLogIn /> Login
                                    </Link>
                                </li>
                            }

                            {
                                !lsuser?.accessToken && <li>
                                    <Link href="/register"
                                        className='flex gap-1 items-center text-base font-medium py-2 px-5 bg-Orange text-white hover:bg-white hover:text-Orange border border-Orange hover:border-white rounded-[30px]'>
                                        Sign Up
                                    </Link>
                                </li>
                            }

                        </ul>
                    }

                </div>
            </nav>
        </header>
    )
}

export default Header