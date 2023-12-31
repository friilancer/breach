'use client'
import Head from 'next/head';
import styles from './Index.module.css';
import Nav from '../components/nav/baseNav'
import PostsNav from '../components/nav/postsNav';
import PostCard from '../components/card/postCard';
import Categories from '../components/categories';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AppConstants } from '../lib/constants';

export default function Home() {
  const [selectedInterests, setSelectedInterests] = useState([])
  const handleChange = (interests) => {
    setSelectedInterests(interests)
  }

  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {
    const getAllPosts = async() => {
      try {
        const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URI}${AppConstants.API_ROUTES.POSTS}`)
        setAllPosts(data)
      } catch (e) {
        alert('Failed to fetch posts')
      }
    }
    getAllPosts()
  }, [])


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
                <Link href={'/register'} className={`btn btn__primary`}>Join Breach</Link>
              </div>
              <div className={styles.hero__image}>
                <img src="https://res.cloudinary.com/friilancer/image/upload/v1699294248/breach/cyae5nfljb9pxdcrnhqs.png" alt="hero" />
              </div>
            </div>
          </section>
        </div>
        <div className={styles.container__body}>
          <section className={styles.categories__section}>
            <div className={styles.categories__container}>
              <div className={styles.categories__header}>
                <h2>Categories</h2>
                <p>Discover content from topics you care about</p>
              </div>
              <Categories value={selectedInterests} onChange={handleChange} />
            </div>
          </section>
          <section className={styles.posts__section} >
            <div className={styles.posts__container}>
              <PostsNav />      
              <div className={styles.posts__body}>
                {
                  allPosts.filter(post => selectedInterests.length === 0 ? true : selectedInterests.includes(post.category.id)).map((post) => {
                    return (
                      <PostCard 
                        key={post.id} 
                        post={post} 
                        imageUrl={post.imageUrl}
                        title={post.title}
                        series = {post.series}
                        content = {post.content}
                        author = {post.author}
                        createdAt = {post.createdAt}
                      />
                    )
                  })
                }
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
        <img className={styles.footer__main} src="https://res.cloudinary.com/friilancer/image/upload/v1699294373/breach/wsvk8hqpjqmz3xfiej02.svg" alt="logo" />
          <div className={styles.footer__secondary}>
            <p className={styles.secondary__activeText}>support@breach.example</p>
            <p>About Breach</p>
            <p>Terms</p>
            <p>Privacy Policy</p>
          </div>    
        </div>
      </footer>
    </div>
  );
}
