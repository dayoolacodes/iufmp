import React, { useEffect, useRef, useState }  from 'react';
import mapboxgl from 'mapbox-gl';



const styles = {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0
  };

// const mapStyle=(props)=>{
    
// return props.mapStyle
// }


const Map2 = (props) => {
    console.log(props.mapStyle)
    const [mapSty, setMapSty] = useState(props.mapStyle)
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);

    
    useEffect(() => {
        console.log("in useEffect")
      mapboxgl.accessToken = 'pk.eyJ1IjoiZGF5b29sYSIsImEiOiJjazZycG9zNTAwN3FnM2xtbDMwdm1xaDduIn0.7a1DMjmNoX8V9q-Bhsp7RQ';
      const initializeMap = ({ setMap, mapContainer }) => {
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: mapSty, // stylesheet location
          center: [3.9470, 7.3775],
          zoom: 8
        });
        map.flyTo({
            bearing: 27,
            // center: [3.806, 7.409],
            center: [3.824436646, 7.396018682],
            duration: 9000,
            zoom: 8.5,
            pitch: 50,
            speed: 0.6,
            // style: 'mapbox://styles/mapbox/streets-v11',
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

        map.on("load", () => {
          setMap(map);
          map.resize();
          map.addSource('administrative', {
            'type': 'geojson',
            'data': 'https://raw.githubusercontent.com/everybees/ibadan_files/master/ibadan_boundary.geojson?token=ANCY26UWEES2C5T6OTBVALC6KEW2C'
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

        });
      };
  
      if (!map) initializeMap({ setMap, mapContainer});
    }, [mapSty]);
  
    return (
        <>
        
        <div ref={el => (mapContainer.current = el)} style={styles} />;
        
        </>
    )
    
  };
  
 
export default Map2;