import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Card from "../card/Card";
import SearchBar from "../searchBar/SearchBar";
import axios from 'axios'

const URL = 'http://localhost:3001/countries';


function Home({onSearch}){
 

 useEffect(() => {
    const Data = async () => {
        try {
          const response = await axios.get(URL);
          const countries = response.data; // Asumiendo que la respuesta contiene una lista de países
          onSearch(countries); // Actualiza el estado con los países obtenidos
        } catch (error) {
          console.error('Error al cargar los países:', error.message);
        }
      };
      Data();
 }, [onSearch])

    return(
        <div>
            <SearchBar onSearch={onSearch}/>
           
           
        </div>
        
            
    )
}

export default Home;