import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes.js';


import store from './store';
import './global.css'


function App() {
  return (

    <Provider store={store}>
      <div className="global">
      
      <Routes />
            
      </div>
    </Provider>
  );
}

export default App;
