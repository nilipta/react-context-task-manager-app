import React, { createContext, useState } from 'react';
import uuid from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
    const [tasks, setTask] = useState([
        {title: "Read The Book", id: 1},
        {title: "Wash The car", id: 2},
        {title: "Write some code", id: 3}
    ]);

    const addTask = (title) => {
        setTask([...tasks, {title, id: uuid()}])
    }

    const removeTask = (id) => {
        setTask(tasks.filter(task => task.id !== id));
    }

    const clearList = () => {
        setTask([]);
    }

    return(
        <TaskListContext.Provider value={{tasks, addTask, removeTask, clearList}}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;