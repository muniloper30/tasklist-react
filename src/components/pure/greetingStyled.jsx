import React, { useState } from 'react';


//DEFINIENDO ESTILOS EN CONSTANTES 

// ? Estilo para usuario logueado
const loggedStyle = {
    color: 'blue'
};
//? Estilo para usuario no logueado
const unloggedStile = {
    color :'tomato',
    fontWeight: 'bold'
}
const GreetingStyled = (props) => {


    /* Generamos un estado para el componente 
    y así controlar si el usuario está o no logeado */

const [logged, setLogged] = useState(false);

const greetingUser = () => (<p>Hola, {props.name} </p>);
const pleaseLogin = () => (<p>Please login</p>);
    return (
        <div style={ logged ? loggedStyle : unloggedStile}>
            {   logged ? 
                greetingUser()
                : 
                pleaseLogin()
            }
            <button onClick={ () => {
                console.log('Botón pulsado');
                setLogged(!logged);
            } }>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}

export default GreetingStyled;
