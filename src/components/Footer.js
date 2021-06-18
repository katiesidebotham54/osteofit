import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Link,
  } from 'react-router-dom'
  import '../styling/Footer.scss';
  import osteofitWhiteLogo from "../images/osteofitWhiteLogo.png";
  import EmailIcon from '@material-ui/icons/Email';


class Footer extends Component {
    render(){
        
    return(
        <footer class="position-relative" id="footer-main">
        <div class="footer pt-lg-7 footer-dark bg-dark">
            <div class="shape-container-footer shape-line shape-position-top shape-orientation-inverse">
                <svg width="2560px" height="100px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 2560 100" xmlSpace="preserve" className=" fill-section-secondary">
                    <polygon points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
            <div class="footer-container pt-4">
                <div class="row">
                    <div class="col-lg-4 mb-5 mb-lg-0">
                            <img alt="Image placeholder" src={osteofitWhiteLogo} id="footer-logo"/>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0">
                        <h6 class="heading mb-3">About Us</h6>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
                        <h6 class="heading mb-3">Our Product</h6>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
                        <h6 class="heading mb-3">Why Single Use?</h6>
                    </div>
                </div>
                <hr class="divider divider-fade divider-dark my-4"/>
                <div class="row align-items-center justify-content-md-between pb-4">
                    <div class="col-md-6">
                        <div class="copyright text-sm font-weight-bold text-center text-md-left">
                            &copy; 2021 Osteofit LLC. All rights reserved
                        </div>
                    </div>
                    <div class="col-md-6">
                        <ul class="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Terms
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Privacy
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Cookies
                                </a>
                            </li>
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