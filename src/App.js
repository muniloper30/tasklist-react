import logo from "./logo.svg";
import "./App.css";
import Greeting from "./pure/greeting";
import GreetingF from "./pure/greetingF";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio con clase GREETING (SALUDO) */}
        {/* <Greeting  name= "Víctor"/> */}
        {/* Componente propi saludo con función */}
        <GreetingF name = "Muni"/>
      </header>
    </div>
  );
}

export default App;
