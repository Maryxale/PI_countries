import React from "react";
import { Link } from 'react-router-dom';


function LandingPage (){
return (
    <div>
        
        <h1>Bienvenido a la app de Countries</h1>
        <Link to='/home'>
        <button>Home</button>
        </Link>
    </div>
)
}

export default LandingPage;