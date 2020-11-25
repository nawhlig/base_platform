import React, { useState, useEffect, useRef, Component  } from 'react'
import Map from '../Map'
import '../Main.css';

export default function MapPage_Italy()
{
    return (
    <>      
        <div className="mapbody">
            <div className="mapPage">
                <Map/>
            </div>
            <div >
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