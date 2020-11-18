import React from 'react';
import './Main.css';

import {Link} from 'react-router-dom';


function Korea({history}){
    const selectCountry = (e) => {
        history.push(e.target.value)
        console.log(e.target.value);
    }
    return(
        <>
            <div className='contryheader'>Korea</div>
            <div className='sosbox'>
                <a href='tel:01085586313'><button className='btn1'>Police</button></a>
                <a href='tel:01085586313'><button className='btn2'>Fire Station</button></a>
                <a href='tel:01085586313'><button className='btn3'>Ambulance</button></a>
                <Link exact to='/map'><button className='btn3'>Map</button></Link>
            </div>
            
        </>
    )

}
export default Korea;