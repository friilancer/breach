'use client'
import Head from 'next/head';
import styles from '../../styles/Login.module.css';
import Nav from '../../components/nav'
import Input from '../../components/input';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
      e.preventDefault()
      
  }
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
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
        <div className={`btn ${styles.btn__back}`}>
          <img src="icons/back.svg" alt="logo" />
          Back
        </div>
        <form>
          <div className={styles.form__container}>
            <h1 className={styles.form__container_header__main}>Join Breach</h1>
            <h6 className={styles.form__container_header__secondary}>
              Break through the noise and discover content that matters to you in under 3 minutes.
            </h6>
            <div className={styles.form__main}>
                <Input 
                  type="email"
                  id="email"
                  required={true}
                  placeholder="Enter email"
                  label="Email"
                  value={email}
                  onChange={onChangeEmail}
                />
              <Input 
                  type="password"
                  id="password"
                  required={true}
                  placeholder="Enter password"
                  label="Password"
                  value={password}
                  onChange={onChangePassword}
                />
              <button className={`btn btn__primary btn__wide`} type="submit">Continue</button>
              <div>
                <p className={styles.status__text}>
                  Already have an account? <a href="#">Log in</a>
                </p>
            </div>
            </div>
            <div className={styles.form__secondary}>
              <p className={styles.form__secondary__agreement}>
                By signing up, you agree to Breach's <a href="#">Terms</a> & <a href="#">Privacy Policy</a>
              </p>
            </div>
          </div>
        </form>
      </main>
      <footer></footer>
    </div>
  );
}
