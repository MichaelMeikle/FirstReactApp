import React from 'react';
import Lake from './components/Lake'
import './App.css';
import 'react-progress-button/react-progress-button.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Lake lakeSize="mustang"/>
      </header>
    </div>
  );
}

export default App;
