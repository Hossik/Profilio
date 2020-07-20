import { StyledIntro } from './Intro.styled';
import React, { Component } from 'react';
import ReactTextTransition, { presets } from "react-text-transition";

const hossik = ["HOSSIK PAGE"," "]
const welcome = ["WELCOME TO"," "]

export class Intro extends Component {
        state = {
            textIndex: 0
        };
       
        remove = () => { 
            clearInterval(this.intervalID)
          }
        componentDidMount() {
        
            this.intervalID = setInterval(() => {
            this.setState({
                textIndex: this.state.textIndex + 1,
            });
            }, 9900);
            
            setInterval (this.remove)
            
        }
    render(){
        console.log("this.state.textIndex",this.state.textIndex)
        return(
        <StyledIntro>
            <div className="dark-overlay ">
            <section className="container linetext">
                
            <section  id= "up" >
            <ReactTextTransition
               text= { welcome[this.state.textIndex % welcome.length] }
               springConfig={ presets.molasses
               }
               delay={4000}
               className="big"
               direction="up"
               inline
            />
            </section>
            <section id="down">
            <ReactTextTransition
               text= { hossik[this.state.textIndex % hossik.length] }
               springConfig={ presets.molasses
               }
               delay={4000}
               className="big"
               direction="down"
               inline
            />
            </section></section>
            
            <div className="line " >
                ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                
        </div>
        </div>
            </StyledIntro>
        )
    }
}
export default Intro
