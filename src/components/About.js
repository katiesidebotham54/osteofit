import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import osteofitlogo from '../images/osteofitLogo.png'
import '../styling/aboutStyle.scss'
import '../styling/mainStyle.scss'
import brownReamer from '../images/osteofitModelBrown1.png';


const About = () => {
      return (
      <div className="About">
      <section class="slice bg-dark">
      <div class="about-title-wrapper">
          <div>
          <h2 class="text-white">About Us</h2>
          </div>
        </div>       

        <div class="container py-5">
            <div class="row row-grid align-items-center">
                <div class="col-lg-8 text-center text-lg-left">
                    <h1 class="text-white mb-4">
                        OsteoFit is an orthopedic company specializing in single-use sterile medical reamers
                    </h1>
                    <p class="lead text-white">
                        We pride ourselves on our commitment to excellence and customer service.
                    </p>
                </div>
            </div>
        </div>
        <div class="shape-container-about shape-line shape-position-bottom">
            <svg width="2560px" height="100px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 2560 100" xmlSpace="preserve" class="">
                <polygon points="2560 0 2560 100 0 100"></polygon>
            </svg>
        </div>

    </section>
        <div className="about-container">
          <figure class="item-content-about">
            <div class="item-img-about">
              <img src={brownReamer} alt="" />
            </div>
              <ScrollAnimation animateIn="fadeIn">
              <p className="about-text">
              OsteoFit is a newly formed company specializing in single-use 
              sterile medical reamers. Our company's management has over 100
              years of experience in human medical orthopedic design and
              manufacturing of implants and instruments. Our mission is to combine  
               experience from orthopedic surgery, engineering and manufacturing
              technology to provide cost-effective surgical tools with improved effectiveness, 
              safety and environmentally-friendly design.
              </p>
              <img className = "about-logo" src={osteofitlogo} alt=""/>
              </ScrollAnimation>
          </figure>
        </div>
        <section class="slice slice-lg pt-lg-6 pb-0 pb-lg-6 bg-section-secondary gradient-bckgrd">
        <div class="container">
            <div class="row mb-5 justify-content-center text-center">
                <div class="col-lg-6 text-white text-center">
                    <h2 class=" mt-4">Our Team</h2>
                    <div class="mt-2">
                        <p class="lead lh-180" className="our-team-text">With over 100 years of experience, we are dedicated to making successful products.</p>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body card-hover pb-5">
                            <div class="pt-4 pb-5">
                            <i class="fas fa-pen-nib icon"></i>
                            </div>
                            <h5 class="h4 lh-130 mb-3">Engineering</h5>
                            <h3>40+</h3>

                            <p class="text-muted mb-0">years of experience in the development of orthopedic implants working with OEMs.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body card-hover pb-5">
                            <div class="pt-4 pb-5">
                            <i class="fas fa-head-side-mask icon"></i>
                            </div>
                            <h5 class="h4 lh-130 mb-0">Orthopedic Surgery</h5>
                            <h3>50+</h3>

                            <p class="text-muted mb-0">years of experience specializing in hip and knee replacement.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body card-hover pb-5">
                            <div class="pt-4 pb-5">
                            <i class="fas fa-tools icon"></i>
                            </div>
                            <h5 class="h4 lh-130 mb-3">Manufacturing</h5>
                            <h3>40+</h3>

                            <p class="text-muted mb-0">years in the development and manufacturing of orthopedic implants and instruments.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
        <ScrollAnimation animateIn="fadeIn">
        <section class="gradient-bckgrd" >

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
              Technology Covered by 4 Patents
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
        </section>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">

        <section class="slice slice-bottompapers bg-section-secondary">
        <div class="container text-center">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md">
                    <div class="card card-pricing text-center px-3 hover-scale-110">
                        <div class="card-header py-5 border-0 delimiter-bottom">
                            <span class="h1 text-center mb-0">OsteoFit Reamer</span>
                        </div>
                        <div class="card-body">
                            <p>Click below to view our product and recycling process</p>
                            <br />
                            <Router forceRefresh>
                          <Link class="btn btn-sm btn-warning hover-translate-y-n3 hover-shadow-lg mb-3" exact to="/product">
                              Our Product
                          </Link>
                        </Router>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md">
                    <div class="card card-pricing bg-dark text-center px-3 border-0 hover-scale-110">
                        <div class="card-header py-5 border-0 delimiter-bottom">
                            <span class="h1 text-white text-center mb-0">Have a question?</span>
                        </div>
                        <div class="card-body">
                        <p class = "right-para">Click below for questions, comments, or inquiries</p>
                        <br />
                        <Router forceRefresh>
                          <Link class="btn btn-sm btn-white hover-translate-y-n3 hover-shadow-lg mb-3" exact to="/contact">
                         Contact Us
                          </Link>
                        </Router>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </ScrollAnimation>

      </div>
    );
  }

export default About;
