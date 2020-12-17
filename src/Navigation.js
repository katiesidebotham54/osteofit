import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom'
import './App.css';
import logo from './images/osteofitLogo.png'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Product from './components/Product'
import SingleUse from './components/SingleUse'


class Navigation extends Component{
    render(){
        return(
            <div>
                    <nav>
                        <ul>
                        <Router forceRefresh>
                                <Link exact to ="/">
                                    <img src={logo}/>
                                </Link>
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
                                <Link exact to="/product">
                                Our Product
                                </Link>
                            </li>
                            </Router>
                            <Router forceRefresh>
                            <li>
                                <Link exact to="/single-use">
                                Why Single-Use?
                                </Link>
                            </li>
                            </Router>
                            <Router forceRefresh>
                            <li>
                                <Link exact to="/contact">
                                Contact Us
                                </Link>
                            </li>
                            </Router>
                            
                        </ul>
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