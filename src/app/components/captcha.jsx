"use client";
import { SettingsContext } from "@/context/setting-context";
import React, { useContext } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const CaptchaCom = () => {
  const { captcha } = useContext(SettingsContext);
  return (
    <>
      <div className="flex justify-center">
        <ReCAPTCHA
          ref={captcha}
          sitekey="6Lc4T3kpAAAAAJed0weYXJyGi2W3f7Gcntptl98P"
          onChange={console.log("captcha value")}
        />
      </div>
    </>
  );
};

export default CaptchaCom;
