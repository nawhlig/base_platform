import React, { useState, useEffect, useRef, Component  } from 'react'
import {  DistanceMatrixService, StandaloneSearchBox, withGoogleMap, GoogleMap, Marker, DirectionsRenderer, LoadScript, InfoWindow } from '@react-google-maps/api';
import './Main.css';
import { UserContext } from './userContext'
//구글맵
//구글맵 특수 키 오류대비 필수!!
/* global google */
import {my_key} from './keys' //구글 맵 API 키
//Antd 스타일
import 'antd/dist/antd.css';
import { message, Button, Modal } from 'antd';






const google = window.google;
const containerStyle = {
  // width: '389px',
  // height: '300px',
  width: '100%',
  height: '100%',
};



// GPS 찾고 목적지까지 경로설정
function MyDirectionsRenderer(props) {
  const [directions, setDirections] = useState(null); //도로위치 GIS 지리정보 값 
  //MyComponent 에서 보낸 setPos={setPos}, origin={pos}, destination={ des }, setDes = { setDes }, travelMode= 'TRANSIT'  값을 읽어옴
  const { origin, destination, setDes, travelMode, setPos } = props; // 출발, 도착지, 목적지설정, 이동수단, 현위치기본값 읽기전용으로 읽어옴
  const { timedistance, setTimedistance} = React.useContext(UserContext); //시간계산결과값
  const delayFactor = 0;
  // 현위치 GPS 잡고 

  // console.log('jbjbjbjb')
  // console.log(destination.lat, destination.lng);

  useEffect(() => { const directionsService = new window.google.maps.DirectionsService();
                    directionsService.route({ origin: new window.google.maps.LatLng(origin.lat, origin.lng),
                                              destination: new window.google.maps.LatLng(destination.lat, destination.lng),
                                              travelMode: travelMode
                                            }, (result, status) => {if (status === window.google.maps.DirectionsStatus.OK) {setDirections(result);
                                                                  } 
                                                                 
                                                                   else { console.error(`error fetching directions ${result}`);}
                                                                  
                                                                  } 
                                          );
  }, [directions, destination.lat, destination.lng, origin.lat, origin.lng, travelMode]);  
  
  const callback = (res) => { console.log("RESPONSE", res); }

  // 출발위치값(현위치) 에 현위치 GPS  값 대입
  useEffect(()=>{
                  var service = new window.google.maps.DistanceMatrixService();  //API 기본 정의값
                  
                  // GPS 경로가 정상일 경우 현위치(setPos) 에 넣을 준비
                  if (navigator.geolocation) { 
                    message.success('GPS 연결 됨');
                    // setPos 에 넣음
                    navigator.geolocation.getCurrentPosition( (position) => { 

                        
                        setPos({ lat: position.coords.latitude, lng: position.coords.longitude});
                        // console.log('GPS 현위치를 setPos 에 설정한 값 : ', JSON.stringify({ lat: position.coords.latitude, lng: position.coords.longitude}));
                        // console.log('destination 에 목적지로 설정된 값: ', destination);
                        console.log('jbjbjbjbjb')
                        console.log(destination.lat, destination.lng);
                        // 37.58179744812036 127.1835899318241
                        if (destination.lat!=null || destination.lng!=null ) {
                          service.getDistanceMatrix({ 
                            origins: [{ lat: position.coords.latitude, lng: position.coords.longitude}],
                            destinations:  [{ lat: destination.lat, lng: destination.lng }],
                            avoidHighways: false,
                            avoidTolls: false,
                            travelMode: 'TRANSIT',
                            //unitSystem: window.google.maps.UnitSystem.metric,
                          }, (res) => { console.log('목적지-출발지 거리시간 결과',res);
                                        setTimedistance({ totalTime: res.rows[0].elements[0].distance.text, 
                                                          totalDistance: res.rows[0].elements[0].duration.text
                                                        });
                                      }
                          );
                        }

                      },(error) => { message.info(error.message);}, { timeout: 1000, maximumAge: 10000, enableHighAccuracy: true}
                    );
                  } 
                  else { message.info("GPS 를 이용할 수 없습니다"); }
  },[destination])

  return (
    <React.Fragment>
      directions && <DirectionsRenderer directions={directions} />
    </React.Fragment>
  );
}



// 맵 출발 목적 거리시간 예측 결과 프린트
function Totalprint() {
  const {timedistance, setTimedistance} = React.useContext(UserContext); 
  return (<>
    <div style={{backgroundColor:'ivory', width:'389px'}}>
    {/* 데이터 넣을 때, 건물 이름도 주어로 넣으면 금상첨화일듯!! */}
      <div class="mapinfo">
        <pre>총 거리는 <strong>{timedistance.totalTime}</strong> 이고, 약<strong>{timedistance.totalDistance}</strong> 거리입니다.</pre>
        <pre>TotalDistance are <strong>{timedistance.totalTime}</strong> So, It will take about <strong>{timedistance.totalDistance}</strong></pre>
      </div>
    </div></>
  )
}



