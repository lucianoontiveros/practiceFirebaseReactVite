import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import FormError from "../components/FomrError"
import { UserContext } from "../context/UserProvider"
import { erroresFirebase } from "../utils/erroresFirebase"

const Register = () => {
    const { registerUser } = useContext(UserContext)
    const navegate = useNavigate();
    const { register, handleSubmit, formState: { errors }, getValues, setError} = useForm();
    
    const onSubmit = async(data) => {
        try {
            await registerUser(data.email, data.password);
            navegate("/")
        }
        catch (error) {
            console.log(error.code)
            setError("firebase", {
                 message: erroresFirebase(error.code)
            })
        }
    };

    return (
        <>
            <h1>Register</h1>
            <FormError value={errors.firebase}/>
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
                    },
            })}
                />

                <input 
                type="password" 
                placeholder="Ingrese contraseña"
                {...register('password', 
                    {
                        minLength: {
                            value: 6,
                            message: "Mínimo 6 carácteres"
                        },
                        validate: {
                            trim: v => {
                                if(!v.trim()) {
                                    return "No seas payaso escriba algo"
                                }
                                return true;
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
                        equals: (v) => v === getValues("password") || 'No coinciden las contraseñas',
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