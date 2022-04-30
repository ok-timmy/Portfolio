import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Ok_Timmy</title>
        <meta name="description" content="Ok_Timmy Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.body}>

<div>
  <p>Hello There</p>
  <h2>I am Timmy</h2>
  <h4>I am a Frontend Developer</h4>
  <p></p>
</div>
      </div>
        
    </div>
  )
}
