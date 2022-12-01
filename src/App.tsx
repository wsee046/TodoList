import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className="App">
      <h2>My Todos</h2>
      <AddTask/>
    </div>
  );
}

export default App;
