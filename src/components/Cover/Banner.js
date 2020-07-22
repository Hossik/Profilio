
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
  const sead =
  'M 0 100 C 7.3333 89 14.3333 81.6667 21 78 C 25.3601 75.6019 29.8706 72.9026 23 55 C 37.0479 66.2454 39.3981 62.0759 42.5 57 C 48 46.5 73 60 70 28 C 77.5 23.5 81.5 20 97 31 C 89.8333 13.3333 94.3333 8 100 0'
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
  greenBall: {
    path: { x: p, y: p },
    duration: 5000,
    repeat: -1,
    ease: TweenOne.easing.path(easePath, { lengthPixel: 400 }),
  },
  linkedin: {
    ...loop,
    y: 35,
    x:35,
    duration: 4000,
    delay: 400,
  },
  track: {
    ...loop,
    rotate: 15,
  },
};


export class BannerImage extends Component  {
  
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
              </TweenOne>

              <TweenOne component="g" animation={animate.linkedin}>
              <image
                      alt="globe"
                      id="id2"
                      xlinkHref="./assets/instegram.png"
                      x="46"
                      y="62"
                      width="126px"
                      height="126px"
                    />



              </TweenOne>



              <TweenOne component="g" animation={animate.facebook}>

              <g transform="translate(100.000000, 20.000000)">
          <path
            d="M57.378,0.001H3.352C1.502,0.001,0,1.5,0,3.353v54.026c0,1.853,1.502,3.354,3.352,3.354h29.086V37.214h-7.914v-9.167h7.914
            v-6.76c0-7.843,4.789-12.116,11.787-12.116c3.355,0,6.232,0.251,7.071,0.36v8.198l-4.854,0.002c-3.805,0-4.539,1.809-4.539,4.462
            v5.851h9.078l-1.187,9.166h-7.892v23.52h15.475c1.852,0,3.355-1.503,3.355-3.351V3.351C60.731,1.5,59.23,0.001,57.378,0.001z"
            id="line-s"
            stroke="#3b5998"
            strokeWidth="5.35"
            strokeLinecap="round"
            transform="translate(127.105708, 73.561453) rotate(-16.000000) translate(-127.105708, -73.561453) "
          />
            <ExternalLink   href="https://www.facebook.com/Hossikz">
              <text x="0" y="30" font-family="Verdana" font-size="15" fill="red" opacity="0">Hello</text> 
              <text x="0" y="40" font-family="Verdana" font-size="15" fill="red" opacity="0">Hellosd</text>
              <text x="0" y="50" font-family="Verdana" font-size="15" fill="red" opacity="0">Hellosd</text>
              <text x="0" y="60" font-family="Verdana" font-size="15" fill="red" opacity="0">Hello</text> 
              <text x="0" y="70" font-family="Verdana" font-size="15" fill="red" opacity="0">Hellosd</text>
              <text x="0" y="80" font-family="Verdana" font-size="15" fill="red" opacity="0">Hellosd</text>
              <text x="0" y="90" font-family="Verdana" font-size="15" fill="red" opacity="0">Hellosd</text>
            </ExternalLink>
        </g> 




        
          </TweenOne>
           
          </g>



          
          <g transform="translate(300, 100)">
  <TweenOne component="g" animation={animate.linkedin}>
	<g>
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
		<ExternalLink   href="https://www.linkedin.com/in/hossik">
    <text x="0" y="10" font-family="Verdana" font-size="15" fill="red" opacity="0">Hellosdsfasxds</text> 
    <text x="0" y="20" font-family="Verdana" font-size="15" fill="red" opacity="0" >Hellosasxadsfds</text> 
              <text x="0" y="30" font-family="Verdana" font-size="15" fill="red" opacity="0" >Hellosasxsaxds</text> 
              <text x="0" y="40" font-family="Verdana" font-size="15" fill="red" opacity="0" >Helloasxsaxsdsd</text>
              <text x="0" y="50" font-family="Verdana" font-size="15" fill="red" opacity="0" >Hellasxasxosds</text>
              <text x="0" y="60" font-family="Verdana" font-size="15" fill="red" opacity="0" >Hellosaxsaxsds</text> 
              <text x="0" y="70" font-family="Verdana" font-size="15" fill="red" opacity="0" >Hellasxasxosdsdf</text>
              <text x="0" y="80" font-family="Verdana" font-size="15" fill="red" opacity="0" >Hellossaxxdsdf</text>
              <text x="0" y="90" font-family="Verdana" font-size="15" fill="red" opacity="0" >Hellosdsdfsd</text>
              </ExternalLink>
	</g></TweenOne>
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


export default BannerImage








