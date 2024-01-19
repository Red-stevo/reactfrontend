import styles from './../style.module.css';
import {useState} from "react";

const TodoTask = ({task}) =>
{
    const [status, setStatus] = useState("Pending");

    const handleStatus = () =>
    {
        setStatus("Completed")
    }


  return(
      <div>
          <div className={styles.taskBody}>
             <table>
                 <tbody>
                 <tr>
                        <td className={styles.cell}>
                            <h2 className={styles.task}>{task}</h2>
                        </td>
                        <td className={styles.cell}>
                            <button onClick={handleStatus} className={styles.done}>{status}</button>
                        </td>
                    </tr>
                 </tbody>
             </table>
          </div>
      </div>
  );
}
export default TodoTask;