import { useContext, useState } from "react"
import UserProvider, { UserContext } from "../context/UserProvider"

const Register = () => {
    const { registerUser } = useContext(UserContext)
    const [email, setEmail]= useState('lucianotaaxii@gmail.com')
    const [password, setPassword]= useState('Bruno36139030')

    const handleSubmit = async(e) =>  {
        e.preventDefault()
        console.log('Procesando formulario', email, password)
        try {
            await registerUser(email, password);
        }
        catch (error) {
            console.log(error.code)
            alert('Este email ya está registrado')
        } 
    }

    return (
        <>
            <h1>Register</h1>
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

export default Register

{ /*
    RegisterUser proviene del UserProvider.jsx en cual esta constituido por 
    createUserWithEmailAndPassword el cual representa una promesa, por esto 
    mismo es que handleSubmit le colocamos async y try y catch para configurarlo. 



*/ }