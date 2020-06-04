import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Form} from 'react-bootstrap';
import FeedBack from './FeedBack.js';
import Story from './Story.js';



class App  extends Component{
    constructor() {
        super();
        this.state = {
          name: "React",
          showHideDemo1: true,
        };
        this.hideComponent = this.hideComponent.bind(this);
      }

      hideComponent(name) {
          if (name === "showHideDemo1"){
            this.setState({ showHideDemo1: !this.state.showHideDemo1 });
          }
        }

 render(){ 
    const { showHideDemo1 } = this.state;      
    return(

        <div>
        <div>{showHideDemo1 && <Story />}
        
        </div>
        <div className="Navbar">
        
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
                <Navbar.Brand href="windows.reload()" className='border border-0' >DATA4GOVERNANCE</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='border border-0 border-dark' />
                <Navbar.Collapse id="responsive-navbar-nav" className='outline-danger' >
                    <Nav className="mr-auto" >
                    <Nav.Link href="windows.reload()" >HOME</Nav.Link>                   

                    <Nav.Link href="#story" onClick={() => this.hideComponent("showHideDemo1")}>STORY</Nav.Link>
                    <Nav.Link href="#layers">LAYERS</Nav.Link>
                    
                 <div className='myNav'><FeedBack msg= {"FEEDBACK"}/> </div>

                 <div className='views'>
                    <Form> {['radio'].map((type) => (
                        <div key="1" className="mb-3 views">
                     <Form.Check inline label="Dark" type={type} name='radtoggle' defaultChecked="checked" id={`inline-${type}-1`} />
                         <Form.Check inline label="Street" type={type} name='radtoggle' id={`inline-${type}-2`} />
                        <Form.Check inline label="Light" type={type} name='radtoggle' id={`inline-${type}-3`} />
                        <Form.Check inline label="Outdoor" type={type} name='radtoggle' id={`inline-${type}-4`} /> 
                        <Form.Check inline label="Satellite" type={type} name='radtoggle' id={`inline-${type}-5`} /> 
                        </div>
                        
                    ))}
                    </Form>
                    </div>
                    </Nav>
                    <Nav>
                    <Nav.Link href="tel: +2348122222" className='emergencyCall'>EMERGENCY CALL</Nav.Link>
                    <Nav.Link href="https://medium.com/@somtomomah1/data4governance-hackerthon-a981ae96ec78" target='_blank' noreferrer='true' noopener='true'>
                        ABOUT
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                
         </div>
         </div>
    );
}
}
export default App