import React from 'react';
import ReactDOM from 'react-dom';
// import mapboxgl from 'mapbox-gl';
import App from './App';
// import Story from './Story.js';



class Application extends React.Component {
    // constructor(props) {
        // super(props);
       state = {

        };
        // }

       

            render() {
                return (
                <div>
                    
                
                <div className="app"> <App /> </div>
                
                </div>
                
                

                )
                }

                
    }
     
    
    ReactDOM.render(<Application />, document.getElementById('app'));