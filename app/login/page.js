import Head from 'next/head';
import styles from '../../styles/Login.module.css';
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
        <form>
          <div className={styles.form__container}>
            <h1 className={styles.form__container_header__main}>Join Breach</h1>
            <h6 className={styles.form__container_header__secondary}>
              Break through the noise and discover content that matters to you in under 3 minutes.
            </h6>
            <div className={styles.form__main}>
              <div className={styles.form__group}>
                <label className={styles.form__group__label} htmlFor="email">Email</label>
                <input className={styles.form__group__input}  type="email" id="email" required />
              </div>
              <div className={styles.form__group}>
                <label className={styles.form__group__label} htmlFor="password">Password</label>
                <input  className={styles.form__group__input} type="password" id="password" required/>
              </div>
              <button className={`btn btn__primary btn__wide`} type="submit">Continue</button>
              <div className={styles.form__group__account_status}>
                <p className={styles.account_status__text}>
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
