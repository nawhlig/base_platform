import React from 'react';
import './Main.css';

import {Link} from 'react-router-dom';

function USA(){
    return(
        <>
            <div className='countryheader'>U.S.A</div>
            <div className='sosbox'>
                <a href='tel:01085586313'><button className='btn1'>Police</button></a>
                <a href='tel:01085586313'><button className='btn2'>Fire Station</button></a>
                <a href='tel:01085586313'><button className='btn3'>Ambulance</button></a>
                <Link exact to='/map'><button className='btn4'>Map</button></Link>
            </div>
        </>
    )

}
export default USA;