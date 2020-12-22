import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <h1 className="title">
          <span>Contact Us</span>
        </h1>
        <form name="contact" action="POST" data-netlify="true">
          <TextField
            id="outlined-basic"
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
            id="outlined-basic"
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
            id="outlined-basic"
            placeholder="Enter Subject"
            label="Subject"
            variant="outlined"
            name="subject"
            required
          />
          <br />
          <br />
          <TextField
            id="standard-multiline-flexible"
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
          <div data-netlify-recaptcha="true"></div>
          <div className="button--container">
            <Button
              variant="contained"
              type="submit"
              className="button button-primary"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
