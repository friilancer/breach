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
        <link rel="icon" href="icons/logo.svg" />
      </Head>
      <main>
        <section>
          <Nav />
        </section>
        <div>
          <div className={styles.welcome__container}>
            <div className={styles.welcome__main}>
              <img src="/images/message_bubble.svg" alt="welcome message" className={styles.main__secondary} />
              <img src="/images/welcome.png" alt="welcome" className={styles.main__primary} />
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
