import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGoogleCircle, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='bg-darkBlue py-14'>
      <div className='container mx-auto px-4 grid md:grid-cols-4 grid-cols-1 gap-14'>
        <div>
          <Link href="/">
            <Image src="/images/logo.png" alt="logo"
              width={166}
              height={63} 
             className=' h-auto' />
          </Link>
          <ul className='flex gap-5 my-5 text-white'>
            <li>
              <Link href="#">
                <AiFillGoogleCircle size={30} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <AiFillFacebook size={30} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <AiFillTwitterCircle size={30} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <AiFillLinkedin size={30} />
              </Link>
            </li>
          </ul>
          <p className='text-sm font-normal text-white'>
            Copyright © 2014. All Rights Reserved.
          </p>
        </div>
        <div>
          <h3 className='text-lg font-semibold text-white'>
            Products
          </h3>
          <ul className='mt-7 grid gap-3'>
            <li>
              <Link href="#" className='text-base font-normal text-white'>
                Simply Sync Password
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base font-normal text-white'>
                Simply SNMP Agent
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base font-normal text-white'>
                Simply Exhange Transport Agent
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-lg font-semibold text-white'>
            Resources
          </h3>
          <ul className='mt-7 grid gap-3'>
            <li>
              <Link href="#" className='text-base font-normal text-white'>
                Download Software
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base font-normal text-white'>
                Documentation
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base font-normal text-white'>
                Frequently Asked Questions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-lg font-semibold text-white'>
            Company
          </h3>
          <ul className='mt-7 grid gap-3'>
            <li>
              <Link href="#" className='text-base font-normal text-white'>
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base font-normal text-white'>
                Partner with Us
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base font-normal text-white'>
                Customers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer