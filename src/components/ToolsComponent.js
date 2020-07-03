import React from 'react';
import { CardImg, CardText, CardBody,  CardSubtitle } from 'reactstrap';
import Typist from 'react-typist';
import { Wave} from "react-animated-text";

export const Tools = () => {
  return (
    <div>
        <CardImg top id="cardimage" width="100%" src="../assets/react.png" alt="hossik" />
        <CardBody>
          <CardSubtitle className='row justify-content-center'>
            <Typist>
              Hello, My Name is Hossik
            </Typist>
          </CardSubtitle>
        <CardText >
        <Typist className="textCard">
        Typist will animate any text present in its descendents. Each text node will be animated as it is encountered in depth-first traversal of the children tree, one after the other.
        </Typist>
        <section className="flash">
            <Wave 
            text="_"
            effect="verticalFadeOut"
            effectChange={0}
            effectDirection="up"
            effectDuration={9}
            />
        </section>
        </CardText>
        </CardBody>
    </div>
    )
}
export default Tools;