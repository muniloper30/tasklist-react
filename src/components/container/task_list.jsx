import React, { useState, useEffect } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";
import "../../styles/task.scss";
import TaskForm from "../pure/forms/taskForm";

const TaskListComponent = () => {


  const defaultTask1 = new Task("Example1","Description 1",true,LEVELS.NORMAL);
  const defaultTask2 = new Task("Example2","Description 2",false,LEVELS.URGENT);
  const defaultTask3 = new Task("Example3","Description 3",false,LEVELS.BLOCKING);


  
  //ESTADO DEL COMPONENTE
  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  // CONTROL DEL CICLO DE VIDA DEL COMPONENTE

  useEffect(() => {
    console.log("Task state has been modified");
    setLoading(false);
    return () => {
      console.log("TasKList component is going to unmount...");
    };
  }, [tasks]);

  const changeCompleted = (id) => {
    console.log("TODO: Cambiar estado de una tarea");
  };

  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/* Card Header (title) */}
          <div className="card-header p-3">
            <h5>Your Tasks:</h5>
          </div>
          {/* Card body (content) */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Descrioption</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                  { tasks.map((task, index) => {
                    return (
                      <TaskComponent 
                          key={index} 
                          task={task}>  
                      </TaskComponent>
                    )
                  } ) }



                    {/* TODO: Iterar sobre una lista de tareas */}
                   
              </tbody>
            </table>
          </div>
          <TaskForm></TaskForm>
        </div>
      </div>
      {/* TODO: Aplicar un for/Map para renderizar una lista de tareas */}
      {/* <TaskComponent task={defaultTask} /> */}
    </div>
  );
};

export default TaskListComponent;
