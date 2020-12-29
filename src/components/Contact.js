import React, { useState } from "react";
import {TextField} from "@material-ui/core";
import {db} from "../firebase";
import {gsap} from 'gsap';

document.querySelectorAll('.button').forEach(button => {

  let getVar = variable => getComputedStyle(button).getPropertyValue(variable);

  button.addEventListener('click', e => {

      if(!button.classList.contains('active')) {

          button.classList.add('active');

          gsap.to(button, {
              keyframes: [{
                  '--left-wing-first-x': 50,
                  '--left-wing-first-y': 100,
                  '--right-wing-second-x': 50,
                  '--right-wing-second-y': 100,
                  duration: .2,
                  onSubmit() {
                      gsap.set(button, {
                          '--left-wing-first-y': 0,
                          '--left-wing-second-x': 40,
                          '--left-wing-second-y': 100,
                          '--left-wing-third-x': 0,
                          '--left-wing-third-y': 100,
                          '--left-body-third-x': 40,
                          '--right-wing-first-x': 50,
                          '--right-wing-first-y': 0,
                          '--right-wing-second-x': 60,
                          '--right-wing-second-y': 100,
                          '--right-wing-third-x': 100,
                          '--right-wing-third-y': 100,
                          '--right-body-third-x': 60
                      })
                  }
              }, {
                  '--left-wing-third-x': 20,
                  '--left-wing-third-y': 90,
                  '--left-wing-second-y': 90,
                  '--left-body-third-y': 90,
                  '--right-wing-third-x': 80,
                  '--right-wing-third-y': 90,
                  '--right-body-third-y': 90,
                  '--right-wing-second-y': 90,
                  duration: .2
              }, {
                  '--rotate': 50,
                  '--left-wing-third-y': 95,
                  '--left-wing-third-x': 27,
                  '--right-body-third-x': 45,
                  '--right-wing-second-x': 45,
                  '--right-wing-third-x': 60,
                  '--right-wing-third-y': 83,
                  duration: .25
              }, {
                  '--rotate': 55,
                  '--plane-x': -8,
                  '--plane-y': 24,
                  duration: .2
              }, {
                  '--rotate': 40,
                  '--plane-x': 45,
                  '--plane-y': -180,
                  '--plane-opacity': 0,
                  duration: .3,
                  onSubmit() {
                      setTimeout(() => {
                          button.removeAttribute('style');
                          gsap.fromTo(button, {
                              opacity: 0,
                              y: -8
                          }, {
                              opacity: 1,
                              y: 0,
                              clearProps: true,
                              duration: .3,
                              onComplete() {
                                  button.classList.remove('active');
                              }
                          })
                      }, 2000)
                  }
              }]
          })

          gsap.to(button, {
              keyframes: [{
                  '--text-opacity': 0,
                  '--border-radius': 0,
                  '--left-wing-background': getVar('--primary-darkest'),
                  '--right-wing-background': getVar('--primary-darkest'),
                  duration: .1
              }, {
                  '--left-wing-background': getVar('--primary'),
                  '--right-wing-background': getVar('--primary'),
                  duration: .1
              }, {
                  '--left-body-background': getVar('--primary-dark'),
                  '--right-body-background': getVar('--primary-darkest'),
                  duration: .4
              }, {
                  '--success-opacity': 1,
                  '--success-scale': 1,
                  duration: .25,
                  delay: .25
              }]
          })

      }

  })

});


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
