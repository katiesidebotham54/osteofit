import React, {Component} from 'react';
import '../src/styling/App.scss';
import Navigation from './Navigation';
import Footer from './Footer';
import '../src/styling/singleUseStyle.scss';
import '../src/styling/aboutStyle.scss';
import '../src/styling/homeStyle.scss';
import '../src/styling/productStyle.scss';



class App extends Component {
  render(){
    return(
      <div>
        <Navigation />
        <Footer />
      </div>
    )
  }


  }
  
    
export default App;
