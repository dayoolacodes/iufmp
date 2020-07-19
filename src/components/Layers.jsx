import React, { Component } from 'react';
import {Button} from 'react-bootstrap'



class Layers extends Component {
    state = { 
      
     }
   
    layerStyle=()=> {
      return{
        body:{
          width: '300px',
          backgroundColor: 'white',
          opacity: '80%',
          padding: '30px',
          borderRadius: "20px",
          display: this.props.layerDisp? 'block' : 'none'
          }
        }
      }

    
      classValHandler=()=>{
    const classVal = !(this.state.classVal)
    this.setState({classVal})
  }
    
  render() { 
      return (  
    <div className="bg-light" style={this.layerStyle().body}>
     <p> <Button className={this.builtUpClassName()} variant="outline-dark" onClick={this.props.handleBuiltUpDisplay}> Built-Up Areas </Button>  </p>
     <p> <Button className={this.dumpsiteClassName()} variant="outline-dark" onClick={this.props.handleDumpSiteDisplay}> Dump Sites </Button>  </p>
     <p> <Button className={this.existingBuildingClassName()} variant="outline-dark" onClick={this.props.handleExistingBuildingDisplay}> Existing Buildings </Button>  </p>
     <p> <Button className={this.existingStructureClassName()} variant="outline-dark" onClick={this.props.handleExistingStructureDisplay}> Existing Structures </Button>  </p>
     <p> <Button className={this.extensiveFloodClassName()} variant="outline-dark" onClick={this.props.handleExtensiveFloodDisplay} > Extensive Flood Events </Button>  </p>
    <p> <Button className={this.waterSourcesClassName()} variant="outline-dark" onClick={this.props.handleWaterSourcesDisplay}> Water Sources </Button>  </p>
    <p> <Button className={this.damSitesClassName()} variant="outline-dark" onClick={this.props.handleDamSitesDisplay}> Dam Sites </Button>  </p>
    <p> <Button className={this.floodProneClassName()} variant="outline-dark" onClick={this.props.handleFloodProneDisplay}> Flood Prone Areas </Button>  </p>
    <p> <Button className={this.proposedCulvertsClassName()} variant="outline-dark" onClick={this.props.handleProposedCulvertDisplay}> Proposed Culverts </Button>  </p>
    <p> <Button className={this.proposedDrainageClassName()} variant="outline-dark" onClick={this.props.handleProposedDrainageDisplay}> Proposed Drainage Bridges </Button>  </p>
    <p> <Button className={this.lakeOfProposedClassName()} variant="outline-dark" onClick={this.props.handleLakeOfProposedDisplay}> Lake of Proposed Dikes </Button>  </p>
    <p> <Button className={this.potentialLakesClassName()} variant="outline-dark" onClick={this.props.handlePotentialLakesDisplay}> Potential Lakes </Button>  </p>
    <p> <Button className={this.potentialDamsClassName()} variant="outline-dark" onClick={this.props.handlePotentialDamsDisplay}> Potential Dams </Button>  </p>
    </div> 
     
      );
  }
  builtUpClassName(){
    let classNameVal ='w-100 '
    classNameVal += this.props.builtUpValue? 'active' : ''
    return classNameVal;
  }

  dumpsiteClassName(){
    let classNameVal ='w-100 '
    classNameVal += this.props.dumpSiteValue? 'active' : ''
    return classNameVal;
  }
  existingBuildingClassName(){
    let classNameVal ='w-100 '
    classNameVal += this.props.existingBuildingValue? 'active' : ''
    return classNameVal;
  }
  existingStructureClassName(){
    let classNameVal ='w-100 '
    classNameVal += this.props.existingStructureValue? 'active' : ''
    return classNameVal;
  }
  extensiveFloodClassName(){
    let classNameVal ='w-100 '
    classNameVal += this.props.extensiveFloodValue? 'active' : ''
    return classNameVal;
  }
  waterSourcesClassName(){
    let classNameVal ='w-100 '
    classNameVal += this.props.waterSourcesValue? 'active' : ''
    return classNameVal;
  }

  damSitesClassName(){
    let classNameVal ='w-100 '
    classNameVal += this.props.damSitesValue? 'active' : ''
    return classNameVal;
  }
  
  floodProneClassName(){
    let classNameVal ='w-100 '
    classNameVal += this.props.floodProneValue? 'active' : ''
    return classNameVal;
  }

  proposedCulvertsClassName(){
    let classNameVal ='w-100 '
    classNameVal += this.props.proposedCulvertsValue? 'active' : ''
    return classNameVal;
  }

  proposedDrainageClassName(){
    let classNameVal ='w-100 '
    classNameVal += this.props.proposedDrainageValue? 'active' : ''
    return classNameVal;
  }
  lakeOfProposedClassName(){
    let classNameVal ='w-100 '
    classNameVal += this.props.lakeOfProposedValue? 'active' : ''
    return classNameVal;
  }

  potentialLakesClassName(){
    let classNameVal ='w-100 '
    classNameVal += this.props.potentialLakesValue? 'active' : ''
    return classNameVal;
  }
  
  potentialDamsClassName(){
    let classNameVal ='w-100 '
    classNameVal += this.props.potentialDamsValue? 'active' : ''
    return classNameVal;
  }
  
}
 

 
export default Layers;