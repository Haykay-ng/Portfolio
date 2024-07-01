import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <main className="contact-container">
      <div className="contact-head">
        <h4>Get In Touch</h4>
        <h2>Contact</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          perferendis.
        </p>
      </div>

      <form className="contact-form">
        <div className="name-form">
          <div className="form-group col-6">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" className="form-control" type="text" />
          </div>
          <div className="form-group col-6">
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" className="form-control" type="text" />
          </div>
        </div>

        <div className="info-form">
          <div className="form-group col-6">
            <label htmlFor="email">Email</label>
            <input id="email" className="form-control" type="email" />
          </div>
          <div className="form-group col-6">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" className="form-control" type="tel" />
          </div>
        </div>
    
        <div className="message-form">
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" className="form-control" rows="5" placeholder="Type your message..."> </textarea>
          </div>
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I accept the terms</label>
          </div>
        </div>

        <button className="submit-btn" type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Contact;
