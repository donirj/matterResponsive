import "./navbar.css";
import React from 'react'
import Logo from "../../assets/Logo.jpg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

    return (
        <div className="Navbar">
            <div className="nav-bar-cont">
                <div className="navbar-logo-container">
                    <img className="navbar-logo" src= {Logo} alt="nav-bar-logo"/>
                    <a href="#/"><span className="navbar-logo-title">Matter</span></a>
                </div>
                <FontAwesomeIcon
                    className="toggleIcon"
                    icon={faBars}
                />
                    <div className="navbar-menu-container">
                        <ul>
                            <a href="#/"><li>Home</li></a>
                            <a href="#/"><li>New Ways to connect</li></a>
                            <a href="#/"><li>Our Story</li></a>
                            <a href="#/"><li>Contact</li></a>
                        </ul>
                    </div>
                 <div className="user-auth-btns">
                     <button className="login-btn">Log in</button>
                     <button className="signup-btn">Sign up</button>
                 </div>
             </div>
         </div>

    )
}

export default Navbar