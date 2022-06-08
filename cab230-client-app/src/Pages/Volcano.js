import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Map } from "pigeon-maps"
import { stamenTerrain } from 'pigeon-maps/providers'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Volcano() {
    const navigate = useNavigate();
    const params = useParams();
    let volcanoId = params.id;
    let [volcanoes, setVolcanoes] = useState([]);
    let longitude = parseFloat(volcanoes.longitude)
    let latitude = parseFloat(volcanoes.latitude)
    const [center, setCenter] = useState(10.463, -84.703)
    const [zoom, setZoom] = useState(9)
    const [isLoggedin, setIsLoggedin] = useState(false);
    let item = [];


    useEffect(() => {
        fetch(`http://sefdb02.qut.edu.au:3001/volcano/${volcanoId}`)
        .then(res => res.json())
        .then(data => {setVolcanoes(data)}
        )
    }, [])

    const logout = () => {
        localStorage.removeItem('user-info');
        setIsLoggedin(false);
        alert("Succesfully logged out.")
    };

    // let chartFetch = fetch(`http://sefdb02.qut.edu.au:3001/volcano/${volcanoId}`, {
    //     method:'GET',
    //     headers:{
    //         "token":"application/json",
    //         "Accept":"application/json"
    //     },
    //     body:JSON.stringify(item),
    // });
    // console.log(item)

    

    //console.log(localStorage.getItem('token'))
    
    


    return( 
        <>
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

        <div className="text-center">
            <h1>{volcanoes.name} Volcano</h1>
            <p></p>
            <p>This Volcano is located in {volcanoes.country} in the {volcanoes.region} region, subregion {volcanoes.subregion}</p>
            <p>Last eruption: {volcanoes.last_eruption}</p>
            <p>Summit: {volcanoes.summit}</p>
            <p>Elevation: {volcanoes.elevation}</p>
            <p>Coordinates: Latitude: {volcanoes.latitude} , Longitude: {volcanoes.longitude}</p>
        </div>

        <div className="container">
            <Map
                provider={stamenTerrain}
                height={200}
                center = {center}
                zoom = {zoom}
                onBoundsChanged={({ center, zoom }) => { 
                    setCenter(center) 
                    setZoom(zoom) 
                  }} 
            />
        </div>

        {/* <div>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
            <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>
            </ResponsiveContainer>
        </div> */}

        <div className="container">
            <button type="button" className="btn-dark"  onClick={() => navigate("/")}>Back</button>
        </div>
        
        </>
    )
}

