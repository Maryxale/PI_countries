import { Link } from "react-router-dom";
import React from "react";


//renderizo


function Card ({id, name, flags, continent}){
    return (
       <div>
            <h3>{name}</h3>

        <Link to={`/detail/${id}`}>
           <img src={flags} alt="country" />
        </Link>
        
        <h4>Continente: {continent}</h4>
        </div>
    )
}







export default Card;