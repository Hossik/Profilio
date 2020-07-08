import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { MDBBtn, MDBCollapse } from 'mdbreact';
import { Card} from 'reactstrap';
import { withRouter} from 'react-router-dom';
import { Contacts } from './ContactComponent';
import { Home } from './HomeComponent';
import { Tools } from './ToolsComponent'
import { TransitionGroup, CSSTransition }from 'react-transition-group';
import { Test } from './TestComponent';
import Header from './Header';
import AboutMe from './AboutMe'
import Footer from './Footer';

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
      
  <React.Fragment className="header col-12 col-md-10 " >
      
    <MDBBtn
      className="btn btn-dark btn-circle btn-xl"
      onClick={this.toggleCollapse("basicCollapse")}>
      <i ><Test
      isOpen={this.state.collapseID}/></i>    
    </MDBBtn>
    <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>    
    <div className="container"  >
      <div className="row " > 
      
        <Card id="card" >
          {console.log("this.state.collapseID",this.state.collapseID)}
          <Header id="head"/>

          <div >
          <TransitionGroup  >
            <CSSTransition  key={this.props.location.key} classNames="fade" timeout={{ enter: 300, exit: 300 }}>
            <section className="route-section">
          <Switch location={this.props.location}>
            <Route  path="/home" component={Home} />
            <Route path="/aboutMe" component={AboutMe} />
            <Route path="/tools" component={Tools} />
            <Route path="/contacts" component={Contacts} />
            <Redirect to="/home" />
          </Switch>
         
          </section>
          </CSSTransition>
          </TransitionGroup>
          </div>
          <Footer className="footer" />
        </Card>
      </div>
    </div>
    </MDBCollapse>
  </React.Fragment>
    )
  }
}

export default withRouter(Main);
