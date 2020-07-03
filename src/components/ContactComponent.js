import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import {  CardImg, CardText, CardBody,  CardSubtitle,CardFooter } from 'reactstrap';

const Facebook = () => {
    return (
      <div>
        <CardImg id="cardimage" width="100%" height="100%" src='../assets/face.png'/>
      </div>
    )
  }
  const Linkedin = () => {
    return (
      <div>
        <CardImg id="cardimage" width="100%" height="100%" src='../assets/hoss.jpeg'/>
      </div>
    )
  }
  const Github = () => {
    return (
      <div>
        <CardImg id="cardimage" width="100%" height="100%" src='../assets/hoss.jpeg'/>
      </div>
    )
  }
export class Contacts extends Component {
    render() {
        return (
        <div>
          <Switch>
            <Route path="/facebook" component={Facebook} />
            <Route path="/linkedin" component={Linkedin} />
            <Route path="/github" component={Github} />
            <Redirect to="/github" />
          </Switch>
          <CardBody>
            <CardSubtitle className='row justify-content-center'>Hello, My Name is Hossik</CardSubtitle>
            <CardText id="cardtext">I am a Designer / Front End Developer living in Kyiv, Ukraine.
          </CardText>
          </CardBody>
          <CardFooter>
            <Link className="links" to="/facebook"><span>facebook</span></Link>
            <Link className="links" to="/linkedin"><span>linkedin</span></Link>
            <Link className="links" to="/github"><span>github</span></Link>
          </CardFooter>
        </div>
        )
    }
}

export default Contacts;
