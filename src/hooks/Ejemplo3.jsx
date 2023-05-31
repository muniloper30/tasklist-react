/* EJEMPLO HOOKS : 
- useState()
- useContext() */

import React, { useState, useContext } from 'react';

/* COMPONENTE 1
Dispone de un contexto que va a tener un valor que recibe desde el padre */

const miContexto = React.createContext(null)


const Componente1 = () => {
    //Inicializamos null que va a rellenarse con los datos 
    // del padre
    const state = useContext(miContexto)

    
    return (
        <div>
            <h1>
                El token es : {state.token}
            </h1>
            {/* Pintamos el componente 2*/}
            <Componente2></Componente2>
        </div>
    );
}



const Componente2 = () => {
    const state = useContext(miContexto)

    return (
        <div>
            <h2>
                La sesión es : { state.sesion }
            </h2>
        </div>
    );
}



export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    //Creamos el estado de este componetne
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion (){
        setSessionData(
            {
                token: 'JHHDSE33421',
                sesion: sessionData.sesion + 1
            }
        )
    }
  return (
   <miContexto.Provider value = {sessionData}>
    {/* TODO LO QUE ESTÉ AQUI DENTRO PUEDE LEER LOS DATOS DE sessionData
    Además , si se actualiza, los componentes de aquí , también lo actualizan */}
    <h1>*** Ejemplo de useState y useContext ***</h1>
    <Componente1></Componente1>
    <button onClick={actualizarSesion}>Actualizar sesión</button>
   </miContexto.Provider>
  )
}




