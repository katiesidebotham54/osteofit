import React, { Component } from "react";

class SingleUse extends Component {
  render() {
    return (
      <div className="SingleUse">
        <h1 className="title">
          <span>Why Use Single-Use Products?</span>
        </h1>
        <br />
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
    );
  }
}

export default SingleUse;
