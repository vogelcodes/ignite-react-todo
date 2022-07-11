import styles from './NewTask.module.css'
import {PlusCircle} from 'phosphor-react'
import { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, useState } from 'react'

interface NewTaskProps {
    addNewTask: Function 
} 
export function NewTask( { addNewTask }: NewTaskProps ){

    const [ taskName, setTaskName] = useState('')
    
    function handleSubmit(event: FormEvent){
        event.preventDefault()
        addNewTask(taskName)
    }
    function handleOnChange(event: ChangeEvent<HTMLInputElement>){
        setTaskName(event.target.value)
    }
    

    return(
        <form onSubmit={handleSubmit} className={styles.form}>
            <input onChange={handleOnChange} className={styles.input} placeholder="Adicione uma nova tarefa" type={"text"}></input>
            <button className={styles.submit} formAction="submit">Criar<PlusCircle size={16}/></button>

        </form>
    )
}