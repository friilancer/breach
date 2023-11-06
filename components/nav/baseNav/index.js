import Link from 'next/link'
import styles from './Index.module.css'

const Nav = ({
    showActions = false
}) => {
    return (
        <nav className={styles.nav__container}>
            <img src="https://res.cloudinary.com/friilancer/image/upload/v1699294373/breach/wsvk8hqpjqmz3xfiej02.svg" alt="logo" />
            {
                showActions ? (
                    <div className={styles.nav__secondary}>
                        <Link className={`btn btn__primary`} href={'/login'}>Log in</Link>
                        <Link className={`btn btn__secondary`} href={'/register'}>Join Breach</Link>
                    </div>
                ) : null
            }
        </nav>
    )
}


export default Nav