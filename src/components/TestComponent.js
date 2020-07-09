import React, { Component } from 'react'
import ReactTextTransition, { presets } from "react-text-transition";

const texts = ["Click", "or", "Die"]
const secondtexts = ["Click", "to", "Close"]
export class Test extends Component  {
    state = {
        textIndex: 0,
        textFastIndex: 0
        };
        componentDidMount() {
            setInterval(() => {
              this.setState({
                textIndex: this.state.textIndex + 1,
                paragraphIndex: this.state.paragraphIndex + 1
              });
            }, 2000);
            setInterval(() => {
              this.setState({
                textFastIndex: this.state.textFastIndex + 1
              });
            }, 150);
          }
    render() {
        return (
        <React.Fragment>
            <section id={this.props.isOpen ? "hossik" :  "nohossik"}>
            <ReactTextTransition
                text= {this.props.isOpen ? secondtexts[this.state.textIndex % secondtexts.length] : texts[this.state.textIndex % texts.length] }
                spring={presets.gentle}
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
