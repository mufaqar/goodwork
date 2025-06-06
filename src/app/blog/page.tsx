import Blog from '../components/blog'
import Header from '../components/header';
import Footer from '../components/footer';
import Page_Banner from '../components/page-banner'
export default function Home() {
  return (
    <>
    <Header />
       <Page_Banner
           title="BLOG"
           image="/images/faq-bg.png"
        />
     <Blog/>
    <Footer />
    </>
  )
}


