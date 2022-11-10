import type { User } from "firebase/auth";
import { signInAnonymously } from "firebase/auth";
import {auth} from '~/firebase.config'


export const firebaseAnonymousSignIn = async (): Promise<User | null> =>{
    try {
        const data = await signInAnonymously(auth)
        return data.user;
    } catch (error) {
        throw `${error}`
    }
}
