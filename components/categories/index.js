import { App } from "../../contexts"
import { useContext, useEffect, useState } from "react"
import styles from './Index.module.css'

export default function Categories({
    value = [],
    onChange = () => {},
    alignCenter = false
}){
    const { allInterests } = useContext(App)
    const [selectedInterests, setSelectedInterests] = useState(value)

    useEffect(() => {
        onChange(selectedInterests)
    }, [selectedInterests])

    const handleClick = (id) => {
        if(selectedInterests.includes(id)){
            setSelectedInterests(prev => prev.filter((categoryId) => categoryId !== id))
        } else {
            setSelectedInterests([...selectedInterests, id])
        }
    }
    return (
        <div className={`${styles.container} ${alignCenter ? styles.container__center : ''}`} >
            {
                allInterests.map(({id, name, icon}) => {
                    return (
                        <button key={id} onClick={() => handleClick(id)} className={`btn ${selectedInterests.includes(id) ? 'btn__primary' : 'btn__neutral'}`}>{icon}&nbsp;&nbsp;&nbsp;{name}</button>
                    )
                })
            }
        </div>
    )
}