function MyComponent({clicklati, clicklogi}) {
  const [des, setDes] = useState({lat: 37.56390, lng: 126.99249})  //최종 목적지 위치 변수 (값 바꾸면 목적지가 바껴요)
  const mapRef = React.useRef(null);
  const [map, setMap] = React.useState(null)
  const [pos, setPos] = React.useState({ lat: 0, lng: 0 })
  const [ref, setRef] = React.useState({})
  const [position, setPosition] = React.useState({ lat: 52.620360, lng: -1.142179 });



  // countrymap 폴더의 맵페이지에서 목적지 위치 받아서~
  ////////////////////////////      목적지의 변경            /////////////////////////////////////////////////
  
  useEffect(()=> {  console.log('setdes로 상태변화한 des가 뭔지 알아보겠습니다', des);
                    console.log('Map.js 로 전달 받은 값: ', clicklati, clicklogi);
                    // 37.58179744812036 127.1835899318241
                    // setDes({lat:37.58179744812036 , lng:127.1835899318241});
                    if(clicklati != null || clicklogi != null) {
                      setDes({lat:parseFloat(clicklati), lng:parseFloat(clicklogi)});
                    } 
                    // setDes({lat:clicklati, lng:clicklogi});
                }, [clicklati, clicklogi]); 
  
  
  ///////////////////////////////////////////////////////////////////////////////////

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

  const onUnmount = React.useCallback(function callback(map) {setMap(null)}, [])

  const onLoad22 = (ref) => {setRef(ref)};

  const onPlacesChanged = () => {
    console.log('getplaces() 의 결과값');
    console.log('전체: ', ref.getPlaces());
    console.log('위도: ', ref.getPlaces()[0].geometry.viewport.Wa.j,'경도: ',ref.getPlaces()[0].geometry.viewport.Sa.j);
    
    // 목적지 상태 변경
    setDes({lat: ref.getPlaces()[0].geometry.viewport.Wa.j
          , lng: ref.getPlaces()[0].geometry.viewport.Sa.j})
  }


  //////2/2/2/2/2/2/2/2/2/2/2/2/2/2/2/2/2/2/2/2/2//2/2/2/2/2/2/2/2/2/2//2/2/2/2//2/2/2/2/2/2/2/2/2/2/2/2/
  const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 1,
    fontSize: 4
  }
  
  const onLoad2 = infoWindow => { console.log('infoWindow: ', infoWindow) }
  
  //버튼 ZONE///////////////////////////////////////////////////////
  function info() {
    Modal.info( { title: 'This is a notification message',
                  content: (  <div>
                                <p>some messages...some messages...</p>
                                <p>some messages...some messages...</p>
                              </div>
                            ), onOk() {},
                }
              );
  }
  ////////////////////////////////////////////////////////////






  return (
  <>
    <LoadScript libraries={["places"]} googleMapsApiKey={my_key}>
      <GoogleMap  className='aaa'
                  mapContainerStyle={containerStyle}
                  onDragEnd={handleCenter}
                  center={position}
                  zoom={29}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                 //defaultZoom={4}
                 //defaultCenter={{ lat: 52.620360, lng: -1.142179 }}
      >
      <DistanceMatrixService  options={{  origins: [{pos}],
                                          destinations: [{ des }],  // setdes 에서 바뀌는 목적지가 들어감
                                          travelMode: "TRANSIT",
                                      }}
                              callback={(res) => {}}
      />
              
      <StandaloneSearchBox onPlacesChanged={onPlacesChanged} onLoad={onLoad22}>
        <div>
          <span class='in_inputbox'>SEARCH＝＞</span>
            <input class='inputbox' type="text" placeholder="did you forget the name of public institutions?" 
              
            />
        </div>
      </StandaloneSearchBox>
      {/* {markers.map((marker, index) => <Marker key={index} position={marker.position} /> )} */}
          {/* <InfoWindow onLoad={onLoad2}  //목적지   position={ des } //데이터 들어 갈 부분 setdes>
                <div style={divStyle}><h1>목적지 정보 들어갈 부분</h1></div>
              </InfoWindow> */}
      
      {/* 출발지 (gps) */}
      <InfoWindow onLoad={onLoad2} position={pos}><div style={divStyle}>
                                                    <h3>You are here</h3>
                                                  </div>
      </InfoWindow>
          <MyDirectionsRenderer   setPos={setPos}
                                  origin={pos}
                                  destination={ des }   //MyComponent 의 setDes 로 바뀐 목적지 MyDirectionsRenderer 로 값 보냄
                                  setDes = { setDes }
                                  travelMode= 'TRANSIT' 
          />
          { /* Child components, such as markers, info windows, etc. */ }
      </GoogleMap>
    </LoadScript>
    
    <div> <Totalprint/>
          {/* <Button onClick={info} className="notice">Notice</Button> */}
    </div>
  </>
  )
}




export default React.memo(MyComponent)