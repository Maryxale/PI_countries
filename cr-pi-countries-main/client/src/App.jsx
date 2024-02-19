
import { useState, useEffect}  from 'react'

import './App.css'
 //configuracion con react-router-dom}
 import axios from 'axios';
 import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
 import Cards from './components/cards/Cards';
 import Card from './components/card/Card';
 import LandingPage from './components/landingPage/LandingPage';
 import Home from './components/home/Home';
 import Detail from './components/detail/Detail';


function App() {
 const {pathname} = useLocation();
 const [characters, setCharacters] = useState([])

  const URL = 'http://localhost:3001/countries'

  const onSearch = async (name) => {
    try{
      if(!name) return alert('Ingrese el nombre de un Pais');

      if(characters.find((char) => char.name === name)){
        return alert(`Ya existe el personaje ${name} `); 
      }
      const response = await axios.get(`${URL}${id}`);
      const { data } = response;

      if(data.id){
        setCharacters([data,...characters]);
      }else{
        alert('No hay pais con ese ID');
      }
    }catch(err){
      alert(err.message);
    }
  };

  const onClose = (name) => {
    setCharacters(characters.filter(char => char.name !== name))
  };

  

  return (
   <div>
     {pathname !== '/' && <Home onSearch={onSearch}/> }
    <Routes>
      <Route path='/' exact Component={LandingPage}/>

      <Route path='/home' element={Home} onClose={onClose}/>

      <Route path='/detail/:id' element={Detail}/>

      <Route path='/' element={Detail}/>
    </Routes>
   </div>
  )
}

export default App
