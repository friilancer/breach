import styles from './Index.module.css'


const HomeNav = () => {
    return (
        <aside>
            <nav className={styles.nav__body}>
                <div>
                    <button className={`btn ${styles.nav__link} ${styles.nav__link_active}`}>
                        <img src="icons/home.svg" alt='icon' />
                        <span>Home</span>
                    </button>
                </div>
                <div>
                    <button className={`btn ${styles.nav__link}`}>
                        <img src="icons/dashboard.svg" alt='icon' />
                        <span>Dashboard</span>
                    </button>
                </div>
                <div>
                    <button className={`btn ${styles.nav__link}`}>
                        <img src="icons/publications.svg" alt='icon' />
                        <span>Publications</span>
                    </button>
                </div>
            </nav>
        </aside>
    )
}

export default HomeNav