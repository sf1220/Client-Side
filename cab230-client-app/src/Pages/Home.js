import React, {useEffect, useState} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';




function Home() {
    const [isLoggedin, setIsLoggedin] = useState(false);

    const logout = () => {
        localStorage.removeItem('user-info');
        setIsLoggedin(false);
        alert("Succesfully logged out.")
      };


    return(
    <>
        <head>
            <title>

            </title>
        </head>

        <body>
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
        </body>

        <h1 className="text-center">Volcanoes of the world</h1>
        
        
        <div className="text-center">
            <img src="https://wallpaperaccess.com/full/1375472.jpg" alt="Mayon Volcano" width="1000" height="400"/>
        </div>

        <div className="container p-3 my-3 bg-dark text-white">
            <p>
                Access information about volcanoes via online tool
            </p>
            
            <li><a href="/list">Volcano List</a></li>
            
        </div>
        

    </>
        
        
    );
}

export default Home;