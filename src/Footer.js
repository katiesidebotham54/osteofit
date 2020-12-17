import React, {Component} from 'react'
import logo from './images/osteofitLogo.png'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Product from './components/Product'
import SingleUse from './components/SingleUse'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom'
import './App.css';


class Footer extends Component {
    render(){
    return(
        <div className = "footer"> 
                <ul>
                    <img src = {logo}/>
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
    )


    }
}

export default Footer