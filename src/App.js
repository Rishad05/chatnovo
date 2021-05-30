import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser,logout } from './features/counter/userSlice';
import Login from './Login';

import { auth } from './firebase';
import ChatNovoMessage from './ChatNovoMessage';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email:authUser.email,
            displayName:authUser.displayName,
          })
        );

      }else{
        dispatch(logout());

      }
      
    });
  },[])








  return (
    <div className="App">
      {user ? <ChatNovoMessage/> :<Login/> }

      

    </div>
  );
}

export default App;
