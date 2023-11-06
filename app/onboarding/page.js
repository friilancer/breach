'use client'
import Head from 'next/head';
import styles from './Onboarding.module.css';
import Nav from '../../components/nav/baseNav'
import { useRouter } from 'next/navigation';
import Categories from '../../components/categories';
import Link from 'next/link';
import { useState, useContext } from 'react';
import { App } from '../../contexts';
import axios from 'axios';
import { AppConstants } from '../../lib/constants';


export default function Onboarding() {
  const router = useRouter()
  const { sessionUser, updateSessionUser } = useContext(App)

  const [selectedInterests, setSelectedInterests] = useState(sessionUser.interests)
  const handleChange = (interests) => {
    setSelectedInterests(interests)
  }

  const handleNext = async() => {
    try {
      updateSessionUser({
        interests: selectedInterests
      })
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URI}${AppConstants.API_ROUTES.INTERESTS(sessionUser.id)}`, {
        interests: selectedInterests
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem(AppConstants.STORAGE_KEYS.AUTH_TOKEN)}`
        }
      })
      router.push('/home')
    } catch (e) {
      alert('Failed to save')
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <link rel="icon" href="icons/logo.svg" />
      </Head>
      <main>
        <section>
          <Nav />
        </section>
        <div onClick={router.back} className={`btn ${styles.btn__back}`}>
          <img src="https://res.cloudinary.com/friilancer/image/upload/v1699294372/breach/elwcgwodzr7h2pt9s8xh.svg" alt="logo" />
          Back
        </div>
        <div>
          <div className={styles.container}>
            <img className={styles.header__image} src="https://res.cloudinary.com/friilancer/image/upload/v1699294247/breach/a1vgpfibxp8hxhsbanja.png" alt='Hero image' />
            <h1 className={styles.header__main}>What are your interests?</h1>
            <h6 className={styles.header__secondary}>
              Select your interests and I'll recommend some series I'm certain you'll enjoy!
            </h6>
            <div className={styles.onboarding__main}>
              <Categories value={selectedInterests} onChange={handleChange} />
              <div className={styles.onboarding__actions}>
                <button onClick={handleNext}  className={`btn btn__black`}>Next</button>
                <Link href={'/home'} className={''}>Skip for later</Link>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );

}
