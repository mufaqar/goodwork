import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Page_Banner from '../components/page-banner'

const Question_Answer = () => {
    return (
        <main>
            <Header />
            <Page_Banner
                title="Q&A"
                image="/images/qa-bg.png"
            />
            <section className="py-16">
                <div className='container mx-auto px-4'>
                    <div>
                        <h2 className='text-[22px] leading-[25.89px] font-medium text-darkBlue'>
                            Categories
                        </h2>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Question_Answer