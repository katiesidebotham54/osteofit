import React, {Component} from 'react'
import logo from './images/osteofitLogo.png'
import {
    BrowserRouter as Router,
    Link,
  } from 'react-router-dom'
  import '../src/styling/App.scss';
  import osteofitWhiteLogo from "./images/osteofitWhiteLogo.png";


class Footer extends Component {
    render(){
    return(
        <div id="footer-container">
        <div className = "footer"> 
                <ul>
                    <img src = {osteofitWhiteLogo} alt="logo"/>
                    <h1>OsteoFit</h1>
                <Router forceRefresh>
                    <li>
                    <Link exact to = "/">
                        Home
                    </Link>
                    </li>
                </Router>
                <Router forceRefresh>
                    <li>
                    <Link exact to = "about">
                        About Us
                    </Link>
                    </li>
                </Router>
                <Router forceRefresh>
                    <li>
                    <Link exact to = "/product">
                        Product
                    </Link>
                    </li>
                </Router>
                <Router forceRefresh>
                    <li>
                    <Link exact to = "/single-use">
                        Why Single Use?
                    </Link>
                    </li>
                </Router>
                <Router forceRefresh>
                    <li>
                    <Link exact to = "/contact">
                        Contact Us
                    </Link>
                    </li>
                </Router>
                </ul>
                <p className = "footerNotes">
                    @ 2020 Copyright Osteofit
                    <br/>
                    Terms and Conditions / Private Policy / Website by: Katie and Ben Sidebotham
                </p>
        </div>
        </div>
    )


    }
}

export default Footer