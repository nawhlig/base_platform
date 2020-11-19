import React from 'react';
import './Main.css';

import {Link} from 'react-router-dom';

function UK(){
    return(
        <>
            <div className='countryheader'>U.K</div>
            <div className='sosbox'>
                <a href='tel:01085586313'><button className='btn1'>Police</button></a>
                <a href='tel:01085586313'><button className='btn2'>Fire Station</button></a>
                <a href='tel:01085586313'><button className='btn3'>Ambulance</button></a>
                <Link exact to='/map'><button className='btn4'>Map</button></Link>
                <a href='tel:01085586313'><button className='btn5'>Notice</button></a>
            </div>
        </>
    )

}
export default UK;