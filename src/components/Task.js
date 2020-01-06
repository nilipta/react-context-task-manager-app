import React from 'react';

const Task = () => {
    return (
        <li className="list-item">
            <span>Task Tiltle</span>
            <button className="btn-delete task-btn">
                Delete
            </button>
            <button className="btn-delete task-btn">
                Edit
            </button>
        </li>
    );
};

export default Task;