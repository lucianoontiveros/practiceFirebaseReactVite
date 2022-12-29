import { Routes, Route } from 'react-router-dom'
import Login from './routes/Login'
import Home from './routes/Home'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <>
      <Navbar/>
      <h1>APP</h1>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App


{/*
Routes lo utilizamos para configurar nuestras rutas, y para definir 
una para una usamos Route. Ingresamos em el caso de login 
el elemento configurando previamente le patch 
path='/login' element={<Login/>}

Esto es distinto a trabajar con rutas anidadas. Cuando utilizamos
<Oulet/>
*/}