import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { FirebaseAuth } from "./config";


//esta es una instancia
const googleProvider = new GoogleAuthProvider(); //es una nueva intancia de esta funcion 

//funcio que vamos a llamar
export const singInWithGoogle = async () => {
    //creamos el try Catch por que puede fallar la autentificacion 
    try {

        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        // console.log({result});
        const { displayName, email, photoURL, uid } = result.user;
        // console.log({ user })

        return{
            ok: true,
            // User info

            displayName, email, photoURL, uid
        }

    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;

     return {
         ok: false,
         errorMessage,
     }




    }


}