import {Form, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTask, done } from '../redux/Actions/TaskAction'
import Edit from './Edit'

function Task ({ task }) {
    const dispatch = useDispatch()
    return (
        <div>
            <Form>
                <Form.Label style={{ textDecoration: task.done && "line-through" }}>{task.description}</Form.Label>
                <Edit task={task} />
                <Button variant="danger" onClick={() => dispatch(deleteTask(task.id))} >
                    Delete
                </Button>
                <Button variant="success" onClick={() => dispatch(done(task.id))} >
                    Done
                </Button>
            </Form>
        </div>
    )
}

export default Task;