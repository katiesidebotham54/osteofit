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
          <Paper elevation={3} className="MissionText">
            <h2>Motto</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea{" "}
            </p>
          </Paper>
          <div class="slideshow-container">
            <div class="slideshow-inner">
              <div class="mySlides fade">
                <img src="../images/tree.jpeg" />
              </div>
              <div class="mySlides fade">
                <img src={Autumn} />
              </div>
              <div class="mySlides fade">
                <img src={Path} />
              </div>
            </div>
            <a class="prev" onclick="plusSlides(-1)">
              &#10094;
            </a>
            <a class="next" onclick="plusSlides(1)">
              &#10095;
            </a>
          </div>
          <br />
          <div className="allDots">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
