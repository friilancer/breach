import styles from './Index.module.css'


const HomeNav = () => {
    return (
        <aside>
            <nav className={styles.nav__body}>
                <div>
                    <button className={`btn ${styles.nav__link} ${styles.nav__link_active}`}>
                        <img src="https://res.cloudinary.com/friilancer/image/upload/v1699294373/breach/iuztwv9wgktt74z07rfp.svg" alt='icon' />
                        <span>Home</span>
                    </button>
                </div>
                <div>
                    <button className={`btn ${styles.nav__link}`}>
                        <img src="https://res.cloudinary.com/friilancer/image/upload/v1699294372/breach/ahw9whfzfpvz5xcd5jex.svg" alt='icon' />
                        <span>Dashboard</span>
                    </button>
                </div>
                <div>
                    <button className={`btn ${styles.nav__link}`}>
                        <img src="https://res.cloudinary.com/friilancer/image/upload/v1699294374/breach/ycqdjlpsf1ltne2q15gz.svg" alt='icon' />
                        <span>Publications</span>
                    </button>
                </div>
            </nav>
        </aside>
    )
}

export default HomeNav