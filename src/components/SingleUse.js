import React from "react";
import mold1 from '../images/Osteofitmodelpart3.PNG';
import mold2 from '../images/Osteofitmodelpart4.PNG';
import "../styling/App.scss"
import ScrollAnimation from 'react-animate-on-scroll';
import '../styling/mainStyle.scss'
import '../styling/singleUseStyle.scss'

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
        {/*<div className = "background-container">
        <div className="comparison-title-reusable">
            <h2>Osteofit</h2>
        </div>
        <div className="verticalLine"></div>
        <div className="comparison-title-osteofit">
            <h2>Reusable </h2>
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
  </div>
      </div>*/}
      
      {/*<div className="cycles">
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
        <section id = "section" class="timeline">
          <h2>Reusable</h2>
          <hr className = "horz-line6a" />
            <ol>
              <li>
              <i id="timeline-icons" class="fas fa-truck"></i>
                <div >
                <h4 class="timeline-title"><span class="badge">1</span></h4>
                  <time>Receive Reamer</time> 
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
              <i id="timeline-icons" class="fas fa-procedures"></i>
                <div>
                  <time>Used in OR</time> 
                  <h4 class="timeline-title"><span class="badge">6</span></h4>
                </div>
              </li>
              <li>
              <i id="timeline-icons" class="fas fa-faucet"></i>            
                  <div>
                  <h4 class="timeline-title"><span class="badge">7</span></h4>
                  <time>Rinsed</time> 
                </div>
              </li>
              <li>
              <i id="timeline-icons" class="fas fa-pump-soap"></i>                
              <div>
                  <time>Scrubbed</time>
                  <h4 class="timeline-title"><span class="badge">8</span></h4> 
                </div>
              </li>
              <li>
              <i id="timeline-icons" class="fas fa-eye"></i>          
              <div>
              <h4 class="timeline-title"><span class="badge">9</span></h4>

                  <time>Repackaged</time> 
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
        <section id = "section" class="timeline">
      

            <ol>
            <h2 className="timeline-title-osteofit">Osteofit</h2>
            <hr className = "horz-line6b" />

              <li>
              <i id="timeline-icons" class="fas fa-truck"></i>
                <div>
                <h4 class="timeline-title" id = "osteofit-step1" ><span class="badge">1</span></h4>
                  <time id = "step1">Receive Reamer</time> 
                </div>
              </li>
              <li>
              <i id="timeline-icons" class="fas fa-procedures"></i>
                <div>

                  <time>Used in OR</time> 
                  <h4 class="timeline-title"><span class="badge">2</span></h4>

                </div>
              </li>
              <li>
              <i  id="timeline-icons" class="fas fa-recycle"></i>                <div>
              <h4 class="timeline-title"><span class="badge">3</span></h4>

                  <time>Recycled</time> 

                </div>
              </li>
              <hr id = "osteofit-li" />
            
            </ol>
          </section>
          </ScrollAnimation>

        </div>
</div>*/}
      <div className="benefits-single-use">
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
      <section class="timeline">
  <ol>
    <li>
      <div>
        <time>Step 1</time> 
OsteoFit is a medical device company focused on the development of cost-effective orthopedic instruments that maintain accuracy, function and sterility in a routine and sustainable process for hospitals
      </div>
    </li>
    <li>
      <div>
        <time>Step 2</time> 
OsteoFit is a medical device company focused on the development of cost-effective orthopedic instruments that maintain accuracy, function and sterility in a routine and sustainable process for hospitals
      </div>
    </li>
    <li>
      <div>
        <time>Step 3</time> 
OsteoFit is a medical device company focused on the development of cost-effective orthopedic instruments that maintain accuracy, function and sterility in a routine and sustainable process for hospitals
      </div>
    </li>
    <li>
      <div>
        <time>Step 4</time>
OsteoFit is a medical device company focused on the development of cost-effective orthopedic instruments that maintain accuracy, function and sterility in a routine and sustainable process for hospitals
      </div>
    </li>
    <li>
      <div>
        <time>Step 5</time> 
OsteoFit is a medical device company focused on the development of cost-effective orthopedic instruments that maintain accuracy, function and sterility in a routine and sustainable process for hospitals
      </div>
    </li>
    <li>
      <div>
        <time>Step 6</time>
OsteoFit is a medical device company focused on the development of cost-effective orthopedic instruments that maintain accuracy, function and sterility in a routine and sustainable process for hospitals
      </div>
    </li>
    <li>
      <div>
        <time>Step 7</time> 
OsteoFit is a medical device company focused on the development of cost-effective orthopedic instruments that maintain accuracy, function and sterility in a routine and sustainable process for hospitals
      </div>
    </li>
    <li>
    </li>
  </ol>
</section>
      </ScrollAnimation>
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
            <hr className = "horz-line5" />
            <div>
              <img className="mold1" src = {mold1} alt="" />
            </div>
            <div>
              <img className="mold2" src = {mold2} alt="" />
            </div>
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