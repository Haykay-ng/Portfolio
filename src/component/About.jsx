import React from "react";
import profile from "../images/Group 11 1.png";

import "../styles/About.css"


const About = () => {
  return (
    <>
      <main >
        <body className="container">
          <div className="left-side">
            <p className="name">Hey,i am Haykay</p>
            <p className="desc">  I develop dynmic and User-Centrered Web Applications </p>

            <h4 className="Exp">
              My exprience spans both front-end and back-end develolment
              enabling me to build comprehsive solutions that meet diverse
              client needs.
            </h4>

            <a href="">
            <button class="btn-no">Get in Touch</button>
            </a>

            
          </div>
          <div className="right-side">
            <img src={profile} alt="profile-pic" />
          </div>
        </body>
      </main>
    </>
  );
};

export default About;
