import React from "react";
import { Paper } from "@material-ui/core";
import Productmodel from "../images/productmodel.png";
import modelPart1 from "../images/Osteofitmodelpart1.PNG"
import modelPart2 from "../images/Osteofitmodelpart2.PNG"
import modelPart3 from "../images/Osteofitmodelpart3.PNG"
import modelPart4 from "../images/Osteofitmodelpart4.PNG"

const Product = () => {
  const fadeElms = document.querySelectorAll('.fade');

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7
  };
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  fadeElms.forEach(el => observer.observe(el));

  function observerCallback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // fade in observed elements that are in view
        entry.target.classList.replace('fadeOut', 'fadeIn');
      } else {
        // fade out observed elements that are not in view
        entry.target.classList.replace('fadeIn', 'fadeOut');
      }
    });
  }

  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
  };

    return (
      <div className="Product">
        <h1 className="title">
          <span className="fade-in-text">Our Product</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
            <path
              fill="#FFFFFF"
              fill-opacity="1"
              d="M0,32L120,74.7C240,117,480,203,720,229.3C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </h1>
        <h2 className = "product-pen">
          The Hollow Spherical Reamer is
          <span
            class="txt-rotate"
            data-period="2000"
            data-rotate='[" accurate.", " sterile.", " cost-effective."]'
          ></span>
        </h2>
        <div className = "product-paper">
          <Paper elevation={13}>
            <h1>pp poo poo</h1>
            <p>Lorem ipsum dolor sit amet, pri te doming tacimates explicari. Option singulis tacimates at qui. Nec et senserit dissentiunt. Vel in luptatum consetetur. Eam ea mazim habemus, usu ei iusto voluptaria quaerendum.
               Qui ut doming doctus accommodare, et his epicuri interesset, in facete singulis inciderint eum. Mei et laoreet quaestio antiopam, ad est tibique voluptatum.</p>
          </Paper>
        </div>
        <div className = "model-section-1">
          <div className = "model-part-1">
            <img src={modelPart1}></img>
            <span className = "model-part-1-text">pp poo poo szn</span>
          </div>
          <div className = "model-part-2">
            <img src={modelPart2}></img>
            <span className = "model-part-2-text">pp poo poo szn</span>
          </div>
        </div>
        <div className = "product-and-parts">
          <div className="product-item-3d">
            <span class="product-ground"></span>
            <figure class="product-item-content group">
              <div class="product-item-img">
                <img src={Productmodel} alt="" />
              </div>
            </figure>
          </div>
        </div>
        <div className = "model-section-2">
          <div className = "model-part-3">
            <img src = {modelPart3}></img>
            <span className = "model-part-3-text">pp poo poo szn</span>
          </div>
          <div className = "model-part-4">
            <img src = {modelPart4}></img>
            <span className = "model-part-4-text">pp poo poo szn</span>
          </div>
        </div>
        <div className = "offer-section">
          <div className = "offer-paper">
            <Paper elevation={13}>
              <h1>Heres what we have to offer...</h1>
              <div className = "offer-1">
                <button class="dropbtn">Dropdown</button>
                <div class="dropdown-content">
                  <p>Link 1</p>
                  <p>Link 2</p>
                  <p>Link 3</p>
                </div>
              </div>
              <div className = "offer-2">
              <button class="dropbtn">Dropdown</button>
                <div class="dropdown-content-2">
                  <p>Link 1</p>
                  <p>Link 2</p>
                  <p>Link 3</p>
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    );
  }


export default Product;
