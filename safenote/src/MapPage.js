import React, { useState, useEffect, useRef, Component  } from 'react'
import Map from './Map'
import './Main.css';

export default function MapPage()
{
    return (
    <>      
            <div className="mapPage">
                <Map/>
            </div>
            <div>
                <div>나는 추천</div>
            </div>
            <div >
                <table border="1" class="mapList">
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Score</th>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>94</td>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>80</td>
                    </tr>
                </table>
            </div>
    </>)
}