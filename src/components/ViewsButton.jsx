import React, { Component } from 'react';
import {ButtonGroup, ToggleButton} from 'react-bootstrap';


// const [checked, setChecked] = useState(false);
// const [radioValue, setRadioValue] = useState('1');

class ViewsButton extends Component {
    state = { 
            //  style: ''
    //  style: ''
    //  style: ''
    //  style: ''
        radios : [
            { name: 'Dark', value: 'mapbox://styles/mapbox/dark-v8'},
            { name: 'Streets', value: 'mapbox://styles/mapbox/streets-v8' },
            { name: 'Light', value: 'mapbox://styles/mapbox/light-v8' },
            { name: 'Outdoor', value: 'mapbox://styles/mapbox/outdoors-v9' },
            { name: 'Satellite', value: 'mapbox://styles/mapbox/satellite-v8' },
          ],
        radioValue : 'mapbox://styles/mapbox/dark-v8'
     }
    render() { 
        return ( 
        <>    
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
        
      </>
         );
    }
}
 
export default ViewsButton;
