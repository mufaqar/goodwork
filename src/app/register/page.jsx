"use client";

import React, { useRef, useState } from "react";
import Header from "../components/header";
import Link from "next/link";
import Fb from "../../../public/images/facebook.png";
import Gogl from "../../../public/images/google.png";
import Twitr from "../../../public/images/twitter.png";
import Lnkdn from "../../../public/images/linkedin.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "@/config/firebase";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import SuccessMessage from "../components/success-messag";

const Register = () => {
  const captcha = useRef(null);

  const [matchPassword, setMatchPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [strength, setStrength] = useState("");
  const [isPassword, setIsPassword] = useState(false);

  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      setMatchPassword(false);
      registor(data);
    } else {
      setMatchPassword(true);
    }
  };

  const registor = async (data) => {
    if (captcha.current.getValue()) {
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        // localStorage.setItem('user', JSON.stringify(user));
        // Send email verification
        await sendEmailVerification(user.auth.currentUser);
        auth.signOut();
        // Redirect to a confirmation page or display a success message
        setSuccess(true);
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setErrorMessage(
            "Email is already in use. Please choose a different email address."
          );
        } else {
          console.log("Error:", error.message);
        }
      }
    } else {
      setErrorMessage("Please varify you are not robot.!");
    }
  };

  const handleChange = (event) => {
    checkPasswordStrength(event.target.value);
  };

  const checkPasswordStrength = (password) => {
    if (password.length > 0) {
      setIsPassword(true);
    } else {
      setIsPassword(false);
    }
    // Define criteria for password strength
    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    const mediumRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})"
    );

    if (strongRegex.test(password)) {
      setStrength("strong");
    } else if (mediumRegex.test(password)) {
      setStrength("medium");
    } else {
      setStrength("weak");
    }
  };

  return (
    <main className='bg-darkBlue bg-[url("/images/register-bg.png")] bg-blend-multiply bg-center bg-cover bg-no-repeat min-h-screen'>
      <Header />
      {success ? (
        <SuccessMessage />
      ) : (
        <section className="min-h-screen flex items-center justify-center mt-12">
          <div className="container mx-auto px-4">
            <div className="max-w-[499px] m-auto bg-white md:p-[50px] p-5 rounded-[20px]  shadow-[0_15px_30px_rgba(0,0,0,0.05)]">
              <h1 className="md:text-[32px] text-2xl font-semibold text-center text-darkBlue mb-2">
                Create a New Account
              </h1>
              <p className="text-lg font-normal text-darkBlue/50 text-center">
                Use the form below to create a new account.
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-7">
                <div className="grid gap-4">
                  <div className="w-full">
                    <label htmlFor="name" className="hidden mb-2">
                      Display Name
                    </label>
                    <input
                      {...register("displayName")}
                      className="px-5 py-4 rounded-[30px] text-sm font-normal placeholder:text-darkBlue text-darkBlue focus:outline-none w-full border border-[#DFE3ED]"
                      placeholder="Display Name"
                      type="text"
                      id="name"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="email" className="hidden mb-2">
                      Email
                    </label>
                    <input
                      {...register("email", { required: true })}
                      className="px-5 py-4 rounded-[30px] text-sm font-normal placeholder:text-darkBlue text-darkBlue focus:outline-none w-full border border-[#DFE3ED]"
                      placeholder="Email"
                      type="email"
                      id="email"
                    />
                  </div>
                  {errors.email && (
                    <span className="text-red-400">Email is required</span>
                  )}
                  <div className="w-full">
                    <label htmlFor="password" className="hidden mb-2">
                      Password
                    </label>
                    <input
                      {...register("password", { required: true })}
                      onChange={handleChange}
                      className="px-5 py-4 rounded-[30px] text-sm font-normal placeholder:text-darkBlue text-darkBlue focus:outline-none w-full border border-[#DFE3ED]"
                      placeholder="Password"
                      type="password"
                      id="password"
                    />
                  </div>
                  {errors.email && (
                    <span className="text-red-400">Password is required</span>
                  )}
                  <div className="w-full">
                    <label htmlFor="confirm-password" className="hidden mb-2">
                      Confirm Password
                    </label>
                    <input
                      {...register("confirmPassword", { required: true })}
                      className="px-5 py-4 rounded-[30px] text-sm font-normal placeholder:text-darkBlue text-darkBlue focus:outline-none w-full border border-[#DFE3ED]"
                      placeholder="Confirm Password"
                      type="password"
                      id="confirm-password"
                    />
                  </div>
                  {isPassword && (
                    <p className="text-sm font-normal text-darkBlue/50 text-center">
                      Password Strength:
                      {strength === "weak" && (
                        <span className="text-red-500 capitalize">
                          {strength}
                        </span>
                      )}
                      {strength === "medium" && (
                        <span className="text-orange-400 capitalize">
                          {strength}
                        </span>
                      )}
                      {strength === "strong" && (
                        <span className="text-green-500 capitalize">
                          {strength}
                        </span>
                      )}
                    </p>
                  )}

                  {errors.email && (
                    <span className="text-red-400">
                      Confirm Password is required
                    </span>
                  )}
                  {matchPassword && (
                    <span className="text-red-400 text-center">
                      Password & confirm Password are not matched!
                    </span>
                  )}
                  <span className="text-center text-red-400">
                    {errorMessage}
                  </span>
                  <div className="max-w-[265px] mx-auto w-full">
                    <p className="text-sm font-normal text-darkBlue/50 text-center">
                      Passwords are required to be a minimum of 6 characters in
                      length.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <ReCAPTCHA
                      ref={captcha}
                      sitekey="6Lc4T3kpAAAAAJed0weYXJyGi2W3f7Gcntptl98P"
                      onChange={console.log("captcha value")}
                    />
                  </div>
                  <div className="w-full mt-5">
                    <button
                      type="submit"
                      className="text-lg font-medium px-[20px] py-[14px] bg-Orange text-white hover:bg-white hover:text-Orange border border-Orange rounded-[40px] w-full"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      <footer>
        <div className="container mx-auto px-4 py-12">
          <ul className="flex gap-5 my-5 text-white justify-center">
            <li>
              <Link href="#">
                <Image
                  src={Gogl}
                  alt="facebook"
                  className="filter hover:contrast-50"
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src={Fb}
                  alt="facebook"
                  className="filter hover:contrast-50"
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src={Twitr}
                  alt="facebook"
                  className="filter hover:contrast-50"
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src={Lnkdn}
                  alt="facebook"
                  className="filter hover:contrast-50"
                />
              </Link>
            </li>
          </ul>
          <p className="text-sm font-normal text-white/30 text-center">
            Copyright © 2014. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Register;
