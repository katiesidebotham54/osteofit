import React, {Component} from 'react'
import { Paper } from '@material-ui/core';

class Home extends Component {
    render(){
        return(
            <div>
                <div className = "Mission">
                    <Paper elevation={3} className = "MissionText">
                    <h2>Motto</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
                    </Paper>
                </div>
                <div className="home-arrow">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <span className="text">Scroll down</span>
                </div>
                <div>
                    
                </div>
            </div>

        )
    }
}



export default Home