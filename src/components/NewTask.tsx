import styles from './NewTask.module.css'
import {PlusCircle} from 'phosphor-react'
import { FormEvent, FormEventHandler } from 'react'

function handleSubmit(event: FormEvent){
    event.preventDefault()

}

export function NewTask(){
    return(
        <form onSubmit={handleSubmit} className={styles.form}>
            <input className={styles.input} placeholder="Adicione uma nova tarefa" type={"text"}></input>
            <button className={styles.submit} formAction="submit">Criar<PlusCircle size={16}/></button>

        </form>
    )
}