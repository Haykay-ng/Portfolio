import React from "react";
import logos from "../images/logo.png";
import { Link } from "react-router-dom";
import facebook from "../images/Facebook.png";
import twitter from "../images/Twitter.png";
import linkedin from "../images/LinkedIn.png";
import instagram from "../images/Instagram.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span>  <img src={logos} alt="Logo" />HaykayDev </span>
        </div>
        <div className="footer-links">
          <Link to="/Home" className="footer-link " style={{textDecoration: 'none'}}>
            <h4>Home</h4>
          </Link>
          <Link to="/Portfolio" className="footer-link">
            <h4>Portfolio</h4>
          </Link>
          <Link to="/About Me" className="footer-link">
            <h4>About Me</h4>
          </Link>
          <Link to="/Contact" className="footer-link">
            <h4>Contact</h4>
          </Link>
          <Link to="/Testimonials" className="footer-link">
            <h4>Testimonials</h4>
          </Link>
          <Link to="/Portfolio" className="footer-link">
            <h4>Portfolio</h4>
          </Link>
        </div>
        <div className="social-media">
          <Link to="/Facebook">
            <img src={facebook} alt="Facebook" />
          </Link>
          <Link to="/Instagram">
            <img src={instagram} alt="Instagram" />
          </Link>
          <Link to="/Twitter">
            <img src={twitter} alt="Twitter" />
          </Link>
          <Link to="/LinkedIn">
            <img src={linkedin} alt="LinkedIn" />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, quasi!</h4>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Services</a>
          <a href="#">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
