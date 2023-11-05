import styles from './Index.module.css'

const Input = ({
    type = 'text',
    id = '',
    required = false,
    placeholder = '',
    label = '',
    value = '',
    onChange = () => {}

}) => {
    return (
        (
            <div className={styles.form__group}>
                {
                    label ? (
                        <label className={styles.label} htmlFor={id}>{label}</label>
                    ) : null
                }
                <input 
                    className={styles.input} 
                    type={type} 
                    id={id} 
                    name={id}
                    required={required} 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={onChange} 
                />
            </div>
        )
    );
}

export default Input;