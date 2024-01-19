import styles from './../style.module.css';
const TasksInput = ({task, setTask, taskList, setTaskList}) =>
{
    const handleInput = (event) => {
        setTask(event.target.value);
    }

    const handleAdd = (event) => {
        event.preventDefault();
        setTaskList([...taskList, task]);
        setTask("");
    }

    return(
            <form onSubmit={handleAdd}>
                <input className={styles.activity} placeholder="Enter your Activity"
                       onChange={handleInput}
                       value={task}/>
                <br /><button className={styles.add} type={"submit"}>add</button>
            </form>
    );
}

export default TasksInput;