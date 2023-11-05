import styles from './Index.module.css'

const Nav = ({
    showActions = false
}) => {
    return (
        <nav className={styles.nav__container}>
            <img src="icons/logo.svg" alt="logo" />
            {
                showActions ? (
                    <div className={styles.nav__secondary}>
                        <button className={`btn btn__primary`}>Log in</button>
                        <button className={`btn btn__secondary`}>Join Breach</button>
                    </div>
                ) : null
            }
        </nav>
    )
}


export default Nav