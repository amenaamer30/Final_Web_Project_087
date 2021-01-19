import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


const signIn = e => {
    e.preventDefault();

    auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
}

const register = e => {
    e.preventDefault();

    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // it successfully created a new user with email and password
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
}

    return (
        <div className='login'>
           
            <div className='login__container'>
                <h1>ACCOUNT</h1>

                <p>
                    sign in below, or create an account to check out faster,
                     store addresses,
                      view your order history or more.
                </p>
                <form>
                    <h2>Email</h2>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h2>Password</h2>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick={signIn}>SIGN IN</button>
                </form>

                

                <button className='login__registerButton' onClick={register} > Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login