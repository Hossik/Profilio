import { StyledCover } from './Cover.styled';
import React, { Component } from 'react';

import InnerCover from './InnerCover'

export class Cover extends Component {
  
    constructor(props) {
        super(props);
        this.darking = this.darking.bind(this);
       
        
        this.state = {
         
          play:false,
          dark:false,
          textIndex: 0,
          titletime :false,
          player : false,
          helpplayer:false,
         
          muted:false,
          
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




    darking = () => {
      this.setState(state => ({
        dark: !state.dark
      }))
      }
    
   
  

  muted = () => {
    this.setState(state => ({
      muted: !state.muted
    }))
    }



 
    render() {
        return (
          
        <StyledCover >
        
     
      
      
         
      
      <React.Fragment>
       
      
      
      <InnerCover 
          dark={this.state.dark}
          textIndex= {this.state.textIndex}
          titletime ={this.state.titletime}
          player = {this.state.player}
          helpplayer={this.state.helpplayer}
          muted={this.state.muted}
          palying={this.darking}
          />
          
          </React.Fragment>
        
        </StyledCover>
        )
  
        
    }
}

export default Cover








