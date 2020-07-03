import React, { Component } from 'react'
import ReactTextTransition, { presets } from "react-text-transition";

const texts = ["Click", "or", "Die"]

export class Test extends Component {
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
            }, 4000);
            setInterval(() => {
              this.setState({
                textFastIndex: this.state.textFastIndex + 1
              });
            }, 150);
          }
    render() {
        return (
        <React.Fragment>
            <section className="inline" id="hossik">
            <ReactTextTransition
                text={texts[this.state.textIndex % texts.length]}
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
