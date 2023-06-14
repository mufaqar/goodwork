import React from 'react'

const Login = () => {
    return (
        <main className='bg-[url("/images/login-bg.png")] '>
            <section className="py-16 bg-[#F6FAFE]">
                <div className='container mx-auto px-4 grid md:grid-cols-3 grid-cols-1 gap-7'>
                    <div>

                        <p className='text-2xl font-normal text-darkBlue text-center mt-6'>
                            Grow revenues in the rapidly expanding Identity Management market
                        </p>
                    </div>
                    <div>

                        <p className='text-2xl font-normal text-darkBlue text-center mt-6'>
                            Enhance your business with an additional source of recurring revenues
                        </p>
                    </div>
                    <div>
                        <p className='text-2xl font-normal text-darkBlue text-center mt-6'>
                            Leverage our free training, developer support, and free demo/trial program
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Login