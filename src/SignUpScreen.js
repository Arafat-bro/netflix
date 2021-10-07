import React, { useEffect, useRef } from 'react'
import './SignUpScreen.css';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from '@firebase/auth';
import { getAuth } from '@firebase/auth';
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDtBL96lCZvWEOb3t1OLHGFmhAnNW0bkyU",
    authDomain: "netflix-clone-b1325.firebaseapp.com",
    projectId: "netflix-clone-b1325",
    storageBucket: "netflix-clone-b1325.appspot.com",
    messagingSenderId: "501974757156",
    appId: "1:501974757156:web:2617414c83120aae4f0db1",
    measurementId: "G-47EN9EGBR6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();


function SignUpScreen() {
    useEffect(() => {
        onAuthStateChanged((authUser) => {
            if (authUser) {
                // logged
                console.log(authUser);
            }
        })
    }, []);
    // const [signInData, setSignInData] = useState([]);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = () => {
        // alert('clicked');
        createUserWithEmailAndPassword(auth,emailRef.current.value, passwordRef.current.value)
            .then((authUser) => {
                // Signed in 
                const user = authUser.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    };

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((authUser) => {
                // Signed in 
                const user = authUser.user;
                console.log(user);
                
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }

    return (
        <div className="signUpScreen ">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input ref={passwordRef} placeholder ="Password" type="password"  />
                <button type="submit" onClick={signIn}>Sign In</button>
                
                <h5><span className="signUpScreen__gray">New to Netflix?</span><span className="signUpScreen__link" onClick={register}> Sign up now</span></h5>
            </form>
        </div>
    )
}

export default SignUpScreen;
