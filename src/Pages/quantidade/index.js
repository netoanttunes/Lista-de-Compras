import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles.css';


function Quantidade(){
    const [quantidade, setQuantidade] = useState([]);

    const dispatch = useDispatch();  
    const ingredientes = useSelector(state => state.data); 
   
    function addIngredientesAction(quantidade) {
      return { type: 'ADD-QUANTIDADE', quantidade}
    }

    function addIngrediente() {
      dispatch(addIngredientesAction(quantidade))
      console.log(quantidade)
    }

     
    return ( 
      <div className="container">
        <header>
          <h1>Insira as Quantidades</h1>
        </header>
       
          <ul>
            {ingredientes.map(ingrediente => <li key={ingrediente.name}>
              {ingrediente.name}
              <input 
              placeholder="Qnt"
              value={ingrediente.quantidade}
              onChange={ e => {
                setQuantidade({ name: ingrediente.name, quantidade: e.target.value, metrica: ingrediente.metrica })
                }}  
              /> 
              {ingrediente.metrica} 

              <button className="button" onClick={() => addIngrediente(quantidade)}>
                      ADICIONAR
              </button>

              </li>) }
          </ul>
          <Link className="button" to="/imprimir">CONCLUIR</Link>
       </div>
    )
}

export default Quantidade