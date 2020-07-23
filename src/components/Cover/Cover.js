import { StyledCover } from './Cover.styled';
import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import { WindMillLoading	 } from 'react-loadingg'
import InnerCover from './InnerCover'

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








