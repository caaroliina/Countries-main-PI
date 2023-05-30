import style from './Form.module.css'

const Form = () => {
    return <div className={style.container}>
        <label className={style.label} htmlFor="name"> Activity Name 
            <input className={style.input} type="text"  name="name" ></input>
        </label> 
        <label className={style.label} htmlFor="difficulty"> Difficulty 
            <input className={style.input} type="text"  name="difficulty" ></input>
        </label> 
        <label className={style.label} htmlFor="duration"> Duration 
            <input className={style.input} type="text"  name="duration" ></input>
        </label> 
        <label className={style.label} htmlFor="season"> Season 
            <input className={style.input} type="text"  name="season" ></input>
        </label> 
    </div>
}

export default Form;