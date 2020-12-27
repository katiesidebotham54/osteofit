import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div className="Product">
        <h1 className="title">
          <span className="fade-in">Our Product</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
            <path
              fill="#FFFFFF"
              fill-opacity="1"
              d="M0,32L120,74.7C240,117,480,203,720,229.3C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </h1>
      </div>
    );
  }
}

export default Product;
