import React from 'react'


interface IPageBanner {
    title?: string;
    image: string;
}

const Page_Banner = ({ title, image }: IPageBanner) => {
    return (
        <section className={`bg-center bg-cover bg-no-repeat pt-40 pb-12 -mt-36`}
            style={{ backgroundImage: `url(${image})` }}>
            <div className='container mx-auto px-4'>
                <div className='max-w-[929px] mx-auto'>
                    <h1 className='md:text-6xl text-5xl font-semibold text-center text-white mb-5'>
                        {title}
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Page_Banner