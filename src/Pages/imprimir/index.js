import React from 'react';
import { useSelector } from 'react-redux';

import './styles.css';


function ListaCompras(){

    const ingredientes = useSelector(state => state.lista); 
   
    return ( 
      <div className="container">
        <header>
          <h1>Lista de Compras</h1>
        </header>
          <ul>
            {ingredientes.map(ingrediente => <li key={ingrediente.name}>
              {ingrediente.name} {ingrediente.quantidade} {ingrediente.metrica}
              </li>) }
          </ul>
          <button className="button" onClick={() => window.print()}>
                      IMPRIMIR
          </button>
          
       </div>
  )
}

export default ListaCompras