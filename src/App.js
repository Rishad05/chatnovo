import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useSelector } from 'react-redux';
import { login, selectUser } from './features/counter/userSlice';
import Login from './Login';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      {/* {user ? } */}
<Login></Login>
 <h1>hii</h1>
    </div>
  );
}

export default App;
