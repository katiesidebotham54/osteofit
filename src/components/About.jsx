import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import osteofitWhiteLogo from "../images/osteofitWhiteLogo.png";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div className="About">
        <div>
          <h1 className="title">
            <span className="fade-in">Who is Osteofit?</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
              <path
                fill="#FFFFFF"
                fill-opacity="1"
                d="M0,32L120,74.7C240,117,480,203,720,229.3C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              ></path>
            </svg>
          </h1>
        </div>
        <div class="aboutPara">
          <Paper elevation={3}>
            <p>
              OsteoFit is a newly formed company specializing in single-use
              sterile medical reamers. Our company's management has over 100
              years of experience in human medical orthopedic design and
              manufacturing of implants and instruments.
            </p>
          </Paper>
          <img src={osteofitWhiteLogo} />
        </div>
        <div class="outer-container">
          <div class="container container1">
            <div class="inner_container">
              <h1 class="title-bio">Orthopedic Surgeon</h1>
              <div class="container_text">
                <div class="container_text1">
                  <p>
                    Over 50 years of experience specializing in hip and knee
                    replacement.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="container container2">
            <div class="inner_container">
              <h1 class="title-bio">Designer and inventor</h1>
              <div class="container_text">
                <div class="container_text1">
                  <p>
                    Over 40 years of experience in design and development of
                    orthopedic implants working with major OEM’s.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="container container3">
            <div class="inner_container">
              <h1 class="title-bio">Business Owner and Manufacturer</h1>
              <div class="container_text">
                <div class="container_text1">
                  <p>
                    Over 40 years in the development and manufacturing of
                    orthopedic implants and instruments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="checkbox">
          <div class="checkbox1">
            <h1>
              {" "}
              Regulatory compliant
              <svg
                class="checkmark1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <circle
                  class="checkmark__circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  class="checkmark__check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            </h1>
          </div>
        </div>
        <div class="checkbox">
          <div class="checkbox2">
            <h1>
              Covered by 14 patents
              <svg
                class="checkmark2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <circle
                  class="checkmark__circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  class="checkmark__check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            </h1>
          </div>
        </div>
        <div class="bottompapers">
          <div class="paper1">
            <Paper elevation={13}>
              <h2>Want to Learn More?</h2>
              <p>Click below to view our product!</p>
              <br />
              <br />
              <Button variant="contained">
                <Router forceRefresh>
                  <Link exact to="/product">
                    Our Product
                  </Link>
                </Router>
              </Button>
            </Paper>
          </div>
          <div class="paper2">
            <Paper elevation={13}>
              <h2>Have a Question?</h2>
              <p>Click below for questions, comments, or inquieries!</p>
              <br />
              <Button variant="contained" className="button">
                <Router forceRefresh>
                  <Link exact to="/contact">
                    Contact Us
                  </Link>
                </Router>
              </Button>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
