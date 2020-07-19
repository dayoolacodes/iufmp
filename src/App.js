import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import {Nav, Navbar, ButtonGroup, ToggleButton} from 'react-bootstrap';
import FeedBack from './components/FeedBack';
import Layers from './components/Layers';
import Story from './components/Story';
import Map from './components/Map'
// import ViewsButton from "./ViewsButton";



class App extends Component {
    state = {
        radios : [
            { name: 'Dark', value: 'mapbox://styles/mapbox/dark-v9'},
            { name: 'Streets', value: 'mapbox://styles/mapbox/streets-v8' },
            { name: 'Light', value: 'mapbox://styles/mapbox/light-v8' },
            { name: 'Outdoor', value: 'mapbox://styles/mapbox/outdoors-v11' },
            { name: 'Satellite', value: 'mapbox://styles/mapbox/satellite-v9' },
          ], 
        radioValue : 'mapbox://styles/mapbox/dark-v9',
        storyDisp:true,
        layerDisp: false,
        feedbackDisplay: false,
        dumpSiteValue: false,
        builtUpValue: false,
        existingBuildingValue: false,
        existingStructureValue: false,
        extensiveFloodValue: false,
        waterSourcesValue: false,
        damSitesValue: false,
        floodProneValue: false,
        proposedCulvertsValue: false,
        proposedDrainageValue: false,
        lakeOfProposedValue: false,
        potentialLakesValue: false,
        potentialDamsValue: false,
     }

     
     handleStoryDisplay =()=>{
        this.setState({layerDisp:false})
         const storyDisp = !(this.state.storyDisp)
         this.setState({storyDisp});
     }

     handleLayerDisplay =()=>{
     this.setState({storyDisp:false});
    const layerDisp = !(this.state.layerDisp)
        this.setState({layerDisp});
    }

    handleBuiltUpDisplay=()=>{
        const display = !(this.state.builtUpValue)
        this.setState({builtUpValue:display})
    }

    handleDumpSiteDisplay=()=>{
        const display = !(this.state.dumpSiteValue)
        this.setState({dumpSiteValue:display})
    }
    handleExistingBuildingDisplay=()=>{
        const display = !(this.state.existingBuildingValue)
        this.setState({existingBuildingValue:display})
    }
    handleExistingStructureDisplay=()=>{
        const display = !(this.state.existingStructureValue)
        this.setState({existingStructureValue:display})
    }
    handleExtensiveFloodDisplay=()=>{
        const display = !(this.state.extensiveFloodValue)
        this.setState({extensiveFloodValue:display})
    }
    handleWaterSourcesDisplay=()=>{
        const display = !(this.state.waterSourcesValue)
        this.setState({waterSourcesValue:display})
    }
    handleDamSitesDisplay=()=>{
        const display = !(this.state.damSitesValue)
        this.setState({damSitesValue:display})
    }
    handleFloodProneDisplay=()=>{
        const display = !(this.state.floodProneValue)
        this.setState({floodProneValue:display})
    }
    handleProposedCulvertDisplay=()=>{
        const display = !(this.state.proposedCulvertsValue)
        this.setState({proposedCulvertsValue:display})
    }
    handleProposedDrainageDisplay=()=>{
        const display = !(this.state.proposedDrainageValue)
        this.setState({proposedDrainageValue:display})
    }
    handleLakeOfProposedDisplay=()=>{
        const display = !(this.state.lakeOfProposedValue)
        this.setState({lakeOfProposedValue:display})
    }
    handlePotentialLakesDisplay=()=>{
        const display = !(this.state.potentialLakesValue)
        this.setState({potentialLakesValue:display})
    }
    handlePotentialDamsDisplay=()=>{
        const display = !(this.state.potentialDamsValue)
        this.setState({potentialDamsValue:display})
    }

