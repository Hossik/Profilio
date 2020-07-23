import { StyledCover } from './Cover.styled';
import Main from '../Main';
import Player from '../Player';
import React from 'react';

import ReactTextTransition, { presets } from "react-text-transition";
import {  CSSTransition }from 'react-transition-group';

import { ExternalLink } from 'react-external-link';

import { BannerImage } from './Banner';

const hossik = ["HOSSIK PAGE"," "]
const welcome = ["WELCOME TO"," "]

 const InnerCover = (props) => {
   
    return(
        <StyledCover>
    
    <div className={props.play? "dark-overlay ":"light-overlay"}>
    <CSSTransition
          in={props.play}
          timeout={300}
          classNames="helpfooter"
          unmountOnExit
          appear     
        >
          
            <div id="mainfooter" >
            
              <ExternalLink   className="mainfooterItem" href="https://example.com">
                <span>Visit the site</span>
             </ExternalLink>
             <ExternalLink className="mainfooterItem" href="https://example.com">
                <span>Visit the site</span>
             </ExternalLink>
             <ExternalLink className="mainfooterItem" href="https://example.com">
                <span>Visit the site</span>
             </ExternalLink>
            </div>
            </CSSTransition> 
    
        
          <div className ="landing-inner">
          
          {props.play? <div></div>:<BannerImage />}
          <div className ="play">
            <Player  
              
              currentImage={props.currentImage}
            play={props.play}
            playing={props.playing}
            back={props.back}
            textIndex= {props.textIndex}
            titletime ={props.titletime}
            player = {props.player}
            helpplayer={props.helpplayer}
            duration= {props.duration}
            ready= {props.ready}
            muted={props.muted}
            pause={props.pause}
            images={props.images}
            pausing={props.pausing}
            muting={props.muting}
            switchImage={props.switchImage}/>
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
   
    </StyledCover>
    )
  
  }

export default InnerCover