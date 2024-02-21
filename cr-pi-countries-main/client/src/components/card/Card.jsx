import { NavLink } from "react-router-dom";
import React from "react";
import CardStyles from './Card.module.css';



//renderizo


function Card ({id, name, flags, continent}){
    return (
        <NavLink to={`/detail/${id}`}>
          <div className={CardStyles.divCard}>
            <div className={CardStyles.divTop}>
              <div className={CardStyles.divImg}>
                <img className={CardStyles.imgCard} src={flags} alt="Country" />
              </div>
              <div className={CardStyles.divTitles}>
                <h4 className={CardStyles.title}>{name}</h4>
                <h6 className={CardStyles.subtitle}>Continent: {continent}</h6>
              </div>
            </div>
          </div>
        </NavLink>
      );
}


// return (
//     <div>
//          <h3>{name}</h3>

//      <Link to={`/detail/${id}`}>
//         <img src={flags} alt="country" />
//      </Link>
     
//      <h4>Continente: {continent}</h4>
//      </div>
//  )




export default Card;