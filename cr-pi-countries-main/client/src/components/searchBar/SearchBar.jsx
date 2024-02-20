import { useState } from "react";
import React from "react";


function SearchBar(props){

   const [name, setName] = useState('')

   function handleChange(evento){
       setName(evento.target.value)
    }
    const search = () => {
       props.onSearch(name)
       setName('')
    }
    
    return (
       <div> 
          <input type='search' onChange={handleChange} placeholder="Buscar por nombre" value={name} /> 
          <button onClick={search}>Buscar</button> 
         <div>
            <button onClick={search}>Todos los Paises</button> 
         </div>
       </div>
       
          
    );
}


 export default SearchBar;