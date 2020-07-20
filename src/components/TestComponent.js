import React, { Component } from 'react'
import ReactTextTransition, { presets } from "react-text-transition";

const texts = ["Click", "or", "Die"]
const secondtexts = ["Click", "to", "Close"]
export class Test extends Component  {
    state = {
        textIndex: 0
        };

        componentDidMount() {
          
            this.intervalID = setInterval(() => {
              this.setState({
                textIndex: this.state.textIndex + 1,
              });
            }, 2000);
            
          
            
          }
          
    render() {
      
        return (
        <React.Fragment>
            <section id={this.props.isOpen ? "hossik" :  "nohossik"}>
            <ReactTextTransition
                text= {this.props.isOpen ? secondtexts[this.state.textIndex % secondtexts.length] : texts[this.state.textIndex % texts.length] }
                springConfig={presets.wobbly}
                className="big"
                delay={300}
                inline
            />   
            </section>
        </React.Fragment>
        )
    }
}

export default Test
