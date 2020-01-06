import React, { createContext, useState } from 'react';

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
    const [tasks] = useState([
        {title: "Read The Book", id: 1},
        {title: "Wash The car", id: 2},
        {title: "Write some code", id: 3}
    ]);

    return(
        <TaskListContext.Provider value={{tasks}}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;