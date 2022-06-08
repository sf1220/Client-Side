import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import App from '../App';

const API_URL = "http://sefdb02.qut.edu.au:3001/user/login"

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedin, setIsLoggedin] = useState(false);
    const navigate = useNavigate();
    let apiRes = "";
    let apiResult = "";
    let user = localStorage.getItem("user-info")

    async function login() {
        let item={email,password};

        let result = await fetch(API_URL, {
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":'application/json'
            },
            body:JSON.stringify(item)
            
        });
        result = await result.json();
        console.warn("result",result)
        
        apiResult =  JSON.stringify(result.error)
        console.log(apiResult)
        
        if (typeof(JSON.stringify(result.error)) == "undefined"){
            localStorage.setItem('token', result.token)
            alert("Succesfully logged in")
            navigate("/")
            
            }
        else {
            if (apiResult = true) {
                alert(JSON.stringify(result.message))
            }
            }
        }   
        
        


    const logout = () => {
        localStorage.removeItem('user-info');
        setIsLoggedin(false);
        alert("Succesfully logged out.")
      };


    return(
        <>
        <head>

        </head>
        <body>
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">Volcanoes</a>
                        </div>
                        <ul className="nav navbar-nav navbar-left">
                            <li><a href="/">Home</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-left">
                            <li><a href="/list">Volcano List</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/login"><span className="glyphicon glyphicon-user"></span> Login</a></li>
                        </ul>
                        <ul className="nav navbar-nav">
                            <button className="btn btn-danger" onClickCapture={logout}>Logout User</button>
                        </ul>
                    </div>
                </nav>
            </div>

            <div>
                    <h1 className='text-center'>
                        Login to your account below.
                    </h1>
                </div>

            <div className='text-center'>
                <div className="col-sm-6 offset-sm-3">
                    <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} className="form-control"/>
                    <br/>
                    <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} className="form-control"/>
                    <br/>
                </div>
                    <button onClick={login} className="btn btn-primary">Log in</button>
            </div>
            
        </body>
        </>
    )

}

export default Login;