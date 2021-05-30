import { Button } from '@material-ui/core'
import React from 'react'
import { Provider } from 'react-redux';
import { auth, provider } from './firebase'

import './Login.css'
function Login() {

    const signIn = () =>{
        auth.signInWithPopup(provider).catch((error) => alert(error.massage));
    };
    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"/>
                <h1 className='ms-3'>ChatNovo</h1>

           </div>
           <Button onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login
