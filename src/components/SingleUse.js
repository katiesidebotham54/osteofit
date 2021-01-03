import React from "react";
import { Paper } from "@material-ui/core";

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
          <div className="icon1">
            <h2>
              Simple and Efficient <br />
              Cycle
              <i class="fas fa-times circle-icon-reusable"></i>
              <i class="fas fa-check circle-icon-osteofit"></i>
            </h2>
          </div>
          <div className="icon2">
            <h2>
              Cost Effective
              <i class="fas fa-times circle-icon-reusable"></i>
              <i class="fas fa-check circle-icon-osteofit"></i>
            </h2>
          </div>
          <div className="icon3">
            <h2>
              100% Sterile Each <br />
              Time
              <i class="fas fa-times circle-icon-reusable"></i>
              <i class="fas fa-check circle-icon-osteofit"></i>
            </h2>
          </div>
        </div>
      </div>
      <div className="cycles">
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
        <div>
          <ul class="timeline">
            <li class="li">
              <span className="timeline-circle">1</span>
              <h4> Cleaned </h4>
            </li>
            <div className="horz-line1"></div>
            <li class="li">
              <span className="timeline-circle">2</span>
              <h4 className="largerText"> Packaged </h4>
            </li>
            <div className="horz-line1"></div>
            <li class="li">
              <span className="timeline-circle">3</span>
              <h4 className="largerText"> Sterilized </h4>
            </li>
            <div className="horz-line1"></div>
            <li class="li">
              <span className="timeline-circle">4</span>
              <div class="status">
                <h4> Stored </h4>
              </div>
            </li>
            <div className="horz-line1"></div>
            <li class="li">
              <span className="timeline-circle">5</span>
              <div class="status">
                <h4> Surgery </h4>
              </div>
            </li>
            <div className="horz-line1"></div>
            <li class="li">
              <span className="timeline-circle">6</span>
              <h4> Rinsed </h4>
            </li>
            <div className="horz-line1"></div>
            <li class="li">
              <span className="timeline-circle">7</span>
              <h4 className="largerText"> Scrubbed </h4>
            </li>
            <div className="horz-line1"></div>
            <li class="li">
              <span className="timeline-circle">8</span>
              <h4> Inspected</h4>
            </li>
            <h4 id="repeat"> REPEAT</h4>
          </ul>
        </div>
        <div>
          <ul class="timeline-osteofit">
            <li class="li">
              <span className="timeline-circle">1</span>
              <h4 className="largerText"> Purchase</h4>
            </li>
            <div className="horz-line1"></div>

            <li class="li">
              <span className="timeline-circle">2</span>
              <h4> Surgery </h4>
            </li>
            <div className="horz-line2"></div>
            <li class="li">
              <span className="timeline-circle">3</span>
              <h4> Recycled </h4>
            </li>
          </ul>
        </div>
      </div>
      <div className="benefits-single-use">
        <h1>With Osteofit's single-use features, there will be: </h1>
        <div>
        <i class="fas fa-arrow-up"></i>
        <i class="fas fa-arrow-up"></i>
        <i class="fas fa-arrow-up"></i>
        <i class="fas fa-arrow-down"></i>
        <i class="fas fa-arrow-down"></i>
        <i class="fas fa-arrow-down"></i>
        </div>
      </div>
      <div className="recycle">
        <div className="recycle-title">
          <h2 style={{ color: "green" }}>Osteofit is Green!</h2>
        </div>
        <i class="fas fa-recycle circle-icon-recycle"></i>

        <div className="recycle-para">
          <Paper elevation={3}>
            <p>
              OsteoFit is a newly formed company specializing in single-use
              sterile medical reamers. Our company's management has over 100
              years of experience in human medical orthopedic design and
              manufacturing of implants and instruments.
            </p>
          </Paper>
    </div>
      </div>
      <img src="https://img.icons8.com/color/96/000000/steel-bars.png" alt="" />
      <img
        src="https://img.icons8.com/material-outlined/24/000000/solo-cup.png"
        alt=""
      />
    </div>
  );
};

export default SingleUse;
