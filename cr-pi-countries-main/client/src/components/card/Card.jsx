import { Link } from "react-router-dom";
import React from "react";



function Card ({id, name, flags, continent, capital, subregion, area, population }){
    return(
        <div>
            <h2>{id}</h2>
            <Link to={`/details/${countries.id}`}><h2>Ver Detalles</h2></Link>
            <img src={flags} alt={`Bandera de ${name}`} />
            <h2>{continent}</h2>
            <h2>{capital}</h2>
            <h2>{subregion}</h2>
            <h2>{area}</h2>
            <h2>{population}</h2>
            
        </div>
    );
}

export default Card;