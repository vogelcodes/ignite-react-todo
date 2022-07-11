import styles from './Tasks.module.css'
export function Tasks(){
    return(
        <div className={styles.container}>
            <header className={styles.info}>
                <div>
                    <span className={styles.taskLabel}>Tarefas criadas</span><span className={styles.badge}>0</span>
                </div>
                <div>
                    <span className={styles.doneLabel}>Concluidas</span><span className={styles.badge}>0</span>
                </div>
            </header>
            <main className={styles.list}></main>
        </div>
    )
}