import React from 'react';
import './App.css';
import Todos from './components/Todos'

function App() {

  
  return (
    console.log(this.state.todos),
    <div className="App">
      <Todos/>
    </div>
  );
}

export default App;
