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

TweenOne.plugins.push(PathPlugin);
const duration = 7000;
const ease = 'easeInOutSine';
const p =
  'M123.5,89.5 C148,82.5 239.5,48.5 230,17.5 C220.5,-13.5 127,6 99.5,13.5 C72,21 -9.5,56.5 1.5,84.5 C12.5,112.5 99,96.5 123.5,89.5 Z';
const easePath =
  'M0,100 C7.33333333,89 14.3333333,81.6666667 21,78 C25.3601456,75.6019199 29.8706084,72.9026327 33,70 C37.0478723,66.2454406 39.3980801,62.0758689 42.5,57 C48,46.5 61.5,32.5 70,28 C77.5,23.5 81.5,20 86.5,16 C89.8333333,13.3333333 94.3333333,8 100,0';
const loop = {
  yoyo: true,
  repeat: -1,
  duration,
  ease,
};
const animate = {
  redSquare: {
    ...loop,
    y: 15,
    duration: 3000,
    delay: 200,
  },
  greenBall: {
    path: { x: p, y: p },
    duration: 5000,
    repeat: -1,
    ease: TweenOne.easing.path(easePath, { lengthPixel: 400 }),
  },
  track: {
    ...loop,
    rotate: 15,
  },
};


function BannerImage() {
  return (
    <div className="wrapper-ant-design">
      <svg width="82vw" height="100vh" viewBox="0 0 482 500">
        <defs>
          <path
            d="M151,55 C129.666667,62.6666667 116,74.3333333 110,90 C104,105.666667 103,118.5 107,128.5 L225.5,96 C219.833333,79 209.666667,67 195,60 C180.333333,53 165.666667,51.3333333 151,55 L137,0 L306.5,6.5 L306.5,156 L227,187.5 L61.5,191 C4.5,175 -12.6666667,147.833333 10,109.5 C32.6666667,71.1666667 75,34.6666667 137,0 L151,55 Z"
            id="mask"
          />
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(0, 30)">
        <g id="Group-13" transform="translate(0.000000, 41.000000)">
            <TweenOne component="g" animation={animate.redSquare}>
              <g>
              <rect
                stroke="#F5222D"
                strokeWidth="1.6"
                transform="translate(184.000000, 18.000000) rotate(8.000000) translate(-184.000000, -18.000000) "
                x="176.8"
                y="150.8"
                width="44.4"
                height="44.4"
                rx="55.6"
              />
              <text x="160" y="180" font-family="Verdana" font-size="15" fill="red">Hello</text>
              </g>
              <g>
              <rect x="1" y="1" width="198" height="198"
              transform="translate(84.000000, 58.000000) rotate(36.000000) translate(-84.000000, -58.000000) "
        fill="none" stroke="yellow" stroke-width="2" />
        <text x="50" y="50" font-family="Verdana" font-size="35" fill="blue">Hello</text><symbol id="hossik"  class="fas fa-forward"></symbol></g>
        <g transform="translate(300.000000, 50.000000)">
        <polygon points="100,10 40,198 190,78 10,78 160,198" style={{fill:"red",stroke:"yellow",strokeWidth:"1",fillRule:"evenodd"}}/></g>
            </TweenOne>
          </g>
          
          <g id="Group-14" transform="translate(150.000000, 230.000000)">
            <g id="Group-22" transform="translate(62.000000, 7.000000)">
              <image
                id="cc4"
                alt="globe"
                xlinkHref="https://gw.alipayobjects.com/zos/rmsportal/FpKOqFadwoFFIZFExjaf.png"
                width="151px"
                height="234px"
              />
            </g>
            <mask id="mask-2">
              <use xlinkHref="#mask" fill="white" transform="translate(-42, -33)" />
            </mask>
            <g mask="url(#mask-2)">
              <TweenOne component="g" animation={animate.track} style={{ transformOrigin: '122.7px 58px' }}>
                <g transform="translate(-16, -52)">
                  <g transform="translate(16, 52)">
                    <path
                      d="M83.1700911,35.9320015 C63.5256194,37.9279025 44.419492,43.1766434 25.8517088,51.6782243 C14.3939956,57.7126276 7.77167019,64.8449292 7.77167019,72.4866248 C7.77167019,94.1920145 61.1993389,111.787709 127.105708,111.787709 C193.012078,111.787709 246.439746,94.1920145 246.439746,72.4866248 C246.439746,55.2822262 212.872939,40.6598106 166.13127,35.3351955"
                      id="line-s"
                      stroke="#0D1A26"
                      strokeWidth="1.35"
                      strokeLinecap="round"
                      transform="translate(127.105708, 73.561453) rotate(-16.000000) translate(-127.105708, -73.561453) "
                    />
                  </g>
                  <TweenOne component="g" animation={animate.greenBall}>
                    <image
                      alt="globe"
                      id="id2"
                      xlinkHref="https://www.kindpng.com/picc/b/70/700621.png"
                      x="16"
                      y="62"
                      width="26px"
                      height="26px"
                    />
                  </TweenOne>
                </g>
              </TweenOne>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

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
        
        <div className='player-wrapper'>
        <ReactPlayer
       onPlay={this.ready}
       style={{visibility: this.state.ready ? 'visible' : 'hidden' }}
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
      
      :
         
      <BannerImage />
   
      

       }
       
        <div className="dark-overlay ">
          <CSSTransition
        in={this.state.play}
        timeout={300}
        classNames="helpfooter"
        unmountOnExit
        appear     
      >
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
          </CSSTransition>
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
      <CSSTransition
        in={this.state.play}
        timeout={300}
        classNames="helpplayer"
        unmountOnExit
        appear     
      >
         <div><MDBBtn id="back" color="elegant" style={{textAlign: 'center',margin: 'auto' ,padding:"auto"}}onClick={this.switchImage}><i id="hossik"  class="fas fa-forward"></i></MDBBtn>
      <MDBBtn  color="elegant" style={{textAlign: 'center',margin: 'auto' ,padding:"auto"}}onClick={this.muted}>{this.state.muted?<i id="nohossik" class="fas fa-volume-up"></i>:<i id="hossik"  class="fas fa-volume-mute"></i>}</MDBBtn>
      <MDBBtn  color="elegant" style={{textAlign: 'center',margin: 'auto' ,padding:"auto"}}onClick={this.pause}>{this.state.pause?<i id="nohossik" class="fas fa-pause-circle"></i>:<i id="hossik"  class="fas fa-play-circle"></i>}</MDBBtn> </div>
      </CSSTransition>
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








