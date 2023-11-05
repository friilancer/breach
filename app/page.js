'use client'
import Head from 'next/head';
import styles from '../styles/Index.module.css';
import Nav from '../components/nav'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="icons/logo.svg" />
      </Head>
      <main>
        <div className={styles.container__head}>
          <section>
            <Nav showActions />
          </section>
          <section>
            <div className={styles.hero__container}>
              <div className={styles.hero__text}>
                <h1>Find <span className={styles.hero__text_highlight}>Great</span> Ideas</h1>
                <p>
                    Subscribe to your favourite creators and thinkers. <br/> Support work that matters
                </p>
                <a href='#' className={`btn btn__primary`}>Join Breach</a>
              </div>
              <div className={styles.hero__image}>
                <img src="images/hero_image.png" alt="hero" />
              </div>
            </div>
          </section>
        </div>
        <div className={styles.container__body}>
          <section>
            <div className={styles.posts__container}></div>
          </section>
          <section>
            <div className={styles.categories__container}>
              <div className={styles.categories__header}>
                <h2>Categories</h2>
                <p>Discover content from topics you care about</p>
              </div>
              <div className={styles.categories__body}>
                <button className={`btn btn__neutral`}>🤣 Humor</button>
                <button className={`btn btn__neutral`}>🤣 Sport</button>
                <button className={`btn btn__neutral`}>🤣 Crypto</button>
                <button className={`btn btn__neutral`}>🤣 LifeHack</button>
                <button className={`btn btn__neutral`}>🤣 Humor</button>
                <button className={`btn btn__neutral`}>🤣 Sport</button>
                <button className={`btn btn__neutral`}>🤣 Crypto</button>
                <button className={`btn btn__neutral`}>🤣 LifeHack</button>
                <button className={`btn btn__neutral`}>🤣 Humor</button>
                <button className={`btn btn__neutral`}>🤣 Sport</button>
                <button className={`btn btn__neutral`}>🤣 Crypto</button>
                <button className={`btn btn__neutral`}>🤣 LifeHack</button>
              </div>
            </div>
          </section>
          <section>
            <div className={styles.posts__container}>
              <nav className={styles.posts__nav}>
                <div className={styles.nav__item}>Featured</div>
                <div className={styles.nav__item}>Popular</div>
                <div className={styles.nav__item}>Recent</div>
              </nav>
              <div className={styles.posts__body}>
                <div className={styles.post__card}>
                  <div className={styles.post__card_header}>
                    <img src='/images/workinprogress.png' className={styles.post__card_header_image} />
                  </div>
                  <div className={styles.post__card_body}>
                    <p className={styles.post__series}>WORK IN PROGRESS</p>
                    <h4 className={styles.post__title}>On migration and maintaining friendships</h4>
                    <p className={styles.post__content}>I went to boarding school and left pretty early, so I had some experience with losing friends to relocation long before the</p>
                    <div className={styles.post__content_secondary} >
                      <p className={styles.post__author}>LOTA</p>
                      <p>•</p>
                      <p className={styles.post__date}>12 DEC 2022</p>
                    </div>
                  </div>
                </div>
                <div className={styles.post__card}>
                  <div className={styles.post__card_header}>
                    <img src='/images/workinprogress.png' className={styles.post__card_header_image} />
                  </div>
                  <div className={styles.post__card_body}>
                    <p className={styles.post__series}>WORK IN PROGRESS</p>
                    <h4 className={styles.post__title}>On migration and maintaining friendships</h4>
                    <p className={styles.post__content}>I went to boarding school and left pretty early, so I had some experience with losing friends to relocation long before the</p>
                    <div className={styles.post__content_secondary} >
                      <p className={styles.post__author}>LOTA</p>
                      <p>•</p>
                      <p className={styles.post__date}>12 DEC 2022</p>
                    </div>
                  </div>
                </div>
                <div className={styles.post__card}>
                  <div className={styles.post__card_header}>
                    <img src='/images/workinprogress.png' className={styles.post__card_header_image} />
                  </div>
                  <div className={styles.post__card_body}>
                    <p className={styles.post__series}>WORK IN PROGRESS</p>
                    <h4 className={styles.post__title}>On migration and maintaining friendships</h4>
                    <p className={styles.post__content}>I went to boarding school and left pretty early, so I had some experience with losing friends to relocation long before the</p>
                    <div className={styles.post__content_secondary} >
                      <p className={styles.post__author}>LOTA</p>
                      <p>•</p>
                      <p className={styles.post__date}>12 DEC 2022</p>
                    </div>
                  </div>
                </div>
                <div className={styles.post__card}>
                  <div className={styles.post__card_header}>
                    <img src='/images/workinprogress.png' className={styles.post__card_header_image} />
                  </div>
                  <div className={styles.post__card_body}>
                    <p className={styles.post__series}>WORK IN PROGRESS</p>
                    <h4 className={styles.post__title}>On migration and maintaining friendships</h4>
                    <p className={styles.post__content}>I went to boarding school and left pretty early, so I had some experience with losing friends to relocation long before the</p>
                    <div className={styles.post__content_secondary} >
                      <p className={styles.post__author}>LOTA</p>
                      <p>•</p>
                      <p className={styles.post__date}>12 DEC 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
