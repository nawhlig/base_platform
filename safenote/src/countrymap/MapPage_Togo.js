import React, { useState, useEffect, useRef, Component  } from 'react'
import Map from '../Map'

import '../Main.css';
import API from '../helper/Api';

import { Button, List } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';

export default function MapPage_Togo()
{   
    // 대사관, 의료기관 위치 상태  mpas.js 로 넘겨줄 값
    const [Deslati, setDeslati] = React.useState(null);
    const [Deslogi, setDeslogi] = React.useState(null);
    // Axios 로 불러올 리스트가 담길 변수 상태
    const [ItemList_embassy, setItemList_embassy] = React.useState(null);
    const [ItemList_medical, setItemList_medical] = React.useState(null);
    // Axios 로딩 에러 상태값
    const [Loading, setLoading] = React.useState(false);
    const [Error, setError] = React.useState(null);

    let loading = true;

    React.useEffect(()=>{
        const fetchItemList = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 itemlist 를 초기화하고
                setError(null);
                setItemList_embassy(null);
                setItemList_medical(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                // window.alert("목록 불러오는중");   //브라우저에 경고창 띄우기
                //Axios 로 데이터 끌어오기 from safenote.tk/api/safenote/
                const response_getembassy = await API.get("embassy/?na=토고");
                const response_getmedical = await API.get("medical/?na=토고");
                // response.data 안에 Array로 데이터가 있는 것을 값 변화 시킴.
                setItemList_embassy(response_getembassy.data); 
                setItemList_medical(response_getmedical.data); 
            }
            catch (e) { setError(e); }
            setLoading(false);
        }
        fetchItemList();
    },[])
//    console.log(ItemList_embassy)
//    console.log(ItemList_medical)

    if (Loading) return <div>로딩중..</div>;
    if (Error) return <div> API 주소에서 불러오기 실패</div>;
    if (!ItemList_embassy) return null;
    if (!ItemList_medical) return null;

    return (
    <>      
        <div className="mapbody">
            <div className="mapPage">
                <Map clicklati={Deslati} clicklogi={Deslogi}/>
            </div>
            <div>
                <div border="1" class="mapList">
                    <div id="pagetop"><div id="subject">대사관</div></div>
                    <div id="pagebottom"><List
                        itemLayout="horizontal"
                        dataSource={ItemList_embassy}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={<span>{item.embassy_name}</span>}
                                    description={<span>{item.embassy_addr}</span>}
                                />
                                <Button
                                    style={{float:"right"}} shape="circle" icon={<EnvironmentOutlined />}
                                    onMouseEnter={() => {   console.log('위치상태 변수값:', Deslati, Deslogi);}}
                                    onClick=     {() => {   console.log('클릭후 위치상태 변수값:', Deslati, Deslogi);
                                                            if(loading) {
                                                                loading = false;
                                                                setDeslati(item.embassy_lati); setDeslogi(item.embassy_logi);
                                                                setTimeout(()=>{
                                                                    loading = true;   //지도 경로 로드 전 다시 버튼 누를시 오류발생 방지 딜레이 추가
                                                                },1500);
                                                            }
                                                        }}
                                />
                            </List.Item>
                        )}/>
                    </div>
                    <div id="pagetop"><div id="subject">의료기관</div></div>
                    <div id="pagebottom"><List
                        itemLayout="horizontal"
                        dataSource={ItemList_medical}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={<span>{item.hospital_name}</span>}
                                    description={<span>{item.hospital_addr}</span>}
                                />
                                <Button 
                                    style={{float:"right"}} shape="circle" icon={<EnvironmentOutlined />}
                                    onMouseEnter={() => {   console.log('위치상태 변수값:', Deslati, Deslogi);}}
                                    onClick=     {() => {   console.log('클릭후 위치상태 변수값:', Deslati, Deslogi);
                                                            setDeslati(item.hospital_lati); setDeslogi(item.hospital_logi);
                                                        }}
                                />
                            </List.Item>
                        )}/>            
                    </div>                    
                </div>    
            </div>
        </div>
    </>
    )
}