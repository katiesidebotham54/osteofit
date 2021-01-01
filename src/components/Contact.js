import React, { useState } from "react";
import {TextField} from "@material-ui/core";
import {db} from "../firebase";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();
  db.collection('contacts').add({
    name: name,
    email: email,
    subject: subject,
    message: message
  })
  .then(() => {
    alert('Message has been submitted!');
  })
  .catch(error => {
    alert(error.message);
  });

  setName('')
  setEmail('')
  setSubject('')
  setMessage('')

 }

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
          <button
            variant="contained"
            type="submit"
            className="contact-button"
          >
            <span className = "default">Send</span>
            <span className = "success">Sent</span>
            <div className = "left"></div>
            <div className = "right"></div>
          </button>
         </div>
      </form>
    </div>
  );
};

export default Contact;
