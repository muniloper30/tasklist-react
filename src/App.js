import logo from "./logo.svg";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import Greeting from "./components/pure/greeting";
// eslint-disable-next-line no-unused-vars
import GreetingF from "./components/pure/greetingF";

import TaskListComponent from "./components/container/task_list";
// eslint-disable-next-line no-unused-vars
import ComponenteA from "./components/container/componenteA";
// eslint-disable-next-line no-unused-vars
import Ejemplo1 from "./hooks/Ejemplo1";
// eslint-disable-next-line no-unused-vars
import Ejemplo2 from "./hooks/Ejemplo2";
// eslint-disable-next-line no-unused-vars
import MiComponenteConContexto from "./hooks/Ejemplo3";
// eslint-disable-next-line no-unused-vars
import Ejemplo4 from "./hooks/Ejemplo4";
// eslint-disable-next-line no-unused-vars
import GreetingStyled from "./components/pure/greetingStyled";
// eslint-disable-next-line no-unused-vars
import Clock from "./hooks/lifecycle/Clock";
// eslint-disable-next-line no-unused-vars
import Father from "./components/container/father";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
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
        {/* TODO LO QUE HAY AQUI DENTRO ES TRATADO COMO props.children */}
        {/* <Ejemplo4 nombre = "Muni">
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        {/* <GreetingStyled name = 'Muni'></GreetingStyled> */}
        {/* Ejercicio cambio de componente clase LYFECICLE a componente función */}
        {/* <Clock></Clock> */}
      {/*</header>*/}
      {/* Gestión de eventos */}
      {/* <Father></Father> */}
      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
