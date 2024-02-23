import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { countryDetail } from "../../redux/actions";
import { useEffect } from "react";
import styles from './Detail.module.css';

function Detail(){

    const {id}= useParams();
    const countries= useSelector(state => state.details)
    const dispatch= useDispatch();
//traer la accion
    useEffect(() => {
        dispatch(countryDetail(id))
    }, [id])

    return (
        <div>
    
      <div className={styles.containerPagina}>
          <div className={styles.containerImg}>
              <h1 className={styles.pais}>{countries?.name}</h1>
                <img className={styles.img} src={countries?.flags} alt={countries?.name} />
          </div>
    
            <div>
              <div className={styles.containerDetalle}>
              <h1 className={styles.titulos}>Datos del Pais</h1>
              <h3 className={styles.text}>Continent: {countries?.continent} </h3>
              <h3 className={styles.text}>Capital: {countries?.capital}</h3>
              <h3 className={styles.text}>Subregion: {countries?.subregion}</h3>
              <h3 className={styles.text}>Area: {countries?.area} km²</h3>
              <h3 className={styles.text}>Population: {countries?.population}</h3>
              </div>
    
         <div className={styles.containerDetalle}>
          <h1 className={styles.titulos}>Actividades Turisticas</h1>
    
         <div className={styles.actividades}> 
          {
          countries?.Activities?.length > 0 ?
          (
          countries?.Activities?.map((activity) => (
              <div className={styles.actcontainer}>
                <h3 className={styles.textsubtitulos}>{activity.name}</h3>
                <h5 className={styles.text}>Dificulty: {activity.difficulty}</h5>
                <h5 className={styles.text}>Duration: {activity.duration} hs</h5>
                <h5 className={styles.text}>Season: {activity.season}</h5>
              </div>
            )))
          : (<p className={styles.Loading}>Sin actividades recientes</p>)  
         }
         </div>
    
         </div>
         </div>
      </div>
      </div>
      );
    };


export default Detail;