import React, {Component} from 'react'


class About extends Component {
    render(){
        return(
            <div>
            <div>
                <h1 className = "title">
                    <span>Who is Osteofit?</span>
                </h1>
            </div>
            <div class="outer-container">
                <div class="container container1">
                    <div class="inner_container">
                    <div class="title-bio">Person 1</div>
                    <div class="container_text">
                        <div class="container_text1">orthopedic surgeon with 
                        over 50 years experience specializing in hip and knee 
                        replacement, inventor </div>
                    </div>
                    </div>
                </div>
                <div class="container container2">
                    <div class="inner_container">
                    <div class="title-bio">Person 2</div>
                    <div class="container_text">
                        <div class="container_text1">
                        Inventor, business owner and over 40 years experience in design 
                        and development of orthopedic implants working with major OEM’s
                          </div>
                    </div>
                    </div>
                </div>
                <div class="container container3">
                    <div class="inner_container">
                    <div class="title">Person 3</div>
                    <div class="container_text">
                        <div class="container_text1">
                            Business owner, over 40 years 
                            in the development and manufacture of 
                            orthopedic implants and instruments, inventor
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}



export default About