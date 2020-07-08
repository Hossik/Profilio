import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { MDBBtn, MDBCollapse } from 'mdbreact';
import { Card} from 'reactstrap';
import {BrowserRouter, withRouter} from 'react-router-dom';
import { Contacts } from './ContactComponent';
import { Home } from './HomeComponent';
import { Tools } from './ToolsComponent'
import { TransitionGroup, CSSTransition }from 'react-transition-group';
import { Test } from './TestComponent';
import Header from './Header'
function Card (props){
    <div>
    <MDBCollapse id="basicCollapse" isOpen={props.collapseID}>    
    <div className="container"  >
      <div className="row " >
    <Card id="card"  >
        {console.log("this.state.collapseID",props.collapseID)}
        <Header id="head"/>

        <div >
        <TransitionGroup  >
        <CSSTransition  key={this.props.location.key} classNames="fade" timeout={{ enter: 300, exit: 300 }}>
        <section className="route-section">
        <Switch location={this.props.location}>
        <Route  path="/home" component={Home} />
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
        </div>
        
    </Card>
    </div>
    </div>
      
    </MDBCollapse>
    </div>
}
export default Card;