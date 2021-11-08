import { ADDTASK, DELETETASK, DONE, EDITTASK, FILTER } from "../ActionTypes/Types"

const initialState = {
    tasks : [
        { id : 1, description : "First task", done : false},
        { id : 2, description : "Second task", done : false}
    ],
    filter : ""
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTASK:
            return { ...state, 
                tasks : [...state.tasks, action.payload]
            }
        case DELETETASK:
            return { ...state,
                tasks : state.tasks.filter(task => task.id !== action.payload)
            }
        case EDITTASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                task.id === action.payload.id
                ? { ...task, description : action.payload.text }
                : task
        )
            }
        case DONE:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                  task.id === action.payload ? { ...task, done: !task.done } : task
                )
              };
        case FILTER:
            return {
                ...state,
                filter : action.payload
              };
        default:
            return state
    }
}

export default taskReducer;