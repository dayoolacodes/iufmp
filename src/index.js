import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import App from './App';
// import Story from './Story.js';



mapboxgl.accessToken = 'pk.eyJ1IjoiZGF5b29sYSIsImEiOiJjazZycG9zNTAwN3FnM2xtbDMwdm1xaDduIn0.7a1DMjmNoX8V9q-Bhsp7RQ'


class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        lng: 3.9470,
        lat: 7.3775,
        zoom: 8
        };
        }

        componentDidMount() {
            const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
            });

            map.on('move', () => {
                this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
                });
                });

                map.flyTo({
                    bearing: 27,
                    // center: [3.806, 7.409],
                    center: [3.824436646, 7.396018682],
                    duration: 6000,
                    zoom: 9,
                    pitch: 50,
                    speed: 0.6,
                    // style: 'mapbox://styles/mapbox/streets-v11',
                    essential: true // this animation is considered essential with respect to prefers-reduced-motion
                });

                map.on('load', function() {
                    map.addSource('built-up', {
                        'type': 'geojson',
                        'data': 'https://geoserver.grid-nigeria.org/geoserver/GRIDMaster/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=GRIDMaster:sv_fe_builtuparea&outputFormat=application%2Fjson&authkey=fdfe9a37-d2d0-4210-9a15-25dab5d907fa&CQL_FILTER=state_code=%27OY%27'
                    });
    
                map.addSource('administrative', {
                    'type': 'geojson',
                    'data': 'https://raw.githubusercontent.com/everybees/ibadan_files/master/ibadan_boundary.geojson?token=ANCY26UWEES2C5T6OTBVALC6KEW2C'
                });
    
                map.addSource('proposed-drainage', {
                    'type': 'geojson',
                    'data': 'https://raw.githubusercontent.com/everybees/ibadan_files/master/proposed_drainage_bridges.geojson'
                });
    
                map.addSource('proposed-culverts', {
                    'type': 'geojson',
                    'data': 'https://raw.githubusercontent.com/everybees/ibadan_files/master/proposed_drainage_culverts.geojson'
                });
    
                map.addSource('existing-buildings', {
                    'type': 'geojson',
                    'data': 'https://raw.githubusercontent.com/everybees/ibadan_files/master/existing_buildings.geojson'
                });
    
                map.addSource('extensive_flooding', {
                    'type': 'geojson',
                    'data': 'https://raw.githubusercontent.com/everybees/ibadan_files/master/extensively_flooded_areas_2011.geojson?token=ANCY26RDOW7YY2NLUNZL2IK6KEUWG'
                });
    
                map.addSource('flood-prone', {
                    'type': 'geojson',
                    'data': 'https://raw.githubusercontent.com/everybees/ibadan_files/master/flood_prone_areas.geojson'
                });
    
                map.addSource('dump-site', {
                    'type': 'geojson',
                    'data': 'https://raw.githubusercontent.com/everybees/ibadan_files/master/dumpsite_ibn.geojson'
                });
    
                map.addSource('proposed-dikes', {
                    'type': 'geojson',
                    'data': 'https://raw.githubusercontent.com/everybees/ibadan_files/master/lakes_of_proposed_dikes.geojson'
                });
    
                map.addSource('dam-site', {
                    'type': 'geojson',
                    'data': 'https://raw.githubusercontent.com/everybees/ibadan_files/master/dams.geojson?token=ANCY26WV3ZLSIR6YV32HXZS6KEVI2'
                });
    
                map.addSource('existing-structures', {
                    'type': 'geojson',
                    'data': 'https://raw.githubusercontent.com/everybees/ibadan_files/master/existing_structures.geojson'
                });
    
                map.addSource('water-sources', {
                    'type': 'geojson',
                    'data': 'https://raw.githubusercontent.com/everybees/ibadan_files/master/water__courses.geojson'
                });
    
                map.addSource('potential-lakes', {
                    'type': 'geojson',
                    'data': 'https://raw.githubusercontent.com/everybees/ibadan_files/master/potential_lakes.geojson'
                });
    
                map.addSource('potential-dams', {
                    'type': 'geojson',
                    'data': 'https://raw.githubusercontent.com/everybees/ibadan_files/master/potential_dam_reserviors.geojson'
                });

                map.addLayer({
                    'id': 'Extensive Flood Event',
                    'type': 'fill',
                    'source': 'extensive_flooding',
                    // 'source-layer': 'packed-buildings',
                    'layout': {
                        'visibility': 'none'
                    },
                    'paint': {
                        'fill-color': '#01037d',
                        'fill-opacity': 0.5
                    },
                    'filter': ['==', '$type', 'Polygon']
                });
                map.addLayer({
                    'id': 'Flood Prone Areas',
                    'type': 'fill',
                    'source': 'flood-prone',
                    // 'source-layer': 'packed-buildings',
                    'layout': {
                        'visibility': 'none',
                    },
                    'paint': {
                        'fill-color': 'red',
                        'fill-opacity': 0.4
                    },
                    'filter': ['==', '$type', 'Polygon']
                });
    
                map.addLayer({
                    'id': 'Existing Buildings',
                    'type': 'fill',
                    'source': 'existing-buildings',
                    // 'source-layer': 'packed-buildings',
                    'layout': {
                        'visibility': 'none',
                    },
                    'paint': {
                        'fill-color': 'blue',
                        'fill-opacity': 0.4
                    },
                    'filter': ['==', '$type', 'Polygon']
                });
    
                map.addLayer({
                    'id': 'Proposed Drainage Bridges',
                    'type': 'circle',
                    'source': 'proposed-drainage',
                    'layout': {
                        'visibility': 'none'
                    },
                    'paint': {
                        'circle-radius': 5,
                        'circle-color': '#400252'
                    },
                    'filter': ['==', '$type', 'Point']
                });
    
                map.addLayer({
                    'id': 'Existing Structures',
                    'type': 'circle',
                    'source': 'existing-structures',
                    'layout': {
                        'visibility': 'none'
                    },
                    'paint': {
                        'circle-radius': 5,
                        'circle-color': '#037036'
                    },
                    'filter': ['==', '$type', 'Point']
                });
    
                map.addLayer({
                    'id': 'Proposed Culverts',
                    'type': 'circle',
                    'source': 'proposed-culverts',
                    'layout': {
                        'visibility': 'none'
                    },
                    'paint': {
                        'circle-radius': 5,
                        'circle-color': '#517003'
                    },
                    'filter': ['==', '$type', 'Point']
                });
    
                map.addLayer({
                    'id': 'Water Sources',
                    'type': 'line',
                    'source': 'water-sources',
                    'layout': {
                        'visibility': 'none',
                        'line-join': 'round',
                        'line-cap': 'round'
                    },
                    'paint': {
                        'line-color': 'blue',
                        'line-width': 1
                    }
                });
    
                map.addLayer({
                    'id': 'Built-Up Areas',
                    'type': 'fill',
                    'source': 'built-up',
                    // 'source-layer': 'packed-buildings',
                    'layout': {
                        'visibility': 'none'
                    },
                    'paint': {
                        'fill-color': '#cf2e1f',
                        'fill-opacity': 0.4
                    },
                    'filter': ['==', '$type', 'Polygon']
                });
    
                map.addLayer({
                    'id': 'Dam Sites',
                    'type': 'circle',
                    'source': 'dam-site',
                    // 'source-layer': 'refuse-dump',
                    'layout': {
                        'visibility': 'none'
                    },
                    'paint': {
                        'circle-radius': 5,
                        'circle-color': '#022152'
                    },
                    'filter': ['==', '$type', 'Point']
                });
    
                map.addLayer({
                    'id': 'state',
                    'type': 'fill',
                    'source': 'administrative',
                    // 'source-layer': 'packed-buildings',
                    'layout': {
                        'visibility': 'visible'
                    },
                    'paint': {
                        'fill-color': '#888888',
                        'fill-opacity': 0.4
                    },
                    'filter': ['==', '$type', 'Polygon']
                });
    
                map.addLayer({
                    'id': 'Potential Lakes',
                    'type': 'fill',
                    'source': 'potential-lakes',
                    // 'source-layer': 'packed-buildings',
                    'layout': {
                        'visibility': 'none'
                    },
                    'paint': {
                        'fill-color': '#062994',
                        'fill-opacity': 0.4
                    },
                    'filter': ['==', '$type', 'Polygon']
                });
    
                map.addLayer({
                    'id': 'Potential Dams',
                    'type': 'fill',
                    'source': 'potential-dams',
                    // 'source-layer': 'packed-buildings',
                    'layout': {
                        'visibility': 'none'
                    },
                    'paint': {
                        'fill-color': '#010d30',
                        'fill-opacity': 0.8
                    },
                    'filter': ['==', '$type', 'Polygon']
                });
    
                map.addLayer({
                    'id': 'Lake of Proposed Dikes',
                    'type': 'fill',
                    'source': 'proposed-dikes',
                    // 'source-layer': 'packed-buildings',
                    'layout': {
                        'visibility': 'none'
                    },
                    'paint': {
                        'fill-color': '#03195e',
                        'fill-opacity': 0.8
                    },
                    'filter': ['==', '$type', 'Polygon']
                });
    
                map.addLayer({
                    'id': 'Dump Sites',
                    'type': 'circle',
                    'source': 'dump-site',
                    // 'source-layer': 'refuse-dump',
                    'layout': {
                        'visibility': 'none'
                    },
                    'paint': {
                        'circle-radius': 5,
                        'circle-color': 'black'
                    },
                    'filter': ['==', '$type', 'Point']
                });


            });

            
            }

            render() {
                return (
                <div>
                    
                <div ref={el => this.mapContainer = el} className="mapContainer"/>
                <div className="app"> <App /> </div>
                
                </div>
                
                

                )
                }

                
    }
     
    
    ReactDOM.render(<Application />, document.getElementById('app'));