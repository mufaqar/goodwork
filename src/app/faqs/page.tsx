"use client"
import React from 'react'
import Faqs_Sec from '../components/faqs'
import Page_Banner from '../components/page-banner'
import Header from '../components/header'
import Footer from '../components/footer'

const Faqs = () => {
    return (
        <main>
            <Header />
            <Page_Banner
                title="Frequently Asked Questions"
                image="/images/faq-bg.png"
            />
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
                        <Faqs_Sec />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Faqs