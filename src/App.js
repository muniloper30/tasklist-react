import logo from "./logo.svg";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import Greeting from "./components/pure/greeting";
// eslint-disable-next-line no-unused-vars
import GreetingF from "./components/pure/greetingF";
// eslint-disable-next-line no-unused-vars
import TaskListComponent from "./components/container/task_list";
// eslint-disable-next-line no-unused-vars
import ComponenteA from "./components/container/componenteA";
// eslint-disable-next-line no-unused-vars
import Ejemplo1 from "./hooks/Ejemplo1";
// eslint-disable-next-line no-unused-vars
import Ejemplo2 from "./hooks/Ejemplo2";
// eslint-disable-next-line no-unused-vars
import MiComponenteConContexto from "./hooks/Ejemplo3";
import Ejemplo4 from "./hooks/Ejemplo4";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio con clase GREETING (SALUDO) */}
        {/* <Greeting  name= "Víctor"/> */}
        {/* Componente propio saludo con función */}
        {/* <GreetingF name = "Muni"/> */}
        {/* COMPONENTE DE LISTADO DE TAREAS */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* EJERCICIO NUEVO CONTACTO */}
        {/* <ComponenteA></ComponenteA> */}
        {/* Ejemplo de uso de HOOKS useState */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* EJEMPLO DE useState, useEffect, useRef */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* EJEMPLO 3 ABAJO CON useContext */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        <Ejemplo4 nombre = "Muni">
        {/* TODO LO QUE HAY AQUI DENTRO ES TRATADO COMO props.children */}
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4>
          
      </header>
    </div>
  );
}

export default App;
