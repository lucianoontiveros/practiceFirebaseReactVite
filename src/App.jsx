import { Routes, Route } from 'react-router-dom'
import Login from './routes/Login'
import Home from './routes/Home'
import Navbar from './components/Navbar'
import RequiereAuth from './components/RequiereAuth'
import Register from './routes/Register'
import { UserContext } from './context/UserProvider'
import { useContext } from 'react'
const App = () => {

  const {user}= useContext(UserContext)

  if( user === false) {
    return <p> loading </p>
  }

  return (
    <>
      <Navbar/>
      <h1>APP</h1>
      <Routes>
        <Route path='/' element={ <RequiereAuth> <Home/> </RequiereAuth> }> </Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
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

Luego exportamos Routes y Route para configurar las vistas. 
path es la ruta que nosotros estamos llamando. El elemento es aquello que queremos
utilizar en el momento que solicitamos la ruta. 

const {user}= userContext(UserContext) en este pedacito de condigo nos traemos al user desde UserProviuder.jxs
si el usuario es igual a false retorna un loading User. 

*/}