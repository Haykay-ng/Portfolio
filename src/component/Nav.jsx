import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/Nav.css";
import "../App.css";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import { useRef, useState, useEffect } from "react";

const Nav = () => {
  const [menu, setMenu] = useState(true);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <>
      <header>
          <div className="newhead">
            <span>
              <img src={logo} alt="" />
              HaykayDev,
            </span>
            <div className="menu-wrapper">
              <div className="hand-close-wrap" onClick={() => setMenu(!menu)}>
                {menu ? (
                  <img
                    src={close}
                    title="Close menu"
                    alt="Close menu icon"
                    className="close"
                  />
                ) : (
                  <img
                    src={hamburger}
                    title="Open menu"
                    alt="Hamburger menu icon"
                    className="menu"
                  />
                )}
              </div>
            </div>
             
            
              <div className="middle-side">
                <ul>
                  <Link to="/Home" style={{ textDecoration: "none" }}>
                    <div className="mid-btn">
                      <h4 className="home">Home</h4>
                    </div>
                  </Link>

                  <Link to="/Portfolio" style={{ textDecoration: "none" }}>
                    <div className="mid-btn">
                      <h4>Portfolio</h4>
                    </div>
                  </Link>

                  <Link
                    to="/src/component/About.jsx"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="mid-btn">
                      <h4>About me</h4>
                    </div>
                  </Link>

                  <Link
                    to="/src/component/Testimony.jsx"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="mid-btn">
                      <h4>Testimonials</h4>
                    </div>
                  </Link>
                </ul>
              </div>

              <a href="">
                <button className="contact-btn">Contact Me</button>
              </a>
            
          </div>
        
      </header>
    </>
  );
};

export default Nav;
