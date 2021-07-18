import React from "react";
import mold1 from '../images/Osteofitmodelpart3.PNG';
import graph from '../images/OsteofitGraph.png'
import '../styling/mainStyle.scss';
import '../styling/singleUseStyle.scss';
import '../styling/timelines.scss';


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
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
       <section class="slice bg-dark">
      <div class="single-use-title-wrapper col-lg-8 text-center text-lg-left">
          <div class="typing-demo">
              Why Single Use?
          </div>
        </div>       
 
        <div class="container py-5">
            <div class="row row-grid align-items-center">
                <div class="col-lg-8 text-center text-lg-left">
                    <h1 class="text-white mb-4">
                        We manufacture single-use, cost-effective reamers for total hip replacement surgeons.
                    </h1>
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
                  <i class="fas fa-bullseye"></i>      
                  </div>
                </div>
              <div>
                <span class="h6">Always Accurate</span>
                <p class="text-sm text-muted mb-0">Precise Manufacturing Process</p>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <div className="p-3 d-flex">
                <div>
                  <div className="icon icon-shape rounded-circle bg-warning text-white mr-4">
                  <i class="fas fa-icicles"></i>    
                  </div>
                </div>
              <div>
                <span class="h6">Always Sharp</span>
                <p class="text-sm text-muted mb-0">Cutting Teeth Are Always New</p>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <div className="p-3 d-flex">
                <div>
                  <div className="icon icon-shape rounded-circle bg-warning text-white mr-4">
                  <i class="fas fa-dollar-sign"></i>   

                  </div>
                </div>
              <div>
                <span class="h6">Cost Effective</span>
                <p class="text-sm text-muted mb-0">Patented Tech Allows for Efficiency</p>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <div className="p-3 d-flex">
                <div>
                  <div className="icon icon-shape rounded-circle bg-warning text-white mr-4">
                  <i id = "fire-icon" class="fas fa-fire"></i>  

                  </div>
                </div>
              <div>
                <span class="h6">Redueced OR Time</span>
                <p class="text-sm text-muted mb-0">The OR Cycle is open, use, discard</p>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <div className="p-3 d-flex">
                <div>
                  <div className="icon icon-shape rounded-circle bg-warning text-white mr-4">
                  <i class="fas fa-hourglass-half"></i>                  </div>
                </div>
              <div>
                <span class="h6">Reduced Heat</span>
                <p class="text-sm text-muted mb-0">Cutting Teeth are Never Dull</p>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <div className="p-3 d-flex">
                <div>
                  <div className="icon icon-shape rounded-circle bg-warning text-white mr-4">
                  <i id = "recycle-icon" class="fas fa-recycle"></i>
                </div>
                </div>
              <div>
                <span class="h6">100% Recyclable</span>
                <p class="text-sm text-muted mb-0">Used, Reprocessed, and Remanufactured</p>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </section>
        <section>
      <div class="benefits-single-use">

        <h1 class ="mb-4 text-white">With Osteofit's single-use features, you'll see a : </h1>
        <hr className = "horz-line4" /> 
        <div className="row mx-lg-n4">
          <div className="col-lg-4 col-md-6 px-lg-4">
        <div className="col-lg-7 col-md-6 px-lg-4">
            <div className="shadow-none">
              <div className="p-3 d-flex">
                  <div className="icon icon-shape rounded-circle bg-warning text-white mr-4">
                  <i class="fas fa-disease"></i>
                  </div>
              <div>
                <span class="h6">Risk of Infection</span>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 px-lg-4">
            <div className="shadow-none">
              <div className="p-3 d-flex">
                  <div className="icon icon-shape rounded-circle bg-warning text-white mr-4">
                  <i class="fab fa-hotjar"></i>
                  </div>
              <div>
                <span class="h6">Heat Generation</span>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 px-lg-4">
            <div className="shadow-none">
              <div className="p-3 d-flex">
                  <div className="icon icon-shape rounded-circle bg-warning text-white mr-4">
                  <i class="fas fa-dollar-sign"></i>
                  </div>
              <div>
                <span class="h6">Cleaning Expenses</span>
              </div>
              </div>
            </div>
          </div>

          
        </div>
        <div>
        <div className="col-lg-7 col-md-6 px-lg-4">
            <div className="shadow-none">
              <div className="p-3 d-flex">
                  <div className="icon icon-shape rounded-circle bg-warning text-white mr-4">
                  <i class="fas fa-angle-double-up"></i>
                  </div>
              <div>
                <span class="h6">Productivity</span>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 px-lg-4">
            <div className="shadow-none">
              <div className="p-3 d-flex">
                  <div className="icon icon-shape rounded-circle bg-warning text-white mr-4">
                  <i class="fas fa-dollar-sign revenue-icon"></i>
                  </div>
              <div>
                <span class="h6">Revenue</span>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 px-lg-4">
            <div className="shadow-none">
              <div className="p-3 d-flex">
                  <div className="icon icon-shape rounded-circle bg-warning text-white mr-4">
                  <i class="fas fa-bullseye accuracy-icon"></i>
                  </div>
              <div>
                <span class="h6">Accuracy</span>
              </div>
              </div>
            </div>
          </div> 
      </div>
      </div>
      </div>
      </section>
      <section class="timeline">
      <h1 class ="mb-4 timeline-title">A Process That Takes Less Time And Is More Effective! </h1>
        <hr className = "horz-line4" />

      <div class="flex-parent">
      <h1 class ="timeline-title">Reusable Reamers</h1>

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
      <div class="flex-parent">
      <h1 class ="timeline-title">Osteofit's Reamers</h1>
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
      <div class="shape-container-single-use shape-line shape-position-bottom">
            <svg width="2560px" height="100px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 2560 100" xmlSpace="preserve" class="">
                <polygon points="2560 0 2560 100 0 100"></polygon>
            </svg>
 </div>

