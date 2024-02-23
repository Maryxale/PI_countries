import { NavLink } from "react-router-dom";
import React from "react";
import style from './Card.module.css';



//renderizo


function Card ({id, name, flags, continent}){
    return (
        <NavLink to={`/detail/${id}`}>
          <div className={style.Card}>
            <div className={style.Top}>
              <div className={style.Img}>
                <img className={style.imgCard} src={flags} alt="Country" />
              </div>
              <div className={style.Titulos}>
                <h4 className={style.titulo}>{name}</h4>
                <h6 className={style.subtitulo}>Continent: {continent}</h6>
              </div>
            </div>
          </div>
        </NavLink>
      );
}
export default Card;