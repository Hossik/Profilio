import React, { Component } from 'react';
import Typist from 'react-typist';
import './text.scss';
import { Link } from 'react-router-dom';

export class Home extends Component {
  state ={
    blinking : "|" ,
    renderMsg: false
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
  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  }
  render(){
  return (
      <div>    
        <Typist 
          className="TypistExample-header "
          avgTypingDelay={40}
          startDelay={2000}
          onTypingDone={this.onHeaderTyped}>
            Its Me Typist will animate any text 
        </Typist>
          
        <div >
          {this.state.renderMsg ? (
            <Typist
              className="TypistExample-message"
              cursor={{ hideWhenDone: true }}
            >
              * Easy to style
              <Typist.Delay ms={1250} />
              <br />
              * Easy to customize
              <Typist.Delay ms={1250} />
              <br />
              * Easy to use backp<Typist.Delay ms={500} />sace
              <Typist.Backspace count={5} delay={1000} />
              <Typist.Delay ms={750} />
              space
              <Typist.Delay ms={1250} />
              <br />
              <span >* <Link className="flash" to={"/aboutMe"} >docs</Link></span>
              
              {''}
            </Typist>
          ) : null }
        </div>
      </div>
    )
  }
}
export default Home;