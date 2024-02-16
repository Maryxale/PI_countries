
import { useState } from 'react'

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
 
  return (
   <div>
    <Routes>
      <Route path='/' exact Component={LandingPage}/>
    </Routes>
   </div>
  )
}

export default App
