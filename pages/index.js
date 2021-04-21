import Head from 'next/head'
import Header from './components/Header'
import Hero from './components/Hero'
import Socials from './components/Socials'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nicholas Sakha | Entrepreneur, Content Creator, Mentor</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />
        <Hero />
        <Socials />
      </main>
    </div>
  )
}
