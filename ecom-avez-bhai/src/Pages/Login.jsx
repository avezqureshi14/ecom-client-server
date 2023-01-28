import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from "react-router";
const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginUser = async (e) =>{
    const isAuthenticated = false;
    e.preventDefault();
    try {
        const res = await fetch('/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password 
            })
        });
        const data = await res.json();
        if (data.error) {
            console.log(data.error);
            alert("Login Successful")
            navigate('/cart');

        } else {
            console.log(data);
            alert("Login Successful")
            navigate('/cart');
        }
    } catch(err) {
        console.log(err);
        // display error message using modal or snackbar
    }
}

function handleLogout() {
    setIsLoggedIn(false);
  }


    return (
        <>
            <div class="loginContainer">
                <div></div>
                <div class="logContainer">

                    <form class="sha" action="">
                        <h2 class="margin-left" >Login</h2>
                        <div class="loginForm">
                            <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter your Email" name="email" id="" />
                        </div>
                        <div class="loginForm">
                            <input type="text"  value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="Enter password" name="password" id="" />
                        </div>
                        <div className='loginBtn'  onClick={loginUser}  >Login</div>
                        <h5>Don't have an account <Link to='/register' >Register</Link> </h5> 
                    </form>
                </div>
                <div></div>
            </div>
        </>
    )
}

export default Login