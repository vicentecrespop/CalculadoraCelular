import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Phone from './main/Phone';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='tela'>
    <h1>Calculadora de Celular</h1>
    <Phone className="celularCalc"/>
    <span className='footer'>Criado por Vicente Crespo</span>
  </div>
);


reportWebVitals();
