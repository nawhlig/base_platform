/* global google */

import React, { useState, useEffect, useRef, Component  } from 'react'
import {  DistanceMatrixService, StandaloneSearchBox, withGoogleMap, GoogleMap, Marker, DirectionsRenderer, LoadScript, InfoWindow } from '@react-google-maps/api';
import './App.css'
import { UserContext } from './userContext'
 
import {my_key} from './keys'
import { message, Button } from 'antd';

const google = window.google;

const containerStyle = {
  width: '400px',
  height: '400px'
};

function Totalprint() {

  const {timedistance, setTimedistance} = React.useContext(UserContext);
  
  return (
    <>
    {/* 데이터 넣을 때, 건물 이름도 주어로 넣으면 금상첨화일듯!! */}
    <pre>총 거리는 <strong>{timedistance.totalTime}</strong> 이고,
    약 <strong>{timedistance.totalDistance}</strong> 걸릴 것으로 예상됩니다.
    </pre>
    <pre>TotalDistance is <strong>{timedistance.totalTime}</strong>  SO, It will take about <strong>{timedistance.totalDistance}</strong>.
    </pre>
 
    </>
  )
}


function MyDirectionsRenderer(props) {
  
  const [directions, setDirections] = useState(null);
  const { origin, destination, travelMode, setPos } = props;
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
    
  
   
    if (navigator.geolocation) {

      message.info("GPS 사용중");
      navigator.geolocation.getCurrentPosition(
        (position) => {

          message.info("get Current 성공");

            //console.log(position,'------------------------------------------------')
            //message.info(position.coords.latitude);
            //console.log(position.coords.latitude,'------------------------------------------------')
            //console.log(position.coords.longitude,'------------------------------------------------')
          setPos({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });

          // 변수 들 출력 이동..
          console.log(JSON.stringify({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }));

          service.getDistanceMatrix({
            origins: [{
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }],
            destinations:  [{ lat: 37.551168, lng: 126.988141 }],   //데이터 들어 갈 부분
            avoidHighways: false,
            avoidTolls: false,
            travelMode: 'TRANSIT',
            //unitSystem: window.google.maps.UnitSystem.metric,
          }, 
          (res) => {
            
              console.log(res,'+_++_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+')
              setTimedistance({ totalTime: res.rows[0].elements[0].distance.text,
                              totalDistance: res.rows[0].elements[0].duration.text});
      
          }
        );
          
        },
        (error) => {
          message.info(error.message);
        },{
          timeout: 1000,
          maximumAge: 10000,
          enableHighAccuracy: true
        }
      );
    } else {
      message.info("GPS를 연결하실 수 없습니다.");
    }

   
   

  
  
  },[])

  return (
    <React.Fragment>
      {directions && <DirectionsRenderer directions={directions} />}
    </React.Fragment>
  );
}

//////////////////////////////////////

function MyComponent() {

  const mapRef = React.useRef(null);
  const [map, setMap] = React.useState(null)
  const [pos, setPos] = React.useState({
    lat: 0,
    lng: 0
  })

  const [ref, setRef] = React.useState({})
  
  const [position, setPosition] = React.useState({ lat: 52.620360, lng: -1.142179 });

  useEffect(()=> {



  

  }, []);
 
  function handleCenter() {
    if (!mapRef.current) return;

    const newPos = mapRef.current.getCenter().toJSON();
    setPosition(newPos);
  }

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
 
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const onLoad22 = (ref) => {
    setRef(ref)
  };

  const onPlacesChanged = () => console.log(ref.getPlaces());

  const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 1,
    fontSize: 4
    
  }
  
  const onLoad2 = infoWindow => {
    console.log('infoWindow: ', infoWindow)
  }
  
  
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
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        //defaultZoom={4}
    //defaultCenter={{ lat: 52.620360, lng: -1.142179 }}
      >    
      <></>
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
          onPlacesChanged={onPlacesChanged}
          onLoad={onLoad22}
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
        {/* {markers.map((marker, index) =>
      <Marker key={index} position={marker.position} />
    )} */}
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
      setPos={setPos}
      origin={pos}
      destination={{ lat: 37.551168, lng: 126.988141 }}   //데이터 들어 갈 부분
      travelMode= 'TRANSIT' 
       
    />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
          
    </LoadScript>
    <div>
      
    <Totalprint/>
    </div>
    </>
  )
}
 

export default React.memo(MyComponent)