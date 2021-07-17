import React from "react";
import mold1 from '../images/Osteofitmodelpart3.PNG';
import mold2 from '../images/Osteofitmodelpart4.PNG';
import ScrollAnimation from 'react-animate-on-scroll';
import '../styling/mainStyle.scss';
import '../styling/singleUseStyle.scss';
import '../styling/timelines.scss';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const SingleUse = () => {
  const data = {
    data: {
      labels: ["1", "2", "3", "4", "5"],
      datasets: [{
        labels: "Percent efficiency",
        backgroundColor: "rgba(255,0, 255, 0.75)",
        data: [4,5,1,10, 32, 2,12]
      },
      {
        label: "Types",
        backgroundColor: "rgba(0,255,0,0.75)",
        data: [14,15,21,0,32,2,12]
      ]
    }
  }
  var Chart = require('chart.js');
  var barChart = document.getElementById("barChart");

  
  var dataFirst = {
      label: "Car A - Speed (mph)",
      data: [0, 59, 75, 20, 20, 55, 40],
      lineTension: 0,
      fill: false,
      borderColor: 'red'
    };
  
  var dataSecond = {
      label: "Car B - Speed (mph)",
      data: [20, 15, 60, 60, 65, 30, 70],
      lineTension: 0,
      fill: false,
    borderColor: 'blue'
    };
  
  var barData = {
    labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
    datasets: [dataFirst, dataSecond]
  };
  
  var chartOptions = {
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 80,
        fontColor: 'black'
      }
    }
  };
  
  var lineChart = new Chart(barChart, {
    type: 'line',
    data: barData,
    options: chartOptions
  });  
  document.getElementById("scrollToTopBtn")
  var rootElement = document.documentElement
  
  function handleBackToTopBtn(e) {
  e.preventDefault()
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
  return (
    
    <div className="SingleUse">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
       <section class="slice bg-dark">
      <div class="single-use-title-wrapper">
          <div class="typing-demo">
              Why Single Use?
          </div>
        </div>       

        <div class="container py-5">
            <div class="row row-grid align-items-center">
                <div class="col-lg-8 text-center text-lg-left">
                    <h1 class="text-white mb-4">
                        We manufacture cost-effective reamers for medical facilities &amp; surgeons.
                    </h1>
                    <p class="lead text-white">
                        We pride ourselves on our commitment to excellence, as well as our ability to deliver for our customers.
                    </p>
                </div>
            </div>
        </div>
        <div class="shape-container-about shape-line shape-position-bottom">
            <svg width="2560px" height="100px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 2560 100" xmlSpace="preserve" class="">
                <polygon points="2560 0 2560 100 0 100"></polygon>
            </svg>
        </div>

    </section>
    <section class="slice slice-lg" className="slice-chart">
      <div className="comparison">
        <div className="row mx-lg-n4">
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <div className="p-3 d-flex">
                <div>
                  <div className="icon icon-shape rounded-circle bg-warning text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                    <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>
              <div>
                <span class="h6">100% Responsive</span>
                <p class="text-sm text-muted mb-0">Build to be customized.</p>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <div className="p-3 d-flex">
                <div>
                  <div className="icon icon-shape rounded-circle bg-warning text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                    <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>
              <div>
                <span class="h6">100% Responsive</span>
                <p class="text-sm text-muted mb-0">Build to be customized.</p>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <div className="p-3 d-flex">
                <div>
                  <div className="icon icon-shape rounded-circle bg-warning text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                    <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>
              <div>
                <span class="h6">100% Responsive</span>
                <p class="text-sm text-muted mb-0">Build to be customized.</p>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <div className="p-3 d-flex">
                <div>
                  <div className="icon icon-shape rounded-circle bg-warning text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                    <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>
              <div>
                <span class="h6">100% Responsive</span>
                <p class="text-sm text-muted mb-0">Build to be customized.</p>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <div className="p-3 d-flex">
                <div>
                  <div className="icon icon-shape rounded-circle bg-warning text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                    <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>
              <div>
                <span class="h6">100% Responsive</span>
                <p class="text-sm text-muted mb-0">Build to be customized.</p>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <div className="p-3 d-flex">
                <div>
                  <div className="icon icon-shape rounded-circle bg-warning text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                    <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>
              <div>
                <span class="h6">100% Responsive</span>
                <p class="text-sm text-muted mb-0">Build to be customized.</p>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </section>
      <div class="benefits-single-use">
      <ScrollAnimation animateIn="fadeIn">

        <h1 class ="mb-4 text-white">With Osteofit's single-use features, you'll see a : </h1>
        <hr className = "horz-line4" />
        </ScrollAnimation>

        <div>
        <ScrollAnimation animateIn="fadeIn">

          <h3>
            <span className = "increase-title">
            Decrease in:
            </span>
            <span className = "decrease-title">Increase in:
            </span>
          </h3>
          </ScrollAnimation>

        </div>
        <div>
        <div className="benefits">
        <ScrollAnimation animateIn="fadeIn">

            <h2>
              <span>
              <i class="fas fa-disease circle-icon-benefits1"></i>
              Risk of Infection
              <i class="fas fa-angle-double-up circle-icon-benefits2"></i>

              Productivity
              </span>
            </h2>
            </ScrollAnimation>

          </div>
          <div className="benefits">
          <ScrollAnimation animateIn="fadeIn">

            <h2>
              <span>
              <i class="fab fa-hotjar circle-icon-benefits1"></i>
              Heat Generation
              <i class="fas fa-bullseye circle-icon-benefits2 accuracy-icon"></i>
              Accuracy
              </span>
            </h2>
            </ScrollAnimation>

          </div>
          <div className="benefits">
          <ScrollAnimation animateIn="fadeIn">

            <h2>
              <span>
              <i class="fas fa-dollar-sign circle-icon-benefits1"></i>
              Cleaning Expenses
              <i class="fas fa-dollar-sign circle-icon-benefits2 revenue-icon"></i>
              Revenue
              </span>
            </h2>
            </ScrollAnimation>

          </div>
        </div>
      </div>
      <ScrollAnimation animateIn="fadeIn">
      <section class="timeline">
       <h1>Reusable Reamers</h1>
      <div class="flex-parent">
        <div class="input-flex-container">
          <input type="radio" name="timeline-dot"/>
          <div class="dot-info">
            <span class="step">Step 1</span>
            <span class="label">Receive Reamer</span>
          </div>
          <input type="radio" name="timeline-dot"/>
          <div class="dot-info">
            <span class="step">Step 2</span>
            <span class="label">Cleaned</span>
          </div>
          <input type="radio" name="timeline-dot" checked/>
          <div class="dot-info">
            <span class="step">Step 3</span>
            <span class="label">Sorted</span>
          </div>
          <input type="radio" name="timeline-dot"/>
          <div class="dot-info">
            <span class="step">Step 4</span>
            <span class="label">Sterilized</span>
          </div>
          <input type="radio" name="timeline-dot"/>
          <div class="dot-info">
            <span class="step">Step 5</span>
            <span class="label">Stored</span>
          </div>
          <input type="radio" name="timeline-dot"/>
          <div class="dot-info">
            <span class="step">Step 6</span>
            <span class="label">Used in OR</span>
          </div>
          <input type="radio" name="timeline-dot"/>
          <div class="dot-info">
            <span class="step">Step 7</span>
            <span class="label">Rinsed</span>
          </div>
          <input type="radio" name="timeline-dot"/>
          <div class="dot-info">
            <span class="step">Step 8</span>
            <span class="label">Scrubbed</span>
          </div>
          <input type="radio" name="timeline-dot"/>
          <div class="dot-info">
            <span class="step">Step 9</span>
            <span class="label">Repackaged</span>
          </div>
        </div>
      </div>
      <h1>Osteofit's Reamers</h1>
      <div class="flex-parent">
        <div class="input-flex-container osteofit-timeline" >
          <input type="radio" name="timeline-dot"/>
          <div class="dot-info osteofit-dot">
            <span class="step">Step 1</span>
            <span class="label">Receive Reamer</span>
          </div>
          <input type="radio" name="timeline-dot"/>
          <div class="dot-info osteofit-dot">
            <span class="step">Step 2</span>
            <span class="label">Used in OR</span>
          </div>
          <input type="radio" name="timeline-dot" checked/>
          <div class="dot-info osteofit-dot" >
            <span class="step">Step 3</span>
            <span class="label">Recycled</span>
          </div>
        </div>
      </div>
</section>
</ScrollAnimation>
<section class="slice slice-lg" className="graphSection">
        <div class="container">
            <div class="py-6">
                <div class="row row-grid justify-content-between align-items-center">
                    <div class="col-lg-5 order-lg-2">
                        <h5 class="h3">What are the benefits of single use?</h5>
                        <hr className = "horz-line5" />
                        <p class="lead my-4">
                            With Quick you get components and examples, including tons of variables that will help you customize this theme with ease.
                        </p>
                        <ul class="list-unstyled mb-0">
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <div class="icon icon-shape rounded-circle bg-warning text-white mr-4">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                          </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="h6 mb-0" className="graphSectionh6">Perfect for modern startups</span>
                                    </div>
                                </div>
                            </li>
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <div class="icon icon-shape rounded-circle bg-warning text-white mr-4">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                          </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="h6 mb-0" className="graphSectionh6">Ready to be customized</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                      <div class="row">
                          <canvas width="600" height= "400" id="barChart"></canvas>
                    </div>                
                  </div>
            </div>
        </div>

</section>


    </div>
  );
};

export default SingleUse;