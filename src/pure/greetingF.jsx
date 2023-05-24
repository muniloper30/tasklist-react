import React, { useState } from "react";
import PropTypes from "prop-types";

const GreetingF = (props) => {

    // useState
    //const [variable, método para actualizarlo] = useState(valor inicial)
    const [age, setage] = useState(30)

    const birthay = () => {
        //actuzalizamos el valor
        setage(age + 1)
    }

  return (
    <div>
      <h1>Hola {props.name} desde componente funcional </h1>
      <h2>Tu edad es de : {age} </h2>
      <div>
        <button onClick={birthay}>Cumplir años</button>
      </div>
    </div>
  );
};

GreetingF.propTypes = {
    name:PropTypes.string,
};

export default GreetingF;
