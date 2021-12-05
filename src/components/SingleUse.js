import React from "react";
import graph from '../images/OsteofitGraph.png'
import '../styling/mainStyle.scss';
import '../styling/singleUseStyle.scss';
import '../styling/timelines.scss';
// import osteofitSteel from '../images/Osteofitmodelpart1.PNG';
// import osteofitCore from '../images/Osteofitmodelpart4.PNG';
// import coreRecycle2 from '../images/coreRecycle2.png';
// import coreRecycle3 from '../images/coreRecycle3.png';
// import steelRecycle2 from '../images/steelRecycle2.png';
// import steelRecycle3 from '../images/steelRecycle3.png';



const SingleUse = () => {
  
  
  return (
    
    <div className="SingleUse">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
       <section class="slice bg-dark">
      <div class="single-use-title-wrapper col-lg-8 text-center text-lg-left">
          <div>
          <h2 class="text-white">Why Single-Use?</h2>
          </div>
        </div>       
 
        {/*<div class="container">
            <div class="row row-grid align-items-center">
                <div class="col-lg-8 text-center text-lg-left">
                    <h5 class="text-white mb-6">
                        We manufacture single-use cost-effective reamers for total hip replacement surgeries.
                    </h5>
                </div>
            </div>
  </div>*/}
        <div class="shape-container-about shape-line shape-position-bottom">
            <svg width="2560px" height="100px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 2560 100" xmlSpace="preserve" class="">
                <polygon points="2560 0 2560 100 0 100"></polygon>
            </svg>
        </div>
 
    </section>
    <section class="slice slice-lg" className="slice-chart">
      <div className="comparison">
        <div className="row mx-lg-n4 benefits-boxes">
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <div className="p-3 d-flex">
                <div>
                  <div className="icon icon-shape rounded-circle bg-warning mr-4">
                  <i class="fas fa-bullseye"></i>      
                  </div>
                </div>
              <div>
                <span class="h5">Always Accurate</span>
                <p class="text-sm text-muted mb-0 font-italic">Precise Manufacturing Process</p>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <div className="p-3 d-flex">
                <div>
                  <div className="icon icon-shape rounded-circle bg-warning mr-4">
                  <i class="fas fa-icicles"></i>    
                  </div>
                </div>
              <div>
                <span class="h5">Always Sharp</span>
                <p class="text-sm text-muted mb-0 font-italic">Cutting Teeth Are Always New</p>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <div className="p-3 d-flex">
                <div>
                  <div className="icon icon-shape rounded-circle bg-warning mr-4">
                  <i class="fas fa-dollar-sign"></i>   

                  </div>
                </div>
              <div>
                <span class="h5">Cost Effective</span>
                <p class="text-sm text-muted mb-0 font-italic">Patented Technology Allows for Manufacturing Efficiency</p>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <div className="p-3 d-flex">
                <div>
                  <div className="icon icon-shape rounded-circle bg-warning mr-4">
                  <i id = "fire-icon" class="fas fa-hourglass-half"></i>  

                  </div>
                </div>
              <div>
                <span class="h5">Reduced OR Time</span>
                <p class="text-sm text-muted mb-0 font-italic">The OR Cycle is open, use, discard</p>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <div className="p-3 d-flex">
                <div>
                  <div className="icon icon-shape rounded-circle bg-warning mr-4">
                  <i class="fas fa-fire"></i>                  </div>
                </div>
              <div>
                <span class="h5">Reduced Heat</span>
                <p class="text-sm text-muted mb-0 font-italic">Cutting Teeth are Never Dull</p>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <div className="p-3 d-flex">
                <div>
                  <div className="icon icon-shape rounded-circle bg-warning mr-4">
                  <i id = "recycle-icon" class="fas fa-recycle"></i>
                </div>
                </div>
              <div>
                <span class="h5">100% Recyclable</span>
                <p class="text-sm text-muted mb-0 font-italic">Used, Reprocessed, and Remanufactured</p>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section class="slice slice-lg">

      <div class="benefits-single-use">
        <h1 class ="mb-4 text-white">With OsteoFit's single-use features, you'll see a : </h1>
        <hr className = "horz-line4" /> 
        <div class="container">
            <div class="row mt-4 text-center">
                <div class="col-lg-6 pr-lg-5 single-use-title">
                    <h4 class="h4 lh-180 mb-3 ml-7 text-white">
                    Decrease in:                    
                    </h4>
                </div>
                <div class="col-lg-6">
                    <h4 class="h4 lh-180 ml-8 text-white">
                    Increase in:                    
                    </h4>
                </div>
            </div>
        </div>
        <div className = "ml-17 container">
        <div className="row mx-lg-n4">
          <div className="col-lg-6" class="bullet-points-one">
        <div className="col-lg-6">
              <div className="p-3 d-flex">
                  <div className="icon icon-shape-su rounded-circle text-white mr-4">
                  <i class="fas fa-disease circle-icon-benefits1"></i>
                  </div>
              <div>
                <span class="h5 text-white">Risk of Infection</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="shadow-none">
              <div className="p-3 d-flex">
                  <div className="icon icon-shape-su rounded-circle text-white mr-4">
                  <i class="fab fa-hotjar circle-icon-benefits1"></i>
                  </div>
              <div>
                <span class="h5 text-white">Heat Generation</span>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="shadow-none">
              <div className="p-3 d-flex">
                  <div className="icon icon-shape-su rounded-circle text-white mr-4">
                  <i class="fas fa-dollar-sign circle-icon-benefits1"></i>
                  </div>
              <div>
                <span class="h5 text-white">Cleaning Expenses</span>
              </div>
              </div>
            </div>
          </div>

          
        </div>
        <div>
        <div className="col-lg-6">
            <div className="shadow-none">
              <div className="p-3 d-flex">
                  <div className="icon icon-shape-su rounded-circle text-white mr-4">
                  <i class="fas fa-angle-double-up circle-icon-benefits2"></i>
                  </div>
              <div>
                <span class="h5 text-white">Productivity</span>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="shadow-none">
              <div className="p-3 d-flex">
                  <div className="icon icon-shape-su rounded-circle text-white mr-4">
                  <i class="fas fa-dollar-sign revenue-icon circle-icon-benefits2"></i>
                  </div>
              <div>
                <span class="h5 text-white">Revenue</span>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="shadow-none">
              <div className="p-3 d-flex">
                  <div className="icon icon-shape-su rounded-circle text-white mr-4">
                  <i class="fas fa-bullseye accuracy-icon circle-icon-benefits2"></i>
                  </div>
              <div>
                <span class="h5 text-white">Accuracy</span>
              </div>
              </div>
            </div>
          </div> 
      </div>
      </div>
      </div>
      </div>
    </section>
      <section class="timeline">
      <h1 class ="mb-4 timeline-title">A Process That Takes Less Time And Is More Effective </h1>
        <hr className = "horz-line4" />

      <div class="flex-parent">
      <h1 class ="timeline-title">Reusable Reamer</h1>

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
      <h1 class ="timeline-title">OsteoFit Reamer</h1>
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
            <span class="label">Recycle</span>
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
                    <h2 class=" mt-4">OsteoFit is Green</h2>
                    <div class="mt-2">
                        <p class="lead lh-180" className="osteofit-green-text">Osteofit takes pride in creating products that are
  sustainable and environmentally conscious.</p>
                    </div>
                </div>
            </div>
         {/* <div class="container">
            <div class="row mt-3 ml-12">
                      <div class="col-xl-3">
                        <div class="card-step-1">
                            <div class="d-flex card-padding">
                                <div>
                                    <span class="badge badge-success badge-pill">1</span>
                                </div>
                                <div class="pl-4">
                                    <h5 class="lh-130">Separated</h5>
                                  <img src={osteofitSteel} alt="" class="recycle-img-1 rounded-lg img-fluid"/>          
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3">       
                        <div class="card-step-1">
                            <div class="d-flex card-padding">
                                <div>
                                    <span class="badge badge-success badge-pill">2</span>
                                </div>
                                <div class="pl-4">
                                    <h5 class="lh-130">Crushed</h5>
                                    <img src={steelRecycle2} alt="" class="recycle-img-2 rounded-lg img-fluid"/>           
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3">
                      <div class="card-step-1">
                            <div class="d-flex card-padding">
                                <div>
                                    <span class="badge badge-success badge-pill">3</span>
                                </div>
                                <div class="pl-3">
                                    <h5 class="lh-130">Compacted</h5>
                                    <img src={steelRecycle3} alt="" class="recycle-img-3 rounded-lg img-fluid"/>           
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>                
                  <div class="row mt-5 ml-12">
                  <div class="col-xl-3">                    
                  <div class="card-step-2">
                        <div class="d-flex card-padding">
                            <div>
                                <span class="badge badge-success badge-pill">1</span>
                            </div>
                            <div class="pl-4">
                                <h5 class="lh-130">Separated</h5>
                                <img src={osteofitCore} alt="" class="recycle-img-4 rounded-lg img-fluid"/>           
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3">                    
                <div class="card-step-2">
                        <div class="d-flex card-padding">
                            <div>
                                <span class="badge badge-success badge-pill">2</span>
                            </div>
                            <div class="pl-4">
                                <h5 class="lh-130">Crushed</h5>
                                <img  src={coreRecycle2} alt="" class="recycle-img-5 rounded-lg img-fluid"/>           
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3">                    
                <div class="card-step-2">
                        <div class="d-flex card-padding">
                            <div>
                                <span class="badge badge-success badge-pill">3</span>
                            </div>
                            <div class="pl-3">
                                <h5 class="lh-130">Shredded</h5>
                                <img src={coreRecycle3} alt="" class="recycle-img-6 rounded-lg img-fluid"/>           
                            </div>
                        </div>
                    </div>
                </div>
               </div>
  </div>*/}


</section>
 

    </div>
  );
};
 
export default SingleUse;