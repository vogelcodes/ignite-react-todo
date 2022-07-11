import { useState } from 'react'
import { NewTask } from './NewTask'
import { TaskList } from './TaskList'
import styles from './Tasks.module.css'


interface task {
    title: string,
    isDone: boolean,
}

export function Tasks(){

    const [ taskList, setTasklist] = useState<task[]>([])
    function addNewTask(title: string){
        setTasklist([...taskList, {isDone: false, title}])
    }
    function finishTask(index: number) {
        const newTaskList = taskList.map((t, i) => {
            if (index == i) {
                return {
                    title: t.title,
                    isDone: !t.isDone
                }
            } else {
                return t
            }
        })
        setTasklist(newTaskList)
    }
    function deleteTask(index: string) {
        const tasksMinusDeletedOne = taskList.filter( (t, i) => {

            return i !== parseInt(index)
        })
        setTasklist(tasksMinusDeletedOne)
    }
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
                        Concluidas
                    </span>
                    <span className={styles.badge}>{taskList.reduce((counter, task) => {
                        if (task.isDone) counter++
                        return counter
                    }, 0 )}</span>
                </div>
            </header>
            <main className={styles.list}>
            {<TaskList tasks={taskList} finishTask={finishTask} deleteTask={deleteTask}/>}
            </main>
        </div>
    )
}