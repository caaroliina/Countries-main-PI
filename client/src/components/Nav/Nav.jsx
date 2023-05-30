import style from './Nav.module.css'
import { NavLink, useLocation } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar.jsx'

const Nav = ({ onSearch }) => {
    const { pathname } = useLocation();
    return (
    <div className={style.conteiner}>
        {
            pathname.includes('/home') && <SearchBar onSearch={ onSearch }/>
        }
        <NavLink className={style.link} to='/home'> Home </NavLink>
        <NavLink className={style.link} to='/form'> Form </NavLink>

    </div>
    )
}

export default Nav;