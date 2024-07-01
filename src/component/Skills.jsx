import React from 'react';
import mobileIcons from "../images/icomoon-free_mobile.png";
import tag from "../images/tag 1.png";
import carbon from "../images/carbon_ibm-engineering-test-mgmt.png";
import web from "../images/Webflow Development.png";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skill-desc">
        <p>My Skills</p>
        <h1>My Expertise</h1>
      </div>
      <div className="container-card">
        <div className="card">
          <div className="card-img">
            <img src={mobileIcons} alt="Responsive Design" />
          </div>
          <div className="card-con">
            <p>Responsive Design</p>
            <h4>
              Focuses on creating websites that adapt to different screen sizes, devices, and orientations. This is achieved through the use of flexible grids, images, and media queries.
            </h4>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={tag} alt="Front-End Frameworks" />
          </div>
          <div className="card-con">
            <p>Front-End Frameworks</p>
            <h4>
              Initializing in building robust, maintainable, and scalable frontend applications, each with their unique strengths and use cases, with the use of popular frameworks.
            </h4>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={carbon} alt="Testing and Debugging" />
          </div>
          <div className="card-con">
            <p>Testing and Debugging</p>
            <h4>
              Aid in verifying code functionality and quality through types of testing such as unit testing, integration testing, and end-to-end testing, while identifying and fixing code errors to ensure it is reliable, stable, and performs as expected.
            </h4>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={web} alt="Cloud Service" />
          </div>
          <div className="card-con">
            <p>Cloud Service</p>
            <h4>
              Enable businesses and individuals to access powerful computing resources, software, and platforms without the need for local infrastructure, promoting greater flexibility and scalability.
            </h4>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Skills;
