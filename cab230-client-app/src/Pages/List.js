import React, {useEffect, useState} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css'; // Optional theme CSS
import { useNavigate } from 'react-router-dom';
import { Badge } from 'reactstrap'; 


const Country_URL = "http://sefdb02.qut.edu.au:3001/countries"

function List() {
    const [countries, setCountries] = useState([])
    const [countryValue, setCountryValue] = useState("Algeria")
    const [isLoggedin, setIsLoggedin] = useState(false);
    const handleChange = (e) => {
        setCountryValue(e.target.innerHTML)
        console.log(countryValue);
    }
    const navigate = useNavigate();
    let volcId = [];
    

    useEffect(() => { 
        fetch(Country_URL)
        .then(res => res.json())
        .then(data => {
            setCountries(data)
        }
        )
        fetch(`http://sefdb02.qut.edu.au:3001/volcanoes?country=${countryValue}`)
        .then(res => res.json())
        .then(data => data.map((volcano) => {return {
                            name: volcano.name,
                            country: volcano.country,
                            region: volcano.region,
                            subregion: volcano.subregion,
                            id: volcano.id
                        }
                    }))
        .then(rowData => setRowData(rowData));
    }, [countryValue])    

    const logout = () => {
        localStorage.removeItem('user-info');
        setIsLoggedin(false);
        alert("Succesfully logged out.")
      };



const [rowData, setRowData] = useState([]);

const columns = [
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "Country", field: "country" },
    { headerName: "Region", field: "region", sortable: true, filter: true },
    { headerName: "Subregion", field: "subregion", sortable: true, filter: true },
]



return(
    <>
        <head>

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

            <div className="text-center">
                <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select Country
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {countries.map((country) => {
                        return <li className="dropdown-item" value={country} onClick = {handleChange}>{country}</li>
                    })}
                </div>
            </div>

            <div className="text-center">
                <h1>Volcano List</h1>
                <p>
                <Badge color="success">{rowData.length}</Badge> Volcanoes found in {countryValue}
                </p>
                <div className="d-flex justify-content-center">
                    <div className="ag-theme-alpine-dark" style={{
                        height: "393px",
                        width: "804px",
                        textalign: "center"
                    }}>
                        <AgGridReact 
                        columnDefs={columns} 
                        rowData={rowData} 
                        pagination={true} 
                        paginationPageSize={7}
                        onRowClicked={
                            rowData => {volcId = rowData.data.id;
                            navigate(`/volcano/${volcId}`)
                            }
                        }
                        >
                        </AgGridReact>
                    </div>
                </div>
            </div>
        </body>
    </>  
    );
}

export default List;