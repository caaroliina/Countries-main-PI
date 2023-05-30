import style from './Card.module.css'
import { NavLink } from 'react-router-dom'

const Card = ({id, name, difficulty, duration, season }) => {
    return (
        <div className={style.container}>
            <NavLink to='/detail'> 
                <h2> { name } </h2> 
            </NavLink>
            <h3> { id } </h3>
            <h3> { difficulty } </h3>
            <h3> { duration } </h3>
            <h3> { season } </h3>
        </div>
    )
}

export default Card;