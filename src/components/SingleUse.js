import React from "react";
import { Paper } from "@material-ui/core";
import mold from '../images/steel-mold.png';
import Button from "@material-ui/core/Button";
import "../styling/App.scss"
import ScrollAnimation from 'react-animate-on-scroll';

const SingleUse = () => {
  return (
    <div className="SingleUse">
      <div>
        <h1 className="title">
          <span className="fade-in-text">Why Use Single-Use Products?</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
              <path
                fill="#FFFFFF"
                fill-opacity="1"
                d="M0,32L120,74.7C240,117,480,203,720,229.3C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              ></path>
            </svg>
        </h1>
      </div>
      <div className="comparison">
        <div className="comparison-title-resuable">
          <Paper elevation={3}>
            <h2>Reusable</h2>
          </Paper>
        </div>
        <div className="verticalLine"></div>
        <div className="comparison-title-osteofit">
          <Paper elevation={3}>
            <h2>Osteofit </h2>
          </Paper>
          <ScrollAnimation animateIn="fadeIn">
          <div className="icon1">
            <h2>
              Simple and Efficient 
              Cycle
              <span>
              <i class="fas fa-times circle-icon-reusable x1"></i>
              <i class="fas fa-check circle-icon-osteofit check1"></i>

              </span>
            </h2>
          </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">

          <div className="icon2">

            <h2>
              Cost Effective
              <span>
              <i class="fas fa-times circle-icon-reusable"></i>
              <i class="fas fa-check circle-icon-osteofit"></i>
              </span>
            </h2>

          </div>
          <div className="icon3">

            <h2>
              100% Sterile Each
              Time
              <span>
              <i class="fas fa-times circle-icon-reusable"></i>
              <i class="fas fa-check circle-icon-osteofit"></i>
              </span>
            </h2>
          </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className="cycles">
      <ScrollAnimation animateIn="fadeIn">

        <h1>
          A process that takes
          <span>
            {" "}
            <b>less time </b>
          </span>
          and is
          <span>
            <b> more effective. </b>
          </span>
        </h1>
        </ScrollAnimation>
        <hr className = "horz-line3" />

        <div>
        <ScrollAnimation animateIn="fadeIn">

        <h2>Reusable</h2>
          <ul class="timeline">
            <li class="li">
              <span className="timeline-circle">1</span>
              <h4> Cleaned </h4>
            </li>
            <hr className = "horz-line1" />
            <li class="li">
              <span className="timeline-circle">2</span>
              <h4 > Packaged </h4>
            </li>
            <hr className = "horz-line1" />
            <li class="li">
              <span className="timeline-circle">3</span>
              <h4 > Sterilized </h4>
            </li>
            <hr className = "horz-line1" />
            <li class="li">
              <span className="timeline-circle">4</span>
              <div class="status">
                <h4> Stored </h4>
              </div>
            </li>
            <hr className = "horz-line1" />
            <li class="li">
              <span className="timeline-circle">5</span>
              <div class="status">
                <h4> Surgery </h4>
              </div>
            </li>
            <hr className = "horz-line1" />
            <li class="li">
              <span className="timeline-circle">6</span>
              <h4> Rinsed </h4>
            </li>
            <hr className = "horz-line1" />
            <li class="li">
              <span className="timeline-circle">7</span>
              <h4 > Scrubbed </h4>
            </li>
            <hr className = "horz-line1" />
            <li class="li">
              <span className="timeline-circle">8</span>
              <h4> Inspected</h4>
            </li>
          </ul>
          </ScrollAnimation>
        </div>
        <div>
        <ScrollAnimation animateIn="fadeIn">

          <h2>Osteofit</h2>
          <ul class="timeline-osteofit">
            <li class="li">
              <span className="timeline-circle">1</span>
              <h4 > Purchase</h4>
            </li>
            <hr className = "horz-line2" />

            <li class="li">
              <span className="timeline-circle">2</span>
              <h4> Surgery </h4>
            </li>
            <hr className = "horz-line2" />
            <li class="li">
              <span className="timeline-circle">3</span>
              <h4> Recycled </h4>
            </li>
          </ul>
          </ScrollAnimation>

        </div>
      </div>
      <div className="benefits-single-use fade">
      <ScrollAnimation animateIn="fadeIn">

        <h1>With Osteofit's single-use features, you'll see a : </h1>
        <hr className = "horz-line4" />
        </ScrollAnimation>

        <div>
        <ScrollAnimation animateIn="fadeIn">

          <h3>
            <span className = "increase-title">
            Decrease in:
            </span>
            <span className = "decrease-title">Increase in:
            </span>
          </h3>
          </ScrollAnimation>

        </div>
        <div>
        <div className="benefits">
        <ScrollAnimation animateIn="fadeIn">

            <h2>
              <span>
              <i class="fas fa-disease circle-icon-benefits1"></i>
              Risk of Infection
              <i class="fas fa-angle-double-up circle-icon-benefits2"></i>

              Productivity
              </span>
            </h2>
            </ScrollAnimation>

          </div>
          <div className="benefits">
          <ScrollAnimation animateIn="fadeIn">

            <h2>
              <span>
              <i class="fab fa-hotjar circle-icon-benefits1"></i>
              Heat Generation
              <i class="fas fa-bullseye circle-icon-benefits2 accuracy-icon"></i>
              Accuracy
              </span>
            </h2>
            </ScrollAnimation>

          </div>
          <div className="benefits">
          <ScrollAnimation animateIn="fadeIn">

            <h2>
              <span>
              <i class="fas fa-dollar-sign circle-icon-benefits1"></i>
              Cleaning Expenses
              <i class="fas fa-dollar-sign circle-icon-benefits2 revenue-icon"></i>
              Revenue
              </span>
            </h2>
            </ScrollAnimation>

          </div>
        </div>
      </div>
      <div className="recycle">
      <ScrollAnimation animateIn="fadeIn">

          <div className = "wrapper">
          <h2>Osteofit is Green!</h2>
          </div>
          </ScrollAnimation>

          <div className = "recycle-desc">
          <Paper elevation={3}>
            <p>
             Osteofit takes pride in creating products that are sustainable and environmentally conscious.
             Our reamers are made from stainless steel and poly carbonate -- both materials that are 100% recyclable! To learn more about these 
             processes, feel free to reference the resources below.
            </p>
          </Paper>
          <ScrollAnimation animateIn="fadeIn">
          <span class="iconify" data-icon="ion-earth" data-inline="false"></span> 
          </ScrollAnimation>

          </div>
      </div>
      <div className = "materials">
      <ScrollAnimation animateIn="fadeIn">
          <img src = {mold} alt="" />
          </ScrollAnimation>

      </div>
      <div className="bottompapers2">
          <div class="paper3">
              <h2>Recycling Stainless Steel</h2>
              <br />

              <p>Click below to learn more about this process!</p>
              <br />
              <br />
              <Button href= "http://polycarbonaterecycling.com/polycarbonate-recycling.html" variant="contained">
                   Learn More
              </Button>
          </div>
      <div class="paper4">
            <h2>Recycling Polycarbonate </h2>
              <br />     
              <p>Click below to learn more about this process!</p>
         
              <br />
              <br />
              <Button href="http://www.metalrecyclersusa.com/stainless-steel-recycling.html#:~:text=Once%20the%20stainless%20steel%20has,is%20separated%20from%20other%20material." variant="contained" className="button">
                   Learn More
              </Button>
          </div>

      </div>     
    </div>
  );
};

export default SingleUse;
