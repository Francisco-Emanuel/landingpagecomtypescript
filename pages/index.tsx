import type { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../components'
import {AboutUs, Chef, FindUs, Footer, Gallery, Header, Laurels, SpecialMenu} from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
      
    </div>
  )
}

export default Home
