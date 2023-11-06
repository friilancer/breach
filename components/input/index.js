import styles from './Index.module.css'

const Input = ({
    type = 'text',
    id = '',
    required = false,
    placeholder = '',
    label = '',
    value = '',
    onChange = () => {},
    autoComplete = '',
    errorState = true,
    errorMessage = 'Big error'
}) => {
    return (
        (
            <div className={styles.form__group}>
                {
                    label ? (
                        <label className={styles.label} htmlFor={id}>
                            {label}{errorState ? <>: <span className={styles.error}>{errorMessage}</span></> : null}  
                        </label>
                    ) : null
                }
                <input 
                    className={`${styles.input} ${errorState ? styles.input__error : ''}`} 
                    type={type} 
                    id={id} 
                    name={id}
                    required={required} 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={onChange} 
                    autoComplete={autoComplete}
                />
            </div>
        )
    );
}

export default Input;