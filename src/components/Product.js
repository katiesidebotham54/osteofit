import React from "react";
import { Paper } from "@material-ui/core";
import Productmodel from "../images/productmodel.png";
import modelPart1 from "../images/Osteofitmodelpart1.PNG"
import modelPart2 from "../images/Osteofitmodelpart2.PNG"
import modelPart4 from "../images/Osteofitmodelpart4.PNG"
import osteofitWhiteLogo from "../images/osteofitWhiteLogo.png";
import gray from '../images/lightgray.png'
import black from '../images/black.png'
import blue from '../images/blue.png'
import turqoise from '../images/turqoise.png'
import brown from '../images/brown.png'
import red from '../images/red.png'
import orange from '../images/orange.png'
import green from '../images/green.png'
import violet from '../images/violet.png'
import purple from '../images/purple.png'
import yellow from '../images/yellow.png'

const Product = () => {
  const sizes = document.querySelectorAll('.size');
  const colors = document.querySelectorAll('.color');
  const products = document.querySelectorAll('.product');
  const gradients = document.querySelectorAll('.gradient');

let prevColor = "blue";
let animationEnd = true;

//go through array of sizes
function changeSize()  {
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

function changeColor(){
    if(!animationEnd) return;
    let color = this.getAttribute('color');
    let product = document.querySelector(`.product[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

    if(color === prevColor) return;

    //go through of colors
    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    products.forEach(p => p.classList.remove('show'));
    product.classList.add('show');

    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
    animationEnd = false;

    gradient.addEventListener('animationend', () => {
        animationEnd = true;
    })
}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(c => c.addEventListener('click', changeColor));

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
          Our Hollow Spherical Reamer is
          <span
            class="txt-rotate"
            data-period="2000"
            data-rotate='[" accurate.", " sterile.", " cost-effective."]'
          ></span>
        </h2>
        <div className = "product-paper">
          <Paper elevation={13}>
            <p>Lorem ipsum dolor sit amet, pri te doming tacimates explicari. Option singulis tacimates at qui. Nec et senserit dissentiunt. Vel in luptatum consetetur. Eam ea mazim habemus, usu ei iusto voluptaria quaerendum.
               Qui ut doming doctus accommodare, et his epicuri interesset, in facete singulis inciderint eum. Mei et laoreet quaestio antiopam, ad est tibique voluptatum.</p>
          </Paper>
        </div>
        <div className = "model-section-1">
          <div className = "model-part-1">
            <img src={modelPart1} alt=""></img>
            <span className = "model-part-1-text">pp poo poo szn</span>
          </div>
          <div className = "model-part-2">
            <img src={modelPart2} alt=""></img>
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
          <div className = "model-part-4">
            <img src = {modelPart4} alt=""></img>
            <span className = "model-part-4-text">pp poo poo szn</span>
          </div>
        </div>
        <div class = "card-container" >
          <div class = "card">
            <div class = "product-background">
                  <div class="gradients">
                    <div class="gradient second" color="blue"></div>
                    <div class="gradient" color="red"></div>
                    <div class="gradient" color="green"></div>
                    <div class="gradient" color="orange"></div>
                    <div class="gradient" color="black"></div>
                    <div class="gradient" color="light gray"></div>
                    <div class="gradient" color="brown"></div>
                    <div class="gradient" color="turqoise"></div>
                    <div class="gradient" color="blue"></div>
                    <div class="gradient" color="violet"></div>
                    <div class="gradient" color="purple"></div>
                    <div class="gradient" color="yellow"></div>

                </div>
                <img src={osteofitWhiteLogo} class  = "logo" alt=""/>

                <img src={gray} alt="" class = "product" color = "gray" />
                <img src={black} alt="" class = "product" color = "black" />
                <img src={brown} alt="" class = "product" color = "brown" />
                <img src={blue} alt="" class = "product" color = "blue" />
                <img src={green} alt="" class = "product" color = "green"/>
                <img src={red} alt="" class = "product" color = "red" />
                <img src={orange} alt="" class = "product" color = "orange" />
                <img src={yellow} alt="" class = "product" color = "yellow" />
                <img src={turqoise} alt="" class = "product" color = "turqoise" />
                <img src={purple} alt="" class = "product" color = "purple" />
                <img src={violet} alt="" class = "product" color = "violet" />
            </div>
        <div class = "product-info">
          <div class = "productName">
            <div>
              <h1 class = "big">Osteofit's Hollow Spherical Reamer</h1>
            </div>
          </div>
          <div class = "color-container">
            <h3 class="subtitle">Color</h3>
            <div class = "colors">
              <span class="color" color = "light gray" ></span>
              <span class="color" color = "brown" ></span>
              <span class="color" color = "black" ></span>
              <span class="color" color = "blue" ></span>
              <span class="color" color = "green" ></span>
              <span class="color" color = "red" ></span>
              <span class="color" color = "orange" ></span>
              <span class="color" color = "yellow" ></span>
              <span class="color" color = "turqoise" ></span>
              <span class="color" color = "purple" ></span>
              <span class="color" color = "violet" ></span>
            </div>
          </div>
          <div class = "size-container">
            <h3 class = "subtitle">Sizes Offered</h3>
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
    </div>
    );
  }


export default Product;
