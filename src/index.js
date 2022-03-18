import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

import {createStore} from 'redux';

//STORE -> Globalized State 

//ACTION -> INCREMENT description what we want to do
const increment = () => {
  return {
    type: 'INCREMENT'
  }
};

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}; 

//REDUCER -> takes current action and modifiy store based on action provided
let state = 0;
const counterReducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

let store = createStore(counterReducer);

//display in the console
store.subscribe(() => console.log(store.getState()));

//DISPATCH -> execute action to the reducer
store.dispatch(increment());


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

