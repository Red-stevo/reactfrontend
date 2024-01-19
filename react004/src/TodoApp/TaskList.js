import TodoTask from "./TodoTask";
import styles from './../style.module.css';
import React from "react";
const TaskList = ({todoList}) =>
{
    return(
        <React.Fragment>
            {
                <table>
                    <thead>
                        <tr>
                            <td className={styles.cell}>Task</td>
                            <td className={styles.cell}>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                    {todoList.map((task,index) =>(
                    <TodoTask key={index} task={task} ></TodoTask>
                    ))}
                    </tbody>
                </table>

            }
        </React.Fragment>
    );
}

export default TaskList;