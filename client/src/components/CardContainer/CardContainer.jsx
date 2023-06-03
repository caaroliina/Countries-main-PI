import style from './CardContainer.module.css';
import { useSelector } from 'react-redux'
import Card from '../Card/Card';

const CardContainer = () => {
    const countries =  useSelector(state => state.countries)

    return (
        <div className={style.container}>
            {
                countries?.map(country => {
                    return <Card 
                        key= { country.id }
                        name= { country.name }
                        flagImg= { country.flagImg }
                        capital= { country.capital }
                        subregion= { country.subregion }
                        population= { country.population }
                    /> 
                })
            }
        </div>
    )
}

export default CardContainer;