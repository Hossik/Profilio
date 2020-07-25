
import React, { Component } from 'react';

import TweenOne from 'rc-tween-one';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';

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
  facebook: {
    ...loop,
    y: 35,
    duration: 4000,
    delay: 200,
  },
  insta: {
    ...loop,
    y: -35,
    duration: 4000,
    delay: 200,
  },
  git: {
    ...loop,
    y: -55,
    x: -15,
    duration: 4000,
    delay: 200,
  },
  greenBall: {
    path: { x: p, y: p },
    duration: 10000,
    repeat: -1,
    ease: TweenOne.easing.path(easePath, { lengthPixel: 400 }),
  },
  linkedin: {
    ...loop,
    y: -35,
    x: 35,
    duration: 4000,
    delay: 400,
  },
  track: {
    ...loop,
    rotate: 15,
  },
};


export class BannerImage extends Component  {
  constructor(props) {
    super(props);
   
    
    this.state = {
      apearGit:false,
      apearlinked:false,
      apearface:false,
      apearinsta:false,
      dark:false,
      pause: false,
      pauseface: false,
      pauselinked: false,
      pausegit:false
    }
  }
  componentDidMount() {
    
    this.intervalGit = setInterval(() => {this.setState({
      apearGit: true
    }); }, 9000);
    this.intervallinked = setInterval(() => {this.setState({
      apearlinked: true
    }); }, 8000);
    this.intervalface = setInterval(() => {this.setState({
      apearface: true
    }); }, 10000);
    this.intervalinsta = setInterval(() => {this.setState({
      apearinsta: true
    }); }, 11000);
  }



  onMouseOut = () => {
    this.setState(state => ({
      pause: !state.pause
    }))
    }
    onMouseOver = () => this.setState({pause : "true" });

    onMouseOutgit = () => {
      this.setState(state => ({
        pausegit: !state.pausegit
      }))
      }
      onMouseOvergit = () => this.setState({pausegit : "true" });
    
