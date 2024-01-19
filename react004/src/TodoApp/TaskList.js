import TodoTask from "./TodoTask";


const TaskList = ({todoList}) =>
{
    return(
        <div>
            {
                todoList.map((task,index) =>(
                    <TodoTask key={index} task={task} ></TodoTask>
                ))
            }
        </div>
    );
}

export default TaskList;