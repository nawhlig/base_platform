
import React from 'react';


import '../Main.css';

import {Link} from 'react-router-dom';

import fire from '../img/소방1.svg'
import map from '../img/지도1.svg'


function Korea({history}){
    return(
        <>
            <div className='countryheader'>Korea</div>
            <div className='sosbox'>
                <a href='tel:01085586313'><button className='btn1'><img className="btnicon" src={fire}/><br/>Police</button></a>
                <a href='tel:01085586313'><button className='btn2'><img className="btnicon" src={fire}/><br/>Fire Station</button></a>
                <a href='tel:01085586313'><button className='btn3'><img className="btnicon" src={fire}/><br/>Ambulance</button></a>
                <Link exact to='/koreamap'><button className='btn4'><img className="btnicon" src={fire}/><br/>Map</button></Link>
            </div>
        </>
    )

}
export default Korea;