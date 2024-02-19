import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";


function Home({onSearch}){
   
    return(
        <div>
            

            <SearchBar onSearch={onSearch}/>
        </div>
            
    )
}
export default Home;