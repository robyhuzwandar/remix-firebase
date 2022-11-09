import type { UserCredential } from "firebase/auth";
import { signInAnonymously } from "firebase/auth";
import {auth} from '~/firebase.config'


export const firebaseAnonymousSignIn =async():Promise<UserCredential | undefined>=>{
    try {
        return signInAnonymously(auth)
    } catch (error) {
        console.log(error)
    }
}
