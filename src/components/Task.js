import React from 'react';

const Task = ({task}) => {
    return (
        <li className="list-item">
            <span> {task.title} </span>
            <div>
                <button className="btn-delete task-btn">
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