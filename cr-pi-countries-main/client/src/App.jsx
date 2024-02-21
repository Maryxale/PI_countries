

import './App.css'
import Home from './components/home/Home';
import LandingPage from './components/landingPage/LandingPage';
import { Routes, Route, useLocation} from 'react-router-dom';
import Detail from './components/detail/Detail';
import Nav from './components/nav/Nav';




function App() {
  const location = useLocation();


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