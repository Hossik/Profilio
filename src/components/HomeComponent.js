import React, { Component } from 'react';
import { CardImg, CardText, CardBody,  CardSubtitle } from 'reactstrap';
import Typist from 'react-typist';

export class Home extends Component {
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
    <div>     
      <CardBody>
        <CardSubtitle >
            <Typist className="textCard">
              Hello, My Name is Hossik<CardImg top id="cardimage"  width="100%" src="../assets/hossik.jpeg" alt="hossik" />.
            </Typist>
        </CardSubtitle>
        <CardText className="textCard" >
          
          <Typist  
          className="textCard"
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
          Typist will animate any text present in its descendents. Each text node will be animated<Typist.Delay ms={2500} /><Typist.Backspace count={8} delay={200} /><br/><Typist.Delay ms={2500} />as it is encountered in depth-first traversal of the children tree, one after the other.
          
          </Typist>
        
        </CardText>
      </CardBody>
    </div>
    )
  }
}
export default Home;