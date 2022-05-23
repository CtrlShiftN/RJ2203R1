import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import CovidHome from './covid-api/home'

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href='/covid-api/home'>CovidHome</Link>
    </div>
  )
}
