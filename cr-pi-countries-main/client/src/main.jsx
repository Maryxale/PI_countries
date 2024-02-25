import React from 'react'
import ReactDOM from 'react-dom/client'
//browser y otros
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import store from './redux/store' //tienda redux
import { Provider } from 'react-redux'




  ReactDOM.createRoot(document.getElementById('root')).render( 
  <Provider store={store}>
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
  </Provider>
)
