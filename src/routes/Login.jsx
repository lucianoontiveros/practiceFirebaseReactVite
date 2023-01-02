import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import {useNavigate}from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)
    const handleClickLogin = () => {
        setUser(true)
        navigate("/")
    }
    return( 
       <>
           <h1>Login</h1>
           <h2> {user ? 'En linea' : 'Offline '} </h2>
           <button onClick={handleClickLogin}>Acceder</button>

       </>
    )
   }
   
   export default Login

   { /*

    Lo importanta aquí es crear el archivo nombrandolo con mayusculas, así no se confunde
    con ninguna etiqueta. 

    Usercontext lleva consigo la siguiente información de usuario 
    <UserContext.Provider value={{user, setUser, registerUser}}>
    
*/ }