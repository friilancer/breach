'use client'
import Head from 'next/head';
import styles from './Home.module.css';
import PostsNav from '../../components/nav/postsNav';
import PostCard from '../../components/card/postCard';
import Categories from '../../components/categories';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AppConstants } from '../../lib/constants';
import HomeNav from '../../components/nav/homeNav';

export default function Home() {
    const [selectedInterests, setSelectedInterests] = useState([])
    const handleChange = (interests) => {
        setSelectedInterests(interests)
    }

    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        let token = localStorage.getItem(AppConstants.STORAGE_KEYS.AUTH_TOKEN)
        console.log(token)
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
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="icons/logo.svg" />
      </Head>
      <div className={styles.container}>
        <aside className={styles.nav__container}>
            <img src="icons/logo.svg" alt="logo" className={styles.nav__header} />
            <button className={`btn btn__primary btn__wide`}>
                <img src="icons/pencil.svg" alt='icon' />
                <span>Start Writing</span>
            </button>
            <HomeNav />
        </aside>
        <main className={styles.page__container}>
            <div className={styles.page__main}>
                <div className={styles.hero__container}>
                    <div className={styles.hero__main}>
                        <h3 className={styles.main__header}>Top Picks</h3>
                        <p className={styles.main__body}>Experience the best of Breach</p>
                    </div>
                    <img className={styles.hero__image} src="/images/top_pick.png" alt="Logo" />
                    <div className={styles.hero__secondary}>
                        <h3 className={styles.main__header}>
                        How to succeed at long-term investments
                        </h3>
                        <p className={styles.main__body}>
                            I recently started contemplating how to apply my carefree mentality to my financial planning.
                            I’ve mainly been considering looking at my crypto wallets whenever I feel 
                        </p>
                    </div>
                </div>
                <section>
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
        </main>
      </div>
    </>
  );
}
