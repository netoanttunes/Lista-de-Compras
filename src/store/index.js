import { createStore } from 'redux';

const INITIAL_STATE = {
  data: [ 
   
   ],
   lista: [

   ]
};

function ingredientes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, data: [...state.data, {name: action.name, metrica: action.metrica}] };
    
    case 'ADD-QUANTIDADE':
      return { ...state, lista: [...state.lista, action.quantidade] };  

    default:
      return state;

    
  }
}



const store = createStore(ingredientes);

export default store;
