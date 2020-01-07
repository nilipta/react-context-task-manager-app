import React, {useContext} from 'react';
import {TaskListContext}  from './../context/TaskListContext';

const Task = ({task}) => {

    const { removeTask } = useContext(TaskListContext); 

    return (
        <li className="list-item">
            <span> {task.title} </span>
            <div>
                <button 
                    onClick = {() => { removeTask(task.id); }}
                    className="btn-delete task-btn">
                    Delete
                </button>
                <button className="btn-delete task-btn">
                    Edit
                </button>
            </div>
        </li>
    );
};

export default Task;