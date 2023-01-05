import { errorPrefix } from "@firebase/util"
import { ErrorResponse } from "@remix-run/router"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import UserProvider, { UserContext } from "../context/UserProvider"

const Register = () => {
    const { registerUser } = useContext(UserContext)
    const [email, setEmail]= useState('lucianotaaxii@gmail.com')
    const [password, setPassword]= useState('Bruno36139030')
    const navegate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors }, getValues, setError} = useForm();
    
    const onSubmit = async(data) => {
        try {
            await registerUser(data.email, data.password);
            console.log("usuario creado")
            navegate("/")
        }
        catch (error) {
            console.log(error.code);
            switch(error.code) {
                case "auth/email-already-in-use ":
                    console.log("Usuario ya registrado")
                    setError("email")
                    break;
                case "auth/invalid-email":
                    setError('email', {
                        message: "Formato de email no valido"
                    })
                    break;
                default: 
                    console.log("Ocurrio un error en el servidor")

            }
        } 
    }


    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                type="email" 
                placeholder="Ingrese email"
                {...register('email', { 
                    required:{
                        value: true,
                        message: 'Campo obligatorio'
                    },
                    pattern: {
                        value: /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/,
                        message: 'Formato de email incorrecto',
                    }
            })}
                />
                {
                    errors.email && <p>{errors.email.message}</p>
                }

                <input 
                type="password" 
                placeholder="Ingrese contraseña"
                {...register('password', 
                    { 
                        setValueAs: (v) => v.trim(),
                        minLength: {
                            value: 6,
                            message: "Mínimo 6 carácteres"
                        },
                        validate: {
                            trim: v => {
                                if(!v.trim() ) {
                                    return "No seas payaso escriba algo"
                                    true;
                                }
                            } 
                        }
                    }
                )}
                />
                {
                    errors.password && <p>{errors.password.message}</p>
                }

                <input 
                type="password" 
                placeholder="Ingrese contraseña"
                {...register('respassword', 
                    { setValueAs: (v) => v.trim(), 
                        validate: {
                        equals: (v) => parseInt(v) === getValues("password") || 'No coinciden las contraseñas',
                    }}
                )}
                />
                {
                    errors.respassword && <p>{errors.respassword.message}</p>
                }
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

    const handleButton = async(e) =>  {
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

*/ }