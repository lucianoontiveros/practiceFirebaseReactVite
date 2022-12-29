import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
const Home = () => {
    const { user, setUser } = useContext(UserContext)
 return( 
    <>
        <h1>HOME</h1>
        <button onClick={() => setUser(true)}>Acceder</button>
    </>
 )
}

export default Home