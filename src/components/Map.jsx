import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken = 'pk.eyJ1IjoiZGF5b29sYSIsImEiOiJjazZycG9zNTAwN3FnM2xtbDMwdm1xaDduIn0.7a1DMjmNoX8V9q-Bhsp7RQ'

class Map extends Component {
    state = { 
        lng: 3.9470,
        lat: 7.3775,
        zoom: 8,
        style: 'mapbox://styles/mapbox/dark-v9',
        dumpSiteVal: false,
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
        potentialDamsValue: false
     }

    componentDidUpdate(){
        if(this.state.style !== this.props.mapStyle||
        this.state.dumpSiteVal!==this.props.dumpSiteValue||
        this.state.builtUpValue!==this.props.builtUpValue||
        this.state.existingBuildingValue!==this.props.existingBuildingValue||
        this.state.existingStructureValue!==this.props.existingStructureValue||
        this.state.extensiveFloodValue!== this.props.extensiveFloodValue||
        this.state.waterSourcesValue!== this.props.waterSourcesValue ||
        this.state.damSitesValue!== this.props.damSitesValue ||
        this.state.floodProneValue!== this.props.floodProneValue||
        this.state.proposedCulvertsValue!==this.props.proposedCulvertsValue||
        this.state.proposedDrainageValue!==this.props.proposedDrainageValue||
        this.state.lakeOfProposedValue!== this.props.lakeOfProposedValue||
        this.state.potentialLakesValue!== this.props.potentialLakesValue||
        this.state.potentialDamsValue!== this.props.potentialDamsValue
        ){
        // console.log("dumpSiteValue: ", this.props.dumpSiteValue,"in componentDidUpdate")
        this.setState({style:this.props.mapStyle})
        this.setState({dumpSiteVal:this.props.dumpSiteValue})
        this.setState({builtUpValue:this.props.builtUpValue})
        this.setState({existingBuildingValue:this.props.existingBuildingValue})
        this.setState({existingStructureValue:this.props.existingStructureValue})
        this.setState({extensiveFloodValue:this.props.extensiveFloodValue})
        this.setState({waterSourcesValue:this.props.waterSourcesValue})
        this.setState({damSitesValue:this.props.damSitesValue})
        this.setState({floodProneValue:this.props.floodProneValue})
        this.setState({proposedCulvertsValue:this.props.proposedCulvertsValue})
        this.setState({proposedDrainageValue:this.props.proposedDrainageValue})
        this.setState({lakeOfProposedValue:this.props.lakeOfProposedValue})
        this.setState({potentialLakesValue:this.props.potentialLakesValue})
        this.setState({potentialDamsValue:this.props.potentialDamsValue})
        this.mapMount();
        }
     }
    
    mapMount=()=> {
        // console.log(this.props.mapStyle,"dumpSiteValue: ", this.props.dumpSiteValue,"in mount")
        const dumpSite = this.props.dumpSiteValue
        const builtUpValue = this.props.builtUpValue
        const existingBuildingValue = this.props.existingBuildingValue
        const existingStructureValue = this.props.existingStructureValue
        const extensiveFloodValue = this.props.extensiveFloodValue
        const waterSourcesValue = this.props.waterSourcesValue
        const damSitesValue = this.props.damSitesValue
        const floodProneValue = this.props.floodProneValue
        const proposedCulvertsValue = this.props.proposedCulvertsValue
        const proposedDrainageValue = this.props.proposedDrainageValue
        const lakeOfProposedValue = this.props.lakeOfProposedValue
        const potentialLakesValue = this.props.potentialLakesValue
        const potentialDamsValue = this.props.potentialDamsValue

        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: this.props.mapStyle, 
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
                center: [3.824436646, 7.396018682],
                duration: 6000,
                zoom: 9,
                pitch: 50,
                speed: 0.6,
                essential: true// this animation is considered essential with respect to prefers-reduced-motion
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
                'layout': {
                    'visibility': extensiveFloodValue? 'visible': 'none',
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
                'layout': {
                    'visibility': floodProneValue? 'visible':'none',
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
                'layout': {
                    'visibility': existingBuildingValue? 'visible': 'none',
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
                    'visibility': proposedDrainageValue? 'visible' : 'none'
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
                    'visibility': existingStructureValue? 'visible': 'none',
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
                    'visibility': proposedCulvertsValue? 'visible':'none'
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
                    'visibility': waterSourcesValue? 'visible': 'none',
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
                'layout': {
                    'visibility': builtUpValue? "visible" : "none"
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
                'layout': {
                    'visibility': damSitesValue? 'visible':'none'
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
                'layout': {
                    'visibility': potentialLakesValue? 'visible':'none'
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
                'layout': {
                    'visibility': potentialDamsValue? 'visible' : 'none'
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
                'layout': {
                    'visibility': lakeOfProposedValue? 'visible' : 'none'
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
                'layout': {
                    'visibility': dumpSite? "visible" : "none"
                },
                'paint': {
                    'circle-radius': 5,
                    'circle-color': 'black'
                },
                'filter': ['==', '$type', 'Point']
            });


        });
        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav, 'bottom-right');

        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true
            }), 'bottom-right');

            
        }

        componentDidMount(){
            this.mapMount();
        }

    render() { 
        return ( 
            <div>
                <div ref={el => this.mapContainer = el} style={{zIndex:"-1"}} className="mapContainer"/>
            </div>
         );
    }
}
 
export default Map;