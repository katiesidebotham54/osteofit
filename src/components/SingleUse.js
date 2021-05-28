import React from "react";
import { Paper } from "@material-ui/core";
import mold from '../images/steel-mold.png';
import "../styling/App.scss"
import ScrollAnimation from 'react-animate-on-scroll';

const SingleUse = () => {
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
      <div>
        <h1 className="title-single-use">
          <span className="fade-in-text">Why Use Single-Use Products?</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="100 0 900 320">
              <path
                fill="#FFFFFF"
                fill-opacity="1"
                d="M0,32L120,74.7C240,117,480,203,720,229.3C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              ></path>
            </svg>
        </h1>
      </div>
      <div className="comparison">
        <div className = "background-container">
        <ScrollAnimation animateIn="fadeIn">
        <div className="comparison-title-reusable">
          <Paper elevation={3}>
            <h2>Osteofit</h2>
          </Paper>
        </div>
        <div className="verticalLine"></div>
        <div className="comparison-title-osteofit">
          <Paper elevation={3}>
            <h2>Reusable </h2>
          </Paper>
          <div className="icon1">
            <h2>
              Simple and Efficient 
              Cycle
              <span>
              <i class="fas fa-check circle-icon-osteofit"></i>
              <i class="fas fa-times circle-icon-reusable"></i>

              </span>
            </h2>
          </div>

          <div className="icon2">

            <h2>
              Cost Effective
              <span>
              <i class="fas fa-check circle-icon-osteofit2"></i>
              <i class="fas fa-times circle-icon-reusable2"></i>
              </span>
            </h2>

          </div>
          <div className="icon3">

            <h2>
              100% Sterile Each
              Time
              <span>
              <i class="fas fa-check circle-icon-osteofit3"></i>
              <i class="fas fa-times circle-icon-reusable3"></i>
              </span>
            </h2>
          </div>
        </div>
        </ScrollAnimation>
        </div>
      </div>
      
      <div className="cycles">
      <ScrollAnimation animateIn="fadeIn">

        <h1>
          A process that takes
          <span>
            {" "}
            <b>less time </b>
          </span>
          and is
          <span>
            <b> more effective. </b>
          </span>
        </h1>
        </ScrollAnimation>
        <hr className = "horz-line3" />

        <div>
        <ScrollAnimation animateIn="fadeIn">
        <section class="timeline">
            <ol>
              <li>
              <i id="timeline-icons" class="fas fa-truck"></i>
                <div >
                <h4 class="timeline-title"><span class="badge">1</span></h4>
                  <time>Hospital Receives Reamer</time> 
                </div>
              </li>
              <li>
              <i  id="timeline-icons" class="fas fa-soap"></i>

                <div>
                  <time>Cleaned</time> 
                  <h4 class="timeline-title"><span class="badge">2</span></h4>

                </div>
              </li>
              <li>
              <i  id="timeline-icons" class="fas fa-sort"></i>
                <div>
                <h4 class="timeline-title"><span class="badge">3</span></h4>

                  <time>Sorted</time>
                </div>
              </li>
              <li>
              <i id="timeline-icons" class="fas fa-pump-medical"></i>               
               <div>
                  <time>Sterilized</time> 
                  <h4 class="timeline-title"><span class="badge">4</span></h4>
                </div>
              </li>
              <li>
              <i id="timeline-icons" class="fas fa-box-open"></i>        
                      <div>
                      <h4 class="timeline-title"><span class="badge">5</span></h4>
                  <time>Stored</time> 
                  </div>
              </li>
              <li>              
              <i id="timeline-numbers" class="fas fa-procedures"></i>
                <div>
                  <time>Used in OR</time> 
                  <h4 class="timeline-title"><span class="badge">6</span></h4>
                </div>
              </li>
              <li>
              <i id="timeline-numbers" class="fas fa-faucet"></i>            
                  <div>
                  <h4 class="timeline-title"><span class="badge">7</span></h4>
                  <time>Rinsed</time> 
                </div>
              </li>
              <li>
              <i id="timeline-numbers" class="fas fa-pump-soap"></i>                
              <div>
                  <time>Scrubbed</time>
                  <h4 class="timeline-title"><span class="badge">8</span></h4> 
                </div>
              </li>
              <li>
              <i id="timeline-numbers" class="fas fa-eye"></i>          
              <div>
              <h4 class="timeline-title"><span class="badge">9</span></h4>

                  <time>Inspected</time> 
                </div>
              </li>
              <li></li>
            </ol>
          </section>
          </ScrollAnimation>
        </div>
        <div>
        <ScrollAnimation animateIn="fadeIn">
        <h3 className="osteofit-timeline-quote"> Osteofit's procedure takes only<br/> <b> ONE THIRD </b> of the steps required for reusable reamers!</h3>
        <section class="timeline">
          
            <ol>
              <li>
              <i id="timeline-icons" class="fas fa-truck"></i>
                <div className = "primary">
                <h4 class="timeline-title"><span class="badge">1</span></h4>
                  <time>Hospital Receives Reamer</time> 
                </div>
              </li>
              <li>
              <i id="timeline-numbers" class="fas fa-procedures"></i>
                <div>
                <h4 class="timeline-title"><span class="badge">2</span></h4>

                  <time>Used in OR</time> 
                </div>
              </li>
              <li>
              <i  id="timeline-numbers" class="fas fa-recycle"></i>                <div>
                <h4 class="timeline-title"><span class="badge">3</span></h4>

                  <time>Recycled</time> 
                </div>
              </li>
              <hr id = "osteofit-li" />
            
            </ol>
          </section>
          </ScrollAnimation>

        </div>
      </div>
      <div className="benefits-single-use fade">
      <ScrollAnimation animateIn="fadeIn">

        <h1>With Osteofit's single-use features, you'll see a : </h1>
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

      <div className="recycle">

          <div className = "wrapper">
          <h2>Osteofit is Green!</h2>
          </div>
          <div className = "recycle-desc">
          <h3>
            Osteofit takes pride in creating products that are <h2>
              sustainable and
              environmentally conscious
            </h2>
            </h3>
            <p>
             Our reamers are made from <b>stainless steel</b> and <b>poly carbonate</b> -- both materials that are <b>100% recyclable</b>! To learn more about these 
             processes, feel free to reference the resources below.
            </p>
            <hr className = "horz-line5a" />
            <hr className = "horz-line5b" />

          <span class="iconify" data-icon="ion-earth" data-inline="false"></span>
          <span>
            <img src = {mold} alt="" />
            </span>

          </div>
      </div>

      <div className="bottompapers2">
          <div class="paper3">
            <span>
              <h2>Recycling Stainless Steel</h2>
              <br />
              <p>Click below to learn more about this process!</p>
              <br />
              <br />
              <button href= "http://polycarbonaterecycling.com/polycarbonate-recycling.html" class = 'contact-btn-1'>
                   Learn More
              </button>
              </span>
          </div>
      <div class="paper4">
        <span>
            <h2>Recycling Polycarbonate </h2>
              <br />     
              <p>Click below to learn more about this process!</p>
              <br />
              <br />
              <button href="http://www.metalrecyclersusa.com/stainless-steel-recycling.html#:~:text=Once%20the%20stainless%20steel%20has,is%20separated%20from%20other%20material." class = 'contact-btn-2'>
              Learn More
              </button>   
              </span>           
          </div>

      </div>  
      </ScrollAnimation>
      <button id="scrollToTopBtn" onClick={handleBackToTopBtn}>Back to Top</button>

    </div>
  );
};

export default SingleUse;
