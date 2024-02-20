import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchName } from "../../redux/actions"; //action a utilizar
import { Link } from 'react-router-dom';
import React from "react";


 

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
    
    return (
       <div> 
          
          <input type='search' onChange={(evento) => handleChange(evento) } placeholder="Buscar por nombre" value={name} /> 

          <button  onClick={(evento) => handleSubmit(evento) }>Buscar</button> 

       </div>
       
          
    );
}


 export default SearchBar;