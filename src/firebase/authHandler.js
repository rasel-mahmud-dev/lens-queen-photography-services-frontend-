import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    sendPasswordResetEmail,
} from "firebase/auth";

import {generateAccessToken} from "../context/actions.js";

const auth = getAuth();

export function loginViaEmailAndPassword(email, password) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            resolve(result);
        } catch (ex) {
            reject(ex);
        }
    });
}

export function updateUserInfo(currentUser, { displayName, photoURL }) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await updateProfile(currentUser, {
                displayName: displayName,
                photoURL: photoURL,
            });
            resolve(result);
        } catch (ex) {
            reject(ex);
        }
    });
}

export function passwordResetEmail(email) {
    return new Promise(async (resolve, reject) => {
        try {
            let doc = await sendPasswordResetEmail(auth, email);
            resolve(doc);
        } catch (ex) {
            reject(ex);
        }
    });
}

export function loginWithGoogle() {
    const googleProvider = new GoogleAuthProvider();
    return new Promise(async (resolve, reject) => {
        try {
            const { user } = await signInWithPopup(auth, googleProvider);
			if(user){
				// generate  access token from backend
				generateAccessToken(user)
			}
	       
            resolve(user);
        } catch (ex) {
            reject(ex);
        }
    });
}

export function logOutHandler() {
    return new Promise(async (resolve, reject) => {
        try {
            await signOut(auth);
            resolve("successfully logout");
        } catch (ex) {
            reject(ex);
        }
    });
}
