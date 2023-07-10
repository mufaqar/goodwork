"use client"
import Trusted from './components/trusted';
import TabsRender from './components/tabs';
import User_censrio from './components/scensrio';
import Get_Started from './components/get-started';
import Forum from './components/forum';
import Faqs_Sec from './components/faqs';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';

export default function Home() {
  return (
    <main>
      <Header />
      <Main
        title="Simply Sync"
        subTitle="For Fast, Secure Synchronization of your users between multiple directories such as Active Directory, Azure, LDAP, and Google"
        buttontext="Try for Free"
        buttonLink="/contact"
        buttontext2="Talk to Us"
        buttonLink2="#"
        image="/images/mainBg.png"
      />
      <Trusted />
      <section className='py-16'>
        <div>
          <div className='mb-12'>
            <h2 className='md:text-[42px] md:leading-[49px] text-4xl font-medium text-center text-darkBlue'>
              Featured Product
            </h2>
          </div>
          <TabsRender />
        </div>
      </section>
      <User_censrio />
      <Get_Started />
      <Forum />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className='mb-12'>
            <h2 className='md:text-[42px] md:leading-[49px] text-4xl font-medium text-center text-darkBlue'>
              Frequently Asked Questions
            </h2>
            <p className='text-xl font-normal text-center text-darkBlue mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
          <div className="grid gap-5">
            <Faqs_Sec />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
