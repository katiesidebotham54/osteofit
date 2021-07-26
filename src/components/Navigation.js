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
import Patents from "./Patents"
import IFU from "./IFU"
import Login from './Auth'
import Patent9101 from '../documents/Patent9101'
import Patent8518 from '../documents/Patent8518'
import Patent8556 from '../documents/Patent8556'
import Patent9463 from '../documents/Patent9463'
import '../styling/mainStyle.scss'


class Navigation extends Component{
    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container">
             <Router forceRefresh>
                <Link exact to ="/home">
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
                    <Router forceRefresh>
                    <li class="nav-item ">
                        <Link class="nav-link" exact to ="/ifu">
                            IFU
                        </Link>
                    </li>
                    </Router>

                    <Router forceRefresh>
                    <li class="nav-item ">
                        <Link class="nav-link" exact to ="/patents">
                            Patents
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
                            <Route exact path="/home">
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

                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/ifu">
                                <IFU />
                            </Route>
                        </Switch>
                    </Router>
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/patents">
                                <Patents />
                            </Route>
                        </Switch>
                    </Router>
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/patent9101368">
                                <Patent9101 />
                            </Route>
                        </Switch>
                    </Router>
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/patent8518043">
                                <Patent8518 />
                            </Route>
                        </Switch>
                    </Router>
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/patent8556897">
                                <Patent8556 />
                            </Route>
                        </Switch>
                    </Router>
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/patent9463028">
                                <Patent9463 />
                            </Route>
                        </Switch>
                    </Router>
                    
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/login">
                                <Login />
                            </Route>
                        </Switch>
                    </Router>
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/">
                                <Login />
                            </Route>
                        </Switch>
                    </Router>




            </div>
        )
    }
}

export default Navigation