
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbHQ4uU0xHJ5iQtpqPjBsZ5ICBiImD7Z8",
  authDomain: "pruebafirebase09.firebaseapp.com",
  projectId: "pruebafirebase09",
  storageBucket: "pruebafirebase09.appspot.com",
  messagingSenderId: "480344880475",
  appId: "1:480344880475:web:9afefdbc2fd209bcde567e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth }

{ /* 
  FirebaseConfig no tiene que estar ocultad. Que este a la vista no es un problema.
  En proyect setting por si perdemos esta configuración inicial, salen todos 
  los datos. 

  El auth tiene toda la configuración de nuestro firebase, y tierne unos metodos interesantes
  a utilizar. 
*/ }