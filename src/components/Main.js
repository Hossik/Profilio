import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { MDBBtn} from 'mdbreact';
import { Card} from 'reactstrap';
import { withRouter} from 'react-router-dom';
import { Contacts } from './ContactComponent';
import { Home } from './HomeComponent';
import { Tools } from './ToolsComponent'
import { TransitionGroup, CSSTransition }from 'react-transition-group';
import { Test } from './TestComponent';
import Header from './Header';
import AboutMe from './AboutMe';
import Footer from './Footer';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: "",
      highlightedHobby: false,
      tbn:false

    };
  };

  listSwitch = () => {
    this.setState(state => ({
      highlightedHobby: !state.highlightedHobby
    }));
  };
  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  }
  remove = () => {
    clearInterval(this.intervalID)
  }
  componentDidMount() {
        
            this.intervalID = setInterval(() => {
            this.setState(state =>({
                tbn : !state.tbn
            }));
            }, 8500);
            
            setInterval (this.remove, 10000)
            
        }

  render() {
   
  return (
      
  <React.Fragment className="container">
      
    {this.state.tbn ? <MDBBtn className= " btn  btn-circle btn-xl" color="elegant"
      onClick={this.toggleCollapse("basicCollapse")}>
      <i> <Test
      isOpen={this.state.collapseID}/></i>    
    </MDBBtn> : <div></div>}
    <CSSTransition
          in={this.state.collapseID}
          timeout={300}
          classNames="list-transition"
          unmountOnExit
          appear
          onEntered={this.listSwitch}
          onExit={this.listSwitch}
        >
     
    <div className=" list-body"  >
          
        <Card  id="card" >
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
          <div className=" footerbox">
          <Footer/>
          </div>
        </Card>
      </div>
    
    </CSSTransition>
  </React.Fragment>
    )
  }
}

export default withRouter(Main);
