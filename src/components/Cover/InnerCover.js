import Main from '../Main';
import React from 'react';

import ReactTextTransition, { presets } from "react-text-transition";
import {  CSSTransition }from 'react-transition-group';



import { BannerImage } from './Banner';

const hossik = ["HOSSIK PAGE"," "]
const welcome = ["WELCOME TO"," "]

 const InnerCover = (props) => {
   
    return(
        
    
    <div className="light-overlay">
    
    
    <div className ="landing-inner">

     
          
          <BannerImage dark={props.dark}/>
          
          <div className ="play">
           
            </div>
          
          <div className='inner'>
      
            <Main className="hoss"  />
    
        <CSSTransition
          in={props.titletime}
          timeout={300}
          classNames="alertup"
          unmountOnExit
          appear     
        >
              <section  id= "up" className="linetext">
              <ReactTextTransition
                 text= { welcome[props.textIndex % welcome.length] }
                 springConfig={ presets.molasses
                 }
                 delay={400}
                 className="big"
                 direction="up"
                 inline
              />
              </section>
              </CSSTransition>
              <CSSTransition
          in={props.titletime}
          timeout={300}
          classNames="alertdown"
          unmountOnExit
          appear     
        >
              <section id="down" className="linetext">
              <ReactTextTransition
                 text= { hossik[props.textIndex % hossik.length] }
                 springConfig={ presets.molasses
                 }
                 delay={400}
                 className="big"
                 direction="down"
                 inline
              />         
              </section>
              </CSSTransition> 
              
          </div>
          </div>
          
</div>
   
   
    )
  
  }

export default InnerCover