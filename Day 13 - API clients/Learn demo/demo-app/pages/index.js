import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container pt-5">
      <h2>Menu</h2>
      <Link href='student'>Students list</Link>
      <br></br>
      <Link href='student-manager'>Mange students</Link>
    </div>
  )
}
