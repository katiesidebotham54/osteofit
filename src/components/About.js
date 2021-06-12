import React from "react";
import { Paper } from "@material-ui/core";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import osteofitlogo from '../images/osteofitLogo.png'
import BackgroundImg from '../images/techbackground.png'
import aboutUs from '../images/aboutUs.png'
import '../styling/aboutStyle.scss'


const About = () => {
      return (
      <div className="About">
        <div class="about-title-wrapper">
          <div class="typing-demo">
              About Us
          </div>
        </div>       
        <div className="about-container">
          <figure class="item-content-about">
            <div class="item-img-about">
              <img src={aboutUs} alt="" />
            </div>
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
          <div className = "outer-container-about">
            <div class="container-about">
              <div class="box">
                <div class="boxContent">
                  <i class="fas fa-head-side-mask icon"></i>
                  <h1 class="title-about">Orthopedic Surgeon</h1>
                  <p class="desc">
                  <h3>50+</h3> years of experience specializing in hip and knee replacement.</p>
                </div>
              </div>
              <div class="box">
                 <div class="boxContent">
                    <i class="fas fa-pen-nib icon"></i>
                    <h1 class="title-about">Designer</h1>
                    <h3>40+</h3>
                    <p class="desc"> years of experience in design and development of orthopedic implants working with major OEMs.</p>             
                  </div>
              </div>
              <div class="box">
                <div class="boxContent">
                  <i class="fas fa-tools icon"></i>
                  <h1 class="title-about">Manufactuer</h1>
                  <h3>40+</h3> 
                  <p class="desc"> years in the development and manufacturing of orthopedic implants and instruments</p>
                </div>
              </div>
            </div>
          </div>
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
          <div className = "bckgrnd-img">
            <img src={BackgroundImg} alt=""/>
          </div>
        <div className="bottompapers">
          <div class="paper1">
            <Paper elevation={13}>
              <h2>Osteofit's Reamer</h2>
              <br />
              <br />

              <p>Click below to view our product!</p>
              <br />
                <button class = 'btn-1'>
                  <Router forceRefresh>
                    <Link exact to="/product">Our Product</Link>
                  </Router>
                </button>
            </Paper>
          </div>
          <div class="paper2">
            <Paper elevation={13}>
              <h2>Have a Question?</h2>
              <br />
              <p>Click below for questions, comments, or inquieries!</p>
              <br />              
              <button class = 'btn-1'>
              <Router forceRefresh>
                <Link exact to="/contact">Contact Us</Link>
              </Router>
            </button>
            </Paper>
          </div>
        </div>
        </ScrollAnimation>
      </div>
    );
  }

export default About;
