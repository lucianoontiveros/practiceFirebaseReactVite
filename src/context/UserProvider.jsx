import { createContext, useState } from "react"


export const UserContext = createContext() 
const UserProvider = (props) => {
    const [ user, setUser] = useState(false)
    return(
        <>
            <UserContext.Provider value={{user, setUser}}>
                {props.children}
            </UserContext.Provider>
        </>
    )
}

export default UserProvider

{/* 
UserContext nos permite restringir y habiliar accesos dentro de la app al usuario. 
Esto es solamente desde la experiencia de usuario. 

UserContext.Provider nos permite acceso a la funcionalidad indicada anteriormente donde value
podremos sacar la informacion del usuario mediante los props. Por ello llamamos a 
{props.children} o dirctamente llamar al children

a manera de ejemplo para ver los datos que podemos traer de los props creamos 
la siguiente linea de codigo const [ user, setUser] = useState(false)

*/}