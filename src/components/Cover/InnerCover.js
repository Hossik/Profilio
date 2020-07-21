import { StyledCover } from './Cover.styled';
import Main from '../Main';
import React, { Component } from 'react';
import { MDBBtn} from 'mdbreact';
import ReactTextTransition, { presets } from "react-text-transition";
import {  CSSTransition }from 'react-transition-group';
import ReactPlayer from 'react-player'
import { WindMillLoading	 } from 'react-loadingg'
import { ExternalLink } from 'react-external-link';
import TweenOne from 'rc-tween-one';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
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
          <div style={{pointerEvents: "auto"}} className="scroll">
            <div id="welcome" >
              Wolcome-{'    '}<span>{'    '}To-</span>{'    '}<span>{'    '}My-{'    '}</span>{'    '}<span>{'    '}Page{'    '}</span>
              <span className="first">Wolcome-{'    '}</span><span className="first">{'    '}To-</span>{'    '}<span className="first">{'    '}My-{'    '}</span>{'    '}<span className="first">{'    '}Page{'    '}</span>
              <span>Wolcome-{'    '}</span><span>{'    '}To-</span>{'    '}<span>{'    '}My-{'    '}</span>{'    '}<span>{'    '}Page{'    '}</span>
            </div>
          </div>
          <CSSTransition
          in={props.player}
          timeout={300}
          classNames="alertup"
          unmountOnExit
          appear     
        >
          <div id="controler">
          <MDBBtn  id="play" color="elegant" style={{textAlign: 'center',margin: 'auto' ,padding:"auto"}}
        onClick={props.playing}>{props.play ? <i id="hossik" class="fas fa-play-circle"></i>:<i id="nohossik" class="far fa-stop-circle"></i>}
          </MDBBtn> { }
        <CSSTransition
          in={props.play}
          timeout={300}
          classNames="helpplayer"
          unmountOnExit
          appear     
        >
           <div><MDBBtn id="back" color="elegant" style={{textAlign: 'center',margin: 'auto' ,padding:"auto"}}onClick={props.switchImage}><i id="hossik"  class="fas fa-forward"></i></MDBBtn>
        <MDBBtn  color="elegant" style={{textAlign: 'center',margin: 'auto' ,padding:"auto"}}onClick={props.muting}>{props.muted?<i id="nohossik" class="fas fa-volume-up"></i>:<i id="hossik"  class="fas fa-volume-mute"></i>}</MDBBtn>
        <MDBBtn  color="elegant" style={{textAlign: 'center',margin: 'auto' ,padding:"auto"}}onClick={props.pausing}>{props.pause?<i id="nohossik" class="fas fa-pause-circle"></i>:<i id="hossik"  class="fas fa-play-circle"></i>}</MDBBtn> </div>
        </CSSTransition>
       </div>
        </CSSTransition>
        <CSSTransition
          in={props.helpplayer}
          timeout={300}
          classNames="helpplayer"
          unmountOnExit
          appear     
        >
        <div id="help" style={{color: "white" , display : props.play ?  "none"  : "block" }}>
          <span><i class="fas fa-angle-double-up"></i></span>
          <p > stop video background  </p>
        </div>
        </CSSTransition>
          <div className ="landing-inner">
            
          <div className='inner'>
            
              <Main className="hoss"/>
  
              
              
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