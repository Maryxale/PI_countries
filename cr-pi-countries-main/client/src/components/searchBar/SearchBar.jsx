import { useState } from "react";
import { useDispatch } from 'react-redux';


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
           <input type='search' onChange={handleChange} placeholder="Ingresa un Pais" value={name} /> 
           <button onClick={search}>Buscar</button> 
        </div>
           
     );
}
export default SearchBar;