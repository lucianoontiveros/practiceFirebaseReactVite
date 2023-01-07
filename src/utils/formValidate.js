export const formValidate = (getValues) => {     
    return {
        required:{
            value: true,
            message: 'Campo obligatorio'
        },
        patternEmail: {
            value: /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/,
            message: 'Formato de email incorrecto',
        },

        minLength: {
            value: 6,
            message: "Password mínimo 6 carácteres"
        },
        validateTrim: {
            trim: (v) => {
                if(!v.trim()) {
                    return "Debe completar todos los campos"
                }
                return true;
            } 
        },
        validateEquals(getValues) {
            return {
                equals: (v) => 
                v === getValues("password") || 
                'No coinciden las contraseñas',
            }
        }
    }
 } 
