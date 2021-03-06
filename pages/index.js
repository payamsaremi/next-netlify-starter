import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="make__middle">
      <Head>
        <title>New Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="NEW BLOG!" color="green"/>
        <p className="mt-5">
          Learn more <Link href={`/about`}><a className='font-bold hover:bg-gray-100 p-2 rounded-lg underline'>About</a></Link>
        </p>
      </main>

      <Footer />
    </div>
  )
}
