import FormAlert from "../components/FormAlert"
import FormInput from "../components/FormInput"
import FormError from "../components/FormError"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserProvider"
import { erroresFirebase } from "../utils/erroresFirebase"
import { formValidate } from "../utils/formValidate"

const Register = () => {
    const { registerUser } = useContext(UserContext)
    const navegate = useNavigate();
    const { register, handleSubmit, formState: { errors }, getValues, setError} = useForm();
    const { required, patternEmail, minLength, validateTrim, validateEquals } = formValidate()
    
    const onSubmit = async ({ email, password }) => {
        try {
            await registerUser(email, password);
            navegate("/");
        } catch (error) {
            const { code, message } = erroresFirebase(error);
            setError(code, { message });
        }
    };

    return (
        <>
            <h1>Register</h1>
            <FormError value={errors.firebase}/>
            { errors.password && <p>{errors.password.message}</p>}
            { errors.respassword && <p>{errors.respassword.message}</p>}
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
                <FormInput
                    type="password" 
                    placeholder="Ingrese contraseña"
                    {...register('respassword', 
                        { 
                            validate: validateEquals(getValues)
                        }
                    )}
                ><FormAlert error={errors.repassword} /></FormInput>
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