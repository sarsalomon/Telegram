import React, { createContext } from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import User from './chat/Users';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{
    user: new User()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
