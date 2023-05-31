/* Ejemplo de uso del Hook useState */

/* Crear un componente de tipo función y acceder a su estado
 privado a través de un hook y , además, poder modificarlo */

import React, { useState } from 'react';

 // Valor inicial para un contador
const valorInicial = 0;

// Valor inicial para una persona 
const personaInicial = {
    nombre : 'Víctor',
    email: 'lorvic@gmail.com'
}


const Ejemplo1 = () => {

    /* Queremos que el VALOR INICIAL y PERSONA INICIAL sean 
parte del estado del componente, para así poder gestionar su cambio y que 
éste se vea reflejado en la vista del componente. 

const [nombreVariable, funciónParaCambiar] = useState(valorInicial)
*/
const [contador, setContador] = useState(valorInicial);
const [persona, setPersona] = useState(personaInicial);

/* FUNCIÓN PARA ACTUALIZAR EL ESTADO PRIVADO QUE CONTIENE EL CONTADOR */

function incrementarContador() {
    // ? funcionParaCambiar(nuevoValor)
    setContador(contador +1)
}
/* FUNCIÓN PARA ACTUALIZAR EL ESTADO DE LA PERSONA EN EL COMPONENTE */
function actualizarPersona() {
    setPersona(
        {
            nombre: 'Muni',
            email: 'muni@gmail.com'
        }
    )
}
    return (
        <div>
            <h1>
                *** Ejemplo de useState ***
            </h1>
            <h2>CONTADOR : { contador } </h2>
            <h2>DATOS PERSONALES</h2>
            <h3>NOMBRE : {persona.nombre} </h3>
            <h3>EMAIL: {persona.email} </h3>
            {/* Bloque de botones para actualizar el estado del componente */}
            <button onClick={ incrementarContador }>Incrementar contador</button>
            <button onClick={ actualizarPersona } >Cambio de usuario</button>
        </div>
    );
}

export default Ejemplo1;
