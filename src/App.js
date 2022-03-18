import './App.css';

import { useSelector } from 'react-redux';

export default function App() {
  const counter = useSelector(state => state.counter);

  const isLoggedIn = useSelector(state => state.isLoggedIn);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Counter: {counter}</p>
        {isLoggedIn ? <h3>Some important info when I am logged IN...</h3> : ''}
      </header>
    </div>
  );
};
