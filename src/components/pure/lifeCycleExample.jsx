/* EJEMPLO DE COMPONENTE DE TIPO CLASE QUE DISPONE DE LOS MÉTODOS DE CICLO DE VIDA */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifeCycleExample extends Component {
    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR: Cuando se instancia el componente')

    }

    componentWillMount() {
        console.log('WILLMOUNT: Antes del montaje del componente')
    }

    componentDidMount() {
        console.log('DIDMOUNT: Justo al acabar el montaje del componente antes de pintarlo')
    }

    componentWillReceiveProps(nextProps) {
        console.log('Si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState) {
        /* Sirve para controlar si el componente debe o no actualizarse. */
        //return true/false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Justo antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Justo después de actualizarse')
    }

    componentWillUnmount() {
        console.log('Justo antes de desaparecer')
    }

    render() {
        return (
            <div>
            
            </div>
        );
    }
}

lifeCycleExample.propTypes = {

};

export default lifeCycleExample;