import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { auth } from "../firebase"


export const UserContext = createContext() 
const UserProvider = ({ children }) => {
    const [ user, setUser] = useState(false)

    useEffect(() => {
        const unsuscribe =onAuthStateChanged(auth, (user) => {
            console.log(user)
            if(user) {
                const {email, photoURL, displayName, uid} = user
                setUser({email, photoURL, displayName, uid})
            } else {
                setUser(null)
            }
          });

          return () => unsuscribe();
     }, [])

    const registerUser = (email, password ) => createUserWithEmailAndPassword(auth, email, password)
    const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password)
    
    const signOutUser = () => signOut(auth)
    return(
        <>
            <UserContext.Provider value={{user, setUser, registerUser, loginUser, signOutUser}}>
                {children}
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

registerUser va a crear un usuario por lo cual va a tomar (email, password ) => 
y se lo va a pasar al metodo createUserWithEmailAndPassword

cuando pasamos el createUserWithEmailAndPassword(auth, email, password) 
al auth lo pasamos primero para indicarle donde lo debe creer, 
en nuestra aplicación. 

el useEffect sirve para realizar algo por cada renderizado de nuestro sitio web

*/}