import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
    //ESTADO DEL COMPONENTE
    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);

    // CONTROL DEL CICLO DE VIDA DEL COMPONENTE 

    useEffect(() => {
        console.log('Task state has been modified')
        setLoading(false)
        return () => {
            console.log('TasKList component is going to unmount...')
        };
    }, [tasks]);


    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }
    
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
