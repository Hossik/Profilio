import { StyledCover } from './Cover.styled';
import Main from '../Main';
import React, { Component } from 'react';
import { MDBBtn} from 'mdbreact';
import ReactTextTransition, { presets } from "react-text-transition";
import {  CSSTransition }from 'react-transition-group';
import ReactPlayer from 'react-player'
import { WindMillLoading	 } from 'react-loadingg'
import TweenOne from 'rc-tween-one';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
import InnerCover from './InnerCover'
import Cloud from './Cloud'
import styled from 'styled-components'
import { ExternalLink } from 'react-external-link';

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


class BannerImage extends Component  {
  
  render (){


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
            
              <g >
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
             
             <ExternalLink   href="https://www.facebook.com/Hossikz">
              <text x="160" y="180" font-family="Verdana" font-size="15" fill="red">Hello</text> 
              </ExternalLink>
              </g>
             
              <rect  x="1" y="1" width="198" height="198"
              transform="translate(84.000000, 58.000000) rotate(36.000000) translate(-84.000000, -58.000000) "
        fill="none" stroke="yellow" stroke-width="2" />
        <image id="cc4" xlinkHref="../assets/logo.svg" src="../assets/hoss.png" width="90" height="90"/>


        <g transform="translate(300.000000, 50.000000)">
        
     
                    <path
                      d="M57.378,0.001H3.352C1.502,0.001,0,1.5,0,3.353v54.026c0,1.853,1.502,3.354,3.352,3.354h29.086V37.214h-7.914v-9.167h7.914
                      v-6.76c0-7.843,4.789-12.116,11.787-12.116c3.355,0,6.232,0.251,7.071,0.36v8.198l-4.854,0.002c-3.805,0-4.539,1.809-4.539,4.462
                      v5.851h9.078l-1.187,9.166h-7.892v23.52h15.475c1.852,0,3.355-1.503,3.355-3.351V3.351C60.731,1.5,59.23,0.001,57.378,0.001z"
                      id="line-s"
                      stroke="#3b5998"
                      strokeWidth="1.35"
                      strokeLinecap="round"
                      transform="translate(127.105708, 73.561453) rotate(-16.000000) translate(-127.105708, -73.561453) "
                    />
                 
             

        </g> 
        
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
  );}
}

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
  this.setState({
    play: !this.state.play,
    ready: false
  })
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
  shoot = ( ) => {
    console.log("shoot")
  }
    render() {
        return (
          
        <StyledCover >
        
        {this.state.play ? 
        <React.Fragment>
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
        <div  style={{display : this.state.ready ?  'none' :'block' ,marginTop : "50vh", marginLeft:"100vw"}}> <WindMillLoading	  size="large" color="rgb(255, 220, 0)"/>
      </div>
      </div>
      
      <InnerCover
       currentImage={this.state.currentImage}
          play={this.state.play}
          playing={this.play}
          back={this.state.back}
          textIndex= {this.state.textIndex}
          titletime ={this.state.titletime}
          player = {this.state.player}
          helpplayer={this.state.helpplayer}
          duration= {this.state.duration}
          ready= {this.state.ready}
          muted={this.state.muted}
          pause={this.state.pause}
          images={this.state.images}
          pausing={this.pause}
          muting={this.muted}
          switchImage={this.switchImage}
          />
          </React.Fragment>
      : 
      <React.Fragment>
       
      <BannerImage />
      
      <InnerCover 
      
      currentImage={this.state.currentImage}
      playing={this.play}
          play={this.state.play}
          back={this.state.back}
          textIndex= {this.state.textIndex}
          titletime ={this.state.titletime}
          player = {this.state.player}
          helpplayer={this.state.helpplayer}
          duration= {this.state.duration}
          ready= {this.state.ready}
          muted={this.state.muted}
          pause={this.state.pause}
          images={this.state.images}
          />
          
          </React.Fragment>
      

       }
       
        
          
        
        
        </StyledCover>)
  
        
    }
}

export default Cover








