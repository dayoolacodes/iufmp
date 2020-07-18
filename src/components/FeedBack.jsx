import React, { Component } from 'react';
import {Modal, Button, Form} from 'react-bootstrap';


// const [show, setShow] = React.useState(true);

 

class FeedBack extends Component {
  state = { 
    field: "Fill or just click the location button "
   }

handleClose = () => {
    this.props.handleFeedbackDisplay();
  }

  
  getGeoLocation=()=>{

    // navigator.geolocation.getCurrentPosition(function(position) {
    //   const lat = position.coords.latitude;
    //   const longi = position.coords.longitude;
    //   console.log("Latitude is :", lat);
    //   console.log("Longitude is :", longi);
    //   this.setState({field: "boy"})
    // });

    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      this.setState({ field:"Latitude: " + lat+ " Longitude: "+ long });}
    )
  }

  render() { 
 
    return (
    
      <div>
         <Modal  show={this.props.feedbackDisplay} onHide={this.handleClose}>
           <Modal.Header closeButton />
           <Modal.Body>        
               <Form>
                  <Form.Group controlId="Form.ControlInput1">
                         <Form.Label>Full Name</Form.Label>
                         <Form.Control type="fullname" placeholder="Enter your Full Name" required/>
                 </Form.Group>
                 <Form.Group controlId="2">
                         <Form.Label>Phone Number</Form.Label>
                         <Form.Control type="PhoneNumber" placeholder="Enter your Phone Number" required/>
                 </Form.Group>
                 <Form.Group controlId="Form.ControlInput2">
                        <Form.Label>Email address</Form.Label>
                         <Form.Control type="email" placeholder="name@example.com"/>
                 </Form.Group>
                  <Form.Group controlId="Form.ControlSelect1">           
                             <Form.Label>Gender</Form.Label>
                             <Form.Control as="select">
                             <option>Male</option>
                             <option>Female</option>
                             </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="Form.ControlInput3">
                        <Form.Label>Address</Form.Label>
                         <Form.Control type="longLat" placeholder={this.state.field} /> 
                 </Form.Group>
           
                 <Button type="button" onClick={this.getGeoLocation}>Location</Button><br /><br />
                  <div className="mb-3">
                         <Form.File id="formcheck-api-regular">
                         <Form.File.Label>Upload Picture</Form.File.Label>
                         <Form.File.Input />
                         </Form.File>
                     </div>
                     <Form.Group controlId="Form.ControlTextarea1">
                         <Form.Label>Reports</Form.Label>
                         <Form.Control as="textarea" rows="3" placeholder="Enter Your Reports Here"/>
                     </Form.Group>
             </Form>
                                
           </Modal.Body>
           <Modal.Footer>
             <Button variant="secondary" onClick={this.handleClose}>
               Close
             </Button>
             <Button variant="primary" onClick={this.handleClose}>
               Save Changes
             </Button>
           </Modal.Footer>
         </Modal>
       </div> 
     );
  }
}
 
export default FeedBack;

