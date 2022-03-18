import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

import {createStore} from 'redux';
import allReducers from './redux/reducers';

//Provider connect our store with entire applicaiton
import { Provider } from 'react-redux';

const store = createStore(allReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//STORE -> Globalized State 

//ACTION -> INCREMENT description what we want to do

//REDUCER

//display in the console
//store.subscribe(() => console.log(store.getState()));

//DISPATCH -> execute action to the reducer
//store.dispatch(increment());
//store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

