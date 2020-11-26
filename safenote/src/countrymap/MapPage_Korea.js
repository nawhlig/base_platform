import React, { useState, useEffect, useRef, Component  } from 'react'
import Map from '../Map'
import '../Main.css';
import API from '../helper/Api';


export default function MapPage_Korea()
{   
    React.useEffect(()=>{
        API.get("embassy/?na=대한민국").then(res=>{
            const {data} = res;
            console.log(data);})

        API.get("medical/?na=대한민국").then(res=>{
            const {data} = res;
            console.log(data);})
    },[])

    return (
    <>      
        <div className="mapbody">
            <div className="mapPage">
                <Map/>
            </div>
            <div>
                <div border="1" class="mapList">
                    <div style={{textAlign:"center"}}>1
                    <div>
                        <div>이름</div>
                        <div></div>
                    </div>
                    <div>
                        <div>주소</div>
                        <div>?</div>
                    </div>
                    <div>
                        <div>주소</div>
                        <div>?</div>
                    </div>
                    <div>
                        <div>주소</div>
                        <div>?</div>
                    </div>
                    <div style={{textAlign:"center"}}>1
                    <div>
                    </div>
                        <div>이름</div>
                        <div></div>
                    </div>
                    <div>
                        <div>주소</div>
                        <div>?</div>
                    </div>
                    <div>
                        <div>주소</div>
                        <div>?</div>
                    </div>
                    <div>
                        <div>주소</div>
                        <div>?</div>
                    </div>
                    </div>
                    <div style={{textAlign:"center"}}>1
                    <div>
                        <div>이름</div>
                        <div></div>
                    </div>
                    <div>
                        <div>주소</div>
                        <div>?</div>
                    </div>
                    <div>
                        <div>주소</div>
                        <div>?</div>
                    </div>
                    <div>
                        <div>주소</div>
                        <div>?</div>
                    </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </>
    )
}