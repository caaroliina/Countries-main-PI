import style from './Card.module.css'
import { NavLink } from 'react-router-dom'

const Card = ({id, name, flagImg, capital, subregion, population }) => {
    return (
        <div className={style.container}>
            <div className={style.Card} > 
                <NavLink to='/detail'> 
                    <h2> { name } </h2> 
                </NavLink>
                <h3> Id pais: { id } </h3>
                <img className={style.image} src={flagImg} alt={ `imagen del pais ${name}` } />
                <h3> capital: { capital } </h3>
                <h3> subregion: { subregion } </h3>
                <h3> population: { population } </h3>
            </div>
        </div>
    )
}

export default Card;