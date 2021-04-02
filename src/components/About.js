import React from "react";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import osteofitlogo from '../images/osteofitLogo.png'
import aboutUs from '../images/aboutUs.png'


const About = () => {
      return (
      <div className="About">
        <div>
          <h1 className="title">
            <span className="fade-in-text">Who is Osteofit?</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
              <path
                fill="#FFFFFF"
                fill-opacity="1"
                d="M0,32L120,74.7C240,117,480,203,720,229.3C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              ></path>
            </svg>
          </h1>
        </div>
        <div className="about-container">
          <figure class="item-content-about">
            <div class="item-img-about">
              <img src={aboutUs} alt="" />
            </div>

            <ScrollAnimation animateIn="fadeIn">

              <h2>About Us</h2>
              <br/>
              <br/>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn">

              <p className="about-text">
              OsteoFit is a newly formed company specializing in <b>single-use 
              sterile medical reamers</b>. Our company's management has over <b>100
              years</b> of experience in human medical orthopedic design and
              manufacturing of implants and instruments.
              </p>
              <img className = "about-logo" src={osteofitlogo} alt=""/>
              </ScrollAnimation>
        </figure>
        </div>
        <ScrollAnimation animateIn="fadeIn">
          <div className = "team-title">
          <h1>Our Team</h1>
          <hr className = "horz-line4" />
          </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
          <ScrollAnimation animateIn="fadeIn">
            <div className = "outer-container-about">
          <div class="container-about">
  <div class="box">
    <div class="boxContent">
      <i class="fas fa-head-side-mask icon"></i>

      <h1 class="title-about">Orthopedic Surgeon</h1>
      <p class="desc">
      <h3>50+</h3> 
      <br/>
years of experience specializing in hip and knee replacement.</p>
      
    </div>
  </div>
  <div class="box">
    <div class="boxContent">
    <i class="fas fa-pen-nib icon"></i>
          <h1 class="title-about">Designer</h1>
      <h3>40+</h3>
      <br/>
      <p class="desc"> 
      years of experience in design and development of orthopedic implants working with major OEMs.</p>
    </div>
  </div>
  <div class="box">
    <div class="boxContent">
<i class="fas fa-tools icon"></i>

          <h1 class="title-about">Manufactuer</h1>
      <h3>40+
        </h3> 
      <br/>
      <p class="desc"> 
      years in the development and manufacturing of orthopedic implants and instruments</p>
    </div>
  </div>
</div>
</div>
        </ScrollAnimation>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">

        <div class="checkbox">
          <div class="checkbox1">
            <h1>
              GMP and Regulatory Compliant
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
        <div className="checkbox">
          <div class="checkbox2">
            <h1>
              Technology Covered By 14 Patents
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
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">

        <div className="bottompapers">
          <div class="paper1">
            <Paper elevation={13}>
              <h2>Want to Learn More?</h2>
              <br />
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
              <br />
              <br />
              <p>Click below for questions, comments, or inquieries!</p>
              <br />              
              <br />
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
        </ScrollAnimation>
      </div>
    );
  }

export default About;
