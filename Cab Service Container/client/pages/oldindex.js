import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import dynamic from 'next/dynamic'
import Link from 'next/link'

const CatalogComponent = dynamic(()=> import("driver/catalog"))


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Nav>This is my nav from main app 1</Nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the main app port: 3000
        </h1> 
        <Link href="/catalogOnMain">Go to catalog</Link>

    Component from shop
    <CatalogComponent/>

      </main>

      <Footer/>
    </div>
  )
}
