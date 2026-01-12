import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Authprovider } from './authprovider.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Socketprovider } from './context/Socketprovider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Authprovider>
  <Socketprovider>
    <App />
    </Socketprovider>
  </Authprovider>
  </BrowserRouter>  
  
)
