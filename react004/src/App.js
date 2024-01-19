import './App.css'
import TodoHeader from "./TodoApp/TodoHeader";
import TasksInput from "./TodoApp/TasksInput";
import {useState} from "react";
function App() {
const [task, setTask] = useState("");
const [taskList, setTaskList] = useState([]);


  return (
    <div className="App">
        <TodoHeader></TodoHeader>
        <TasksInput task={task}
                    setTask={setTask}
                    taskList={taskList}
                    setTaskList={setTaskList}
        ></TasksInput>
    </div>
  );
}

export default App;
