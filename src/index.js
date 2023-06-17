import React from 'react';
import ReactDOM from 'react-dom/client';

//? AÑADIR BOOTSTRAP A NUESTRO PROYECTO 
import 'bootstrap/dist/css/bootstrap.css';
//! IMPORTANTE : LOS ESTILOS PROPIOS , DEBEN IR DEBAJO DEL BOOTSTRAP PARA QUE NO NOS LO PISE
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
