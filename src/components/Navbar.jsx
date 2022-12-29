import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
const Navbar = () => {
    const { user } = useContext(UserContext)
    return(
        <>
            
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {
                        user ?
                        <NavLink className="nav-link" to="/Login">Login</NavLink> :
                        <NavLink className="navbar-brand" to="/">Navbar</NavLink>

                    }
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/features">Features</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

{/* 

en vez de usar anclas (<a></a>) tenemos una tiqueta llamada Link
que es mucho mejor que la primera opcion a cuasa que esta no refresca
la pagina, sino que trae el elemento en cuestion al que se llama

Sin embargo hay otra etiqueta que es mucho mejor que se llama 
NavLink que la unica diferencia radia en que esta tiene un clase
llamada Active que le indica al usuario en que apartado esta. 

*/}