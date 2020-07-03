import React, { Component } from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { MDBBtn, MDBCollapse } from 'mdbreact';
import { Card, CardTitle }
from 'reactstrap';
import {BrowserRouter, withRouter} from 'react-router-dom';
import { Contacts } from './ContactComponent';
import { Home } from './HomeComponent';
import { Tools } from './ToolsComponent'
import { TransitionGroup, CSSTransition }from 'react-transition-group';
import { Test } from './TestComponent';


class Main extends Component {
  state = {
      collapseID: "",
    };
    
  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  }
  
  render() {

  return (
      
    <React.Fragment className="header col-12 col-md-10 ">
        <Test />
      <MDBBtn
        className="btn btn-dark btn-circle btn-xl"
        onClick={this.toggleCollapse("basicCollapse")}>
        <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>    </MDBBtn>
      <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
        <div>
          <Card id="card" className="col-12 col-md-10" style={{width:'100rem' ,height:"60rem"}}>
            <CardTitle id="cardtitle" className='row justify-content-center'>
              <Link className="links" to="/home"><span>home</span></Link>      
              <Link className="links" to="/tools"><span>tools</span></Link><Link className="links" to="/contacts"><span>contacts</span></Link>
            </CardTitle>
            <TransitionGroup id="components">
              <CSSTransition key={this.props.location.key} classNames="fade" timeout={{ enter: 300, exit: 300 }}>
              <section className="route-section">
            <Switch location={this.props.location}>
              <Route path="/home" component={Home} />
              <Route path="/tools" component={Tools} />
              <BrowserRouter>
                <div className='hoss '>
                  <Contacts />
                </div>
              </BrowserRouter>        
              <Redirect to="/home" />
            </Switch>
            </section>
            </CSSTransition>
            </TransitionGroup>
          </Card>
        </div>
      </MDBCollapse>
    </React.Fragment>
    )
  }
}

export default withRouter(Main);
