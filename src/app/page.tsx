import Image from 'next/image'
import Banner from './components/banner'
import Trusted from './components/trusted'

export default function Home() {
  return (
    <main>
      <Banner />
      <Trusted />
    </main>
  )
}
