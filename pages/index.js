import Head from 'next/head'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import BannerSection from '../components/BannerSection'
import IntroSection from '../components/IntroSection'
import InfoSection from '../components/InfoSection'
import TestimonialSection from '../components/TestimonialSection'

export default function Home() {
  return (
    <div className="homeContainer">
      <Head>
        <title>Let's Fly</title>
        <meta name="description" content="Let's fly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        {/*
        <Hero /> 
        <BannerSection />
        <IntroSection />
        <BannerSection />
        <InfoSection />
        <TestimonialSection />
        */}
      </main>

      {/* <Footer /> */}
    </div>
  )
}

{/*
export async function getStaticProps(){

  const res = await fetch ('', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      `,
    })
  })
}
*/}