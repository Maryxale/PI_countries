import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchName } from "../../redux/actions"; //action a utilizar
import { NavLink } from 'react-router-dom';

import React from "react";
import style from './SearchBar.module.css';



function SearchBar(props){
 const dispatch = useDispatch();

   const [name, setName] = useState('')
   
   function handleChange(evento){
       const value = evento.target.value;
       setName(value);
    }

   async function handleSubmit(evento){
      evento.preventDefault();
      dispatch(searchName(name));
      setName('')
      props.onPageChange(1);
   }
   

    
//ver si agrego el reload
    return (
       <div className={style.nav}> 
          
         <input className={style.buscar} type='search' onChange={(evento) => handleChange(evento) } placeholder="Buscar por nombre" value={name} /> 

         <button className={style.botonbuscar} type='submit' disabled={name === ''} onClick={(evento) => handleSubmit(evento)}>Buscar</button> 

         <button className={style.botonBuscar} type='submit' onClick={(event) => props.handleFilter(event)}>Reset</button>

         <NavLink className={style.select} to="/form">Nueva Actividad</NavLink>

         <NavLink className={style.select} to="/">Salir</NavLink>
       </div>
       
          
    );
}


 export default SearchBar;