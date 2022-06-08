import React, {useEffect, useState} from "react";

function ErrorPage() {
   // return <div> ERROR! PAGE NOT FOUND</div>;
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
        </>      
        );

}

export default ErrorPage;