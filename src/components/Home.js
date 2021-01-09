import React from "react";
import Product from "../images/product.png"
import { BrowserRouter as Router, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ScrollAnimation from 'react-animate-on-scroll';
import model1 from '../images/model1.png'
import model2 from '../images/model2.png'
import model3 from '../images/model3.png'
import model4 from '../images/model4.png'




const Home = () => {
    return (
      <div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
        <div className="Mission ">
        <div className= "MissionText wordCarousel">
        <div> 
            <ul class="flip4"> 
                <li>Accurate</li>
                <li>Sterile</li>
                <li>Effective</li> 
                <li>Sustainable</li>  
            </ul>
        </div>  
          </div>
          <div class="slideshow-container">
            <div class="slideshow-inner">
              <div class="mySlides fade img1">
                <img src={model1} alt="tree" />
              </div>
              <div class="mySlides fade img2">
                <img src={model2} alt="autumn" />
              </div>
              <div class="mySlides fade img3">
                <img src={model3} alt="path" />
              </div>
              <div class="mySlides fade img3">
                <img src={model4} alt="path" />
              </div>

            </div>
          </div>
          <br />
          <div className="allDots">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
            <span class="dot" onclick="currentSlide(4)"></span>

          </div>
        </div>
      <div class="home-arrow">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
          <span class="text">Scroll down</span>
    </div>
    <ScrollAnimation animateIn="fadeIn">

        <div className = "HomePara">
          <p className = "main-para-home">OsteoFit is a medical device company focused on the development of <b>cost-effective</b> orthopedic instruments
             maintain <b>accuracy</b>, <b>function</b> and <b>sterility</b> in a routine and <b>sustainable</b> process for hospitals.</p>
        </div>
        </ScrollAnimation>

        <div className="item-3d">
          <span class="ground"></span>
          <figure class="item-content group">
            <div class="item-img">
              <img src={Product} alt="" />
            </div>

            <figcaption class="item-caption">
            <ScrollAnimation animateIn="fadeIn">

              <h2 style={{color:"white"}}>Our product:
              </h2>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn">

              <p style={{color:"white"}}>
              This is a 3D model of our product, click here to learn more.
              </p>
              </ScrollAnimation>

              <Button variant="contained" className="button">
                <Router forceRefresh>
                  <Link exact to="/product">
                    Our Product
                  </Link>
                </Router>
              </Button>
            </figcaption>    

          </figure>
        </div>
      </div>
    );
}

export default Home;
