import { useState } from 'react'
import {v4 as uuid} from 'uuid'

import { NewTask } from './NewTask'
import { TaskList } from './TaskList'
import styles from './Tasks.module.css'


interface task {
    id: string,
    title: string,
    isDone: boolean,
}

export function Tasks(){

    const [ taskList, setTasklist] = useState<task[]>([])
    function addNewTask(title: string){
        setTasklist([...taskList, {isDone: false, title, id: uuid()}])
    }
    function finishTask(id: string) {
        const newTaskList = taskList.map((t) => {
            if (id == t.id) {
                return {
                    id: t.id,
                    title: t.title,
                    isDone: !t.isDone
                }
            } else {
                return t
            }
        })
        setTasklist(newTaskList)
    }
    function deleteTask(id: string) {
        const tasksMinusDeletedOne = taskList.filter( (t) => {

            return t.id !== id
        })
        setTasklist(tasksMinusDeletedOne)
    }
    const tasksDone = taskList.reduce((counter, task) => {
        if (task.isDone) counter++
        return counter
    }, 0)
    return(
        <div className={styles.container}>
            <NewTask addNewTask = {addNewTask}/>
            <header className={styles.info}>
                <div>
                    <span className={styles.taskLabel}>
                        Tarefas criadas
                    </span>
                    <span className={styles.badge}>{taskList.length}</span>
                </div>
                <div>
                    <span className={styles.doneLabel}>
                        {tasksDone <= 1 ? 'Concluída' : 'Concluídas'}
                    </span>
                    <span className={styles.badge}>{tasksDone} de {taskList.length}</span>
                </div>
            </header>
            <main className={styles.list}>
            {<TaskList tasks={taskList} finishTask={finishTask} deleteTask={deleteTask}/>}
            </main>
        </div>
    )
}