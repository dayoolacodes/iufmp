(this.webpackJsonpmapboxAndReact=this.webpackJsonpmapboxAndReact||[]).push([[0],{45:function(e,a,t){e.exports=t.p+"static/media/ibadan.243e776f.png"},46:function(e,a,t){e.exports=t.p+"static/media/ibadan2.0ca5fb93.jpg"},47:function(e,a,t){e.exports=t.p+"static/media/ibadan3.7a169b84.PNG"},48:function(e,a,t){e.exports=t.p+"static/media/ibadan4.c3d9e2b7.PNG"},49:function(e,a,t){e.exports=t.p+"static/media/ibadan5.81284ab5.PNG"},50:function(e,a,t){e.exports=t.p+"static/media/ibadan6.c4f77520.PNG"},55:function(e,a,t){e.exports=t(71)},60:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var i=t(7),l=t(8),s=t(10),o=t(9),n=t(0),r=t.n(n),u=t(21),p=t.n(u),d=(t(60),t(61),t(39)),c=t(53),h=t(78),m=t(77),y=t(73),g=t(74),f=t(75),v=t(76),b=t(44),V=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,s=new Array(l),o=0;o<l;o++)s[o]=arguments[o];return(e=a.call.apply(a,[this].concat(s))).state={field:"Fill or just click the location button "},e.handleClose=function(){e.props.handleFeedbackDisplay()},e.getGeoLocation=function(){navigator.geolocation.getCurrentPosition((function(a){var t=a.coords.latitude,i=a.coords.longitude;e.setState({field:"Latitude: "+t+" Longitude: "+i})}))},e}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a,{show:this.props.feedbackDisplay,onHide:this.handleClose},r.a.createElement(f.a.Header,{closeButton:!0}),r.a.createElement(f.a.Body,null,r.a.createElement(v.a,null,r.a.createElement(v.a.Group,{controlId:"Form.ControlInput1"},r.a.createElement(v.a.Label,null,"Full Name"),r.a.createElement(v.a.Control,{type:"fullname",placeholder:"Enter your Full Name",required:!0})),r.a.createElement(v.a.Group,{controlId:"2"},r.a.createElement(v.a.Label,null,"Phone Number"),r.a.createElement(v.a.Control,{type:"PhoneNumber",placeholder:"Enter your Phone Number",required:!0})),r.a.createElement(v.a.Group,{controlId:"Form.ControlInput2"},r.a.createElement(v.a.Label,null,"Email address"),r.a.createElement(v.a.Control,{type:"email",placeholder:"name@example.com"})),r.a.createElement(v.a.Group,{controlId:"Form.ControlSelect1"},r.a.createElement(v.a.Label,null,"Gender"),r.a.createElement(v.a.Control,{as:"select"},r.a.createElement("option",null,"Male"),r.a.createElement("option",null,"Female"))),r.a.createElement(v.a.Group,{controlId:"Form.ControlInput3"},r.a.createElement(v.a.Label,null,"Address"),r.a.createElement(v.a.Control,{type:"longLat",placeholder:this.state.field})),r.a.createElement(b.a,{type:"button",onClick:this.getGeoLocation},"Location"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"mb-3"},r.a.createElement(v.a.File,{id:"formcheck-api-regular"},r.a.createElement(v.a.File.Label,null,"Upload Picture"),r.a.createElement(v.a.File.Input,null))),r.a.createElement(v.a.Group,{controlId:"Form.ControlTextarea1"},r.a.createElement(v.a.Label,null,"Reports"),r.a.createElement(v.a.Control,{as:"textarea",rows:"3",placeholder:"Enter Your Reports Here"})))),r.a.createElement(f.a.Footer,null,r.a.createElement(b.a,{variant:"secondary",onClick:this.handleClose},"Close"),r.a.createElement(b.a,{variant:"primary",onClick:this.handleClose},"Save Changes"))))}}]),t}(n.Component),k=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,s=new Array(l),o=0;o<l;o++)s[o]=arguments[o];return(e=a.call.apply(a,[this].concat(s))).state={},e.layerStyle=function(){return{body:{width:"300px",backgroundColor:"white",opacity:"80%",padding:"30px",borderRadius:"20px",display:e.props.layerDisp?"block":"none"}}},e.classValHandler=function(){var a=!e.state.classVal;e.setState({classVal:a})},e}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg-light",style:this.layerStyle().body},r.a.createElement("p",null," ",r.a.createElement(b.a,{className:this.builtUpClassName(),variant:"outline-dark",onClick:this.props.handleBuiltUpDisplay}," Built-Up Areas "),"  "),r.a.createElement("p",null," ",r.a.createElement(b.a,{className:this.dumpsiteClassName(),variant:"outline-dark",onClick:this.props.handleDumpSiteDisplay}," Dump Sites "),"  "),r.a.createElement("p",null," ",r.a.createElement(b.a,{className:this.existingBuildingClassName(),variant:"outline-dark",onClick:this.props.handleExistingBuildingDisplay}," Existing Buildings "),"  "),r.a.createElement("p",null," ",r.a.createElement(b.a,{className:this.existingStructureClassName(),variant:"outline-dark",onClick:this.props.handleExistingStructureDisplay}," Existing Structures "),"  "),r.a.createElement("p",null," ",r.a.createElement(b.a,{className:this.extensiveFloodClassName(),variant:"outline-dark",onClick:this.props.handleExtensiveFloodDisplay}," Extensive Flood Events "),"  "),r.a.createElement("p",null," ",r.a.createElement(b.a,{className:this.waterSourcesClassName(),variant:"outline-dark",onClick:this.props.handleWaterSourcesDisplay}," Water Sources "),"  "),r.a.createElement("p",null," ",r.a.createElement(b.a,{className:this.damSitesClassName(),variant:"outline-dark",onClick:this.props.handleDamSitesDisplay}," Dam Sites "),"  "),r.a.createElement("p",null," ",r.a.createElement(b.a,{className:this.floodProneClassName(),variant:"outline-dark",onClick:this.props.handleFloodProneDisplay}," Flood Prone Areas "),"  "),r.a.createElement("p",null," ",r.a.createElement(b.a,{className:this.proposedCulvertsClassName(),variant:"outline-dark",onClick:this.props.handleProposedCulvertDisplay}," Proposed Culverts "),"  "),r.a.createElement("p",null," ",r.a.createElement(b.a,{className:this.proposedDrainageClassName(),variant:"outline-dark",onClick:this.props.handleProposedDrainageDisplay}," Proposed Drainage Bridges "),"  "),r.a.createElement("p",null," ",r.a.createElement(b.a,{className:this.lakeOfProposedClassName(),variant:"outline-dark",onClick:this.props.handleLakeOfProposedDisplay}," Lake of Proposed Dikes "),"  "),r.a.createElement("p",null," ",r.a.createElement(b.a,{className:this.potentialLakesClassName(),variant:"outline-dark",onClick:this.props.handlePotentialLakesDisplay}," Potential Lakes "),"  "),r.a.createElement("p",null," ",r.a.createElement(b.a,{className:this.potentialDamsClassName(),variant:"outline-dark",onClick:this.props.handlePotentialDamsDisplay}," Potential Dams "),"  "))}},{key:"builtUpClassName",value:function(){var e="w-100 ";return e+=this.props.builtUpValue?"active":""}},{key:"dumpsiteClassName",value:function(){var e="w-100 ";return e+=this.props.dumpSiteValue?"active":""}},{key:"existingBuildingClassName",value:function(){var e="w-100 ";return e+=this.props.existingBuildingValue?"active":""}},{key:"existingStructureClassName",value:function(){var e="w-100 ";return e+=this.props.existingStructureValue?"active":""}},{key:"extensiveFloodClassName",value:function(){var e="w-100 ";return e+=this.props.extensiveFloodValue?"active":""}},{key:"waterSourcesClassName",value:function(){var e="w-100 ";return e+=this.props.waterSourcesValue?"active":""}},{key:"damSitesClassName",value:function(){var e="w-100 ";return e+=this.props.damSitesValue?"active":""}},{key:"floodProneClassName",value:function(){var e="w-100 ";return e+=this.props.floodProneValue?"active":""}},{key:"proposedCulvertsClassName",value:function(){var e="w-100 ";return e+=this.props.proposedCulvertsValue?"active":""}},{key:"proposedDrainageClassName",value:function(){var e="w-100 ";return e+=this.props.proposedDrainageValue?"active":""}},{key:"lakeOfProposedClassName",value:function(){var e="w-100 ";return e+=this.props.lakeOfProposedValue?"active":""}},{key:"potentialLakesClassName",value:function(){var e="w-100 ";return e+=this.props.potentialLakesValue?"active":""}},{key:"potentialDamsClassName",value:function(){var e="w-100 ";return e+=this.props.potentialDamsValue?"active":""}}]),t}(n.Component),E=(t(70),t(45)),S=t.n(E),D=t(46),x=t.n(D),w=t(47),C=t.n(w),P=t(48),N=t.n(P),L=t(49),j=t.n(L),O=t(50),F=t.n(O),B=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,s=new Array(l),o=0;o<l;o++)s[o]=arguments[o];return(e=a.call.apply(a,[this].concat(s))).state={},e.story=function(){return{storyBody:{width:"350px",backgroundColor:"lightgrey",opacity:"90%",padding:"25px",color:"black",display:e.props.displ?"inline-block":"none"},storyHeader:{backgroundColor:"bisque",width:"150px",borderRadius:"30px",textAlign:"center",fontWeight:"bold",color:"#000",padding:"5px"}}},e}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:this.story().storyBody,className:"text-justify"},r.a.createElement(f.a.Header,{onClick:this.props.handl},r.a.createElement("div",{style:this.story().storyHeader},"Scroll Down \u261f"),r.a.createElement(b.a,{variant:"danger",size:"sm"},"x")),r.a.createElement("div",null,r.a.createElement("h3",null,"Ibadan,",r.a.createElement("wbr",null)," The Capital of Oyo State"),r.a.createElement("p",null,"Ibadan, the capital city of Oyo State and the third largest metropolitan area in Nigeria, after Lagos and Kano is 128 km inland northeast of Lagos and 530 km southwest of Abuja, the federal capital. It is a prominent transit point between the coastal region and the areas to the north. Ibadan has a tropical wet and dry climate, with a lengthy wet season and relatively constant temperatures throughout the course of the year. Ibadan\u2019s, wet season runs from March through October, though August sees somewhat of a lull in precipitation. This lull nearly divides the wet season into two different wet seasons. The remaining months forms the city\u2019s dry season. Ibadan is highly exposed to flooding. The city has a population of 3 million and a growth rate of 3.4% (City of Ibadan, 2013). It is the largest metropolitan geographical area in West Africa (1,190 sq mi or 3,080 km2) with a highly built up and dense population. The city is frequently exposed to floods."),r.a.createElement("img",{src:S.a,alt:"ibadan",width:300,height:240})),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("h3",null,"History of Flooding in Ibadan"),r.a.createElement("p",null,"The historical date of the first flooding in Ibadan has been a subject of debate while Tomori recorded that the first flooding occurred in Ibadan in 1902, Etunovbe, 2011; Ajayi et al 2012; Akintola, 1981, recorded that flooding has been a recurrent decimal in Ibadan with recorded occurrences in 1948, 1955, 1961, 1963, 1978, 1980, 1985, 1987 and 1990 with the major sources of this flooding being Ogunpa and Kudeti streams. Ibadan has recorded varying degrees of flooding. For instance, there were flooding in the watersheds of Ogunpa and Kudeti streams (one of the two major streams in Ibadan) in 1955, 1960, 1961, 1963, 1969, 1978 and 1980. The flooding of 1969 is unique because it resulted from a mere 25.4 mm rainfall. Eleyele Dam is the source of drinking water for the part of the city of Ibadan that the Water Corporation of Oyo State water pipe lines serves.")),r.a.createElement("div",null,r.a.createElement("p",null,"Built on the Ona River, Eleyele Dam has a total length of 244 meters and was constructed at Eleyele in 1942.\xa0The dam was constructed to supply raw water for treatment at the Eleyele Waterworks and for flood controls during high flow periods through its reservoir holding capacity.\xa0In the aftermath of the August 26, 2011 devastating flood in the city, Eleyele Dam was one of the major hydrological devices that were ravaged by the flood."),r.a.createElement("img",{src:x.a,alt:"ibadan",width:300,height:240})),r.a.createElement("hr",null),r.a.createElement("h3",null,"Flooding"),r.a.createElement("p",null,"Nigerian cities have experienced great physical development, in terms of building, manufacturing industries and others without any appreciable infrastructures such as drainages, roads and canals to support them. These have made floods to be a very serious challenge that plague many Nigerian cities. The vulnerability of a place on the earth surface to flood is a function of the region\u2019s exposure to the hazard (natural event) and the anthropogenic activities carried out within the catchment area, which impedes the free flow of water .",r.a.createElement("img",{src:C.a,alt:"ibadan",width:300,height:240}),"Flood is among the most devastating natural hazards in the world claiming lives and properties. Nigeria has lost a lot of lives and properties worth millions of naira in the last three (3) decades, directly or indirectly to flood. Reducing the impact of flood can be successful only when detailed knowledge is obtained about the expected frequency, character and magnitude of hazardous events in an area as well as the vulnerability of people, buildings, infrastructures and economic activities in a potential dangerous area."),r.a.createElement("img",{src:N.a,alt:"ibadan",width:300,height:240}),r.a.createElement("hr",null),r.a.createElement("h3",null,"Causes of Flooding"),r.a.createElement("p",null,"A lot of research has been carried out to ascertain the causes of flooding and different reasons have been identified, such include: dumping of refuse over the years has led to the filling up of ponds and blockages of other natural water ways or drainages; high intensity rainfall coupled with a gentle slope for water accumulation; dam failure coupled with almost bare surface; rapid rate of unplanned settlement leading to poor drainage system among many others. The waste generated within Ibadan metropolis comprises mainly of leaves, paper, food waste, tins, glass wares, building construction waste and rags. This is because Ibadan is located in the heart of a rich agricultural land and has a large old and unplanned section. Generally, wastes are being dumped indiscriminately in the city by the populace; in several part of the city wastes are dumped on side drains, roads, streams, canals, open land spaces and bushes. This practice has contributed to the frequent occurrence of flooding in the city. Government has made some efforts to clean up the city through Oyo State Waste Management Authority (OYOSWMA) but there is need for more action to be taken.",r.a.createElement("br",null)," There are some dump sites that are around surrounding built up areas that will be potentially affected by flooding."),r.a.createElement("img",{src:j.a,alt:"ibadan",width:300,height:120}),r.a.createElement("img",{src:F.a,alt:"ibadan",width:300,height:120}))}}]),t}(n.Component),I=t(25),_=t.n(I);_.a.accessToken="pk.eyJ1IjoiZGF5b29sYSIsImEiOiJjazZycG9zNTAwN3FnM2xtbDMwdm1xaDduIn0.7a1DMjmNoX8V9q-Bhsp7RQ";var A=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,s=new Array(l),o=0;o<l;o++)s[o]=arguments[o];return(e=a.call.apply(a,[this].concat(s))).state={lng:3.947,lat:7.3775,zoom:8,style:"mapbox://styles/mapbox/dark-v9",dumpSiteVal:!1,builtUpValue:!1,existingBuildingValue:!1,existingStructureValue:!1,extensiveFloodValue:!1,waterSourcesValue:!1,damSitesValue:!1,floodProneValue:!1,proposedCulvertsValue:!1,proposedDrainageValue:!1,lakeOfProposedValue:!1,potentialLakesValue:!1,potentialDamsValue:!1},e.mapMount=function(){var a=e.props.dumpSiteValue,t=e.props.builtUpValue,i=e.props.existingBuildingValue,l=e.props.existingStructureValue,s=e.props.extensiveFloodValue,o=e.props.waterSourcesValue,n=e.props.damSitesValue,r=e.props.floodProneValue,u=e.props.proposedCulvertsValue,p=e.props.proposedDrainageValue,d=e.props.lakeOfProposedValue,c=e.props.potentialLakesValue,h=e.props.potentialDamsValue,m=new _.a.Map({container:e.mapContainer,style:e.props.mapStyle,center:[e.state.lng,e.state.lat],zoom:e.state.zoom});m.on("move",(function(){e.setState({lng:m.getCenter().lng.toFixed(4),lat:m.getCenter().lat.toFixed(4),zoom:m.getZoom().toFixed(2)})})),m.flyTo({bearing:27,center:[3.824436646,7.396018682],duration:6e3,zoom:9,pitch:50,speed:.6,essential:!0}),m.on("load",(function(){m.addSource("built-up",{type:"geojson",data:"https://geoserver.grid-nigeria.org/geoserver/GRIDMaster/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=GRIDMaster:sv_fe_builtuparea&outputFormat=application%2Fjson&authkey=fdfe9a37-d2d0-4210-9a15-25dab5d907fa&CQL_FILTER=state_code=%27OY%27"}),m.addSource("administrative",{type:"geojson",data:"https://raw.githubusercontent.com/everybees/ibadan_files/master/ibadan_boundary.geojson?token=ANCY26UWEES2C5T6OTBVALC6KEW2C"}),m.addSource("proposed-drainage",{type:"geojson",data:"https://raw.githubusercontent.com/everybees/ibadan_files/master/proposed_drainage_bridges.geojson"}),m.addSource("proposed-culverts",{type:"geojson",data:"https://raw.githubusercontent.com/everybees/ibadan_files/master/proposed_drainage_culverts.geojson"}),m.addSource("existing-buildings",{type:"geojson",data:"https://raw.githubusercontent.com/everybees/ibadan_files/master/existing_buildings.geojson"}),m.addSource("extensive_flooding",{type:"geojson",data:"https://raw.githubusercontent.com/everybees/ibadan_files/master/extensively_flooded_areas_2011.geojson?token=ANCY26RDOW7YY2NLUNZL2IK6KEUWG"}),m.addSource("flood-prone",{type:"geojson",data:"https://raw.githubusercontent.com/everybees/ibadan_files/master/flood_prone_areas.geojson"}),m.addSource("dump-site",{type:"geojson",data:"https://raw.githubusercontent.com/everybees/ibadan_files/master/dumpsite_ibn.geojson"}),m.addSource("proposed-dikes",{type:"geojson",data:"https://raw.githubusercontent.com/everybees/ibadan_files/master/lakes_of_proposed_dikes.geojson"}),m.addSource("dam-site",{type:"geojson",data:"https://raw.githubusercontent.com/everybees/ibadan_files/master/dams.geojson?token=ANCY26WV3ZLSIR6YV32HXZS6KEVI2"}),m.addSource("existing-structures",{type:"geojson",data:"https://raw.githubusercontent.com/everybees/ibadan_files/master/existing_structures.geojson"}),m.addSource("water-sources",{type:"geojson",data:"https://raw.githubusercontent.com/everybees/ibadan_files/master/water__courses.geojson"}),m.addSource("potential-lakes",{type:"geojson",data:"https://raw.githubusercontent.com/everybees/ibadan_files/master/potential_lakes.geojson"}),m.addSource("potential-dams",{type:"geojson",data:"https://raw.githubusercontent.com/everybees/ibadan_files/master/potential_dam_reserviors.geojson"}),m.addLayer({id:"Extensive Flood Event",type:"fill",source:"extensive_flooding",layout:{visibility:s?"visible":"none"},paint:{"fill-color":"#01037d","fill-opacity":.5},filter:["==","$type","Polygon"]}),m.addLayer({id:"Flood Prone Areas",type:"fill",source:"flood-prone",layout:{visibility:r?"visible":"none"},paint:{"fill-color":"red","fill-opacity":.4},filter:["==","$type","Polygon"]}),m.addLayer({id:"Existing Buildings",type:"fill",source:"existing-buildings",layout:{visibility:i?"visible":"none"},paint:{"fill-color":"blue","fill-opacity":.4},filter:["==","$type","Polygon"]}),m.addLayer({id:"Proposed Drainage Bridges",type:"circle",source:"proposed-drainage",layout:{visibility:p?"visible":"none"},paint:{"circle-radius":5,"circle-color":"#400252"},filter:["==","$type","Point"]}),m.addLayer({id:"Existing Structures",type:"circle",source:"existing-structures",layout:{visibility:l?"visible":"none"},paint:{"circle-radius":5,"circle-color":"#037036"},filter:["==","$type","Point"]}),m.addLayer({id:"Proposed Culverts",type:"circle",source:"proposed-culverts",layout:{visibility:u?"visible":"none"},paint:{"circle-radius":5,"circle-color":"#517003"},filter:["==","$type","Point"]}),m.addLayer({id:"Water Sources",type:"line",source:"water-sources",layout:{visibility:o?"visible":"none","line-join":"round","line-cap":"round"},paint:{"line-color":"blue","line-width":1}}),m.addLayer({id:"Built-Up Areas",type:"fill",source:"built-up",layout:{visibility:t?"visible":"none"},paint:{"fill-color":"#cf2e1f","fill-opacity":.4},filter:["==","$type","Polygon"]}),m.addLayer({id:"Dam Sites",type:"circle",source:"dam-site",layout:{visibility:n?"visible":"none"},paint:{"circle-radius":5,"circle-color":"#022152"},filter:["==","$type","Point"]}),m.addLayer({id:"state",type:"fill",source:"administrative",layout:{visibility:"visible"},paint:{"fill-color":"#888888","fill-opacity":.4},filter:["==","$type","Polygon"]}),m.addLayer({id:"Potential Lakes",type:"fill",source:"potential-lakes",layout:{visibility:c?"visible":"none"},paint:{"fill-color":"#062994","fill-opacity":.4},filter:["==","$type","Polygon"]}),m.addLayer({id:"Potential Dams",type:"fill",source:"potential-dams",layout:{visibility:h?"visible":"none"},paint:{"fill-color":"#010d30","fill-opacity":.8},filter:["==","$type","Polygon"]}),m.addLayer({id:"Lake of Proposed Dikes",type:"fill",source:"proposed-dikes",layout:{visibility:d?"visible":"none"},paint:{"fill-color":"#03195e","fill-opacity":.8},filter:["==","$type","Polygon"]}),m.addLayer({id:"Dump Sites",type:"circle",source:"dump-site",layout:{visibility:a?"visible":"none"},paint:{"circle-radius":5,"circle-color":"black"},filter:["==","$type","Point"]})}));var y=new _.a.NavigationControl;m.addControl(y,"bottom-right"),m.addControl(new _.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0}),"bottom-right")},e}return Object(l.a)(t,[{key:"componentDidUpdate",value:function(){this.state.style===this.props.mapStyle&&this.state.dumpSiteVal===this.props.dumpSiteValue&&this.state.builtUpValue===this.props.builtUpValue&&this.state.existingBuildingValue===this.props.existingBuildingValue&&this.state.existingStructureValue===this.props.existingStructureValue&&this.state.extensiveFloodValue===this.props.extensiveFloodValue&&this.state.waterSourcesValue===this.props.waterSourcesValue&&this.state.damSitesValue===this.props.damSitesValue&&this.state.floodProneValue===this.props.floodProneValue&&this.state.proposedCulvertsValue===this.props.proposedCulvertsValue&&this.state.proposedDrainageValue===this.props.proposedDrainageValue&&this.state.lakeOfProposedValue===this.props.lakeOfProposedValue&&this.state.potentialLakesValue===this.props.potentialLakesValue&&this.state.potentialDamsValue===this.props.potentialDamsValue||(this.setState({style:this.props.mapStyle}),this.setState({dumpSiteVal:this.props.dumpSiteValue}),this.setState({builtUpValue:this.props.builtUpValue}),this.setState({existingBuildingValue:this.props.existingBuildingValue}),this.setState({existingStructureValue:this.props.existingStructureValue}),this.setState({extensiveFloodValue:this.props.extensiveFloodValue}),this.setState({waterSourcesValue:this.props.waterSourcesValue}),this.setState({damSitesValue:this.props.damSitesValue}),this.setState({floodProneValue:this.props.floodProneValue}),this.setState({proposedCulvertsValue:this.props.proposedCulvertsValue}),this.setState({proposedDrainageValue:this.props.proposedDrainageValue}),this.setState({lakeOfProposedValue:this.props.lakeOfProposedValue}),this.setState({potentialLakesValue:this.props.potentialLakesValue}),this.setState({potentialDamsValue:this.props.potentialDamsValue}),this.mapMount())}},{key:"componentDidMount",value:function(){this.mapMount()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{ref:function(a){return e.mapContainer=a},style:{zIndex:"-1"},className:"mapContainer"}))}}]),t}(n.Component),U=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,s=new Array(l),o=0;o<l;o++)s[o]=arguments[o];return(e=a.call.apply(a,[this].concat(s))).state={radios:[{name:"Dark",value:"mapbox://styles/mapbox/dark-v9"},{name:"Streets",value:"mapbox://styles/mapbox/streets-v8"},{name:"Light",value:"mapbox://styles/mapbox/light-v8"},{name:"Outdoor",value:"mapbox://styles/mapbox/outdoors-v11"},{name:"Satellite",value:"mapbox://styles/mapbox/satellite-v9"}],radioValue:"mapbox://styles/mapbox/dark-v9",storyDisp:!0,layerDisp:!1,feedbackDisplay:!1,dumpSiteValue:!1,builtUpValue:!1,existingBuildingValue:!1,existingStructureValue:!1,extensiveFloodValue:!1,waterSourcesValue:!1,damSitesValue:!1,floodProneValue:!1,proposedCulvertsValue:!1,proposedDrainageValue:!1,lakeOfProposedValue:!1,potentialLakesValue:!1,potentialDamsValue:!1},e.handleStoryDisplay=function(){e.setState({layerDisp:!1});var a=!e.state.storyDisp;e.setState({storyDisp:a})},e.handleLayerDisplay=function(){e.setState({storyDisp:!1});var a=!e.state.layerDisp;e.setState({layerDisp:a})},e.handleBuiltUpDisplay=function(){var a=!e.state.builtUpValue;e.setState({builtUpValue:a})},e.handleDumpSiteDisplay=function(){var a=!e.state.dumpSiteValue;e.setState({dumpSiteValue:a})},e.handleExistingBuildingDisplay=function(){var a=!e.state.existingBuildingValue;e.setState({existingBuildingValue:a})},e.handleExistingStructureDisplay=function(){var a=!e.state.existingStructureValue;e.setState({existingStructureValue:a})},e.handleExtensiveFloodDisplay=function(){var a=!e.state.extensiveFloodValue;e.setState({extensiveFloodValue:a})},e.handleWaterSourcesDisplay=function(){var a=!e.state.waterSourcesValue;e.setState({waterSourcesValue:a})},e.handleDamSitesDisplay=function(){var a=!e.state.damSitesValue;e.setState({damSitesValue:a})},e.handleFloodProneDisplay=function(){var a=!e.state.floodProneValue;e.setState({floodProneValue:a})},e.handleProposedCulvertDisplay=function(){var a=!e.state.proposedCulvertsValue;e.setState({proposedCulvertsValue:a})},e.handleProposedDrainageDisplay=function(){var a=!e.state.proposedDrainageValue;e.setState({proposedDrainageValue:a})},e.handleLakeOfProposedDisplay=function(){var a=!e.state.lakeOfProposedValue;e.setState({lakeOfProposedValue:a})},e.handlePotentialLakesDisplay=function(){var a=!e.state.potentialLakesValue;e.setState({potentialLakesValue:a})},e.handlePotentialDamsDisplay=function(){var a=!e.state.potentialDamsValue;e.setState({potentialDamsValue:a})},e.handleFeedbackDisplay=function(){var a=!e.state.feedbackDisplay;e.setState({feedbackDisplay:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(h.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",className:"sticky-top"},r.a.createElement(h.a.Brand,{className:"font-weight-bold",href:"/"},"DATA4GOVERNANCE"),r.a.createElement(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(h.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(m.a,{className:"mr-auto"},r.a.createElement(m.a.Link,{href:"#story",onClick:this.handleStoryDisplay},"STORY"),r.a.createElement(m.a.Link,{href:"#layers",onClick:this.handleLayerDisplay},"LAYERS"),r.a.createElement(m.a.Link,{href:"#feedback",onClick:this.handleFeedbackDisplay},"FEEDBACK")),r.a.createElement(m.a,{className:"mx-auto"},r.a.createElement(y.a,{toggle:!0},this.state.radios.map((function(a,t){return r.a.createElement(g.a,{key:t,type:"radio",variant:"secondary",name:"radio",value:a.value,checked:e.state.radioValue===a.value,onChange:function(a){return e.setState({radioValue:a.currentTarget.value})}},a.name)})))),r.a.createElement(m.a,null,r.a.createElement(m.a.Link,{href:"tel: +2348122222",style:{backgroundColor:"#B9320C",borderRadius:"10px",border:"20px",width:"10em",textAlign:"center",margin:"5px"}},r.a.createElement(d.a,{icon:c.a})," ","EMERGENCY"),r.a.createElement(m.a.Link,{eventKey:2,href:"https://medium.com/@somtomomah1/data4governance-hackerthon-a981ae96ec78"},"ABOUT")))),r.a.createElement(k,{layerDisp:this.state.layerDisp,dumpSiteValue:this.state.dumpSiteValue,builtUpValue:this.state.builtUpValue,existingBuildingValue:this.state.existingBuildingValue,existingStructureValue:this.state.existingStructureValue,extensiveFloodValue:this.state.extensiveFloodValue,waterSourcesValue:this.state.waterSourcesValue,floodProneValue:this.state.floodProneValue,proposedCulvertsValue:this.state.proposedCulvertsValue,proposedDrainageValue:this.state.proposedDrainageValue,lakeOfProposedValue:this.state.lakeOfProposedValue,potentialLakesValue:this.state.potentialLakesValue,potentialDamsValue:this.state.potentialDamsValue,handleDumpSiteDisplay:this.handleDumpSiteDisplay,handleBuiltUpDisplay:this.handleBuiltUpDisplay,handleExistingBuildingDisplay:this.handleExistingBuildingDisplay,handleExistingStructureDisplay:this.handleExistingStructureDisplay,handleExtensiveFloodDisplay:this.handleExtensiveFloodDisplay,handleWaterSourcesDisplay:this.handleWaterSourcesDisplay,handleDamSitesDisplay:this.handleDamSitesDisplay,handleFloodProneDisplay:this.handleFloodProneDisplay,handleProposedCulvertDisplay:this.handleProposedCulvertDisplay,handleProposedDrainageDisplay:this.handleProposedDrainageDisplay,handleLakeOfProposedDisplay:this.handleLakeOfProposedDisplay,handlePotentialLakesDisplay:this.handlePotentialLakesDisplay,handlePotentialDamsDisplay:this.handlePotentialDamsDisplay}),r.a.createElement(A,{mapStyle:this.state.radioValue,dumpSiteValue:this.state.dumpSiteValue,builtUpValue:this.state.builtUpValue,existingBuildingValue:this.state.existingBuildingValue,existingStructureValue:this.state.existingStructureValue,extensiveFloodValue:this.state.extensiveFloodValue,waterSourcesValue:this.state.waterSourcesValue,floodProneValue:this.state.floodProneValue,proposedCulvertsValue:this.state.proposedCulvertsValue,proposedDrainageValue:this.state.proposedDrainageValue,lakeOfProposedValue:this.state.lakeOfProposedValue,potentialLakesValue:this.state.potentialLakesValue,potentialDamsValue:this.state.potentialDamsValue}),r.a.createElement(B,{displ:this.state.storyDisp,handl:this.handleStoryDisplay}),r.a.createElement(V,{handleFeedbackDisplay:this.handleFeedbackDisplay,feedbackDisplay:this.state.feedbackDisplay}))}}]),t}(n.Component),T=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,s=new Array(l),o=0;o<l;o++)s[o]=arguments[o];return(e=a.call.apply(a,[this].concat(s))).state={},e}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"app"}," ",r.a.createElement(U,null)," "))}}]),t}(r.a.Component);p.a.render(r.a.createElement(T,null),document.getElementById("app"))}},[[55,1,2]]]);
//# sourceMappingURL=main.24d7fac4.chunk.js.map