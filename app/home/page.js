import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function Login() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="icons/logo.svg" />
      </Head>
      <div className={styles.container}>
        <aside className={styles.nav__container}>
            <nav>
                <img src="icons/logo.svg" alt="logo" className={styles.nav__header} />
                <div className={styles.nav__body}>
                    <div>
                        <button className={`btn btn__primary btn__wide`}>
                            <span></span>
                            <span>Start Writing</span>
                        </button>
                    </div>
                    <div>
                        <button className={`btn btn__primary btn__wide`}>
                            <span></span>
                            <span>Start Writing</span>
                        </button>
                    </div>
                    <div>
                        <button className={`btn btn__primary btn__wide`}>
                            <span></span>
                            <span>Start Writing</span>
                        </button>
                    </div>
                    <div>
                        <button className={`btn btn__primary btn__wide`}>
                            <span></span>
                            <span>Start Writing</span>
                        </button>
                    </div>
                </div>
            </nav>
        </aside>
        <main className={styles.page__container}>
            <div className={styles.bestpick__container}>
                <h3>Top Picks</h3>
                <p>Experience the best of Breach</p>
                <img src="/images/top_pick.png" alt="Logo" />
                <h3>Top Picks</h3>
                <p>Experience the best of Breach</p>
            </div>
        </main>
        <aside className={styles.streams__container}>
            <div className={styles.streams__head}>
                <h3>Streams</h3>
                <p>
                    Discover trending content from topics you care about in real time
                </p>
            </div>
            <div className={styles.streams__body}>
                <div className={styles.stream}>
                    <h4 className={styles.stream__title}>On migration and maintaining friendships</h4>
                    <p className={styles.stream__content}>I went to boarding school and left pretty early, so I had some experience with losing friends to relocation long before the</p>
                    <div className={styles.stream__content_secondary} >
                      <p className={styles.stream__author}>LOTA</p>
                      <p>•</p>
                      <p className={styles.stream__date}>12 DEC 2022</p>
                    </div>
                </div>
            </div>
        </aside>
      </div>
    </>
  );
}
