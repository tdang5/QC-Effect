import Head from 'next/head'
import Header from '../components/Header/Header'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>QC Effects</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div style={{ minHeight: '80vh' }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}
