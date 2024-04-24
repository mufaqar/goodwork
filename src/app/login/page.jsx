'use client'

import React, { useContext, useState } from 'react';
import Header from '../components/header';
import Link from 'next/link';
import Fb from '../../../public/images/facebook.png';
import Gogl from '../../../public/images/google.png';
import Twitr from '../../../public/images/twitter.png';
import Lnkdn from '../../../public/images/linkedin.png';
import Image from 'next/image';
import { useForm, SubmitHandler } from "react-hook-form";
import { auth } from '@/config/firebase';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { usePathname, useRouter } from 'next/navigation'
import { withAuth } from '@/lib/withAuth'
import { SettingsContext } from '@/context/setting-context';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { RxCross1 } from "react-icons/rx";


const Login = () => {
    const router = useRouter()
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { lsSetUser } = useContext(SettingsContext)
    const [errorMessage, setErrorMessage] = useState('')
    const [resetPassword, setResetPassword] = useState(false)

    const onSubmit = async (data) => {
        await signInWithEmailAndPassword(auth, data.email, data.password).then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem('user', JSON.stringify(user))
            lsSetUser(user)
            // router.push('/')
            window.location.href = '/';
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage({message: errorMessage, statusCode: errorCode})
        });
    };

    const loginWithGoogle = async () => {
        const googleProvider = new GoogleAuthProvider();
        const { user } = await signInWithPopup(auth, googleProvider);
        if (user) {
            localStorage.setItem('user', JSON.stringify(user))
            lsSetUser(user)
            window.location.href = window.history.back()
            // router.push('/')
        }
    }


    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const auth = getAuth();
    
    const handleResetPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            setMessage("Thanks! If we find a matching account, we'll send you an email. Please check your inbox.");
        } catch (error) {
            setMessage('Error sending password reset email: ' + error.message);
        }
    };

    const goBack = () => {
        window.history.back();
    }

    return (
        <main className='bg-darkBlue bg-[url("/images/login-bg.png")] bg-blend-multiply bg-center bg-cover bg-no-repeat min-h-screen'>
            <Header />
            <section className="min-h-screen flex items-center justify-center mt-12">
                <div className='container mx-auto px-4'>
                    
                    {
                        resetPassword ?
                            <div className='max-w-[499px] relative m-auto bg-white md:p-[50px] p-5 rounded-[20px]  shadow-[0_15px_30px_rgba(0,0,0,0.05)]'>
                                <RxCross1 className='text-white text-2xl absolute -top-10 cursor-pointer right-3' onClick={goBack}/>
                                <h1 className='md:text-[32px] text-2xl font-semibold text-center text-darkBlue mb-2'>
                                    Forget <p>Password </p>
                                </h1>
                                {message ?
                                    <p className="text-lg font-normal text-center text-darkGreen"><span className='text-darkBlue'>✔ </span> {message}</p>
                                    :
                                    <div>
                                        <p className='text-lg font-normal text-darkBlue/50 text-center'>
                                            Please enter your email to reset password
                                        </p>
                                        <form onSubmit={handleSubmit(onSubmit)} className='mt-7'>
                                            <div className="grid gap-4">
                                                <div className="w-full">
                                                    <label htmlFor="email" className="hidden mb-2">Email</label>
                                                    <input value={email} type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} className="px-5 py-4 rounded-[30px] text-sm font-normal placeholder:text-darkBlue text-darkBlue focus:outline-none w-full border border-[#DFE3ED]" id="email" />
                                                </div>
                                                <span className="text-center text-red-400">{message}</span>
                                                <div className='w-full my-5'>
                                                    <button onClick={handleResetPassword} className="text-lg font-medium px-[20px] py-[14px] bg-Orange text-white hover:bg-white hover:text-Orange border border-Orange rounded-[40px] w-full" > Reset Password </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                }


                                <button className="text-center mt-5 w-full text-blue-500 hover:underline" onClick={() => setResetPassword(false)}>Back To Login</button>
                            </div>
                            :
                            <div className='max-w-[499px] relative m-auto bg-white md:p-[50px] p-5 rounded-[20px]  shadow-[0_15px_30px_rgba(0,0,0,0.05)]'>
                                <RxCross1 className='text-white text-2xl absolute -top-10 cursor-pointer right-3' onClick={goBack}/>
                                <h1 className='md:text-[32px] text-2xl font-semibold text-center text-darkBlue mb-2'>
                                    Login - <p>Welcome, </p>
                                </h1>
                                <p className='text-lg font-normal text-darkBlue/50 text-center'>
                                    Please enter your user name and password.  <Link href="/login" className='font-medium text-lightBlue'>
                                        Register
                                    </Link> if you don't have an account.
                                </p>
                                <form onSubmit={handleSubmit(onSubmit)} className='mt-7'>
                                    <div className="grid gap-4">
                                        <div className="w-full">
                                            <label htmlFor="email" className="hidden mb-2">User ID (Email)</label>
                                            <input {...register("email", { required: true })} className="px-5 py-4 rounded-[30px] text-sm font-normal placeholder:text-darkBlue text-darkBlue focus:outline-none w-full border border-[#DFE3ED]" placeholder="User ID (Email)" type="email" id="email" />
                                        </div>
                                        <div className="w-full">
                                            <label htmlFor="password" className="hidden mb-2">Password</label>
                                            <input {...register("password", { required: true })} className="px-5 py-4 rounded-[30px] text-sm font-normal placeholder:text-darkBlue text-darkBlue focus:outline-none w-full border border-[#DFE3ED]" placeholder="Password" type="password" id="password" />
                                        </div>
                                        <div className='flex items-center mt-2 gap-3'>
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
                                        {
                                            errorMessage && <span className="text-center text-red-400">{
                                                errorMessage?.message?.includes('user-not-found')  ? <span>User Not Found</span> : <span>Password Incorrect!</span>
                                            }</span>
                                        }
                                        
                                        <div className='w-full my-5'>
                                            <input type="submit" value={`Login`} className="text-lg font-medium px-[20px] py-[14px] bg-Orange text-white hover:bg-white hover:text-Orange border border-Orange rounded-[40px] w-full" />
                                        </div>

                                    </div>
                                </form>
                                <button onClick={loginWithGoogle} className="text-lg -mt-2 font-medium px-[20px] py-[14px] bg-blue-500 text-white hover:bg-white hover:text-blue-500 border border-blue-500 rounded-[40px] w-full">
                                    Login With Google
                                </button>
                                <button type="submit" className="text-lg mt-3 font-medium px-[20px] py-[14px] bg-gray-800 text-white hover:bg-white hover:text-gray-800 border border-gray-800 rounded-[40px] w-full">
                                    Login With Microsoft
                                </button>
                                <button className="text-center mt-5 w-full text-blue-500 hover:underline" onClick={() => setResetPassword(true)}>Forget Password</button>
                            </div>
                    }


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

export default withAuth(Login)


