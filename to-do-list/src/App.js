import logo from './logo.svg';
import './App.css';
import ToDOList from './compononts/toDoList';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <ToDOList/>
    </div>
  );
}

export default App;
