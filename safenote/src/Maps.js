/* global google */

import React, { useState, useEffect, useRef, Component  } from 'react'
import {  DistanceMatrixService, StandaloneSearchBox, withGoogleMap, GoogleMap, Marker, DirectionsRenderer, LoadScript, InfoWindow } from '@react-google-maps/api';
//import './App.css'
import { UserContext} from './userContext'

import {my_key} from './keys'
const google = window.google;

const containerStyle = {
  // width: '400px',
  height: '400px',
 
};
 
// const center = {
//   lat: 53.430855, 
//   lng: -2.960830
// };



function MyDirectionsRenderer(props) {
  
  const [directions, setDirections] = useState(null);
  const { origin, destination, travelMode } = props;
  const { timedistance, setTimedistance} = React.useContext(UserContext);
 


  useEffect(() => {

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: new window.google.maps.LatLng(origin.lat, origin.lng),
        destination: new window.google.maps.LatLng(destination.lat, destination.lng),
        travelMode: travelMode
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      } 
    );
  }, [directions, destination.lat, destination.lng, origin.lat, origin.lng, travelMode]);
  
  const callback = (res) => {
    console.log("RESPONSE", res);
  }

  useEffect(()=>{
  
    
    var service = new window.google.maps.DistanceMatrixService();
    
    service.getDistanceMatrix({
      origins: [origin],
      destinations:  [{ lat: 37.551168, lng: 126.988141 }],   //데이터 들어 갈 부분
      avoidHighways: false,
      avoidTolls: false,
      travelMode: 'TRANSIT',
      //unitSystem: 'IMPERIAL'
    }, 
    (res) => {

      setTimedistance({ totalTime:res.rows[0].elements[0].distance.text,
      totalDistance: res.rows[0].elements[0].duration.text});

    }
  );

  
  },[])

  return (
    <React.Fragment>
      {directions && <DirectionsRenderer directions={directions} />}
    </React.Fragment>
  );
}




//////////////////////////////////////
function TestComponent() {

  const { timedistance, setTimedistance} = React.useContext(UserContext);

  return (
    <>
    {/* 데이터 넣을 때, 건물 이름도 주어로 넣으면 금상첨화일듯!! */}
    <div style={{overflow:'scroll'}}>
    <pre>총 거리는 <strong>{timedistance.totalTime}</strong> 이고,
    약 <strong>{timedistance.totalDistance}</strong> 걸릴 것으로 예상됩니다.
    </pre>
    <pre>TotalDistance is <strong>{timedistance.totalTime}</strong>  SO, It will take about <strong>{timedistance.totalDistance}</strong>.
    </pre>
    </div>
    </>
  )
}


function MyComponent() {

  

  const mapRef = React.useRef(null);
  const [map, setMap] = React.useState(null)
  const [pos, setPos] = React.useState({
    lat: 0,
    lng: 0,
  })
  
  const [position, setPosition] = React.useState({ lat: 52.620360, lng: -1.142179 });

  useEffect(()=> {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {

          setPos({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });

          
        },
        () => {
        }
      );
    }


  }, []);

  function handleCenter() {
    if (!mapRef.current) return;

    const newPos = mapRef.current.getCenter().toJSON();
    setPosition(newPos);
  }

  const onLoad = React.useCallback(function callback(map) {
    
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
  
    setMap(map)
  }, [])

  function handleLoad(map) {
    mapRef.current = map;
  }


 
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 1,
    fontSize: 4
    
  }
  
  const onLoad2 = infoWindow => {
    console.log('infoWindow: ', infoWindow)
  }
  
/* global google */


  
  return (
    <>
    <LoadScript
    libraries={["places"]}
      googleMapsApiKey={my_key}
    >
      
      <GoogleMap
        mapContainerStyle={containerStyle}
        onDragEnd={handleCenter}
        center={position}
        zoom={29}
        onLoad={handleLoad}
        onUnmount={onUnmount}
        defaultZoom={4}
    //defaultCenter={{ lat: 52.620360, lng: -1.142179 }}
      >    
<DistanceMatrixService
            options={{
              origins: [{pos}],
              destinations: [{ lat: 37.551168, lng: 126.988141 }],  //데이터 들어 갈 부분
              travelMode: "TRANSIT",
              
            }}
            callback={(res) => {
              
            }}
          />
              
<StandaloneSearchBox
          onLoad={onLoad2}
        >
          <input
            type="text"
            placeholder="did you forget the name of public institutions?"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `310px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              left: "50%",
              marginLeft: "-120px"
            }}
          />
        </StandaloneSearchBox>
        <InfoWindow
      onLoad={onLoad2}  //목적지   
      position={{ lat: 37.551168, lng: 126.988141 }} //데이터 들어 갈 부분
    >
      <div style={divStyle}>
        <h1>DESTINATION</h1>   {/* 데이터 들어 갈 부분 */}
      </div>
    </InfoWindow>
    
    <InfoWindow
      onLoad={onLoad2}  // 출발지 (gps)
      position={pos}
    >
      <div style={divStyle}>
        <h3>You are here</h3>
      </div>
    </InfoWindow>
        <MyDirectionsRenderer
      origin={pos}
      destination={{ lat: 37.551168, lng: 126.988141 }}   //데이터 들어 갈 부분
      travelMode= 'TRANSIT' 
       
    />
        { /* Child components, such as markers, info windows, etc. */ }
        
      </GoogleMap>
          <></>
    </LoadScript>
    <div>
    <TestComponent/>
    </div>
    </>
  )
}
 

export default React.memo(MyComponent)