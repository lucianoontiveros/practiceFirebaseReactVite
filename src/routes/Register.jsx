import { useState } from "react"

const Register = () => {

    const []= useState('')
    return (
        <>
            <h1>Register</h1>
            <form>
                <input type="email" placeholder="Ingrese email"/>
            </form>
        </>
    )
}

export default Register