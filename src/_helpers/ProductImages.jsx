import React, { Fragment } from "react";

import gray from "../images/lightgray.png";
import black from "../images/black.png";
import blue from "../images/blue.png";
import aqua from "../images/turqoise.png";
import brown from "../images/brown.png";
import red from "../images/red.png";
import orange from "../images/orange.png";
import green from "../images/green.png";
import violet from "../images/violet.png";
import purple from "../images/purple.png";
import yellow from "../images/yellow.png";

const ProductImages = () => {
  return (
    <Fragment>
      <img src={gray} alt="" class="product show" color="gray" />
      <img src={black} alt="" class="product" color="black" />
      <img src={brown} alt="" class="product" color="brown" />
      <img src={blue} alt="" class="product" color="blue" />
      <img src={green} alt="" class="product" color="green" />
      <img src={red} alt="" class="product" color="red" />
      <img src={orange} alt="" class="product" color="orange" />
      <img src={yellow} alt="" class="product" color="yellow" />
      <img src={aqua} alt="" class="product" color="aqua" />
      <img src={purple} alt="" class="product" color="purple" />
      <img src={violet} alt="" class="product" color="violet" />
    </Fragment>
  );
};

export default ProductImages;
