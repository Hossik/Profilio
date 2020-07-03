import React from 'react';
import { CardImg, CardText, CardBody,  CardSubtitle } from 'reactstrap';
import Typist from 'react-typist';
import { Wave } from "react-animated-text";

export const Home = ()  => {
  return (
    <div>
      
      <CardBody>
        <CardSubtitle >
            <Typist>
              Hello, My Name is Hossik<CardImg top id="cardimage"  width="100%" src="../assets/hossik.jpeg" alt="hossik" />.
            </Typist>
        </CardSubtitle>
        <CardText  >
          <Typist className="textCard" stdTypingDelay="100" startDelay="2500">
          
          Typist will animate any text present in its descendents. Each text node will be animated<Typist.Delay ms={2500} /><Typist.Backspace count={8} delay={200} /><br/><Typist.Delay ms={2500} />as it is encountered in depth-first traversal of the children tree, one after the other.
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
export default Home;