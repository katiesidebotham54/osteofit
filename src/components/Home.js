import React, {useEffect, useState, useRef} from "react";
import Product from "../images/product.png"
import { Paper } from "@material-ui/core";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import model1 from '../images/model1.png'
import model2 from '../images/model2.png'
import model3 from '../images/model3.png'
import model4 from '../images/model4.png'
import '../styling/homeStyle.scss'




const Home = () => {
  document.getElementById("scrollToTopBtn")
var rootElement = document.documentElement

function handleBackToTopBtn(e) {
e.preventDefault()
rootElement.scrollTo({
  top: 0,
  behavior: "smooth"
})
}
    return (
      <div class = "homeWholePage">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
      <div className="intro" id ="intro">
        <div class="intro-title">
          <div class="title-inner">
            <div class="intro-osteofit">
              <div class="intro-inner">Osteofit</div>
            </div>
          </div>
        </div>
        <div class="intro-image">
          <img src={Product} alt="" />
        </div>
        <div class="home-arrow">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
          <span class="text">Scroll down</span>
        </div>
      </div>
      <div className="carousel">
      <div className= "wordCarousel">
          <span className="carousel-title">
            <h1>Osteofit is: </h1>
          </span>
        <div> 
            <ul class="flip4"> 
                <li>Accurate</li>
                <li>Sterile</li>
                <li>Effective</li> 
            </ul>
        </div>  
      </div>
    </div>

      <div className="item-3d">
        <div id = "triangle"/>
        <figure class="item-content group">
        <div className = "HomePara">
          <p className = "main-para-home">OsteoFit is a medical device company focused on the development of <b>cost-effective</b> orthopedic instruments
             that maintain <b>accuracy</b>, <b>function</b> and <b>sterility</b> in a routine and <b>sustainable</b> process for hospitals.</p>
      </div>

        </figure>
              </div>
      <div>
      <div className="item-intro">
      <div id="rectangle"/>
        <hr id="side-slanted-line1"/>
        <hr id="side-slanted-line2"/>

      </div>
      <figure class="item-content group">
          <div class="item-img">
              <img src={Product} alt="" />
          </div>
          <figcaption class="item-caption">
          <ScrollAnimation animateIn="fadeIn">
              <h2>Introducing Osteofit's Hollow Spherical Reamer: </h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
              <p>
              Made from stainless steel and molded polycarbonate, our single-use reamer provides <b>effective</b> and <b>accurate</b> usability. 
              Click here to learn more! 
              </p>
          </ScrollAnimation>
            <button class = 'btn-1'>
              <Router forceRefresh>
                <Link exact to="/product">Our Product </Link>
              </Router>
            </button>
          </figcaption>    

        </figure>
      </div>
      <ScrollAnimation animateIn="fadeIn">
      <div className = "stats">
        <div className = "stats-container">
          <div className="stat">
            <div className="stat-value">5</div>
            <hr />

            <div className="meta">Patents in Place</div>
          </div>
          <div className="stat">
            <div className="stat-value">100+</div>
            <hr />
            <div className="meta">Total Years of Experience</div>
      </div>

          <div className="stat">
            <div className="stat-value">11</div>
            <hr />
            <div className="meta">Colors Offered</div>
          </div>
          <div className="stat">
            <div className="stat-value">100%</div>
            <hr />
            <div className="meta">Recyclable</div>
          </div>
          </div>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">

      <div className = "more-info">
      <div id="arrowAnim">
  <div class="arrowSliding">
    <div class="arrow-side"></div>
  </div>
  <div class="arrowSliding delay1">
    <div class="arrow-side"></div>
  </div>
  <div class="arrowSliding delay2">
    <div class="arrow-side"></div>
  </div>
  <div class="arrowSliding delay3">
    <div class="arrow-side"></div>
  </div>
</div>

      <div className = "info-title">
          <h1>Learn More About</h1>
          <hr className = "horz-line4" />
          </div>
      <div className="bottompapers">
          <div class="paper1-home">
            <Paper elevation={13}>
            <i class="fas fa-award award-icon"></i>  
                        <br />
              <h2>the Origins of Osteofit</h2>
              <br/>
              <p>Founded on the premise of creating efficient and precise products for surgeons, Osteofit is challenging the status quo.</p>
              <a href='/about'>
              <div class="info-arrow">
              <Router forceRefresh>
                <Link exact to="/about"/>  
                </Router> 
                </div>  
                </a>           
            </Paper>
          </div>

          <div class="paper2-home">
            <Paper elevation={13}>
            <i class="fab fa-envira envira-icon"></i>
                          <br />
              <h2>the Sustainability of Osteofit</h2>
              <p>We make our reamers with 100% recyclable stainless steel and polycarbonate, making an efficient and environmentally-friendly process for hospitals!</p>
              <br />              
              <Router forceRefresh>
                <a href='/single-use'>
              <div class="info-arrow">
                <Link exact to="/single-use"/>
                </div>
                </a>
              </Router>
            </Paper>
          </div>
          <button id="scrollToTopBtn" onClick={handleBackToTopBtn}>Back to Top</button>
        </div>

      </div>
      </ScrollAnimation>
    </div>

    );
}

export default Home;
