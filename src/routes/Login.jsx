import { useContext} from "react"
import { UserContext } from "../context/UserProvider"
import {useNavigate}from 'react-router-dom'
import { useForm } from "react-hook-form"
import { erroresFirebase } from "../utils/erroresFirebase"
import { formValidate } from "../utils/formValidate"

import FormInput from "../components/FormInput"
import FormAlert from "../components/FormAlert"

const Login = () => {

    const { loginUser } = useContext(UserContext)
    const navegate = useNavigate()

    const { register, handleSubmit, formState: { errors }, setError} = useForm();
    const { required, patternEmail, minLength, validateTrim } = formValidate()

    const onSubmit = async ({ email, password }) => {
        try {
            await loginUser(email, password);
            navegate("/");
        } catch (error) {
            const { code, message } = erroresFirebase(error);
            setError(code, { message });
        }
    };

    return( 
       <>
           <h1>Login</h1>
           <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    type="email" 
                    placeholder="Ingrese email"
                    {...register('email', { 
                        required,
                        pattern: patternEmail,
                    })}
                ><FormAlert error={errors.email} /></FormInput>
                <FormInput
                    type="password" 
                    placeholder="Ingrese contraseña"
                    {...register('password', 
                        {
                            minLength,
                            validate: validateTrim,
                        }
                    )}
                ><FormAlert error={errors.password} /></FormInput>
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