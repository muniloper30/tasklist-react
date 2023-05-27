import logo from "./logo.svg";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import Greeting from "./components/pure/greeting";
// eslint-disable-next-line no-unused-vars
import GreetingF from "./components/pure/greetingF";
import TaskListComponent from "./components/container/task_list";
import ComponenteA from "./components/container/componenteA";

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
        <ComponenteA></ComponenteA>
      </header>
    </div>
  );
}

export default App;
