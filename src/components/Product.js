import React from "react";
import modelPart1 from "../images/Osteofitmodelpart1.PNG"
import problem from "../images/problem.jpg"
import modelPart2 from "../images/Osteofitmodelpart2.PNG"
import modelPart3 from "../images/Osteofitmodelpart4.PNG"
import osteofitWhiteLogo from "../images/osteofitWhiteLogo.png";
import gray from '../images/lightgray.png'
import black from '../images/black.png'
import blue from '../images/blue.png'
import productPenImage from '../images/boneWReamer.png';
import brown from '../images/brown.png'
import green from '../images/green.png'
import ScrollAnimation from 'react-animate-on-scroll';
import '../styling/productStyle.scss'
import mainProduct from "../images/product.png"
import '../styling/mainStyle.scss'




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
         <section class="slice slice-sm pt-10 bg-primary">
        <div class="product-title-wrapper">
          <div class="product-typing-demo">
           <b> The Problem.</b>
          </div>
        </div>       
        <div class="container">
            <div class="row row-grid">
                <div class="col-lg-8">
                    <p class="lead problem-desc lh-190 bg-primary">
                    The current procedure for reamers allows surgeons to use a singular 
                    reamer for several surgeries. However, with each use, the reamer <b>dulls </b> 
                    and requires more axial force by the surgeon. This leads to a <b>higher 
                    chance</b> of <b>inaccurate reaming, medial perforation, and heat generation </b> 
                    (which can kill the bone). It is evident that a reusable reamer is <b>NOT </b>the 
                    most effective and clean product for surgery.
                    </p>
                </div>
            </div>
        </div>
    </section>
        <section class="slice-product slice-lg pt-10">

        <div class="shape-container-product shape-line shape-position-top shape-orientation-inverse-product">
            <svg width="2560px" height="100px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 2560 100" xmlSpace="preserve" class="">
                <polygon points="2560 0 2560 100 0 100"></polygon>
            </svg>
        </div>
        <ScrollAnimation animateIn="fadeIn">

        <div class="container">
            <div class="row row-grid justify-content-between align-items-center">
            <div class="dialog-1">
				<div class="left-point"></div>
		      	</div>
<p class="dialog-text">Click on each color to view the model!</p>
                    <div class="solution-text order-lg-2">
                        <h5 class="h3">The Solution</h5>
                          <p class="lead my-4">
                          The current procedure for reamers allows surgeons to use a singular 
                    reamer for several surgeries. However, with each use, the reamer <b>dulls </b> 
                    and requires more axial force by the surgeon. This leads to a <b>higher 
                    chance</b> of <b>inaccurate reaming, medial perforation, and heat generation </b> 
                    (which can kill the bone). It is evident that a reusable reamer is <b>NOT </b>the 
                    most effective and clean product for surgery.
                          </p>
                    </div>
                    <div class="col-lg-6 order-lg-1">
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

                        </div>
                </div>
        </ScrollAnimation>
    </section>
    <section class="slice slice-lg pt-lg-6 pb-0 pb-lg-6 bg-section-secondary">
        <div class="container">
            <div class="row mb-5 justify-content-center text-center">
                <div class="col-lg-6">
                    <h2 class="text-center mt-4">Collab Learning: Empowering Peer Learning</h2>
                    <div class="mt-2">
                        <p class="lead lh-180">Use Atomic Design to build components, sections and, then, pages.</p>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body pb-5">
                            <div class="pt-4 pb-5">
                                <img class="model-part-1 img-fluid img-center" src={modelPart1} alt="" />
                            </div>
                            <h5 class="h4 lh-130 mb-3">Cutting Panels</h5>
                            <p class="text-muted mb-0">This is the first part of the reamer. The panels are made from <b>ASTM A276 420 Stainless Steel</b>, and has stamped side and dome cutting panels. Additionally, the Panel-Frame Subassembly includes 4 side panels and 1 dome panel.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4" id = "card">
                    <div class="card">
                        <div class="card-body pb-5">
                            <div class="pt-4 pb-5">
                                <img class="model-part-2 img-fluid img-center" src={modelPart2} alt="" />
                            </div>
                            <h5 class="h4 lh-130 mb-3">Molded Back Plate</h5>
                            <p class="text-muted mb-0">Receive notifications when people in your class are studying so you can study together online in real time</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body pb-5">
                            <div class="pt-4 pb-5">
                                <img class="model-part-3 img-fluid img-center" src={modelPart3} alt="" />
                            </div>
                            <h5 class="h4 lh-130 mb-3">Molded Core</h5>
                            <p class="text-muted mb-0">Manage and schedule when to study for quizzes and exams in real time in order to increase test scores
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    );
  }


export default Product;