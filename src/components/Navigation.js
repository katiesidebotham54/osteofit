import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom'
  import logo from '../images/osteofitLogo.png'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Product from './Product'
import SingleUse from './SingleUse'
import '../styling/mainStyle.scss'


class Navigation extends Component{
    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container">
             <Router forceRefresh>
                <Link exact to ="/">
                    <img id="nav-bar-logo" src={logo} alt=""/>
                </Link>
            </Router>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mt-4 mt-lg-0">
                <Router forceRefresh>
                    <li class="nav-item ">
                        <Link class="nav-link" exact to ="/about">
                            About Us
                        </Link>
                    </li>
                    </Router>
                    <Router forceRefresh>
                    <li class="nav-item ">
                        <Link class="nav-link" exact to ="/product">
                            Our Product
                        </Link>
                    </li>
                    </Router>
                    <Router forceRefresh>
                    <li class="nav-item ">
                        <Link class="nav-link" exact to ="/single-use">
                            Why Single-Use?
                        </Link>
                    </li>
                    </Router>
                </ul>
                <Router forceRefresh>
                <Link class="navbar-btn btn btn-sm btn-primary d-lg-inline-block " exact to="/contact">Contact Us</Link>
                </Router>
            </div>
        </div>
    </nav>
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </Router>
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/about">
                                <About />
                            </Route>
                        </Switch>
                    </Router>
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/product">
                                <Product />
                            </Route>
                        </Switch>
                    </Router>
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/single-use">
                                <SingleUse />
                            </Route>
                        </Switch>
                    </Router>
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/contact">
                                <Contact />
                            </Route>
                        </Switch>
                    </Router>
            </div>
        )
    }
}

export default Navigation