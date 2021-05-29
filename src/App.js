import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      {/* {user ? } */}

 <h1>hii</h1>
    </div>
  );
}

export default App;
