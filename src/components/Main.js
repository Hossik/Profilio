import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { MDBBtn, MDBCollapse } from 'mdbreact';
import { Card, CardTitle} from 'reactstrap';
import {BrowserRouter, withRouter} from 'react-router-dom';
import { Contacts } from './ContactComponent';
import { Home } from './HomeComponent';
import { Tools } from './ToolsComponent'
import { TransitionGroup, CSSTransition }from 'react-transition-group';
import { Test } from './TestComponent';
import Header from './Header'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: "",
    };
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
      className="col-5 col-sm-7 col-md-12 m-1 btn btn-dark btn-circle btn-xl"
      onClick={this.toggleCollapse("basicCollapse")}>
      <i class="d-none d-md-block fa fa-cog fa-spin fa-3x fa-fw"></i>    
    </MDBBtn>
    <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>    
    <div className="container">
      <div className="row ">
        <Card id="card"  >
          <CardTitle className='row justify-content-center'>
          <Header/>
          </CardTitle>
          
          <TransitionGroup >
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
    </div>
      
    </MDBCollapse>
  </React.Fragment>
    )
  }
}

export default withRouter(Main);
