'use client'
import Head from 'next/head';
import styles from './Register.module.css';
import Nav from '../../components/nav/baseNav'
import Input from '../../components/input';
import { useContext, useState } from 'react';
import Link from 'next/link';
import axios from 'axios'
import { AppConstants } from '../../lib/constants';
import {useRouter} from 'next/navigation';
import { App } from '../../contexts';

export default function Register() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [emailErrorMessage, setEmailErrorMessage] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { saveSessionUser } = useContext(App)

  const handleSubmit = async(e) => {
      e.preventDefault();
      if(isLoading || emailError || passwordError || !email || !password) return
      try {
        setIsLoading(true)
        const { data, status} = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URI}${AppConstants.API_ROUTES.REGISTER}`, {
          email,
          password
        })
        saveSessionUser(data, () => {
          router.push('/welcome')
        })
      } catch (e) {
        alert('Account creation failed')
      } finally{
        setIsLoading(false)
      }
  }
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
    if(e.target.value.length > 0 && !AppConstants.VALIDATION_REGEX.EMAIL.test(e.target.value.trim())) {
      setEmailError(true)
      setEmailErrorMessage('Invalid email address. Should be of the format: xyz@xyz.com')
    }else {
      setEmailError(false)
      setEmailErrorMessage('')
    }
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
    if(e.target.value.length > 0 && !AppConstants.VALIDATION_REGEX.PASSWORD_REGEX.test(e.target.value.trim())) {
      setPasswordError(true)
      setPasswordErrorMessage('Password should be atleast 6 characters long')
    }else {
      setPasswordError(false)
      setPasswordErrorMessage('')
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Register</title>
        <link rel="icon" href="icons/logo.svg" />
      </Head>
      <main>
        <section>
          <Nav />
        </section>
        <section className={styles.body}>
          <div onClick={router.back} className={`btn ${styles.btn__back}`}>
            <img src="https://res.cloudinary.com/friilancer/image/upload/v1699294372/breach/elwcgwodzr7h2pt9s8xh.svg" alt="logo" />
            Back
          </div>
          <form onSubmit={handleSubmit}>
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
                    errorState={emailError}
                    errorMessage={emailErrorMessage}
                  />
                <Input 
                    type="password"
                    id="password"
                    required={true}
                    placeholder="Enter password"
                    label="Password"
                    value={password}
                    onChange={onChangePassword}
                    errorState={passwordError}
                    errorMessage={passwordErrorMessage}
                  />
                <button className={`btn btn__wide ${!emailError && !passwordError && email && password ? 'btn__black' : 'btn__error'}`} type="submit">Continue</button>
                <div>
                  <p className={styles.status__text}>
                    Already have an account? <Link href="/login">Sign in</Link>
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
        </section>
        </main>
    </div>
  );
}
