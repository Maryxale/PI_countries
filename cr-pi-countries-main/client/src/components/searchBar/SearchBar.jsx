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

    function handleSubmit(evento){
      evento.preventDefault();
      dispatch(searchName(name));
      setName('')
      props.onPageChange(1);
    }
//ver si agrego el reload
    return (
       <div className={style.barra}> 
          
          <input className={style.search} type='search' onChange={(evento) => handleChange(evento) } placeholder="Buscar por nombre" value={name} /> 

          <button className={style.buttonsearch} type='submit' disabled={name === ''} onClick={(evento) => handleSubmit(evento) }>Buscar</button> 

          <button className={style.buttonsearchh} type='submit' onClick={(event) => props.handleFilter(event)}>Reset</button>

          <NavLink className={style.select} to="/">Salir</NavLink>
          <NavLink className={style.select} to="/form">Crear Actividad</NavLink>
        
       </div>
       
          
    );
}


 export default SearchBar;