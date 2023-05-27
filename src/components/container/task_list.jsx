import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
    
    return (
        <div>
            <div>
                <h1>Your Tasks:</h1> 
            </div>
            {/* TODO: Aplicar un for/Map para renderizar una lista de tareas */}
            <TaskComponent task={defaultTask}/>
        </div>
    );
};





export default TaskListComponent;
