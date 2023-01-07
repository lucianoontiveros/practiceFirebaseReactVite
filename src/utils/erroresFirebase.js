export const erroresFirebase = (code) => {
    switch (code) {
        case "auth/email-already-in-use":
            return "Usuario ya registrado";

        case "auth/invalid-email":
            return "Formato de email no valido";

        default: 
            return "Ocurrio un error en el servidor";
    }
}

{/* 
    El error code que se genera con firebase va ingresar como code en este funci[on de ErroresFirebase. Cada error.code tiene un cado 
    identificado de error como "auth/email-already-in-use", "auth/invalid-email" o "Ocurrio un error en el servidor", por ello creamos 
    un switch que nos permita identificar caso y marcar el error. 
*/}