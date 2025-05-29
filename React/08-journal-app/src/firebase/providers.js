import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
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

        return {
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


export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {

    try {

        console.log({ email, password, displayName })

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;


         await updateProfile(FirebaseAuth.currentUser,{displayName});

        return {
            ok: true,

            uid, photoURL, email, displayName
        }


    } catch (error) {
        // console.log(error);
        return { ok: false, errorMessage: error.message }
    }


}