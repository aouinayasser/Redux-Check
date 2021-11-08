import { ADDTASK, DELETETASK, DONE, EDITTASK, FILTER } from "../ActionTypes/Types"


export const addTask = (task) => {
    return {
        type : ADDTASK,
        payload : task
    }
}

export const editTask = (id, text) => {
    return {
        type : EDITTASK,
        payload : { id, text } 
    }
}

export const deleteTask = id => {
    return {
        type : DELETETASK,
        payload : id
    }
}

export const done = id => {
    return {
        type : DONE,
        payload : id
    }
}

export const filter = (status) => {
    return {
      type: FILTER,
      payload: status
    };
  };