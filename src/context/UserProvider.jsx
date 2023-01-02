import { createUserWithEmailAndPassword } from "firebase/auth"
import { createContext, useState } from "react"
import { auth } from "../firebase"


export const UserContext = createContext() 
const UserProvider = (props) => {
    const [ user, setUser] = useState(false)

    const registerUser = (email, password ) => createUserWithEmailAndPassword(auth, email, password)
    return(
        <>
            <UserContext.Provider value={{user, setUser, registerUser}}>
                {props.children}
            </UserContext.Provider>
        </>
    )
}

export default UserProvider

{/* 
UserContext nos permite restringir y habiliar accesos dentro de la app al usuario. 
Esto es solamente desde la experiencia de usuario. 

hay que aclarar que esta es una exportación nombrada porque no podemos
hacer una exportación por default 
export const UserContext = createContext()  
la unica desventaja que tiene esto es que si o si tenemos que utilizar el nombre
(UserContext) al llamarlo en otro archivo lo tendremo que poner entre {} 
por defecto. 

UserContext.Provider nos permite acceso a la funcionalidad indicada anteriormente donde value
podremos sacar la informacion del usuario mediante los props. Por ello llamamos a 
{props.children} o dirctamente llamar al children

a manera de ejemplo para ver los datos que podemos traer de los props creamos 
la siguiente linea de codigo const [ user, setUser] = useState(false)


*/}