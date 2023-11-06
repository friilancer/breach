import styles from './Index.module.css'

const PostsNav = () => {
    return (
        <nav className={styles.posts__nav}>
            <div className={`${styles.nav__item} ${styles.nav__item_active}`}>Featured</div>
            <div className={styles.nav__item}>Popular</div>
            <div className={styles.nav__item}>Recent</div>
        </nav>
    )
}

export default PostsNav