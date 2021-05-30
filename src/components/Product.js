import React from "react";
import modelPart1 from "../images/Osteofitmodelpart1.PNG"
import problem from "../images/problem.jpg"
import modelPart2 from "../images/Osteofitmodelpart2.PNG"
import modelPart4 from "../images/Osteofitmodelpart4.PNG"
import osteofitWhiteLogo from "../images/osteofitWhiteLogo.png";
import gray from '../images/lightgray.png'
import black from '../images/black.png'
import blue from '../images/blue.png'
import aqua from '../images/turqoise.png'
import brown from '../images/brown.png'
import red from '../images/red.png'
import orange from '../images/orange.png'
import green from '../images/green.png'
import violet from '../images/violet.png'
import purple from '../images/purple.png'
import yellow from '../images/yellow.png'
import ScrollAnimation from 'react-animate-on-scroll';
import '../styling/productStyle.scss'
import { Paper } from "@material-ui/core";



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

  var prevIndex = 10;


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
    if(backgroundColor === "blue"){
      i = 10;
      colorList[i].className += " active";
      reamerList[i].className += " show";
      gradientList[i].className += " first"
    } else if(backgroundColor === "gray") {
      i = 9;
      colorList[i].className += " active";
      reamerList[i].className += " show";
      gradientList[i].className += " first";
    } else if(backgroundColor === "aqua") {
      i = 8;
      colorList[i].className += " active";
      reamerList[i].className += " show";
      gradientList[i].className += " first";
    } else if(backgroundColor === "violet") {
      i = 7;
      colorList[i].className += " active";
      reamerList[i].className += " show";
      gradientList[i].className += " first";
    } else if(backgroundColor === "purple") {
      i = 6;
      colorList[i].className += " active";
      reamerList[i].className += " show";
      gradientList[i].className += " first";
    } else if(backgroundColor === "yellow") {
      i = 5;
      colorList[i].className += " active";
      reamerList[i].className += " show";
      gradientList[i].className += " first";
    } else if(backgroundColor === "brown") {
      i = 4;
      colorList[i].className += " active";
      reamerList[i].className += " show";
      gradientList[i].className += " first";
    } else if(backgroundColor === "black") {
      i = 3;
      colorList[i].className += " active";
      reamerList[i].className += " show";
      gradientList[i].className += " first";
    } else if(backgroundColor === "orange") {
      i = 2;
      colorList[i].className += " active";
      reamerList[i].className += " show";
      gradientList[i].className += " first";
    } else if(backgroundColor === "green") {
      i = 1;
      colorList[i].className += " active";
      reamerList[i].className += " show";
      gradientList[i].className += " first";
    } else if(backgroundColor === "red") {
      i = 0;
      colorList[i].className += " active";
      reamerList[i].className += " show";
      gradientList[i].className += " first";
    }
    prevIndex = i;
  }

  function handleOnClickForSize(backgroundColor, e){
    e.preventDefault();
    var sizeList = document.getElementsByClassName("size");
    for (var i = 0; i < sizeList.length; i++) {
      sizeList[i].className = 'size';
    }
    if (backgroundColor === "size40") {
      sizeList[0].className += " active"
    } else if (backgroundColor === "size42") {
      sizeList[1].className += " active"
    } else if (backgroundColor === "size44") {
      sizeList[2].className += " active"
    } else if (backgroundColor === "size46") {
      sizeList[3].className += " active"
    } else if (backgroundColor === "size48") {
      sizeList[4].className += " active"
    } else if (backgroundColor === "size50") {
      sizeList[5].className += " active"
    } else if (backgroundColor === "size52") {
      sizeList[6].className += " active"
    } else if (backgroundColor === "size54") {
      sizeList[7].className += " active"
    } else if (backgroundColor === "size56") {
      sizeList[8].className += " active"
    } else if (backgroundColor === "size58") {
      sizeList[9].className += " active"
    } else if (backgroundColor === "size60") {
      sizeList[10].className += " active"
    } else if (backgroundColor === "size62") {
      sizeList[11].className += " active"
    } else if (backgroundColor === "size64") {
      sizeList[12].className += " active"
    } else if (backgroundColor === "size66") {
      sizeList[13].className += " active"
    } else if (backgroundColor === "size68") {
      sizeList[14].className += " active"
    } else if (backgroundColor === "size70") {
      sizeList[15].className += " active"
    } else if (backgroundColor === "size72") {
      sizeList[16].className += " active"
    } else if (backgroundColor === "size74") {
      sizeList[17].className += " active"
    } else if (backgroundColor === "size76") {
      sizeList[18].className += " active"
    } else if (backgroundColor === "size78") {
      sizeList[19].className += " active"
    } else if (backgroundColor === "size80") {
      sizeList[20].className += " active"
    }
  }


    return (
      <div className="Product">
        <h1 className="title-product">
          <span className="fade-in-text">Our Product</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="100 0 900 320">
            <path
              fill="#FFFFFF"
              fill-opacity="1"
              d="M0,32L120,74.7C240,117,480,203,720,229.3C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </h1>
        <ScrollAnimation animateIn="fadeIn">

        <h2 className = "problem-text">The Problem</h2>
        </ScrollAnimation>
        <div className="product-container">
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

        <h2 className = "product-pen">
          Our Hollow Spherical Reamer is
          <span
            class="txt-rotate"
            data-period="2000"
            data-rotate='[" accurate.", " sterile.", " cost-effective."]'
          ></span>
        </h2>
        <ScrollAnimation animateIn="fadeIn">

    <div class="productContainer">
        <div class="productCard">
            <div class="productBackground">
                <div class="gradients">
                    <div class="gradient" color="red"></div>
                    <div class="gradient" color="green"></div>
                    <div class="gradient" color="orange"></div>
                    <div class="gradient" color="black"></div>
                    <div class="gradient" color="brown"></div>
                    <div class="gradient" color="yellow"></div>
                    <div class="gradient" color="purple"></div>
                    <div class="gradient" color="violet"></div>
                    <div class="gradient" color="aqua"></div>
                    <div class="gradient" color="gray"></div>
                    <div class="gradient" color="blue"></div>
                </div>
                <h1 class="osteofit">Osteofit</h1>
                <img src={osteofitWhiteLogo} alt="" class="logo"></img>
                <img src={red} alt="" class="reamer" color="red"></img>
                <img src={green} alt="" class="reamer" color="green"></img>
                <img src={orange} alt="" class="reamer" color="orange"></img>
                <img src={black} alt="" class="reamer" color="black"></img>
                <img src={brown} alt="" class="reamer" color="brown"></img>
                <img src={yellow} alt="" class="reamer" color="yellow"></img>
                <img src={purple} alt="" class="reamer" color="purple"></img>
                <img src={violet} alt="" class="reamer" color="violet"></img>
                <img src={aqua} alt="" class="reamer" color="aqua"></img>
                <img src={gray} alt="" class="reamer" color="gray"></img>
                <img src={blue} alt="" class="reamer show" color="blue"></img>
            </div>
            <div class="info">
                <div class="reamerName">
                    <div>
                        <h1 class="big">Models of our different reamers</h1>
                    </div>
                    <h3 class="small">Reamers</h3>
                </div>
                <div class="description">
                    <h3 class="product-title">Product Info</h3>
                    <p class="product-text">These are the different reamers that we offer</p>
                </div>
                <div class="color-container">
                    <h3 class="title">Color</h3>
                    <div class="colors">
                        <span id="red" onClick={(e) => handleOnClick("red", e)} class="color" primary="#f84848" color="red"></span>
                        <span id="green" onClick={(e) => handleOnClick("green",e)} class="color" primary="#29b864" color="green"></span>
                        <span id="orange" onClick={(e) => handleOnClick("orange",e)} class="color" primary="#ff5521" color="orange"></span>
                        <span id="black" onClick={(e) => handleOnClick("black",e)} class="color" primary="#444" color="black"></span>
                        <span id="brown" onClick={(e) =>handleOnClick("brown",e)} class="color" primary="#964B00" color="brown"></span>
                        <span id="yellow" onClick={(e) => handleOnClick("yellow",e)} class="color" primary="#FFFF00" color="yellow"></span>
                        <span id="purple" onClick={(e) => handleOnClick("purple",e)} class="color" primary="#800080" color="purple"></span>
                        <span id="violet" onClick={(e) => handleOnClick("violet",e)} class="color" primary="#8F00FF" color="violet"></span> 
                        <span id="aqua" onClick={(e) => handleOnClick("aqua",e)} class="color" primary="#00FFFF" color="aqua"></span>
                        <span id="gray" onClick={(e) => handleOnClick("gray",e)} class="color" primary="#d3d3d3" color="gray"></span>
                        <span id="blue" onClick={(e) =>handleOnClick("blue",e)} class ="color active" primary="#2175f5" color="blue"></span>
                    </div>
                </div>
                <div class="size-container">
                    <h3 class="title">size</h3>
                    <div class="sizes">
                        <span onClick={(e) => handleOnClickForSize("size40", e)}  class="size">40</span>
                        <span onClick={(e) => handleOnClickForSize("size42", e)}  class="size">42</span>
                        <span onClick={(e) => handleOnClickForSize("size44", e)}  class="size active">44</span>
                        <span onClick={(e) => handleOnClickForSize("size46", e)}  class="size">46</span>
                        <span onClick={(e) => handleOnClickForSize("size48", e)}  class="size">48</span>
                        <span onClick={(e) => handleOnClickForSize("size50", e)}  class="size">50</span>
                        <span onClick={(e) => handleOnClickForSize("size52", e)}  class="size">52</span>
                        <span onClick={(e) => handleOnClickForSize("size54", e)}  class="size">54</span>
                        <span onClick={(e) => handleOnClickForSize("size56", e)}  class="size">56</span>
                        <span onClick={(e) => handleOnClickForSize("size58", e)}  class="size">58</span>
                        <span onClick={(e) => handleOnClickForSize("size60", e)}  class="size">60</span>
                    </div>
                    <div class="sizes">
                        <span onClick={(e) => handleOnClickForSize("size62", e)}  class="size">62</span>
                        <span onClick={(e) => handleOnClickForSize("size64", e)}  class="size">64</span>
                        <span onClick={(e) => handleOnClickForSize("size66", e)}  class="size">66</span>
                        <span onClick={(e) => handleOnClickForSize("size68", e)}  class="size">68</span>
                        <span onClick={(e) => handleOnClickForSize("size70", e)}  class="size">70</span>
                        <span onClick={(e) => handleOnClickForSize("size72", e)}  class="size">72</span>
                        <span onClick={(e) => handleOnClickForSize("size74", e)}  class="size">74</span>
                        <span onClick={(e) => handleOnClickForSize("size76", e)}  class="size">76</span>
                        <span onClick={(e) => handleOnClickForSize("size78", e)}  class="size">78</span>
                        <span onClick={(e) => handleOnClickForSize("size80", e)}  class="size">80</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="Product.js"></script>
  </ScrollAnimation>
  <ScrollAnimation animateIn="fadeIn">
  <div className = "product-breakdown">
    <h1 class = "product-breakdown-h1">
      The Parts
    </h1>
    <div class = "product-breakdown-container">
      <Paper elevation={13}>
      <div id= "part1" className = "part-container">
        <div className = "image-part">
        <img alt = "" class = "model-part-1" src={modelPart1}/>
        </div>
        <div className = "part-desc-1">
          <h1>First part</h1>
        <p>This is the first part of the reamer. The panels are made from <b>ASTM A276 420 Stainless Steel</b>, and has stamped side and dome cutting panels. Additionally, the Panel-Frame Subassembly includes 4 side panels and 1 dome panel.</p>
        <hr class = "part-desc-1-line"></hr>
        </div>
      </div>
      <div  id = 'part2' className = "part-container">
        <div className = "image-part">
        <img alt = "" class = "model-part-2"src={modelPart2}/>
        </div>
        <div className = "part-desc-2">
          <h1>Second Part</h1>
        <p>This is the second part of the reamer made of polycarbonate 2061-15, and features tabs for ultrasonic welding.</p>
        <hr class = "part-desc-2-line"></hr>
        </div>
      </div>
      <div  id = 'part3' className = "part-container">
        <div className = "image-part">
        <img  alt = "" class = "model-part-4"src={modelPart4} />
        </div>
        <div className = "part-desc-3">
          <h1>Third part</h1>
        <p>This is the third part of the reamer, and like the second part, this part is also made up of polycarbonate 2061-15. This part helps with the structural integrity, with multiple options for quick-connect coupling to Reamer Shaft. This is color coded by size, and is space calculated for reamed volume of bone.</p>
        </div>
      </div>
      </Paper>
    </div>
  </div>

</ScrollAnimation>
    </div>
    );
  }


export default Product;
