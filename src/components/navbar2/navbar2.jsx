import "./navbar2.css";
import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar2 = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
            <div className="navbar-logo-container">
              <img className="navbar-logo" src={Logo} alt="nav-bar-logo" />
              <NavLink to="/" className="nav-logo">
                Matter
              </NavLink>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <div className="nav-menu-top">
              <li className="nav-item">
                <NavLink
                
                  to="/"
                  // activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink
                
                  to="/connect"
                  // activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  New ways to connect
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                
                  to="/story"
                  // activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Our story
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                
                  to="/contact"
                  // activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Contact
                </NavLink>
              </li>
            </div>

            <div className="nav-menu-bottom">
              <button className="login-btn">
                <NavLink
                
                  to="/contact"
                  // activeClassName="active"
                  className="nav-links"
                  id="login-btn"
                  onClick={handleClick}
                >
                  Login
                </NavLink>
              </button>
              <button className="signup-btn">
                <NavLink
                
                  to="/contact"
                  // activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Signup
                </NavLink>
              </button>
            </div>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i id="icon" className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
