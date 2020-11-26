import React, { useState, useEffect, useRef, Component  } from 'react'
import Map from '../Map'
import '../Main.css';
import API from '../helper/Api';

import { Button, List } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';


export default function MapPage_Korea()
{   
    const [ItemList_embassy, setItemList_embassy] = React.useState(null);
    const [ItemList_medical, setItemList_medical] = React.useState(null);
    const [Loading, setLoading] = React.useState(false);
    const [Error, setError] = React.useState(null);

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
                const response_getembassy = await API.get("embassy/?na=대한민국");
                const response_getmedical = await API.get("medical/?na=대한민국");
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
                <Map/>
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
                                    description={<>
                                    <span>{item.embassy_addr}</span>
                                    <Button style={{float:"right"}} shape="circle" icon={<EnvironmentOutlined />} />
                                    </>}
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
                                            onMouseEnter={() => { console.log('선택된 위치:', item.hospital_lati, item.hospital_logi) }}
                                            onClick={() => { console.log('선택된 위치:', item.hospital_lati, item.hospital_logi);
                                                            {/*deleteTodo(item.seq)*/}
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