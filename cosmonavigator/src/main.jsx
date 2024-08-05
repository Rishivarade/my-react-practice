import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeContexProviderFunction } from './Context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContexProviderFunction>
     <BrowserRouter>
    <App />
  </BrowserRouter>
  </ThemeContexProviderFunction>
 ,
)
