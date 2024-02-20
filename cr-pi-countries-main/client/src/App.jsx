
import { useState, useEffect}  from 'react'

import './App.css'
import Home from './components/home/Home';
import LandingPage from './components/landingPage/LandingPage';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/detail/Detail';
import Cards from './components/cards/Cards';
import axios from 'axios';


function App() {
  const location = useLocation();
//  const {pathname} = useLocation();
//  const [countries, getCountries] = useState([])
//  const navigate = useNavigate();

//   const URL = 'http://localhost:3001/countries'

//   const onSearch = async (name) => {
//     try{
//       if(!name) return alert('Ingrese el nombre de un Pais');

//       if(countries.find((char) => char.name === name)){
//         return alert(`Ya existe el personaje ${name} `); 
//       }
//       const response = await axios.get(`${URL}${id}`);
//       const { data } = response;

//       if(data.id){
//         getCountries([data,...countries]);
//       }else{
//         alert('No hay pais con ese ID');
//       }
//     }catch(err){
//       alert(err.message);
//     }
//   };

//   const onClose = (name) => {
//     getCountries(countries.filter(char => char.name !== name))
//   };

  
//{ location.pathname !== '/' && location.pathname !== '/home' ? <Nav/>: null }
//<Route path='/form' element={<Form/>}/>

  return (
  <div className="App">
      <div className='dark'>
      { location.pathname !== '/' && location.pathname !== '/home' ? <Nav/>: null }
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          
        </Routes>
      </div> 
  </div>
  )
}

export default App;