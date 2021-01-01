import React from "react";
import Autumn from "../images/automn.jpeg";
import Path from "../images/path.jpeg";
import Tree from "../images/tree.jpeg";
import Product from "../images/Copy_of_osteofit_images__1_-removebg-preview.png"
import { BrowserRouter as Router, Link } from "react-router-dom";
/*import '../mysass.scss';*/
import Button from "@material-ui/core/Button";


const Home = () => {
    return (
      <div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
        <div className="Mission">
          <div class="MissionText">
            <h2 class="homeword1">Accurate</h2>
            <h2 class="homeword2">Sterile</h2>
            <h2 class="homeword3">Effective</h2>
          </div>
          <div class="slideshow-container">
            <div class="slideshow-inner">
              <div class="mySlides fade">
                <img src={Tree} alt="tree" />
              </div>
              <div class="mySlides fade">
                <img src={Autumn} alt="autumn" />
              </div>
              <div class="mySlides fade">
                <img src={Path} alt="path" />
              </div>
            </div>
          </div>
          <br />
          <div className="allDots">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
          </div>
        </div>
        {/*<div class="home-arrow">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
          <span class="text">Scroll down</span>
    </div>*/}
        <div className = "HomePara">
          <p className = "main-para-home">OsteoFit is a medical device company focused on the <b>development</b> of cost <b>effective</b> orthopedic instruments
             which address <b>accuracy</b>, <b>function</b> and <b>sterility</b> in a routine and <b>sustainable</b> process for hospitals.</p>
        </div>
        <div className="item-3d">
          <span class="ground"></span>
          <figure class="item-content group">
            <div class="item-img">
              <img src={Product} alt="" />
            </div>
            <figcaption class="item-caption">
              <h2 style={{color:"white"}}>Our product:
              </h2>
              <p style={{color:"white"}}>
              This is a 3D model of our product, click here to learn more.
              </p>
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
