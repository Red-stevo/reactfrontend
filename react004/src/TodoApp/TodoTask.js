import styles from './../style.module.css';
import {useState} from "react";
import React from "react";

const TodoTask = ({task}) =>
{
    const [status, setStatus] = useState("Mark As Done");

    const handleStatus = () =>
    {
        setStatus("Completed")
    }


  return(
          <React.Fragment className={styles.taskBody}>
                 <tr>
                        <td className={styles.cell}>
                            <h2 className={styles.task}>{task}</h2>
                        </td>
                        <td className={styles.cell}>
                            <button onClick={handleStatus} className={styles.done}>{status}</button>
                        </td>
                    </tr>
          </React.Fragment>
  );
}
export default TodoTask;