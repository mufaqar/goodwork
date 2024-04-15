"use client";
import React, { useContext, useState } from "react";
import Header from "../components/header";
import Link from "next/link";
import Fb from "../../../public/images/facebook.png";
import Gogl from "../../../public/images/google.png";
import Twitr from "../../../public/images/twitter.png";
import Lnkdn from "../../../public/images/linkedin.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import SuccessMessage from "../components/success-messag";
import { SettingsContext } from "@/context/setting-context";
import CaptchaCom from "../components/captcha";

const Contact_Us = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [status, setStatus] = useState(false);
  const [success, setSuccess] = useState(false);
  const { captcha } = useContext(SettingsContext)
  const [errorMessage, setErrorMessage] = useState("");


  const onSubmit = (data) => {
    if (!captcha.current.getValue()) {
      if (data.remember) {
        setStatus(true);
        fetch("/api/sendmail", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((res) => {
          console.log("Response received");
          if (res.status === 200) {
            console.log("Response succeeded!");
            reset();
            setStatus(false);
            setSuccess(true);
          }
        });
      } else {
        alert("Please select Terms & condition");
      }
    }else {
      setErrorMessage("Please varify you are not robot.!");
    }
  };

  return (
    <main className='bg-darkBlue bg-[url("/images/contact-bg.png")] bg-blend-multiply bg-center bg-cover bg-no-repeat min-h-screen'>
      <Header />
      <section className="min-h-screen flex items-center justify-center mt-12">
        {success ? (
          <SuccessMessage contactus />
        ) : (
          <div className="container mx-auto px-4 flex md:flex-row flex-col gap-7 items-center">
            <div className="max-w-[488px]">
              <h1 className="md:text-6xl text-5xl font-semibold text-white mb-5">
                Contact Us
              </h1>
              <h2 className="md:text-[42px] md:leading-[49px] text-4xl font-semibold mb-5">
                <span className="text-white">
                  Do you have a general question?{" "}
                </span>{" "}
                <span className="text-Orange"> Drop us a line.</span>
              </h2>
              <ul className="flex gap-5 mt-7 text-white">
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
            </div>
            <div className=" m-auto bg-white md:py-[50px] md:px-10 p-5 rounded-[20px]  shadow-[0_15px_30px_rgba(0,0,0,0.05)]">
              <h1 className="md:text-[32px] md:leading-[37.12px] text-2xl font-semibold text-center text-darkBlue max-w-[415px] mx-auto mb-2">
                <span className="text-darkBlue">Reach out to Good </span>{" "}
                <span className="text-Orange"> Works</span>{" "}
                <span className="text-darkBlue"> to get started </span>
              </h1>
              <form className="mt-7" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-5">
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div className="w-full">
                      <label htmlFor="name" className="hidden mb-2">
                        Name
                      </label>
                      <input
                        className={`px-5 py-4 rounded-[30px] text-sm font-normal placeholder:text-darkBlue text-darkBlue focus:outline-none w-full border border-[#DFE3ED] ${
                          errors.name && "border-red-400"
                        }`}
                        placeholder="Your Name*"
                        type="text"
                        id="name"
                        {...register("name", { required: true })}
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="email" className="hidden mb-2">
                        Email
                      </label>
                      <input
                        className={`px-5 py-4 rounded-[30px] text-sm font-normal placeholder:text-darkBlue text-darkBlue focus:outline-none w-full border border-[#DFE3ED] ${
                          errors.email && "border-red-400"
                        }`}
                        placeholder="Your Email*"
                        type="email"
                        id="email"
                        {...register("email", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div className="w-full">
                      <label htmlFor="phone" className="hidden mb-2">
                        Phone
                      </label>
                      <input
                        className={`px-5 py-4 rounded-[30px] text-sm font-normal placeholder:text-darkBlue text-darkBlue focus:outline-none w-full border border-[#DFE3ED] ${
                          errors.phone && "border-red-400"
                        }`}
                        placeholder="Phone Number*"
                        type="tel"
                        id="phone"
                        {...register("phone", { required: true })}
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="company" className="hidden mb-2">
                        Company Name
                      </label>
                      <input
                        className={`px-5 py-4 rounded-[30px] text-sm font-normal placeholder:text-darkBlue text-darkBlue focus:outline-none w-full border border-[#DFE3ED] ${
                          errors.company && "border-red-400"
                        }`}
                        placeholder="Company Name*"
                        type="text"
                        id="company"
                        {...register("company", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <label htmlFor="subject" className="hidden mb-2">
                      Subject
                    </label>
                    <input
                      className={`px-5 py-4 rounded-[30px] text-sm font-normal placeholder:text-darkBlue text-darkBlue focus:outline-none w-full border border-[#DFE3ED] ${
                        errors.subject && "border-red-400"
                      }`}
                      placeholder="Subject"
                      type="text"
                      id="subject"
                      {...register("subject", { required: true })}
                    />
                  </div>
                  <div className="w-full">
                    <textarea
                      id="message"
                      className={`px-5 py-4 rounded-[19px] text-sm font-normal placeholder:text-darkBlue text-darkBlue focus:outline-none w-full border border-[#DFE3ED] h-[126px] ${
                        errors.message && "border-red-400"
                      }`}
                      rows={3}
                      placeholder="Message"
                      {...register("message", { required: true })}
                    ></textarea>
                  </div>
                  <div className=" md:gap-8 gap-4">
                    <div className="max-w-[259px] w-full flex items-center gap-3 mb-4">
                      <input
                        className={`relative h-6 w-6 border border-[#F0F0F0] outline-0 focus:outline-0 hover:outline-0 `}
                        type="checkbox"
                        value=""
                        id="remember"
                        {...register("remember")}
                      />
                      <p className="text-sm font-normal text-darkBlue">
                        I have read and agree to the{" "}
                        <Link
                          href="#"
                          className="text-lightBlue font-medium underline"
                        >
                          Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="#"
                          className="text-lightBlue font-medium underline"
                        >
                          Terms of Service.
                        </Link>
                      </p>
                      
                    </div>
                    <CaptchaCom/>
                    <span className="text-sm mt-2 text-red-500">{errorMessage}</span>
                    <div className="max-w-[200px] ml-auto md:mr-0 mt-4 mr-auto w-full text-right">
                      <button
                        type="submit"
                        className="text-lg font-medium px-[20px] py-[14px] bg-Orange text-white hover:bg-white hover:text-Orange border border-Orange rounded-[40px] w-full"
                      >
                        {status ? "Sending..." : "Send"}
                      </button>
                    </div>
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
      <footer>
        <div className="container mx-auto px-4 py-12">
          <p className="text-xs font-normal text-white/30">Privacy Policy</p>
          <p className="text-xs font-normal text-white/30">
            Statement of intent From time to time, you will be asked to submit
            personal information about yourself (e.g. name and email address
            etc) in order to receive or use services on our website. By entering
            your details in the fields requested, you enable GoodWorks
            Communications Ltd to provide you with the services you select.
            Whenever you provide such personal information, we will treat that
            information in accordance with this policy. Our services are
            designed to give you the information that you want to receive. Once
            information is input and you have downloaded our trial version of
            our products you are giving us permission to use this information.
            We therefore may contact you from time to time with newsletters,
            product information and product updates. GoodWorks Communications
            Ltd will act in accordance with current legislation and aim to meet
            current Internet best practice. Third party vendors, including
            Google, use cookies to serve ads based on a user's prior visits to
            http://www.igoodworks.com. You may opt out of Google's use of
            cookies by visiting the Google advertising opt-out page or Network
            Advertising Initiative opt out page.
          </p>
          <p className="text-xs font-normal text-white/30 mt-3">
            Changes to this Privacy Policy
          </p>
          <p className="text-xs font-normal text-white/30">
            GoodWorks Communications may amend this policy from time to time. If
            we make any substantial changes in the way we use your personal
            information we will update this page accordingly.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Contact_Us;
