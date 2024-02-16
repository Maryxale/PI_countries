import React from "react";
import { Link } from 'react-router-dom';
import mapa from '../../assets/mapa-mundo.jpg';
import style from './LandingPage.module.css';


function LandingPage (){
return (
   
    <div className={style.container} style={{ backgroundImage: `url(${mapa})` }}> 
    
        <Link to='/home'>
        <button>Home</button>
        </Link>
    </div>
    
)
}



export default LandingPage;