import { StyledCover } from './Cover.styled';
import Main from '../Main';
import React, { Component } from 'react';
import {baseURL} from '../baseURL';

export class Cover extends Component {

    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.state = {
          currentImage: 0,
          images: [
  '/assets/photo1.png', 
  '/assets/photo2.png', 
  '/assets/photo3.png', 
  '/assets/photo4.png', 
  '/assets/photo5.png', 
  '/assets/photo6.png', 
  '/assets/photo7.png', 
  '/assets/photo8.png', 
  '/assets/photo9.png', 
   '/assets/photo10.png', 
   '/assets/photo11.png', 
   '/assets/photo12.png', 
   '/assets/photo13.png', 
   '/assets/photo14.png', 
   '/assets/photo15.png', 
   '/assets/photo16.png', 
   '/assets/photo17.png',
   '/assets/photo18.png', 
   '/assets/photo19.png', 
   '/assets/photo20.png',
   '/assets/photo21.png', 
  '/assets/photo22.png', 
  '/assets/photo23.png', 
  '/assets/photo24.png', 
  '/assets/photo25.png', 
  '/assets/photo26.png', 
  '/assets/photo27.png', 
  '/assets/photo28.png', 
  '/assets/photo29.png', 
   '/assets/photo30.png', 
   '/assets/photo31.png', 
   '/assets/photo32.png', 
   '/assets/photo33.png', 
   '/assets/photo34.png', 
   '/assets/photo35.png', 
   '/assets/photo36.png', 
   '/assets/photo37.png',
   '/assets/photo38.png', 
   '/assets/photo39.png', 
   '/assets/photo40.png',
   '/assets/photo41.png', 
  '/assets/photo42.png', 
  '/assets/photo43.png', 
  '/assets/photo44.png', 
  '/assets/photo45.png', 
  '/assets/photo46.png', 
  '/assets/photo47.png', 
  '/assets/photo48.png', 
  '/assets/photo49.png', 
   '/assets/photo50.png', 
   '/assets/photo51.png', 
   '/assets/photo52.png', 
   '/assets/photo53.png', 
   '/assets/photo54.png', 
   '/assets/photo55.png', 
   '/assets/photo56.png', 
   '/assets/photo57.png',
   '/assets/photo58.png', 
   '/assets/photo59.png', 
  '/assets/photo62.png', 
  '/assets/photo63.png', 
  '/assets/photo64.png', 
  '/assets/photo65.png', 
  '/assets/photo66.png', 
  '/assets/photo67.png', 
  '/assets/photo68.png', 
  '/assets/photo69.png', 
   '/assets/photo70.png', 
   '/assets/photo71.png', 
   '/assets/photo72.png', 
   '/assets/photo73.png', 
   '/assets/photo74.png', 
   '/assets/photo75.png', 
   '/assets/photo76.png', 
   '/assets/photo77.png',
   '/assets/photo78.png', 
   '/assets/photo79.png', 
   '/assets/photo80.png',
   '/assets/photo81.png', 
  '/assets/photo82.png', 
  '/assets/photo83.png', 
  '/assets/photo84.png', 
  '/assets/photo85.png', 
  '/assets/photo86.png', 
  '/assets/photo87.png', 
  '/assets/photo88.png', 
  '/assets/photo89.png', 
   '/assets/photo90.png', 
   '/assets/photo91.png', 
   '/assets/photo92.png', 
   '/assets/photo93.png', 
   '/assets/photo94.png', 
   '/assets/photo95.png', 
   '/assets/photo96.png', 
   '/assets/photo97.png',
   '/assets/photo98.png', 
   '/assets/photo99.png', 
   '/assets/photo100.png',
   '/assets/photo101.png', 
  '/assets/photo102.png', 
  '/assets/photo103.png', 
  '/assets/photo104.png', 
  '/assets/photo105.png', 
  '/assets/photo106.png', 
  '/assets/photo107.png', 
  '/assets/photo108.png', 
  '/assets/photo109.png', 
   '/assets/photo100.png', 
   '/assets/photo111.png', 
   '/assets/photo112.png', 
   '/assets/photo113.png', 
   '/assets/photo114.png', 
   '/assets/photo115.png', 
   '/assets/photo116.png', 
   '/assets/photo117.png',
   '/assets/photo118.png', 
   '/assets/photo119.png',
   '/assets/photo120.png',
   '/assets/photo121.png', 
  '/assets/photo122.png', 
  '/assets/photo123.png', 
  '/assets/photo124.png', 
  '/assets/photo125.png', 
  '/assets/photo126.png', 
  '/assets/photo127.png', 
  '/assets/photo128.png', 
  '/assets/photo129.png', 
   '/assets/photo130.png', 
   '/assets/photo131.png', 
   '/assets/photo132.png', 
   '/assets/photo133.png', 
   '/assets/photo134.png', 
   '/assets/photo135.png', 
   '/assets/photo136.png', 
   '/assets/photo137.png',
   '/assets/photo138.png', 
   '/assets/photo139.png', 
   '/assets/photo140.png',
   '/assets/photo141.png', 
  '/assets/photo142.png', 
  '/assets/photo143.png', 
  '/assets/photo144.png', 
  '/assets/photo145.png', 
  '/assets/photo146.png', 
  '/assets/photo147.png', 
  '/assets/photo148.png', 
  '/assets/photo149.png', 
   '/assets/photo150.png', 
   '/assets/photo151.png', 
   '/assets/photo152.png', 
   '/assets/photo153.png', 
   '/assets/photo154.png', 
   '/assets/photo155.png', 
   '/assets/photo156.png', 
   '/assets/photo157.png',
   '/assets/photo158.png', 
   '/assets/photo159.png', 
   '/assets/photo160.png',
   '/assets/photo161.png', 
  '/assets/photo162.png', 
  '/assets/photo163.png', 
  '/assets/photo164.png', 
  '/assets/photo165.png', 
  '/assets/photo166.png', 
  '/assets/photo167.png', 
  '/assets/photo168.png', 
  '/assets/photo169.png', 
   '/assets/photo170.png', 
   '/assets/photo171.png', 
   '/assets/photo172.png', 
   '/assets/photo173.png', 
   '/assets/photo174.png', 
   '/assets/photo175.png', 
   '/assets/photo176.png', 
   '/assets/photo177.png',
   '/assets/photo178.png', 
   '/assets/photo179.png',
   '/assets/photo180.png', 
   '/assets/photo181.png', 
  '/assets/photo182.png', 
  '/assets/photo183.png', 
  '/assets/photo184.png', 
  '/assets/photo185.png', 
  '/assets/photo186.png', 
  '/assets/photo187.png', 
  '/assets/photo188.png', 
  '/assets/photo189.png', 
   '/assets/photo190.png', 
   '/assets/photo191.png', 
   '/assets/photo192.png', 
   '/assets/photo193.png', 
   '/assets/photo194.png', 
   '/assets/photo195.png', 
   '/assets/photo196.png', 
   '/assets/photo197.png',
   '/assets/photo198.png', 
   '/assets/photo199.png', 
   '/assets/photo200.png',
   '/assets/photo201.png', 
  '/assets/photo202.png', 
  '/assets/photo203.png', 
  '/assets/photo204.png', 
  '/assets/photo205.png', 
  '/assets/photo206.png', 
  '/assets/photo207.png', 
  '/assets/photo208.png', 
  '/assets/photo209.png', 
   '/assets/photo210.png', 
   '/assets/photo211.png', 
   '/assets/photo212.png', 
   '/assets/photo213.png', 
   '/assets/photo214.png', 
   '/assets/photo215.png', 
   '/assets/photo216.png', 
   '/assets/photo217.png',
   '/assets/photo218.png', 
   '/assets/photo219.png', 
   '/assets/photo220.png',
   '/assets/photo221.png', 
  '/assets/photo222.png', 
  '/assets/photo223.png', 
  '/assets/photo224.png', 
  '/assets/photo225.png', 
  '/assets/photo226.png', 
  '/assets/photo227.png', 
  '/assets/photo228.png', 
  '/assets/photo229.png', 
   '/assets/photo230.png', 
   '/assets/photo231.png', 
   '/assets/photo232.png', 
   '/assets/photo233.png', 
   '/assets/photo234.png', 
   '/assets/photo235.png', 
   '/assets/photo236.png', 
   '/assets/photo237.png',
   '/assets/photo238.png', 
   '/assets/photo239.png',
   '/assets/photo240.png',
   '/assets/photo241.png', 
  '/assets/photo242.png', 
  '/assets/photo243.png', 
  '/assets/photo244.png', 
  '/assets/photo245.png', 
  '/assets/photo246.png', 
  '/assets/photo247.png', 
  '/assets/photo248.png', 
  '/assets/photo249.png', 
   '/assets/photo250.png', 
   '/assets/photo251.png', 
   '/assets/photo252.png', 
   '/assets/photo253.png', 
   '/assets/photo254.png', 
   '/assets/photo255.png', 
   '/assets/photo256.png', 
   '/assets/photo257.png',
   '/assets/photo258.png', 
   '/assets/photo259.png', 
   '/assets/photo260.png',
   '/assets/photo261.png', 
  '/assets/photo262.png', 
  '/assets/photo263.png', 
  '/assets/photo264.png', 
  '/assets/photo265.png', 
  '/assets/photo266.png', 
  '/assets/photo267.png', 
  '/assets/photo268.png', 
  '/assets/photo269.png', 
   '/assets/photo270.png', 
   '/assets/photo271.png', 
   '/assets/photo272.png', 
   '/assets/photo273.png', 
   '/assets/photo274.png', 
   '/assets/photo275.png', 
   '/assets/photo276.png', 
   '/assets/photo277.png',
   '/assets/photo278.png', 
   '/assets/photo279.png',
   '/assets/photo280.png', 
   '/assets/photo281.png', 
  '/assets/photo282.png', 
  '/assets/photo283.png', 
  '/assets/photo284.png', 
  '/assets/photo285.png', 
  '/assets/photo286.png', 
  '/assets/photo287.png', 
  '/assets/photo288.png', 
  '/assets/photo289.png', 
   '/assets/photo290.png', 
   '/assets/photo291.png', 
   '/assets/photo292.png', 
   '/assets/photo293.png', 
   '/assets/photo294.png', 
   '/assets/photo295.png', 
   '/assets/photo296.png', 
   '/assets/photo297.png',
   '/assets/photo298.png', 
   '/assets/photo299.png', 
   '/assets/photo300.png',
          ]
        };
      }
    
      switchImage() {
        if (this.state.currentImage < this.state.images.length - 1) {
          this.setState({
            currentImage: this.state.currentImage + 1
          });
        } else {
          this.setState({
            currentImage: 0
          });
        }
        return this.currentImage;
      }
    
      componentDidMount() {
        setInterval(this.switchImage, 250);
      }


    render() {
        return (
           
            <StyledCover>
        <img src={baseURL+this.state.images[this.state.currentImage]} alt="img" loading="lazy"  />
        <div className="dark-overlay ">
          
        <div className ="landing-inner">
         
          { 5<this.state.currentImage && this.state.currentImage<15 ?   
          <span role="img" aria-label="rabbit" id="rabbit">&#x1f407; &#x1f407;</span> : <span></span>}
          { 48<this.state.currentImage && this.state.currentImage<58 ?   
          <span role="img" aria-label="owl" id="owl">&#x1f989;
          </span> : <span></span>}
          { 60<this.state.currentImage && this.state.currentImage<70 ?   
          <span role="img" aria-label="sexy" id="sexy">&#x1f46f; &#x200d; &#x2642; &#xfe0f;
          </span> : <span></span>}
          
        <div className='inner'>
          
            <Main className="hoss"/>
        </div>
        </div>
        </div>
        </StyledCover>
  
        )
    }
}

export default Cover











// const Cover = () => {
//   return (
// <StyledCover>
// <div className="landing-inner">
//     <div className="hoss">
    

//         <Main/>
//     </div>
//     </div>
// </StyledCover>
//   )}

// export default Cover;