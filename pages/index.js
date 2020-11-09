import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
        <title>thi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
  </Head>
    <div className={styles.container}>
      Read <Link href="/posts/first-post"><a>this page!</a></Link>
    </div>
    <div className='foter'>
      <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
    </div>
    </>
  )
}
