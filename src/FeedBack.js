import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import './FeedBack.css'




   const FeedBack = (props) => {
        const [show, setShow] = React.useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const getMyLocation = () => {
            const location = window.navigator && window.navigator.geolocation
            
            if (location) {
              location.getCurrentPosition((position) => {
                this.setState({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                })
              }, (error) => {
                this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
              })
            }            
          }
        return (
          <>
          
            <div className='bg-dark' onClick={handleShow}>
              {props.msg}
            </div>
            <Modal  show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                {/* <Modal.Title>FEEDBACK FORM</Modal.Title> */}
              </Modal.Header>
              <Modal.Body>
                            
                  <Form>

                     <Form.Group controlId=" ">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="fullname" placeholder="Enter your Full Name" required/>
                    </Form.Group>
                    <Form.Group controlId=" ">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="PhoneNumber" placeholder="Enter your Phone Number" required/>
                    </Form.Group>
                    <Form.Group controlId="Form.ControlInput1">
                           <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                     <Form.Group controlId="Form.ControlSelect1">           
                                <Form.Label>Gender</Form.Label>
                                <Form.Control as="select">
                                <option>Male</option>
                                <option>Female</option>
                                </Form.Control>
                     </Form.Group>
                     <Form.Group controlId="Form.ControlInput1">
                           <Form.Label>Address</Form.Label>
                            <Form.Control type="longLat" placeholder="Click the location button" />
                    </Form.Group>
              
                    <button type="button" onClick={getMyLocation}>Location</button><br /><br />
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
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }


export default FeedBack;
