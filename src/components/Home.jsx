import React, { Component } from "react";
import Autumn from "../images/automn.jpeg";
import Path from "../images/path.jpeg";
import Tree from "../images/tree.jpeg";
import Product from "../images/productBlue1.png";
/*import '../mysass.scss';*/

class Home extends Component {
  render() {
    return (
      <div>
        <div className="Mission">
          <div class="MissionText">
            <h2 className="a">Accurate</h2>
            <h2 className="b">Sterile</h2>
            <h2 className="c">Effective</h2>
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
        <div className="HomePara">
          <p>
            OsteoFit is a medical device company focused on the{" "}
            <b>development</b> of cost <b>effective</b> orthopedic instruments
            which address <b>accuracy</b>, <b>function</b> and <b>sterility</b>{" "}
            in a routine and <b>sustainable</b> process for hospitals.
          </p>
        </div>
        <div className="item-3d">
          <span class="ground"></span>
          <figure class="item-content group">
            <div class="item-img">
              <img src={Product} alt="" />
            </div>
            <figcaption class="item-caption">
              <p></p>
              <p></p>
              <p></p>
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
}

export default Home;
