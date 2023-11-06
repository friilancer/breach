import styles from './Index.module.css';
import { AppConstants } from '../../../lib/constants';

const Stream = ({
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
    return (
        <div className={styles.stream}>
            <h4 className={styles.stream__title}>{title}</h4>
            <p className={styles.stream__content}>{content}</p>
            <div className={styles.stream__content_secondary} >
                <p className={styles.stream__author}>{author.name}</p>
                <p>•</p>
                <p className={styles.stream__date}>{`${date.getDate() || ''} ${AppConstants.MONTHS[date.getMonth() + 1] || ''} ${date.getFullYear() || ''}`}</p>
            </div>
        </div>
    )
}


export default Stream;