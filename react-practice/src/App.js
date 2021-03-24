import logo from './logo.svg';
import './App.css';

import {work1} from './02/02-10-2.js'
import {work2} from './02/02-10-2.js'
import {work3} from './02/02-10-2.js'
import {urgentWork} from './02/02-10-2.js'

function App() {
  

  // for promise test
  work1().then(msg1 => {
    console.log(msg1);
    return work2();
  }).then(msg2 => {
    console.log(msg2);
    return work3();
  }).then(msg3 => {
    console.log(msg3);
  });

  // urgentWork
  urgentWork();
  return (
    <div className="App">
      <h1 className="title">Start React Project Hello</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

          
        </a>
      </header>
    </div>
  );
}

export default App;
