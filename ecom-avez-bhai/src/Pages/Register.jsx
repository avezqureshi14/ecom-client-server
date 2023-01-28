import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    })
    let name, value
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    const PostData = async (e) => {
        e.preventDefault();

        const{name,email,phone,work,password,cpassword} = user;
        const res = await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,work,password,cpassword

            })
        })

        const data = res.json();
        
        if (data.status === 422 || !data ) {
            window.alert("Invalid Regsitration ");
            console.log("Invalid Regsitration ");
            console.log(data)
        }
        else{
            window.alert("Regsitration Successful ");
            console.log("Regsitration Successful");
            console.log(data)
            navigate('/login')
        }
    }
    return (
            <div class="loginContainer regsiterContainer">
                <div></div>
                <div class="logContainer ">

                    <form  method='POST'  class="sha" action="">
                        <h2 class="margin-left" >Regsiter</h2>
                        <div class="loginForm">
                            <input type="text" placeholder="Enter your Name" name="name" value={user.name} onChange={handleInputs} id="" />
                        </div>
                        <div class="loginForm">
                            <input type="email" placeholder="Enter your Email" name="email" value={user.email} onChange={handleInputs} id="" />
                        </div>
                        <div class="loginForm">
                            <input type="number" placeholder="Enter your mobile number" name="phone" value={user.phone} onChange={handleInputs} id="" />
                        </div>
                        <div class="loginForm">
                            <input type="text" placeholder="City of Residence" name="work" value={user.work} onChange={handleInputs} id="" />
                        </div>
                        <div class="loginForm">
                            <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleInputs} id="" />
                        </div>
                        <div style={{"marginBottom":"1rem"}} class="loginForm">
                            <input type="password" placeholder="Confirm password" name="cpassword" value={user.cpassword} onChange={handleInputs} id="" />
                        </div>
                        <div className="formBtn">
                        <div className='loginBtn regbtn'  onClick={PostData}  >Register</div>

                        </div>
                        <h5>Already have an account <Link to='/login' >Login</Link> </h5>
                        </form>
                </div>
                <div></div>
            </div>
    )
}

export default Register