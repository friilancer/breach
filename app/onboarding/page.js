import Head from 'next/head';
import styles from '../../styles/Onboarding.module.css';
import Nav from '../../components/nav'

export default function Login() {
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
        <div className={`btn ${styles.btn__back}`}>
          <img src="icons/back.svg" alt="logo" />
          Back
        </div>
        <div>
          <div className={styles.onboarding__container}>
            <h1 className={styles.onboarding__container_header__main}>What are your interests?</h1>
            <h6 className={styles.onboarding__container_header__secondary}>
              Select your interests and I'll recommend some series I'm certain you'll enjoy!
            </h6>
            <div className={styles.onboarding__main}>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
