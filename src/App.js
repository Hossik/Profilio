import React , { Component } from 'react';
import { GlobalStyles } from './global';
import { Cover } from './components';
import { HashRouter } from 'react-router-dom';
import './App.css';


export class App extends Component  {


 
  
render(){
  
  return (
  <React.Fragment>
 
  <HashRouter >
  
   <section className="landing" >
    <Cover /><GlobalStyles />
    </section>
  </HashRouter>
  

      
   
  </React.Fragment>
  )
     
}
}

export default App;
