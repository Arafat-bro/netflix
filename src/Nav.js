import React, { useEffect, useState } from 'react'
import './nav.css';
import logo from "./images/logo.png";
import avatar from './images/avatar.png';

function Nav() {

    const [show, handleShow] = useState(false);
    function transitionNavbar() {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    },[])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
            <img src={logo} className="nav__logo" alt="logo" />
            <img src={avatar} alt="avatar" className="nav__avatar" />
                
            </div>
        </div>
    )
}

export default Nav;
