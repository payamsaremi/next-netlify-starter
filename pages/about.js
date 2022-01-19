import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function About() {
  return (
    <div className="make__middle">
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="About Me" color="blue"/>
        <p className="mt-5">
          Not what you were looking for? <Link href={`/`}><a className='font-bold hover:bg-gray-100 p-2 rounded-lg underline'>Go Back</a></Link>
        </p>
      </main>

      <Footer />
    </div>
  )
}
