import Image from 'next/image'
import React from 'react'

const SuccessMessag = () => {
  return (
    <div className='max-w-[900px] m-auto bg-white md:p-[50px] p-5 rounded-[20px]  shadow-[0_15px_30px_rgba(0,0,0,0.05)] text-center'>
      <div>
        <Image src="/images/secces.png" alt='secces' width={150} height={150} className='mx-auto' />
      </div>
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
    </div>
  )
}

export default SuccessMessag