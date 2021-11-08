import { useSelector } from "react-redux"
import Task from "./Task"

function ListTask () {
    const tasks = useSelector(state => state.tasks)
    const filter = useSelector(state => state.filter)
    return (
        <div>
            {
                filter === "done"
                ? tasks
                    .filter((task) => task.done)
                    .map((task) => <Task key={task.id} task={task} />)
                : filter === "not done yet"
                ? tasks
                    .filter((task) => !task.done)
                    .map((task) => <Task key={task.id} task={task} />)
                : tasks.map((task) => <Task key={task.id} task={task} />)
            }
        </div>
    )
}
export default ListTask