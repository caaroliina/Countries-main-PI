import style from './Form.module.css'
import { useState } from 'react'

const Form = () => {
    const [form, setForm] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: ''
    })

    return <div className={style.container}>
        <form action="">
            <label className={style.label} htmlFor="name"> Activity Name 
                <input className={style.input} type="text" value={form.name} name="name" ></input>
            </label> 
            <label className={style.label} htmlFor="difficulty"> Difficulty 
                <input className={style.input} type="text" value={form.difficulty} name="difficulty" ></input>
            </label> 
            <label className={style.label} htmlFor="duration"> Duration 
                <input className={style.input} type="text" value={form.duration} name="duration" ></input>
            </label> 
            <label className={style.label} htmlFor="season"> Season 
                <input className={style.input} type="text" value={form.season} name="season" ></input>
            </label> 
        </form>
    </div>
}

export default Form;