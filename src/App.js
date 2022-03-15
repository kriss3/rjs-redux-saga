import { Divider } from 'antd';
import './App.css';
import MyGrid from './MyGrid';

import NestedTable from './NestedTable';

const data = {
  fname: 'Mark',
  lname: 'White'
};

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <div className='content'>
          <Divider />
          <div className='rtTable'>
            <MyGrid />
          </div>
          <Divider />
          <NestedTable />
          <Divider />
      </div>
    </div>
  );
};
