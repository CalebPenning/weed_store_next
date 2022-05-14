import type { NextPage } from "next"
import Link from "next/link"
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clone Shop</title>
        <meta name="description" content="A modern web application by Caleb Penning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <Link href="/backlog">
            <a className={styles.card}>
              <h2>Things Left To Do &rarr;</h2>         
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
