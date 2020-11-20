import logo from './logo.svg';
import './App.css';

import {version} from "./../package.json"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Supongamos que puedes tocar la ropa y cambiar de música
        </p>
        <p>
          Program version : {version}
        </p>
        <p>
          For the University of Valparaíso
        </p>
      </header>
    </div>
  );
}

export default App;
