import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../context/UserProvider"


const RequiereAuth = ({children}) => {
    const { user } = useContext(UserContext)

    if(!user) {
        return <Navigate to="/login" />
    }  
    return children
}

export default RequiereAuth


{ /*
El children son todos los elementos que se van a rederizar de la pagina, por ello agregamos un if para validar
si el usuario existe, y de ser afirmativo el caso lo llevara al apartado de login. 
return <Navigate to="/login" /> es sumamente importante poner el return de lo contrario la función se seguiría 
ejecutando. Si el usuario no esta registrado directamenteo se renderizaron todos los elementos no restringidos
return children



*/ }