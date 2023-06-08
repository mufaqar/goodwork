"use client"
import Banner from './components/banner'
import Trusted from './components/trusted'
import TabsRender from './components/tabs'
import User_censrio from './components/scensrio'
import Get_Started from './components/get-started'
import Forum from './components/forum'
import Faqs from './components/faqs'

export default function Home() {
  return (
    <main>
      <Banner />
      <Trusted />
      <section className='py-16'>
        <div>
          <div className='mb-12'>
            <h2 className='text-[42px] font-medium text-center text-darkBlue'>
              Featured Product
            </h2>
          </div>
          <TabsRender />
        </div>
      </section>
      <User_censrio />
      <Get_Started />
      <Forum />
      <Faqs />

    </main>
  )
}
