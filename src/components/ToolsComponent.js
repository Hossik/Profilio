import React, { Component } from 'react';
import Typist from 'react-typist';

export class Tools extends Component {
  state ={
    blinking : "|" 
  }
  blink = () => {
    this.setState({
      blinking :"_"
    })
  } 
  blinkFinish = () => {
    this.setState({
      blinking :"|"
    })
  } 
  render(){
  return (
    <div >
    <Typist className="textCard"
      stdTypingDelay="100" 
      startDelay="1000"
      cursor={{
        show: false
      }}>
        <p  id="zir" >
        Its Me Typist will animate any text 
        </p>
    </Typist>
        <br/>
      {<Typist  
      className="textCardtwo"
      stdTypingDelay="100" 
      startDelay="2500"
      cursor={{
        show: true,
        blink: true,
        element: this.state.blinking,
        hideWhenDone: true,
        hideWhenDoneDelay: '1000',
      }}
      onCharacterTyped={this.blink}
      onLineTyped={this.blinkFinish}
      onTypingDone={this.blinkFinish}
      >        
      <span >Typist will animate any text present in its descendents. Each text node will be animated</span><Typist.Delay ms={2500} /><Typist.Backspace count={8} delay={200} /><br/><Typist.Delay ms={2500} /><span>as it is encountered in depth-first traversal of the children tree, one after the other.</span>
      </Typist>}
      </div>
    )
  }
}
export default Tools;