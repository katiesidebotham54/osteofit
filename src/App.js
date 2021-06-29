import React, {Component} from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import '../src/styling/mainStyle.scss';



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
