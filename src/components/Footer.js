import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Link,
  } from 'react-router-dom'
  import osteofitWhiteLogo from "../images/osteofitWhiteLogo.png";
import '../styling/mainStyle.scss'

class Footer extends Component {
    render(){
        
    return(
        <footer class="position-relative" id="footer-main">
        <div class="footer footer-dark bg-dark">
            <div class="shape-container-footer shape-line shape-position-top shape-orientation-inverse">
                <svg width="2560px" height="100px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 2560 100" xmlSpace="preserve" className=" fill-section-secondary">
                    <polygon points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
            <div class="footer-container">
            
         <div class="row">
         <div class="col-sm">   
                <Router forceRefresh>
                        <Link exact to ="/">
                            <img alt="" src={osteofitWhiteLogo} id="footer-logo"/>
                            </Link>
                </Router> 
                 </div>
        <div class="col-sm"/>
        <div class="col-sm"/>

        </div>

            <div class="row">
            <div class="col-sm ml-5">
                <h6>24 Sherwood Lane <br/>
                Fairfield, New Jersey 07004</h6> 
               
             </div>

                <div class="col-sm">
                <Router forceRefresh>
                        <Link exact to ="/about">
                        <h6 class="heading mb-3">About Us</h6>
                        </Link>
                </Router>
                </div>
                <div class="col-sm">
                <Router forceRefresh>
                    <Link exact to ="/product">
                        <h6 class="heading mb-3">Our Product</h6>
                        </Link>
                    </Router>
                </div>
            </div>            
             <div class="row">
             <div class="col-sm ml-5">
                <h6>Phone: 862-210-8435</h6> 
             </div>

             <div class="col-sm">
             <Router forceRefresh>
                    <Link exact to ="/patents">
                        <h6 class="heading mb-3">Patents</h6>
                        </Link>
            </Router>
            </div>
            <div class="col-sm">

                <Router forceRefresh>
                <Link exact to ="/sell-sheet">
                    <h6 class="heading mb-3">Sell Sheet</h6>
                    </Link>
                </Router>
            </div>
            </div>



             <div class="row">

            <div class="col-sm ml-5">
                <h6>osteofitllc.com</h6> 
             </div>


                <div class="col-sm mt-3">

                    <Router forceRefresh>
                    <Link exact to ="/single-use">
                        <h6 class="heading mb-3">Why Single Use?</h6>
                    </Link>
                    </Router>
                </div>
                <div class="col-sm mt-3">

                    <Router forceRefresh>
                    <Link exact to ="/ifu">
                        <h6 class="heading mb-3">IFU</h6>
                        </Link>
                    </Router>
                </div>
                </div>
                <hr class="divider divider-fade divider-dark my-4"/>
                <div class="row align-items-center justify-content-md-between pb-4">
                    <div class="col-md-6">
                        <div class="copyright text-sm font-weight-bold text-center text-md-left">
                            &copy; 2021 OsteoFit LLC. Website by K&B Design
                        </div>
                    </div>
                    <div class="col-md-6">
                        <ul id="bottom-footer" class="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                        <Router forceRefresh>
                    <li class="nav-item ">
                        <Link id="footer-item" class="nav-link" exact to ="/contact">
                            Contact Us
                        </Link>
                    </li>


                    </Router>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </footer>
    )


    }
}

export default Footer