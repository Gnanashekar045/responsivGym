import logo from './logo.svg';
import './App.css';
import ToDOList from './compononts/toDoList';
import { useState } from 'react';
import NoteApp from './compononts/note';

function App() {
  return (
    <div className="App">
      <ToDOList/>
      <NoteApp/>
    </div>
  );
}

export default App;
