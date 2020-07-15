import { StyledCover } from './Cover.styled';
import Main from '../Main';
import React, { Component } from 'react';
import {baseURL} from '../baseURL';
import { MDBBtn} from 'mdbreact';


export class Cover extends Component {

    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.pause = this.pause.bind(this);
        this.backward = this.backward.bind(this);

        this.state = {
          currentImage: 0,
          play:false,
          back:false,
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
   '/assets/photo301.png', 
  '/assets/photo302.png', 
  '/assets/photo303.png', 
  '/assets/photo304.png', 
  '/assets/photo305.png', 
  '/assets/photo306.png', 
  '/assets/photo307.png', 
  '/assets/photo308.png', 
  '/assets/photo309.png', 
   '/assets/photo310.png', 
   '/assets/photo311.png', 
   '/assets/photo312.png', 
   '/assets/photo313.png', 
   '/assets/photo314.png', 
   '/assets/photo315.png', 
   '/assets/photo316.png', 
   '/assets/photo317.png',
   '/assets/photo318.png', 
   '/assets/photo319.png', 
   '/assets/photo320.png',
   '/assets/photo321.png', 
  '/assets/photo322.png', 
  '/assets/photo323.png', 
  '/assets/photo324.png', 
  '/assets/photo325.png', 
  '/assets/photo326.png', 
  '/assets/photo327.png', 
  '/assets/photo328.png', 
  '/assets/photo329.png', 
   '/assets/photo330.png', 
   '/assets/photo331.png', 
   '/assets/photo332.png', 
   '/assets/photo333.png', 
   '/assets/photo334.png', 
   '/assets/photo335.png', 
   '/assets/photo336.png', 
   '/assets/photo337.png',
   '/assets/photo338.png', 
   '/assets/photo339.png',
   '/assets/photo340.png',
   '/assets/photo341.png', 
  '/assets/photo342.png', 
  '/assets/photo343.png', 
  '/assets/photo344.png', 
  '/assets/photo345.png', 
  '/assets/photo346.png', 
  '/assets/photo347.png', 
  '/assets/photo348.png', 
  '/assets/photo349.png', 
   '/assets/photo350.png', 
   '/assets/photo351.png', 
   '/assets/photo352.png', 
   '/assets/photo353.png', 
   '/assets/photo354.png', 
   '/assets/photo355.png', 
   '/assets/photo356.png', 
   '/assets/photo357.png',
   '/assets/photo358.png', 
   '/assets/photo359.png', 
   '/assets/photo360.png',
   '/assets/photo361.png', 
  '/assets/photo362.png', 
  '/assets/photo363.png', 
  '/assets/photo364.png', 
  '/assets/photo365.png', 
  '/assets/photo366.png', 
  '/assets/photo367.png', 
  '/assets/photo368.png', 
  '/assets/photo369.png', 
   '/assets/photo370.png', 
   '/assets/photo371.png', 
   '/assets/photo372.png', 
   '/assets/photo373.png', 
   '/assets/photo374.png', 
   '/assets/photo375.png', 
   '/assets/photo376.png', 
   '/assets/photo377.png',
   '/assets/photo378.png', 
   '/assets/photo379.png',
   '/assets/photo380.png', 
   '/assets/photo381.png', 
  '/assets/photo382.png', 
  '/assets/photo283.png', 
  '/assets/photo384.png', 
  '/assets/photo385.png', 
  '/assets/photo386.png', 
  '/assets/photo387.png', 
  '/assets/photo388.png', 
  '/assets/photo389.png', 
   '/assets/photo390.png', 
   '/assets/photo391.png', 
   '/assets/photo392.png', 
   '/assets/photo393.png', 
   '/assets/photo394.png', 
   '/assets/photo395.png', 
   '/assets/photo396.png', 
   '/assets/photo397.png',
   '/assets/photo398.png', 
   '/assets/photo399.png', 
   '/assets/photo400.png',
   '/assets/photo401.png', 
  '/assets/photo402.png', 
  '/assets/photo403.png', 
  '/assets/photo404.png', 
  '/assets/photo405.png', 
  '/assets/photo406.png', 
  '/assets/photo407.png', 
  '/assets/photo408.png', 
  '/assets/photo409.png', 
   '/assets/photo410.png', 
   '/assets/photo411.png', 
   '/assets/photo412.png', 
   '/assets/photo413.png', 
   '/assets/photo414.png', 
   '/assets/photo415.png', 
   '/assets/photo416.png', 
   '/assets/photo417.png',
   '/assets/photo418.png', 
   '/assets/photo419.png', 
   '/assets/photo420.png',
   '/assets/photo421.png', 
  '/assets/photo422.png', 
  '/assets/photo423.png', 
  '/assets/photo424.png', 
  '/assets/photo425.png', 
  '/assets/photo426.png', 
  '/assets/photo427.png', 
  '/assets/photo428.png', 
  '/assets/photo429.png', 
   '/assets/photo430.png', 
   '/assets/photo431.png', 
   '/assets/photo434.png', 
   '/assets/photo433.png', 
   '/assets/photo434.png', 
   '/assets/photo435.png', 
   '/assets/photo436.png', 
   '/assets/photo437.png',
   '/assets/photo438.png', 
   '/assets/photo439.png',
   '/assets/photo440.png',
   '/assets/photo441.png', 
  '/assets/photo442.png', 
  '/assets/photo443.png', 
  '/assets/photo444.png', 
  '/assets/photo445.png', 
  '/assets/photo446.png', 
  '/assets/photo447.png', 
  '/assets/photo448.png', 
  '/assets/photo449.png', 
   '/assets/photo450.png', 
   '/assets/photo451.png', 
   '/assets/photo452.png', 
   '/assets/photo453.png', 
   '/assets/photo454.png', 
   '/assets/photo455.png', 
   '/assets/photo456.png', 
   '/assets/photo457.png',
   '/assets/photo458.png', 
   '/assets/photo459.png', 
   '/assets/photo460.png',
   '/assets/photo461.png', 
  '/assets/photo462.png', 
  '/assets/photo463.png', 
  '/assets/photo464.png', 
  '/assets/photo465.png', 
  '/assets/photo466.png', 
  '/assets/photo467.png', 
  '/assets/photo468.png', 
  '/assets/photo469.png', 
   '/assets/photo470.png', 
   '/assets/photo471.png', 
   '/assets/photo472.png', 
   '/assets/photo473.png', 
   '/assets/photo474.png', 
   '/assets/photo475.png', 
   '/assets/photo476.png', 
   '/assets/photo477.png',
   '/assets/photo478.png', 
   '/assets/photo479.png',
   '/assets/photo480.png', 
   '/assets/photo481.png', 
  '/assets/photo482.png', 
  '/assets/photo483.png', 
  '/assets/photo484.png', 
  '/assets/photo485.png', 
  '/assets/photo486.png', 
  '/assets/photo487.png', 
  '/assets/photo488.png', 
  '/assets/photo489.png', 
   '/assets/photo490.png', 
   '/assets/photo491.png', 
   '/assets/photo492.png', 
   '/assets/photo493.png', 
   '/assets/photo494.png', 
   '/assets/photo495.png', 
   '/assets/photo496.png', 
   '/assets/photo497.png',
   '/assets/photo498.png', 
   '/assets/photo499.png', 
   '/assets/photo500.png',
   '/assets/photo401.png', 
  '/assets/photo502.png', 
  '/assets/photo503.png', 
  '/assets/photo504.png', 
  '/assets/photo505.png', 
  '/assets/photo506.png', 
  '/assets/photo507.png', 
  '/assets/photo508.png', 
  '/assets/photo509.png', 
   '/assets/photo510.png', 
   '/assets/photo511.png', 
   '/assets/photo512.png', 
   '/assets/photo513.png', 
   '/assets/photo514.png', 
   '/assets/photo515.png', 
   '/assets/photo516.png', 
   '/assets/photo517.png',
   '/assets/photo518.png', 
   '/assets/photo519.png', 
   '/assets/photo520.png',
   '/assets/photo521.png', 
  '/assets/photo522.png', 
  '/assets/photo523.png', 
  '/assets/photo524.png', 
  '/assets/photo525.png', 
  '/assets/photo526.png', 
  '/assets/photo527.png', 
  '/assets/photo528.png', 
  '/assets/photo529.png', 
   '/assets/photo530.png', 
   '/assets/photo531.png', 
   '/assets/photo534.png', 
   '/assets/photo533.png', 
   '/assets/photo534.png', 
   '/assets/photo535.png', 
   '/assets/photo536.png', 
   '/assets/photo537.png',
   '/assets/photo538.png', 
   '/assets/photo539.png',
   '/assets/photo540.png',
   '/assets/photo541.png', 
  '/assets/photo542.png', 
  '/assets/photo543.png',
          ]
        };
      }
      addDefaultSrc(ev){
        ev.target.src = baseURL+'/assets/photo1.png'
      }
      switchImage() {
        if (this.state.play === true){
          if (this.state.back === true){
            if (this.state.currentImage > 0 ) {
              this.setState({
                currentImage: this.state.currentImage - 1
              })
            } else {
              this.setState({
                currentImage:  this.state.images.length - 1
              });
            }
          }
          else{
        if (this.state.currentImage < this.state.images.length - 1 ) {
          this.setState({
            currentImage: this.state.currentImage + 1
          })
        } else {
          this.setState({
            currentImage: 0
          });
        }
        return this.currentImage;
      }}
    else{
      return this.currentImage;
    }}
   
    pause = () => {
  this.setState(state => ({
    play: !state.play
  }))
  }
  backward = () => {
    this.setState(state => ({
      back: !state.back
    }))
  }
      componentDidMount() {
        setInterval(this.switchImage, 600);
      }


    render() {
        return (
           
            <StyledCover>
        <img src={baseURL+this.state.images[this.state.currentImage]} alt="img" loading="lazy"  />
        <div className="dark-overlay ">
        <div className="scroll">
          <div id="welcome">
            Wolcome-{'    '}<span>{'    '}To-</span>{'    '}<span>{'    '}My-{'    '}</span>{'    '}<span>{'    '}Page{'    '}</span>
            <span className="first">Wolcome-{'    '}</span><span className="first">{'    '}To-</span>{'    '}<span className="first">{'    '}My-{'    '}</span>{'    '}<span className="first">{'    '}Page{'    '}</span>
            <span>Wolcome-{'    '}</span><span>{'    '}To-</span>{'    '}<span>{'    '}My-{'    '}</span>{'    '}<span>{'    '}Page{'    '}</span>
          </div>
        </div>
        <div id="controler">
        <MDBBtn id="play" color="elegant" style={{textAlign: 'center',margin: 'auto' ,padding:"auto"}}
      onClick={this.pause}>{this.state.play?<i style={{margin: 'auto'}}id="nohossik" class="fas fa-pause-circle"></i>:<i id="hossik" style={{margin: 'auto'}} class="fas fa-play-circle"></i>}</MDBBtn> { }
      <MDBBtn id="back" color="elegant" style={{textAlign: 'center',margin: 'auto' ,padding:"auto"}}onClick={this.backward}>{this.state.back?<i style={{margin: 'auto'}}id="nohossik" class="fas fa-forward"></i>:<i id="hossik" style={{margin: 'auto'}} class="fas fa-backward"></i>}</MDBBtn></div>
        <div className ="landing-inner">
          
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