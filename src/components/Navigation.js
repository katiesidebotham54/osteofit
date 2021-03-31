import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom'
  import '../styling/App.scss';
  import logo from '../images/osteofitLogo.png'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Product from './Product'
import SingleUse from './SingleUse'


class Navigation extends Component{
    render(){
        return(
            <div>
                <header>
                    <nav>
                    <Router forceRefresh>
                                <Link exact to ="/">
                                    <img src={logo} alt="" className = "nav-logo"/>
                                </Link>
                         </Router>

                        <ul>
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
                            <li className = "contact-button">
                            <button>
                                <Link exact to="/contact">
                                Contact Us
                                </Link>
                            </button>
                            </li>
                            </Router>
                            
                        </ul>
                    </nav>
                    </header>
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