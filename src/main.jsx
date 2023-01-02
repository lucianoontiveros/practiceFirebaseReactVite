import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
)

{/* 
  Quiero revisar si el StrictMode genera algún problema de comunicación con las 
  rutas predeterminadas. 

  El UserProvider es una forma de habilitarle rutas al ususario si este esta 
  identificado por ello lo envolmes en nuestra aplicación  <App />. También esto 
  mismo lo podríamos haber hecho en el App.jsx poniendo las etiquetas entre 
  un ruta especifica. 
  
*/}
