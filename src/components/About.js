import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import osteofitlogo from '../images/osteofitLogo.png'
import aboutUs from '../images/aboutUs.png'
import '../styling/aboutStyle.scss'
import '../styling/mainStyle.scss'


const About = () => {
      return (
      <div className="About">
      <section class="slice py-8 bg-dark">
      <div class="about-title-wrapper">
          <div class="typing-demo">
              About Us
          </div>
        </div>       

        <div class="container py-5">
            <div class="row row-grid align-items-center">
                <div class="col-lg-8 text-center text-lg-left">
                    <h1 class="text-white mb-4">
                        We manufacture cost-effective reamers for medical facilities &amp; surgeons.
                    </h1>
                    <p class="lead text-white">
                        We pride ourselves on our commitment to excellence, as well as our ability to deliver for our customers.
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
              manufacturing of implants and instruments. Our mission is to combine  
              <b> experience</b> from <b>orthopedic</b> surgery, <b>engineering</b> and <b>manufacturing </b>
              technology to provide cost-effective surgical tools with improved effectiveness, 
              safety and environmentally-friendly design
              </p>
              <img className = "about-logo" src={osteofitlogo} alt=""/>
              </ScrollAnimation>
        </figure>
        </div>
        <section class="slice slice-lg pt-lg-6 pb-0 pb-lg-6 bg-section-secondary">
        <div class="container">
            <div class="row mb-5 justify-content-center text-center">
                <div class="col-lg-6">
                    <h2 class=" mt-4">Our Team</h2>
                    <div class="mt-2">
                        <p class="lead lh-180">With over 100 years total of experience, we are dedicated to making successful products!</p>
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
                            <h5 class="h4 lh-130 mb-3">Designer</h5>
                            <h3>40+</h3>

                            <p class="mb-0"> years of experience in design and development of orthopedic implants working with major OEMs.</p>

                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body card-hover pb-5">
                            <div class="pt-4 pb-5">
                            <i class="fas fa-head-side-mask icon"></i>
                            </div>
                            <h5 class="h4 lh-130 mb-3">Orthopedic Surgeon</h5>
                            <h3>40+</h3>

                       <p class="mb-0">years of experience specializing in hip and knee replacement.text text text text texttext text text text texttext text text text text</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body card-hover pb-5">
                            <div class="pt-4 pb-5">
                            <i class="fas fa-tools icon"></i>
                            </div>
                            <h5 class="h4 lh-130 mb-3">Manufacturer</h5>
                            <h3>40+</h3>
                            <p class="mb-0"> years in the development and manufacturing of orthopedic implants and instruments.  text texttext text text</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <ScrollAnimation animateIn="fadeIn">
        <section>

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
        </section>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">

        <section class="slice slice-bottompapers bg-section-secondary">
        <div class="container text-center">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md">
                    <div class="card card-pricing text-center px-3 hover-scale-110">
                        <div class="card-header py-5 border-0 delimiter-bottom">
                            <span class="h1 text-center mb-0">Osteofit's Reamer</span>
                        </div>
                        <div class="card-body">
                            <p>Click below to view our product and our recycling process!</p>
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
                        <p class = "right-para">Click below for questions, comments, or inquieries!</p>
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