<<<<<<< HEAD
import React, {Component} from 'react'
import {Paper} from '@material-ui/core';
import OsteofitLogoOnly from '../images/OsteofitLogoOnly.png'
import App from '../App'


class About extends Component {
    render(){
        return(
        <div>
            <div>
                <h1 className = "title">
                    <span>Who is Osteofit?</span>
                </h1>
            </div>
            <div class = "aboutPara">
                <Paper elevation = {3} classname = "aboutPaper">
                    <h2>Who are we?</h2>
                    <p>OsteoFit is a newly formed company specializing in single-use sterile medical reamers.
                        Our company's management has over 100 years of experience in human medical orthopedic design and 
                        manufacturing of implants and instruments.
                    </p>
                </Paper>
                <img src ={OsteofitLogoOnly}/>
            </div>
            <div class="outer-container">
                <div class="container container1">
                    <div class="inner_container">
                    <div class="title-bio">Orthopedic Surgeon</div>
                    <div class="container_text">
                        <div class="container_text1">
                        Over 50 years experience specializing in hip and knee 
                        replacement and inventor </div>
                    </div>
                    </div>
                </div>
                <div class="container container2">
                    <div class="inner_container">
                    <div class="title-bio">Designer and inventor</div>
                    <div class="container_text">
                        <div class="container_text1">
                        Over 40 years experience in design 
                        and development of orthopedic implants working with major OEM’s
                          </div>
                    </div>
                    </div>
                </div>
                <div class="container container3">
                    <div class="inner_container">
                    <div class="title-bio">Manufacturer</div>
                    <div class="container_text">
                        <div class="container_text1">
                            Business owner, over 40 years 
                            in the development and manufacture of 
                            orthopedic implants and instruments, inventor
                        </div>
                    </div>
                    </div>
                </div>
             </div>
                <div class="checkbox">
                    <div class="checkbox1">
                        <h1>Regulatory compliant</h1>
                        <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                             <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                        </svg>
                    </div>
                    <div class="checkbox2">
                        <h1>Covered by 14 patents</h1>
                        <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                             <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                        </svg>
                    </div>
                </div>
                <div class="bottompapers">
                    <div class="paper1">
                        <Paper elevation = {3}>
                            <h2>Contact Us:</h2>
                            <p>Click here to contact us</p>
                            <button>Contact us</button>
                        </Paper>
                    </div>
                    <div class="paper2">
                        <Paper elevation = {3}>
                            <h2>Our Product:</h2>
                            <p>Click here to learn more about our product</p>
                            <button>Our product</button>
                        </Paper>
                    </div>
=======
import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className="title">
            <span>Who is Osteofit?</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
              <path
                fill="#FFFFFF"
                fill-opacity="1"
                d="M0,32L120,74.7C240,117,480,203,720,229.3C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              ></path>
            </svg>
          </h1>
        </div>
        <div class="outer-container">
          <div class="container container1">
            <div class="inner_container">
              <div class="title-bio">Person 1</div>
              <div class="container_text">
                <div class="container_text1">
                  orthopedic surgeon with over 50 years experience specializing
                  in hip and knee replacement, inventor{" "}
                </div>
              </div>
            </div>
          </div>
          <div class="container container2">
            <div class="inner_container">
              <div class="title-bio">Person 2</div>
              <div class="container_text">
                <div class="container_text1">
                  Inventor, business owner and over 40 years experience in
                  design and development of orthopedic implants working with
                  major OEM’s
                </div>
              </div>
            </div>
          </div>
          <div class="container container3">
            <div class="inner_container">
              <div class="title">Person 3</div>
              <div class="container_text">
                <div class="container_text1">
                  Business owner, over 40 years in the development and
                  manufacture of orthopedic implants and instruments, inventor
>>>>>>> 39e349690100f02274cf85addca795605a2c86cf
                </div>
              </div>
            </div>
<<<<<<< HEAD
       
        )
    }
}


export default About
=======
          </div>
        </div>
      </div>
    );
  }
}

export default About;
>>>>>>> 39e349690100f02274cf85addca795605a2c86cf
