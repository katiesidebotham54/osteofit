import React, { useState } from "react";
import {TextField} from "@material-ui/core";
import {db} from "../firebase";
import Button from "@material-ui/core/Button";
import OsteofitLogoOnly from '../images/OsteofitLogoOnly.png'



const Contact = () => {

  return (
      <body>
    <title>contact form</title>

    <link href="contact-form.css" rel="stylesheet"></link>

    <div class="fcf-body">

    <div id="fcf-form">
    <h3 class="fcf-h3">Contact us</h3>

    <form id="fcf-form-id" class="fcf-form-class" method="post" action="contact-form-process.php">
        
        <div class="fcf-form-group">
            <label for="Name" class="fcf-label">Your name</label>
            <div class="fcf-input-group">
                <input type="text" id="Name" name="Name" class="fcf-form-control" required></input>
            </div>
        </div>

        <div class="fcf-form-group">
            <label for="Email" class="fcf-label">Your email address</label>
            <div class="fcf-input-group">
                <input type="email" id="Email" name="Email" class="fcf-form-control" required></input>
            </div>
        </div>

        <div class="fcf-form-group">
            <label for="Message" class="fcf-label">Your message</label>
            <div class="fcf-input-group">
                <textarea id="Message" name="Message" class="fcf-form-control" rows="6" maxlength="3000" required></textarea>
            </div>
        </div>

        <div class="fcf-form-group">
            <button type="submit" id="fcf-button" class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send Message</button>
        </div>

        <div class="fcf-credit" id="fcf-credit">
        Simple HTML email form provided by: <a href="https://www.freecontactform.com" target="_blank">FreeContactForm.com</a>
        </div>
    </form>
    </div>
      </div>
    </body>
  )
    {/*<div className="Contact">
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
      <form id="contactForm" onSubmit = {handleSubmit}>
        <TextField
          id="name"
          placeholder="Enter your name"
          name="name"
          label="Name"
          variant="outlined"
          required
          type="text"
          onChange = {(e) => setName(e.target.value)}
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
          onChange = {(e) => setEmail(e.target.value)}

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
          onChange = {(e) => setSubject(e.target.value)}

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
          onChange = {(e) => setMessage(e.target.value)}

        />
        <br />
        <br />
        <div className="button--container">
          <Button
            variant="contained"
            type="submit"
            className="contact-button"
          > Send
          </Button>
         </div>
      </form>
      </div>
    </div>
  </div>*/}
}

export default Contact;
