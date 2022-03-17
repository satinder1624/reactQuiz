import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [ date, setDate ] = useState('1999-12-25')
  return (
    <div className={styles.container}>
      <Head>
        <title>Question 2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.formContainer}>
          {/* Given Name */}
          <div className={styles.name}>
            <label>
              <span>Your full given name:</span>
              <input type="text" />
            </label>
          </div>
          {/* Calendar */}
          <div className={styles.birth}>
            <label>
              <spna>Date of Birth</spna>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </label>
          </div>
          {/* Residance */}
          <div className={styles.country}>
            <label>
              <span>Country of residence or citizenship:</span>
              <input type="text" />
            </label>
          </div>
          {/* School */}
          <div className={styles.school}>
            <label>
              <span>What school do you plan to attend?</span>
              <input type="text" />
            </label>
          </div>
          {/* textarea */}
          <div className={styles.study}>
            <label>
              <span>Please take a monent to describe your intended area of study:</span>
              <textarea
                placeholder='Enter details here'
              />
            </label>
          </div>
        </div>
      </main>
    </div>
  )
}
