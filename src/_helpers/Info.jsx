import React from "react";

const Info = () => {
  const productName = (
    <div className="productName">
      <h1 className="big">Osteofit's Reamer</h1>
    </div>
  );

  const ColorContainer = (
    <div className="color-container">
      <h3 className="title">Available Colors</h3>
      <div className="colors">
        <span class="color" color="gray"></span>
        <span class="color" color="brown"></span>
        <span class="color" color="black"></span>
        <span class="color" color="blue"></span>
        <span class="color" color="green"></span>
        <span class="color" color="red"></span>
        <span class="color" color="orange"></span>
        <span class="color" color="yellow"></span>
        <span class="color" color="aqua"></span>
        <span class="color" color="purple"></span>
        <span class="color" color="violet"></span>
      </div>
    </div>
  );

  const SizeContainer = (
    <div className="size-container">
      <h3 className="title">Available Sizes</h3>
      <div className="sizes">
        <span class="size">40</span>
        <span class="size">42</span>
        <span class="size">44</span>
        <span class="size">46</span>
        <span class="size">48</span>
        <span class="size">50</span>
        <span class="size">52</span>
        <span class="size">54</span>
        <span class="size">56</span>
        <span class="size">58</span>
      </div>
      <div class="sizes">
        <span class="size">60</span>
        <span class="size">62</span>
        <span class="size">64</span>
        <span class="size">66</span>
        <span class="size">68</span>
        <span class="size">70</span>
        <span class="size">72</span>
        <span class="size">74</span>
        <span class="size">76</span>
        <span class="size">78</span>
        <span class="size">80</span>
      </div>
    </div>
  );

  return (
    <div className="info">
      {productName}
      {ColorContainer}
      {SizeContainer}
    </div>
  );
};

export default Info;
