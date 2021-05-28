import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Link,
  } from 'react-router-dom'
  import '../styling/App.scss';
  import osteofitWhiteLogo from "../images/osteofitWhiteLogo.png";
  import EmailIcon from '@material-ui/icons/Email';


class Footer extends Component {
    render(){
        
    return(
        <div id="footer-container">
        <div className = "footer"> 
                <ul>
                    <img src = {osteofitWhiteLogo} alt="logo"/>
                    <h1 id="footer-title">OsteoFit</h1>
                <Router forceRefresh>
                    <li className = "footer-home">
                    <Link exact to = "/">
                        Home
                    </Link>
                    </li>
                </Router>
                <Router forceRefresh>
                            <li>
                                <Link exact to="/about">
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
                <div className = "bottom-footer">
                <p className = "footerNotes">
                    @ 2020 Copyright Osteofit
                    <br/>
                    Terms and Conditions / Private Policy / Website by: Katie and Ben Sidebotham
                </p>
                <span>
                <EmailIcon />
                info@osteofitLLC.com 
                </span>
                </div>
        </div>
        </div>
    )


    }
}

export default Footer