    onMouseOutface = () => {
      this.setState(state => ({
        pauseface: !state.pauseface
      }))
      }
      onMouseOverface = () => this.setState({pauseface : "true" });
      onMouseOutlinked = () => {
        this.setState(state => ({
          pauselinked: !state.pauselinked
        }))
        }
        onMouseOverlinked = () => this.setState({pauselinked : "true" });
  render (){

  return (
    <div className= "dark-wrapper-design"> 
    
      <svg width="100vw" height="100vh" viewBox="0 0 582 500">
        <defs>
          <path
            d="M 151 55 C 129.6667 62.6667 116 74.3333 110 90 C 104 105.6667 103 118.5 133 111 L 225.5 96 C 219.8333 79 209.6667 67 195 60 C 180.3333 53 165.6667 51.3333 151 55 L 137 0 L 379 8 L 382 150 L 227 187.5 L 61.5 191 C 4.5 175 -12.6667 147.8333 10 109.5 C 32.6667 71.1667 75 34.6667 137 0 L 151 55 Z"
            id="mask"
          />
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(0, 30)">  
        <g id="Group-13" transform="translate(0.000000, 41.000000)">
        
            

              {this.state.apearinsta ?<TweenOne paused={this.state.pause} onMouseLeave={this.onMouseOut} onMouseOver={this.onMouseOver} className="stop" component="g" animation={animate.insta}>
              <g transform="translate(0, 150)">


              
              <ExternalLink   href="https://www.instagram.com/hossikz/">
              <image
                      alt="globe"
                      id="id2"
                      xlinkHref="https://raw.githubusercontent.com/Hossik/Profilio/master/public/instegram.png"
                      x="6"
                      y="2"
                      width="126px"
                      height="126px"
                    /></ExternalLink>
                </g>
                
                

              </TweenOne> : <div></div>}



              { this.state.apearface ? <TweenOne paused={this.state.pauseface} onMouseLeave={this.onMouseOutface} onMouseOver={this.onMouseOverface} component="g" animation={animate.facebook} className="stop">
              <ExternalLink   href="https://www.facebook.com/Hossikz">
              <g transform="translate(430.000000, 200)">
          <path
            d="M57.378,0.001H3.352C1.502,0.001,0,1.5,0,3.353v54.026c0,1.853,1.502,3.354,3.352,3.354h29.086V37.214h-7.914v-9.167h7.914
            v-6.76c0-7.843,4.789-12.116,11.787-12.116c3.355,0,6.232,0.251,7.071,0.36v8.198l-4.854,0.002c-3.805,0-4.539,1.809-4.539,4.462
            v5.851h9.078l-1.187,9.166h-7.892v23.52h15.475c1.852,0,3.355-1.503,3.355-3.351V3.351C60.731,1.5,59.23,0.001,57.378,0.001z"
            id="line-s"
            stroke="#3b5998"
            strokeWidth="3.35"
            strokeLinecap="round"
            transform="translate(127.105708, 73.561453) rotate(-16.000000) translate(-127.105708, -73.561453) "
          />
            
              
            
        </g> 
        </ExternalLink> 



        
          </TweenOne>: <div></div> }
           
          </g>



          
          
  {this.state.apearlinked ? <TweenOne paused={this.state.pauselinked} onMouseLeave={this.onMouseOutlinked} onMouseOver={this.onMouseOverlinked} component="g" animation={animate.linkedin} className="stop">
  <ExternalLink   href="https://www.linkedin.com/in/hossik">
	<g transform="translate(360, 100)">
  <rect
    stroke="#0e76a8"
    strokeWidth="3.6"
    
    x="-15"
    y="-5"
    width="104.4"
    height="104.4"
    rx="105.6"
  /> 
		<path   d="M1.15 21.7h13V61h-13zm46.55-1.3c-5.7 0-9.1 2.1-12.7 6.7v-5.4H22V61h13.1V39.7c0-4.5 2.3-8.9 7.5-8.9s8.3 4.4 8.3 8.8V61H64V38.7c0-15.5-10.5-18.3-16.3-18.3zM7.7 2.6C3.4 2.6 0 5.7 0 9.5s3.4 6.9 7.7 6.9 7.7-3.1 7.7-6.9S12 2.6 7.7 2.6z"
      stroke="#0e76a8" strokeWidth="3.35" strokeLinecap="round"
      transform="translate(1.105708, 63.561453) rotate(16.000000) translate(-1.105708, -63.561453) "/>
		
    
             
	</g> </ExternalLink></TweenOne> : <div></div>}

  {this.state.apearGit ? <TweenOne paused={this.state.pausegit} onMouseLeave={this.onMouseOutgit} onMouseOver={this.onMouseOvergit} component="g" animation={animate.git} className="stop">
              <g transform="translate(100.000000, 20.000000)">
              <ExternalLink   href="https://github.com/Hossik">
              <div className="firefly"></div>
              <image
                      alt="globe"
                      id="id2"
                      xlinkHref="https://raw.githubusercontent.com/Hossik/Profilio/master/public/assets/GitHub-Mark-Light-120px-plus.png"
                      x="46"
                      y="62"
                      width="126px"
                      height="126px"
                    /></ExternalLink>
                </g>
                
                

              </TweenOne> : <div></div>}
              <TweenOne component="g" transform="translate(50.000000, 40.000000)">
                  
                  <image
                 
                  className="brightness "
                      alt="globe"
                      id="id2"
                      
                      xlinkHref="https://image.freepik.com/free-vector/comet-transparent-background-bright-star-starry-beautiful-path-shooting-star-comet-tail-meteor-flies-space-object_220217-626.jpg"
                      x="46"
                      y="62"
                      width="126px"
                      height="126px"
                    />



              </TweenOne>


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
                      y="52"
                      width="36px"
                      height="36px"
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


export default BannerImage








