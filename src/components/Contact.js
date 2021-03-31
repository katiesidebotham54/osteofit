import React from "react";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import OsteofitLogoOnly from '../images/OsteofitLogoOnly.png'



const Contact = () => {

  return (
    <div className="Contact">
      <h1 className = "title">
          <span className="fade-in-text">Contact Us</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
            <path
              fill="#FFFFFF"
              fill-opacity="1"
              d="M0,32L120,74.7C240,117,480,203,720,229.3C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
          </h1>
        <div className = "contact-container">
          <div>
          <div className = "contact-image">
            <img src={OsteofitLogoOnly} alt=""/>
          </div>
        <div className = "contact-text">
          <h1>Get in touch with us!</h1>
          <p>For all questions or inquieries, please fill out the form below.</p>
        </div>
        
      <form id="contactForm" action="mail_handler.php" method="POST" >
        <TextField
          id="name"
          placeholder="Enter your name"
          name="name"
          label="Name"
          variant="outlined"
          required
          type="text"
        />
        <br />
        <br />
        <br />
       
        <TextField
          id="email"
          label="Email"
          placeholder="Enter email address"
          name="email"
          variant="outlined"
          required
          type="email"

        />
        <br />
        <br />
        <TextField
          id="subject"
          placeholder="Enter Subject"
          label="Subject"
          variant="outlined"
          name="subject"
          required

        />
        <br />
        <br />
        <TextField
          id="message"
          label="Message"
          placeholder="Enter Message"
          variant="outlined"
          rows="5"
          name="message"
          multiline={true}
          required
          type="text"

        />
        <br />
        <br />
        <div className="button--container">
          <Button
            variant="contained"
            name="submit"
            type="submit"
            className="contact-button"
          > Send
          </Button>
         </div>
      </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
