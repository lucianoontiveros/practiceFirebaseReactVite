import { useContext, useState } from "react"
import { UserContext } from "../context/UserProvider"
import {useNavigate}from 'react-router-dom'

const Login = () => {

    const [email, setEmail]= useState('lucianotaaxii@gmail.com')
    const [password, setPassword]= useState('Bruno36139030')

    const { loginUser } = useContext(UserContext)
    const navigate = useNavigate()


    const handleSubmit = async(e) =>  {
        e.preventDefault()
        console.log('Procesando formulario', email, password)
        try {
            await loginUser(email, password);
            console.log('usuario Logueado o activo')
        }
        catch (error) {
            console.log(error.code)
            alert("Email y/o contraseña incorrectos")
        } 
    }
    
    return( 
       <>
           <h1>Login</h1>
           <form onSubmit={handleSubmit}>
                <input 
                type="email" 
                placeholder="Ingrese email"
                value={email}
                onChange={ e => setEmail(e.target.value)}
                />

                <input 
                type="password" 
                placeholder="Ingrese contraseña"
                value={password}
                onChange={ e => setPassword(e.target.value)}
                />
                
                <button type="submit">Register</button>
            </form>

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