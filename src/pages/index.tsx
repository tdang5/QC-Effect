import Head from 'next/head'
import { Main } from '../styles/Index.Styles'


export default function Home() {
  return (
    <>
      <Head>
        <title>QC Effects</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        QC Effects
      </Main>
    </>
  )
}
