// import { useState } from "react"
import style from './SearchBar.module.css'

const SearchBar = ({onSearch}) => {
    
    // const [name, setName] = useState;

    // const handleEnter = (event) => {
    //     if (event.key === 'Enter' ){
    //         onSearch(name);
    //         setName('');
    //     }
    // }
    // const handleChange = (event) => {
    //     setName(event.target.value)
    // }

    return (
        <div className={style.conteiner}>
            <input className={style.input} type='search'/>
            <button className={style.button} > Search </button>
        </div>
    )
}

export default SearchBar;