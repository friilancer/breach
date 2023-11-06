'use client'
import Head from 'next/head';
import Nav from '../../components/nav/baseNav'
import styles from './Welcome.module.css';
import { useRouter } from 'next/navigation';


export default function Welcome() {
  const router = useRouter()
  const routeToOnboarding = () => {
    router.replace('/onboarding')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="https://res.cloudinary.com/friilancer/image/upload/v1699294373/breach/wsvk8hqpjqmz3xfiej02.svg" />
      </Head>
      <main>
        <section>
          <Nav />
        </section>
        <div>
          <div className={styles.welcome__container}>
            <div className={styles.welcome__main}>
              <img src="https://res.cloudinary.com/friilancer/image/upload/v1699294247/breach/jpll22azyb6g3pftfzb4.svg" alt="welcome message" className={styles.main__secondary} />
              <img src="https://res.cloudinary.com/friilancer/image/upload/v1699294247/breach/lpnnx10p2upfpxk8ytuf.png" alt="welcome" className={styles.main__primary} />
            </div>
            <h1>Welcome to Breach 🥳</h1>
            <p>
              Just a few quick questions to help personalise your Breach experience. Are you ready?
            </p>
            <button onClick={routeToOnboarding}  className={`btn btn__black`}>Let's begin!</button>
          </div>
        </div>
      </main>
    </div>
  );
}
