import { StyledCover } from './Cover.styled';
import Main from '../Main';
import React, { Component } from 'react';
import { MDBBtn} from 'mdbreact';
import ReactTextTransition, { presets } from "react-text-transition";
import {  CSSTransition }from 'react-transition-group';
import ReactPlayer from 'react-player'
import { WindMillLoading	 } from 'react-loadingg'
import { ExternalLink } from 'react-external-link';


const hossik = ["HOSSIK PAGE"," "]
const welcome = ["WELCOME TO"," "]


export class Cover extends Component {
  
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.play = this.play.bind(this);
        
        this.state = {
          currentImage: 0,
          play:false,
          back:false,
          textIndex: 0,
          titletime :false,
          player : false,
          helpplayer:false,
          duration: 0,
          ready: false,
          muted:false,
          pause:true,
          images: [
            
            "https://www.youtube.com/watch?v=7sxFyu_U2go&feature=youtu.be&list=RD7sxFyu_U2go",
            "https://www.youtube.com/watch?v=SBtjfadiyfk&feature=youtu.be"

          ]
        };
      }
      remove = () => { 
        clearInterval(this.intervalID)
      }
      removetitle = () => { 
        clearInterval(this.intervalTITLE)
      }
      removertitle = () => { 
        clearInterval(this.intervalRTITLE)
      }
      removeplayer = () => {
        clearInterval(this.intervalPlayer)
      }
       
    componentDidMount() {
    
        this.intervalID = setInterval(() => {
        this.setState({
            textIndex: this.state.textIndex + 1,
        });
        }, 9900);
        this.intervalTITLE = setInterval(() => {this.setState({
          titletime: true
        }); }, 2000);
        this.intervalRTITLE = setInterval(() => {this.setState({
          titletime: false
        }); }, 8000);
        this.intervalPlayer = setInterval(() => {this.setState({
          player: true
        }); }, 10000);
        this.intervalHelpPlayer = setInterval(() => {this.setState({
          helpplayer: true
        }); }, 12000);
        
        setInterval (this.remove);
        setInterval (this.removetitle, 6000);
        setInterval (this.removertitle, 17000);

    }




  switchImage() {
        
    if (this.state.currentImage < this.state.images.length - 1 ) {
      this.setState({
        currentImage: this.state.currentImage + 1,
        ready:false,
        pause:true
            })
    } else {
      this.setState({
        currentImage: 0,
        ready:false,
        pause:true
      });
    }
    return this.currentImage;
  }
    
   
    play = () => {
  this.setState(state => ({
    play: !state.play,
    ready: false
  }))
  }

  muted = () => {
    this.setState(state => ({
      muted: !state.muted
    }))
    }

  handleDuration = (duration) => {
    
    this.setState({ duration })
  }
      
ready = () => {
  this.setState ({
    ready:true
  })
}
pause = () => {
  this.setState(state => ({
    pause: !state.pause
  }))
  }
    render() {
        return (
          
        <StyledCover>
        
        {this.state.play ? 
        <img src={"https://raw.githubusercontent.com/Hossik/Profilio/master/public/assets/photo390.png"} alt="img"/>
        
      
      : 
      <div className='player-wrapper'>
        <ReactPlayer
       onPlay={this.ready}
          className='react-player'
          onError={this.switchImage}
          onEnded={this.switchImage}
          url={this.state.images[this.state.currentImage]}
          width='100vw'
          height='110vh'
          onDuration={this.handleDuration}
          volume= "0.5"
          muted={this.state.muted}
          playing={this.state.pause}
        />
        <div  style={{display : this.state.ready ?  'none' :'block' ,marginTop : "50vh" ,}}> <WindMillLoading	  size="large" color="rgb(255, 220, 0)"/>
      </div>
      </div>

       }
       
        <div className="dark-overlay ">
          <div id="mainfooter">
            <ExternalLink className="mainfooterItem" href="https://example.com">
              <span>Visit the site</span>
           </ExternalLink>
           <ExternalLink className="mainfooterItem" href="https://example.com">
              <span>Visit the site</span>
           </ExternalLink>
           <ExternalLink className="mainfooterItem" href="https://example.com">
              <span>Visit the site</span>
           </ExternalLink>
          </div>
        <div className="scroll">
          <div id="welcome">
            Wolcome-{'    '}<span>{'    '}To-</span>{'    '}<span>{'    '}My-{'    '}</span>{'    '}<span>{'    '}Page{'    '}</span>
            <span className="first">Wolcome-{'    '}</span><span className="first">{'    '}To-</span>{'    '}<span className="first">{'    '}My-{'    '}</span>{'    '}<span className="first">{'    '}Page{'    '}</span>
            <span>Wolcome-{'    '}</span><span>{'    '}To-</span>{'    '}<span>{'    '}My-{'    '}</span>{'    '}<span>{'    '}Page{'    '}</span>
          </div>
        </div>
        <CSSTransition
        in={this.state.player}
        timeout={300}
        classNames="alertup"
        unmountOnExit
        appear     
      >
        <div id="controler">
        <MDBBtn id="play" color="elegant" style={{textAlign: 'center',margin: 'auto' ,padding:"auto"}}
      onClick={this.play}>{this.state.play?<i id="hossik" class="fas fa-play-circle"></i>:<i id="nohossik" class="far fa-stop-circle"></i>}</MDBBtn> { }
      <MDBBtn id="back" color="elegant" style={{textAlign: 'center',margin: 'auto' ,padding:"auto"}}onClick={this.switchImage}><i id="hossik"  class="fas fa-forward"></i></MDBBtn>
      <MDBBtn  color="elegant" style={{textAlign: 'center',margin: 'auto' ,padding:"auto"}}onClick={this.muted}>{this.state.muted?<i id="nohossik" class="fas fa-volume-up"></i>:<i id="hossik"  class="fas fa-volume-mute"></i>}</MDBBtn>
      <MDBBtn  color="elegant" style={{textAlign: 'center',margin: 'auto' ,padding:"auto"}}onClick={this.pause}>{this.state.pause?<i id="nohossik" class="fas fa-pause-circle"></i>:<i id="hossik"  class="fas fa-play-circle"></i>}</MDBBtn>
     </div>
      </CSSTransition>
      <CSSTransition
        in={this.state.helpplayer}
        timeout={300}
        classNames="helpplayer"
        unmountOnExit
        appear     
      >
      <div id="help" style={{  display : this.state.play ?  "none"  : "block" }}>
        <span><i class="fas fa-angle-double-up"></i></span>
        <p> stop video background  </p>
      </div>
      </CSSTransition>
        <div className ="landing-inner">
          
        <div className='inner'>
          
            <Main className="hoss"/>

            
            
      <CSSTransition
        in={this.state.titletime}
        timeout={300}
        classNames="alertup"
        unmountOnExit
        appear     
      >
            <section  id= "up" className="linetext">
            <ReactTextTransition
               text= { welcome[this.state.textIndex % welcome.length] }
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
        in={this.state.titletime}
        timeout={300}
        classNames="alertdown"
        unmountOnExit
        appear     
      >
            <section id="down" className="linetext">
            <ReactTextTransition
               text= { hossik[this.state.textIndex % hossik.length] }
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
        
        </StyledCover>)
  
        
    }
}

export default Cover