</section>

<section class="slice slice-lg" className="graphSection">
        <div class="container">
            <div class="py-6">
                <div class="graph-row row-grid justify-content-between align-items-center">
                    <div class="col-lg-5 order-lg-2">
                        <h4>What are the benefits of single use?</h4>
                        <hr className = "horz-line5" />
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
                                        <span class="h6 mb-0" className="graphSectionh6">100% Efficiency Each Time</span>
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
                                        <span class="h6 mb-0" className="graphSectionh6">Recyclable After Each Use</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                      <div class="graph-row">
                        <img id="graph-img" src={graph} alt=""/>
                     </div>                
                  </div>
            </div>
        </div>
 
</section>
<section class="slice slice-lg" className="singleUseRecycle">
    <div class="row mb-5 justify-content-center text-center">
                <div class="col-lg-6">
                    <h2 class=" mt-4">Osteofit is Green!</h2>
                    <div class="mt-2">
                        <p class="lead lh-180">Osteofit takes pride in creating products that are
  sustainable and environmentally conscious. Review our steps for recycling our materias, stainless steel and poly carbonate, the main components of our reamers!</p>
                    </div>
                </div>
            </div>
                    <div class="part-card">
                        <div class="card-body card-hover pb-5">
                            <img id="recycle-pics" src={mold1} alt=""/>
                        </div>
                    </div>
                    <div class="part-card">
                        <div class="card-body card-hover pb-5">
                            <img id="recycle-pics" src={mold1} alt=""/>
                        </div>
                    </div>

              <div class="row mt-5">
                    
                <div class="col-xl-2 col-sm-6 mt-n7">
                    <div class="card-step-1">
                        <div class="d-flex p-5">
                            <div>
                                <span class="badge badge-warning badge-pill">1</span>
                            </div>
                            <div class="pl-4">
                                <h5 class="lh-130">Step 1</h5>
                                <p class="text-muted mb-0">
                                    Material are finely grounded & shredded
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-sm-6 mt-sm-n7">
                    <div class="card-step-1">
                        <div class="d-flex p-5">
                            <div>
                                <span class="badge badge-success badge-pill">2</span>
                            </div>
                            <div class="pl-4">
                                <h5 class="lh-130">Step 2</h5>
                                <p class="text-muted mb-0">
                                    Magnets used to sepearate material
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-md-12 col-sm-6 mt-xl-n7">
                    <div class="card-step-1">
                        <div class="d-flex p-5">
                            <div>
                                <span class="badge badge-danger badge-pill">3</span>
                            </div>
                            <div class="pl-3">
                                <h5 class="lh-130">Step 3</h5>
                                <p class="text-muted mb-0">
                                    Sent to recycling company for processing
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>  
              <div class="row mt-5">
                    <div class="col-xl-2 col-sm-6">
                    <div class="card-step-2">
                        <div class="d-flex p-5">
                            <div>
                                <span class="badge badge-warning badge-pill">1</span>
                            </div>
                            <div class="pl-4">
                                <h5 class="lh-130">Step 1</h5>
                                <p class="text-muted mb-0">
                                Material are finely grounded & shredded
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-sm-6">
                    <div class="card-step-2">
                        <div class="d-flex p-5">
                            <div>
                                <span class="badge badge-success badge-pill">2</span>
                            </div>
                            <div class="pl-4">
                                <h5 class="lh-130">Step 2</h5>
                                <p class="text-muted mb-0">
                                Magnets used to sepearate material
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-md-12 col-sm-6">
                    <div class="card-step-2">
                        <div class="d-flex p-5">
                            <div>
                                <span class="badge badge-danger badge-pill">3</span>
                            </div>
                            <div class="pl-3">
                                <h5 class="lh-130">Step 3</h5>
                                <p class="text-muted mb-0">
                                Sent to recycling company for processing
                                </p>
                            </div>
                        </div>
                    </div>
                    <button id="scrollToTopBtn" onClick={handleBackToTopBtn}>Back to Top</button>  

                </div>
        </div>

</section>
 

    </div>
  );
};
 
export default SingleUse;