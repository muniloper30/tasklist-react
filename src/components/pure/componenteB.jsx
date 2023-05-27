import React, { useState } from 'react';
import PropTypes from 'prop-types';



const ComponenteB = (estado) => {
    const[conectado,setConectado] = useState(estado)
    return (
        <div>
            <h4>{conectado === false ? 'Contacto Desconectado' : 'Contacto en línea'}</h4>
            <button onClick={()=> setConectado(!conectado)}>{conectado === false ? 'Connect' : 'Disconnect'}</button>
        </div>
    );
};


ComponenteB.propTypes = {
    estado: PropTypes.bool,
};


export default ComponenteB;
