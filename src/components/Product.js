import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import modelPart1 from "../images/Osteofitmodelpart1.PNG"
import problem from "../images/problem.jpg"
import modelPart2 from "../images/Osteofitmodelpart2.PNG"
import modelPart3 from "../images/Osteofitmodelpart4.PNG"
import osteofitWhiteLogo from "../images/osteofitWhiteLogo.png";
import gray from '../images/lightgray.png'
import black from '../images/black.png'
import blue from '../images/blue.png'
import productPenImage from '../images/product-pen-image.png';
import brown from '../images/brown.png'
import green from '../images/green.png'
import ScrollAnimation from 'react-animate-on-scroll';
import '../styling/productStyle.scss'
import mainProduct from "../images/product.png"




const Product = () => {
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

  var prevIndex = 6;


  function handleOnClick(backgroundColor, e) {
    e.preventDefault();
    var colorList = document.getElementsByClassName("color");
    var reamerList = document.getElementsByClassName("reamer");
    var gradientList = document.getElementsByClassName("gradient");
    for (var i = 0; i < reamerList.length; i++) {
      reamerList[i].className = 'reamer';
    }
    for (var j = 0; j < colorList.length; j++) {
      colorList[j].className = 'color';
    }
    for (var k = 0; k < gradientList.length; k++) {
      gradientList[k].className = 'gradient';
    }
    gradientList[prevIndex].className += ' second';
    console.log(document.getElementsByClassName("color"));
    if(backgroundColor === "black2") {
      i = 6;
      colorList[i].className += " active";
      reamerList[i].className += " show";
      gradientList[i].className += " first";
    } else if(backgroundColor === "gray2") {
      i = 5;
      colorList[i].className += " active";
      reamerList[i].className += " show";
      gradientList[i].className += " first";
    } else if(backgroundColor === "green") {
      i = 4;
      colorList[i].className += " active";
      reamerList[i].className += " show";
      gradientList[i].className += " first";
    } else if(backgroundColor === "blue") {
      i = 3;
      colorList[i].className += " active";
      reamerList[i].className += " show";
      gradientList[i].className += " first";
    } else if(backgroundColor === "brown") {
      i = 2;
      colorList[i].className += " active";
      reamerList[i].className += " show";
      gradientList[i].className += " first";
    } else if(backgroundColor === "black1") {
      i = 1;
      colorList[i].className += " active";
      reamerList[i].className += " show";
      gradientList[i].className += " first";
    } else if(backgroundColor === "gray1") {
      i = 0;
      colorList[i].className += " active";
      reamerList[i].className += " show";
      gradientList[i].className += " first";
    }
    prevIndex = i;
    }
    return (
      <div className="Product">
        <div class="product-title-wrapper">
          <div class="product-typing-demo">
            Our Product
          </div>
        </div>       

        <div className = "color-block-blue"/>
        <div class="productContainer">
        <div class="productCard">
        <div class="info">
                <div class="reamerName">
                    <div>
                        <h1 class="big">The Osteofit Reamer</h1>
                    </div>
                </div>
                <div class="color-container">
                    <h3 class="title">Colors Offerred</h3>
                    <div class="colors">
                      <span id="gray1" onClick={(e) => handleOnClick("gray1",e)} class="color" primary="#d3d3d3" color="gray1"><span class="size">46</span> </span>
                      <span id="black1" onClick={(e) => handleOnClick("black1",e)} class="color" primary="#444" color="black1"> <span class="size">48</span> </span>
                      <span id="brown" onClick={(e) =>handleOnClick("brown",e)} class="color" primary="#964B00" color="brown"><span class="size">50</span></span>
                      <span id="blue" onClick={(e) =>handleOnClick("blue",e)} class ="color" primary="#2175f5" color="blue"><span class="size">52</span></span>
                      <span id="green" onClick={(e) => handleOnClick("green",e)} class="color" primary="#29b864" color="green"><span class="size">54</span></span>
                      <span id="gray2" onClick={(e) => handleOnClick("gray2",e)} class="color" primary="#d3d3d3" color="gray2">
                      <span class="size">56</span> </span>
                      <span id="black2" onClick={(e) => handleOnClick("black2",e)} class="color active" primary="#444" color="black2"><span class="size">58</span></span>

                    </div>
                </div>
            </div>
            <div class="productBackground">
                <div class="gradients">
                    <div class="gradient" color="gray1"/>
                    <div class="gradient" color="black1"/>
                    <div class="gradient" color="brown"/>
                    <div class="gradient" color="blue"/>
                    <div class="gradient" color="green"/>
                    <div class="gradient" color="gray2"/>
                    <div class="gradient" color="black2"/>
                </div>
                <h1 class="osteofit">Osteofit</h1>
                <img src={osteofitWhiteLogo} alt="" class="logo"/>
                <img src={gray} alt="" class="reamer" color="gray1"/>
                <img src={black} alt="" class="reamer" color="black1"/>
                <img src={brown} alt="" class="reamer" color="brown"/>
                <img src={blue} alt="" class="reamer" color="blue"/>
                <img src={green} alt="" class="reamer" color="green"/>
                <img src={gray} alt="" class="reamer" color="gray2"/>
                <img src={black} alt="" class="reamer show" color="black2"/>
            </div>
        </div>
    </div>
        <div className="problem-container">
        <h2 className = "problem-text">The Problem</h2>

        <img src={problem} alt="" />

          <figure class="item-content-product">
        <ScrollAnimation animateIn="fadeIn">

        <p className="problem-desc">
        The current procedure for reamers allows surgeons to use a singular 
        reamer for several surgeries. However, with each use, the reamer <b>dulls </b> 
        and requires more axial force by the surgeon. This leads to a <b>higher 
        chance</b> of <b>inaccurate reaming, medial perforation, and heat generation </b> 
        (which can kill the bone). It is evident that a reusable reamer is <b>NOT </b>the 
        most effective and clean product for surgery.

        </p>
        </ScrollAnimation>
        </figure>
        </div>
      <img src={productPenImage} alt="" id="product-pen-image"/>
        <h2 className = "product-pen">
          Our Hollow Spherical Reamer is
          <span
            class="txt-rotate"
            data-period="2000"
            data-rotate='[" accurate.", " sterile.", " cost-effective."]'
          ></span>
        </h2>
  <ScrollAnimation animateIn="fadeIn">
  <div className = "product-breakdown">
    <h1 class = "product-breakdown-h1">
      What Goes Into Our Product?
    </h1>
    <hr className = "horz-line7"/>
    <div class = "product-breakdown-container">
      <div className = "part-container-one">
        <img class = "model-part-1" src={modelPart1} alt=""/>
        <div className = "part-desc-1">
          <h2>Cutting Panels</h2>
        <p>This is the first part of the reamer. The panels are made from <b>ASTM A276 420 Stainless Steel</b>, and has stamped side and dome cutting panels. Additionally, the Panel-Frame Subassembly includes 4 side panels and 1 dome panel.</p>
        <hr class = "part-desc-1-line"></hr>
        </div>
      </div>

      <div  className = "part-container-two">
        <div className = "image-part">
        <img class = "model-part-2"src={modelPart2} alt=""/>
        </div>
        <div className = "part-desc-2">
          <h2>Molded Back Plate</h2>
        <p>This is the second part of the reamer made of polycarbonate 2061-15, and features tabs for ultrasonic welding.</p>
        <hr class = "part-desc-2-line"></hr>
        </div>
      </div>

      <div  className = "part-container-three">
        <div className = "image-part">
        <img class = "model-part-3"src={modelPart3} alt=""/>
        </div>
        <div className = "part-desc-3">
          <h2>Molded Core</h2>
        <p>This is the third part of the reamer, and like the second part, this part is also made up of polycarbonate 2061-15. This part helps with the structural integrity, with multiple options for quick-connect coupling to Reamer Shaft. This is color coded by size, and is space calculated for reamed volume of bone.</p>
        <hr class = "part-desc-2-line"></hr>
        </div>
      </div>
      <div className="item-3d">
        <span class="ground"/>
        <figure class="item-content group">
          <div class="item-img">
              <img src={mainProduct} alt="" />
          </div>
          <figcaption class="item-caption">
          <ScrollAnimation animateIn="fadeIn">
              <h2 style={{color:"white"}}>Introducing Osteofit's Hollow Spherical Reamer: </h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
              <p style={{color:"white"}}>
              Made from stainless steel and molded polycarbonate, our single-use reamer provides <b>effective</b> and <b>accurate</b> usability. 
              Click here to learn more! 
              </p>
          </ScrollAnimation>
            <button class = 'btn-1'>
              <Router forceRefresh>
                <Link exact to="/product">Our Product </Link>
              </Router>
            </button>
          </figcaption>    
        </figure>
      </div>

    </div>
    
  </div>
</ScrollAnimation>
    </div>
    );
  }


export default Product;
