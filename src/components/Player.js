import React from 'react'

import { MDBBtn} from 'mdbreact';

import { CSSTransition }from 'react-transition-group';

export default function Player(props) {
    return (
        <div>
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
 
        </div>
    )
}
