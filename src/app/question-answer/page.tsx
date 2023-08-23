"use client" 
import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Page_Banner from '../components/page-banner'
import QA_Tabs from '../components/qa-tabs'




const Question_Answer = async () => {
    


    return (
        <main>
            <Header />
            <Page_Banner
                title="Q&A"
                image="/images/qa-bg.png"
            />
            <section className="py-16">
                <QA_Tabs />
            </section>
            <Footer />
        </main>
    )
}

export default Question_Answer