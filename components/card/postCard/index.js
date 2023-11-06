import styles from './Index.module.css'

const PostCard = ({
    imageUrl= '',
    title= '',
    series = {
        name: '',
        id : ''
    },
    content = '',
    author  = {
        name: '',
        id: '',
    },
    createdAt = '',
}) => {
    const date = new Date(createdAt)
    let months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
    ]
    return (
        <div className={styles.post__card}>
            <div className={styles.card__header}>
                <img src={imageUrl} className={styles.header__image} alt="Post image" />
            </div>
            <div className={styles.card__body}>
                <p className={styles.post__series}>{series.name}</p>
                <h4 className={styles.post__title}>{title}</h4>
                <p className={styles.post__content}>{content}</p>
                <div className={styles.post__content_secondary} >
                    <p className={styles.post__author}>{author.name}</p>
                    <p>•</p>
                    <p className={styles.post__date}>{`${date.getDate()} ${months[date.getMonth() + 1]} ${date.getFullYear()}`}</p>
                </div>
            </div>
        </div>
    )
}


export default PostCard