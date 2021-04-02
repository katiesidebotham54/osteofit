import React, {useEffect} from "react";
import modelPart1 from "../images/Osteofitmodelpart1.png"
import problem from "../images/problem.jpg"
import modelPart2 from "../images/Osteofitmodelpart2.png"
import modelPart4 from "../images/Osteofitmodelpart4.png"
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

    return (
      <div className="Product">
        <h1 className="title-product">
          <span className="fade-in-text">Our Product</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
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

        <p className="product-text">
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

        <div className="card-container">
          <div className="card">
            <div className="productBackground">
              <div className="gradients">
                <div class="gradient" color="gray"/>
                <div class="gradient" color="black"/>
                <div class="gradient " color="brown"/>
                <div class="gradient second" color="blue"/>
                <div class="gradient" color="green"/>
                <div class="gradient" color="red"/>
                <div class="gradient" color="orange"/>
                <div class="gradient" color="yellow"/>
                <div class="gradient" color="aqua"/>
                <div class="gradient" color="purple"/>
                <div class="gradient" color="violet"/>
              </div>
              <h1 class="productOsteofit">Osteofit</h1>
              <img src={osteofitWhiteLogo} alt="" class="logo"/>

              <img src={gray} alt="" class = "product show" color = "gray" />
              <img src={black} alt="" class = "product" color = "black" />
              <img src={brown} alt="" class = "product" color = "brown" />
              <img src={blue} alt="" class = "product" color = "blue" />
              <img src={green} alt="" class = "product" color = "green"/>
              <img src={red} alt="" class = "product" color = "red" />
              <img src={orange} alt="" class = "product" color = "orange" />
              <img src={yellow} alt="" class = "product" color = "yellow" />
              <img src={aqua} alt="" class = "product" color = "aqua" />
              <img src={purple} alt="" class = "product" color = "purple" />
              <img src={violet} alt="" class = "product" color = "violet" />
              </div>
            <div class="info">
              <div class="productName">
                <div>
                    <h1 class="big">Hollow Spherical Reamer</h1>
                </div>
              </div>
              <div class="color-container">
                <h3 class="subtitle">Available Colors</h3>
                  <div class="colors">
                    <span class="color" color = "gray"></span>
                    <span class="color" color = "brown" ></span>
                    <span class="color" color = "black" ></span>
                    <span class="color" color = "blue" ></span>
                    <span class="color" color = "green" ></span>
                    <span class="color" color = "red" ></span>
                    <span class="color" color = "orange" ></span>
                    <span class="color" color = "yellow" ></span>
                    <span class="color" color = "aqua" ></span>
                    <span class="color" color = "purple" ></span>
                    <span class="color" color = "violet" ></span>
                  </div>
              </div>
            <div class="size-container">
                <h3 class="subtitle">Available Sizes</h3>
                <div class="sizes">
                    <span class = "size">40</span>
                    <span class = "size">42</span>
                    <span class = "size">44</span>
                    <span class = "size">46</span>
                    <span class = "size">48</span>
                    <span class = "size">50</span>
                    <span class = "size">52</span>
                    <span class = "size">54</span>
                    <span class = "size">56</span>
                    <span class = "size">58</span>
                </div>
                <div class="sizes">
                    <span class = "size">60</span>
                    <span class = "size">62</span>
                    <span class = "size">64</span>
                    <span class = "size">66</span>
                    <span class = "size">68</span>
                    <span class = "size">70</span>
                    <span class = "size">72</span>
                    <span class = "size">74</span>
                    <span class = "size">76</span>
                    <span class = "size">78</span>
                    <span class = "size">80</span>
                </div>
            </div>
        </div>
    </div>
  </div>
  </ScrollAnimation>
  <ScrollAnimation animateIn="fadeIn">

        <div className = "outer-container-product">
          <div className = 'color-square'></div>
          <h1>Reamer Components Breakdown</h1>
          <div class="container-product">
          <i class="fa fa-long-arrow-right arrow1" aria-hidden="true"></i>
          <i class="fa fa-long-arrow-right arrow2" aria-hidden="true"></i>
          <i class="fa fa-long-arrow-right arrow3" aria-hidden="true"></i>

  <div class="box">
    <div className="box-header">
    <img src={modelPart1} className='parts-img1'/>
      <h1 class="title1">Cutting Panels</h1>
    </div>
    <div class="boxContent">
      <ul className="desc">
      <li>
                  Panels made from <b>ASTM A276 420 Stainless Steel</b>
                </li>
                <li>
                  Stamped Dome Cutting Panel
                </li>
                <li>
                  Stamped Side Cutting Panel
                </li>
                <li>
                  Panel-Frame Subassembly includes 4 side panels and 1 dome panel 
                </li>

      </ul>
    </div>
  </div>
  <div class="box">
    <div className="box-header">
    <img src={modelPart2} className='parts-img2'/>
          <h1 class="title2">Molded Back Plate</h1>
    </div>
    <div class="boxContent">
        <ul className="desc"> <li>
                <b>Polycarbonate 2061-15</b>
                </li>
                <li>
                  Features tabs for ultrasonic welding
                </li>
              </ul>
    </div>
  </div>
  <div class="box">
  <div className="box-header">
  <img src={modelPart4} className='parts-img3'/>
  <h1 class="title3">Molded Core</h1>
</div>
    <div class="boxContent">
          <ul className="desc">
                <li>
                 <b>Polycarbonate 2061-15</b>
                </li>
                <li>
                  Helps with structural integrity 
                </li>
                <li>
                  Multiple options for quick-connect coupling to Reamer Shaft
                </li>
                <li>
                  Color coded by size
                </li>
                <li>
                  Space calculated for reamed volume of bone 
                </li>
          </ul>
    </div>
  </div>
</div>
</div>
</ScrollAnimation>
    </div>
    );
  }


export default Product;
