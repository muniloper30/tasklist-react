/* Ejemeplo de uso del método componentWillUnMount para el componente clase
y ejemplo de uso de hooks para componente funcional.
(CUANDO EL COMPONENTE VA A DESAPARECER) */

import React, { Component, useEffect } from 'react';

export class WillUnMount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca')
    }

    render() {
        return (
            <div>
                <h1>
                    WillUnMount
                </h1>
            </div>
        );
    }
}



export const WillUnMountHook = () => {

    useEffect(() => {
        // aquí no ponemos nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca')
        };
    }, []);

    return (
        <div>
            <h1>
                WillUnMount
            </h1>
        </div>
    );
}



