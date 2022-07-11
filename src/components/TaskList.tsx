import {Check, Trash } from 'phosphor-react'
import React, { MouseEventHandler } from 'react'

import styles from './TaskList.module.css'
interface TaskListProps {
    tasks: task[],
    finishTask: Function,
    deleteTask: Function
}
interface task {
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
            {tasks.map((t,i)=> <li className={styles.task} key={i}>
                <div onClick={handleCompleteTask} id={i.toString()} className={ t.isDone ? styles.radio + ' '+ styles.radioDone : styles.radio + ' '+ styles.radioToDo }>
                    <Check size={16} className={t.isDone ? styles.done : styles.todo }/>
                </div>
                <div className={t.isDone ? styles.title + ' ' + styles.strike : styles.title}>{t.title}</div>
                <div onClick={handleDeleteTask} id={i.toString()}> <Trash></Trash></div>
            </li>)}
            </ul>
        </>
    )
}