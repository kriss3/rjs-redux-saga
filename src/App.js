import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login } from './redux/actions';

export default function App() {
  
  const handleIncrement = () => {
    dispatch(increment(5));
  };

  const handleDecrement = () => {
    dispatch(decrement(5));
  };

  const handleLogin = () => {
    dispatch(login());
  }; 


  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.isLogged);
  return (  
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
          <p>Counter: {counter}</p>
        </div>
        <div>
          <button onClick={handleLogin}>Login</button>
        </div>
        {isLoggedIn ? <h3>Some important info when I am logged IN...</h3> : ''}
      </header>
    </div>
  );
};
