import Image from 'next/image'
import React from 'react'

const SuccessMessage = ({ contactus }: any) => {
  return (
    <div className='max-w-[900px] mt-12 m-auto bg-white md:p-[50px] p-5 rounded-[20px]  shadow-[0_15px_30px_rgba(0,0,0,0.05)] text-center'>
      <div>
        <Image src="/images/secces.png" alt='secces' width={150} height={150} className='mx-auto' />
      </div>
      {
        !contactus ? <>
          <p className='text-2xl font-normal text-darkBlue text-center max-w-[640px] mx-auto my-5'>
            Welcome to iGoodWorks! We’re excited you are joining us. Please check your email to begin.
          </p>
          <p className='text-lg font-normal text-darkBlue text-center'>
            Please check your email and click "Confirm Email" button to complete your sign up.
          </p>
          <p className='text-lg font-normal text-darkBlue text-center my-5'>
            Haven’t received it yet?
          </p>
          <button className="text-lg font-normal px-8 py-2 bg-darkGreen text-white hover:bg-white hover:text-darkGreen border border-darkGreen rounded-[40px] w-fit mx-auto">
            Resend
          </button>
        </> : <p className='text-lg font-normal text-darkBlue text-center my-10'>
        Thank you for reaching out! We are eager to solve problems, and we can't wait to chat with you about how we can help. We will respond as soon as we can (Typically, within 6 hours). In the meantime, please feel free to check out our Q&A section for related answers.        </p>
      }
    </div>
  )
}

export default SuccessMessage