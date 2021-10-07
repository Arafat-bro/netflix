import React from 'react';
import './loginScreen.css';
import logo from './images/logo.png';
import SignUpScreen from './SignUpScreen';
import { useState } from 'react';

function LoginScreen() {
    const [SignIn, setSignIn] = useState(false);
    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img src={logo} alt="logo" className="loginScreen__logo" />
                <button className="loginScreen__button">Sign In</button>
                <div className="loginScreen__gradient"></div>
            </div>
            <div className="loginScreen__body text-center">
                {
                    SignIn ?
                        (<SignUpScreen />) :
                        <>
                            <h3>Welcome Back!</h3>
                            <h1 >Unlimited movies, TV shows, and more.</h1>
                            <h3>Watch anywhere. Cancel anytime.</h3>
                            <div className="loginScreen__input" >
                                <form>
                                    <input type="email" placeholder="Email Address " />
                                    <button onClick={() => setSignIn(true)} className="loginScreen__getStarted">Get Started <i class="fa fa-angle-right" aria-hidden="true"></i></button>
                                </form>
                            </div>
                        </>
                }
            </div>
        </div>
    )
}

export default LoginScreen
