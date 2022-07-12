import {Check, Trash, ClipboardText } from 'phosphor-react'
import React, { MouseEventHandler } from 'react'


import styles from './TaskList.module.css'
interface TaskListProps {
    tasks: task[],
    finishTask: Function,
    deleteTask: Function
}
interface task {
    id: string,
    title: string,
    isDone: boolean,
}

export function TaskList({ tasks, finishTask, deleteTask }: TaskListProps){

    function handleCompleteTask(event: React.MouseEvent<HTMLDivElement>){
        finishTask(event.currentTarget.id)
        console.log(event.currentTarget.id)
    }
    function handleDeleteTask(event: React.MouseEvent<HTMLDivElement>){
        deleteTask(event.currentTarget.id)
        console.log(event.currentTarget.id)
    }

    return(
        <>
            <ul className={styles.container}>
            {tasks.length == 0 ? 
                <div className={styles.notasks}>
                    <ClipboardText size={56}></ClipboardText>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p></div>
            :   tasks.map((t)=> <li className={styles.task} key={t.id}>
                <div onClick={handleCompleteTask} id={t.id} className={ t.isDone ? styles.radio + ' '+ styles.radioDone : styles.radio + ' '+ styles.radioToDo }>
                    <Check size={16} className={t.isDone ? styles.done : styles.todo }/>
                </div>
                <div className={t.isDone ? styles.title + ' ' + styles.strike : styles.title}>{t.title}</div>
                <div onClick={handleDeleteTask} id={t.id}> <Trash></Trash></div>
            </li>)}
            </ul>
        </>
    )
}