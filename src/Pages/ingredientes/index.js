import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles.css';


function ListaItens(){
    const [name, setName] = useState("");
    const [metrica, setMetrica] = useState("");
   
    const dispatch = useDispatch();  
    const ingredientes = useSelector(state => state.data); 
   
    function addIngredientesAction(name, metrica) {
      return { type: 'ADD', name, metrica }
    }

    function addIngrediente() {
      dispatch(addIngredientesAction(name, metrica))
      console.log(name, metrica)
    }

     
    return ( 
      <div className="container">
        <header>
          <h1>Faça Sua Lista de Compras</h1>
        </header>
        <div className="input">
          <input 
            placeholder="Itens"
            value={name}
            onChange={ e => setName(e.target.value)} 
          />
            <select id="metrica"
             name="metrica"
             value={metrica}
             onChange={ e => setMetrica(e.target.value)} > 
              <option>Selecione a Métrica</option> 
			        <option> Kg </option> 
			        <option> Lt </option>
		        	<option> Unid </option> 
		      	</select>
          <button className="button" onClick={() => addIngrediente(name, metrica)}>
                      ADICIONAR
          </button>
        </div>
          <ul>
            {ingredientes.map(ingrediente => <li key={ingrediente}>{ingrediente.name} {ingrediente.metrica}</li>) }
          </ul>
          <Link className="button" to="/quantidade">CONCLUIR</Link>
        </div>
     

    )
}

export default ListaItens