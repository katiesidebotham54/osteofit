import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import '../styling/mainStyle.scss'
import '../styling/homeStyle.scss'
import reamerCase from '../images/reamerCase.png'
import blueReamer from '../images/osteofitModelBlue2.png';
import greenReamer from '../images/osteofitModelGreen1.png';




const Home = () => {
//   document.getElementById("scrollToTopBtn")
// var rootElement = document.documentElement

// function handleBackToTopBtn(e) {
// e.preventDefault()
// rootElement.scrollTo({
//   top: 0,
//   behavior: "smooth"
// })
// }
    return (
      <div class = "homeWholePage">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
      <div className="intro gradient-bckgrd" id ="intro">
   <div class="intro-title">
        <div>Introducing:<br/> OsteoFit</div>
  </div>        
  <div class="intro-image">
          <img src={blueReamer} alt=""/>
  </div>
</div>
<div class="home-arrow">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
          <span class="text">Scroll down</span>
        </div>

      <section class="slice slice-lg gradient-bckgrd">
        <div class="container">
          <div class = "py-6">
          <ScrollAnimation animateIn="fadeIn">

            <div class="row row-grid justify-content-between align-items-center">
                <div class="col-lg-6 order-lg-2">
                <h5 class="lh-180">
                    OsteoFit is a medical device company focused on the development of cost-effective orthopedic instruments
                    that maintain accuracy, function and sterility in a sustainable process.</h5>
                </div>
              <div class="col-lg-6">
                <div class="order-lg-1">
                        <div id = "home-img" class="mb-0 mr-lg-5">
                            <div class="p-2">
                                <img alt="" src={reamerCase} class="img-fluid rounded"/>
                            </div>
                        </div>
                  </div>
              </div>
            </div>
            </ScrollAnimation>
          </div>
        </div>
    </section>

    <section id = "word-carousel" class="slice slice-sm">
    <h1 class="ms-header__title">
    Our product is  
    <div class="ms-slider">
      <ul class="ms-slider__words">
        <li class="ms-slider__word"> Accurate</li>
        <li class="ms-slider__word"> Sterile</li>
        <li class="ms-slider__word"> Effective</li>
        <li class="ms-slider__word"> Accurate</li>
      </ul>
    </div>
  </h1>
    </section>
      <div>
      </div>

      <section class="slice slice-lg gradient-bckgrd">
      <div class="row row-grid align-items-center">
                <div class="col-lg-8 text-center text-lg-left">
      <figure class="item-content group">

          <div class="item-img">
              <img src={greenReamer} alt="" />
          </div>
          <figcaption class="item-caption">
              <h2>Introducing Osteofit <br/> Hollow Spherical Reamer: </h2>
              Made from stainless steel and molded polycarbonate, our single-use reamer is always <b>sharp</b> and <b>accurate</b>.
              Click <a class = "text-black" href="/#">
              <Router forceRefresh>
                <Link exact to="/product"><b>here</b> </Link>
              </Router>
              </a> to learn more.
          </figcaption>    

        </figure>
        </div>
        </div>
        </section>
      <section class="slice">
      <div className = "stats">
        <div className = "stats-container">
          <div className="stat">
            <div className="stat-value">4</div>
            <hr />

            <div className="meta">Patents</div>
          </div>
          <div className="stat">
            <div className="stat-value">100+</div>
            <hr />
            <div className="meta">Years of Experience</div>
      </div>
          <div className="stat">
            <div className="stat-value">100%</div>
            <hr />
            <div className="meta">Recyclable</div>
          </div>
          </div>
        </div>
        <div class="shape-container-home shape-line shape-position-bottom">
            <svg width="2560px" height="100px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 2560 100" xmlSpace="preserve" class="">
                <polygon points="2560 0 2560 100 0 100"></polygon>
            </svg>
        </div>
        <section class="slice slice-lg ">

        </section>
        </section>
        <section class="slice bg-section-secondary">
        <div class="container text-center">
        <div class="col-lg-12">
                    <h2 class=" mt-4">Learn More About...</h2>
                </div>
                <br/>
                <br/>

            <div class="row justify-content-center">
                <div class="col-md">

                    <div class="card card-pricing text-center px-3 hover-scale-110">
                        <div class="border-0 delimiter-bottom">
                        <i class="fas fa-award award-icon"></i>  
                        <br/>

                            <span class="h1 text-center mb-0">The Origins of OsteoFit</span>
                        </div>
                        <div class="card-body">
                        <p>Founded on the premise of creating precise products for surgeons, OsteoFit is challenging the status quo by developing reamers that are 100% new each time.</p>
                            <br />
                            <Router forceRefresh>
                              <Link exact to="/about"><div class="info-arrow"/></Link>
                            </Router>
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <div class="card card-pricing bg-dark text-center px-3 border-0 hover-scale-110">
                        <div class="border-0 delimiter-bottom">
                        <i class="fab fa-envira envira-icon"></i>
                        <br/>
                            <span class="h1 text-white text-center mb-0">The Sustainability of OsteoFit</span>
                        </div>
                        <div class="card-body">
                        <p class = "right-para">We make our reamers with 100% recyclable stainless steel and polycarbonate, producing an efficient and environmentally-conscious process for hospitals</p>
                        <br />
                        <Router forceRefresh>
                          <Link exact to="/single-use"> <div id="white-arrow" class="info-arrow"/></Link>
                          </Router>

                        </div>
                    </div>
                </div>
            </div>
            {/* <button id="scrollToTopBtn" onClick={handleBackToTopBtn}>Back to Top</button> */}
        </div>
    </section>
    </div>

    );
}

export default Home;
