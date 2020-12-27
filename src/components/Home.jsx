import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import Autumn from "../images/automn.jpeg";
import Path from "../images/path.jpeg";
import Tree from "../images/tree.jpeg";
class Home extends Component {
  render() {
    return (
      <div>
        <div className="Mission">
          <Paper className="MissionText">
            <h2>Accuracy</h2>
            <h2>Function</h2>
            <h2>Sterility</h2>
          </Paper>
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
        <div class="home-arrow">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
          <span class="text">Scroll down</span>
        </div>
      </div>
    );
  }
}

export default Home;
