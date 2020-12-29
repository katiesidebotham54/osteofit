import React from "react";
import { Paper } from "@material-ui/core";

const SingleUse = () => {
  return (
    <div className="SingleUse">
      <div>
        <h1 className="title">
          <span className="fade-in">Why Use Single-Use Products?</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
            <path
              fill="#FFFFFF"
              fill-opacity="1"
              d="M0,32L120,74.7C240,117,480,203,720,229.3C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </h1>
      </div>
      <div className="problem">
        <div className="ProblemText">
          <Paper elevation={3}>
            <h2 className="subtitles">
              Clincal Issues with Reusable Medical Reamers
            </h2>
          </Paper>
        </div>
        <div className="ProblemText2">
          <ol className="gradient-list">
            <li>Reamers dull after multiple uses</li>
            <li>Heat generated can cause necrosis</li>
            <li>Quality Control is left to the surgeon</li>
            <li>
              Expenses incurred for proper cleaning (~ $70 to clean a tray of
              instruments
            </li>
            <li>Infection associated with inadequate cleaning</li>
            <li>Uncertainy of number of uses per reamer </li>
          </ol>
        </div>
      </div>
      <div className="container_cards">
        <div className="allCards" id="card1">
          <div className="card">
            <h2>Accuracy</h2>
            <hr />
            <p>More accurate than conventional reamers (+0.1mm)</p>
          </div>
        </div>
        <div className="allCards">
          <div id="card2">
            <div className="card">
              <h2>Sharp</h2>
              <hr />
              <p> Material and design create extra sharp product</p>
            </div>
          </div>
          <div id="card3">
            <div className="card">
              <h2>Reduced Heat Generation</h2>
              <hr />
              <p>Reduced heat generated during reaming</p>
            </div>
          </div>
        </div>
        <div className="allCards">
          <div id="card4">
            <div className="card">
              <h2>Reduced risk of Infection</h2>
              <hr />
              <p>Reduced risk of patient infection</p>
            </div>
          </div>
          <div id="card5">
            <div className="card">
              <h2>Sterile</h2>
              <hr />
              <p>Turnkey sterile-packed instrument kits</p>
            </div>
          </div>
        </div>
        <div className="allCards">
          <div id="card6">
            <div className="card">
              <h2>Easier Usage</h2>
              <hr />
              <p>Reduced hospital inventory and handling</p>
            </div>
          </div>
          <div id="card7">
            <div className="card">
              <h2>New revenue stream</h2>
              <hr />
              <p>New revenue stream</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUse;
