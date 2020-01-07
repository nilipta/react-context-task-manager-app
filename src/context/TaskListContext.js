import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
    const initialState = JSON.parse(
        localStorage.getItem('tasks') ) || [];

    const [tasks, setTask] = useState([...initialState]);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    
    const [editItem, SetEditItem] = useState(null);

    const addTask = (title) => {
        setTask([...tasks, {title, id: uuid()}])
    }

    const removeTask = (id) => {
        setTask(tasks.filter(task => task.id !== id));
    }

    const clearList = () => {
        setTask([]);
    }

    const FindItem = id => {
        const item = tasks.find(task => task.id === id);
        SetEditItem(item);
    }

    const editTask = (title, id) => {
        const newTasks = tasks.map(task => (task.id === id) ? {title, id} : task);
        setTask(newTasks);
        SetEditItem(null);
    }

    return(
        <TaskListContext.Provider value={{
            tasks,
            addTask,
            removeTask,
            clearList,
            editItem,
            editTask,
            FindItem
            }}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;