     handleFeedbackDisplay =()=>{
         const feedbackDisplay = !(this.state.feedbackDisplay)
         this.setState({feedbackDisplay});
        //  console.log("feedBack Button clicked ", feedbackDisplay)
     }
    render() {
        const emergencyStyle = {
            backgroundColor: "#B9320C", 
            borderRadius:"10px",
            border:"20px",
            width:"10em",
            textAlign:"center",
            margin: "5px",
            // color: "#fff"
        }
        
        return ( 
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
                <Navbar.Brand className="font-weight-bold" href="/">DATA4GOVERNANCE</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    {/* <Nav.Link href="/">HOME</Nav.Link> */}
                    <Nav.Link href="#story" onClick={this.handleStoryDisplay}>STORY</Nav.Link>
                    <Nav.Link href="#layers" onClick={this.handleLayerDisplay} >LAYERS</Nav.Link>
                    <Nav.Link href="#feedback" onClick={this.handleFeedbackDisplay}>FEEDBACK</Nav.Link>
                    </Nav>
                    <Nav className='mx-auto'>
                    <ButtonGroup toggle>
                        {this.state.radios.map((radio, idx) => (
                            <ToggleButton
                            key={idx}
                            type="radio"
                            variant="secondary"
                            name="radio"
                            value={radio.value}
                            checked={this.state.radioValue === radio.value}
                            onChange={(e) => this.setState({radioValue:e.currentTarget.value})}
                            >
                            {radio.name}
                            </ToggleButton>
                        ))}
                        </ButtonGroup>
                    </Nav>

                    <Nav>
                    <Nav.Link href="tel: +2348122222" style={emergencyStyle}><FontAwesomeIcon icon={faPhoneAlt}/>{" "}EMERGENCY</Nav.Link>
                    <Nav.Link eventKey={2} href="https://medium.com/@somtomomah1/data4governance-hackerthon-a981ae96ec78">
                        ABOUT
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                <Layers layerDisp={this.state.layerDisp} 
                dumpSiteValue={this.state.dumpSiteValue}
                builtUpValue={this.state.builtUpValue}
                existingBuildingValue={this.state.existingBuildingValue}
                existingStructureValue={this.state.existingStructureValue}
                extensiveFloodValue ={this.state.extensiveFloodValue}
                waterSourcesValue={this.state.waterSourcesValue}
                damSitesValue={this.state.damSitesValue}
                floodProneValue ={this.state.floodProneValue}
                proposedCulvertsValue={this.state.proposedCulvertsValue}
                proposedDrainageValue={this.state.proposedDrainageValue}
                lakeOfProposedValue = {this.state.lakeOfProposedValue}
                potentialLakesValue = {this.state.potentialLakesValue}
                potentialDamsValue = {this.state.potentialDamsValue}
                handleDumpSiteDisplay ={this.handleDumpSiteDisplay}
                handleBuiltUpDisplay = {this.handleBuiltUpDisplay}
                handleExistingBuildingDisplay = {this.handleExistingBuildingDisplay}
                handleExistingStructureDisplay = {this.handleExistingStructureDisplay}
                handleExtensiveFloodDisplay ={this.handleExtensiveFloodDisplay}
                handleWaterSourcesDisplay ={this.handleWaterSourcesDisplay}
                handleDamSitesDisplay = {this.handleDamSitesDisplay}
                handleFloodProneDisplay = {this.handleFloodProneDisplay}
                handleProposedCulvertDisplay = {this.handleProposedCulvertDisplay}
                handleProposedDrainageDisplay = {this.handleProposedDrainageDisplay}
                handleLakeOfProposedDisplay = {this.handleLakeOfProposedDisplay}
                handlePotentialLakesDisplay = {this.handlePotentialLakesDisplay}
                handlePotentialDamsDisplay = {this.handlePotentialDamsDisplay}
                />
                <Map mapStyle={this.state.radioValue}
                dumpSiteValue={this.state.dumpSiteValue}
                builtUpValue={this.state.builtUpValue}
                existingBuildingValue={this.state.existingBuildingValue}
                existingStructureValue={this.state.existingStructureValue}
                extensiveFloodValue ={this.state.extensiveFloodValue}
                waterSourcesValue={this.state.waterSourcesValue}
                damSitesValue={this.state.damSitesValue}
                floodProneValue ={this.state.floodProneValue}
                proposedCulvertsValue={this.state.proposedCulvertsValue}
                proposedDrainageValue={this.state.proposedDrainageValue}
                lakeOfProposedValue = {this.state.lakeOfProposedValue}
                potentialLakesValue = {this.state.potentialLakesValue}
                potentialDamsValue = {this.state.potentialDamsValue} 
                />
                {/* {console.log(this.state.radioValue, "in App.js")} */}
                
                <Story displ={this.state.storyDisp} handl={this.handleStoryDisplay}/>
                <FeedBack handleFeedbackDisplay={this.handleFeedbackDisplay} feedbackDisplay={this.state.feedbackDisplay}/>     
                
                </div>
         );
    }
}
 
export default App;