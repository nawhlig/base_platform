import React from 'react';
import '../Main.css';

import police from '../img/pol_white.png'
import fire from '../img/fire_white.png'
import amb from '../img/amb_white.png'
import map from '../img/map_white.png'

import API from '../helper/Api';

import {Link} from 'react-router-dom';


function Sweden()
{

    // Axios 로 불러올 리스트가 담길 변수 상태
    const [ItemList_helpcall, setItemList_helpcall] = React.useState(null);
    //const [ItemList_medical, setItemList_medical] = React.useState(null);
    // Axios 로딩 에러 상태값
    const [Loading, setLoading] = React.useState(false);
    const [Error, setError] = React.useState(null);

    let loading = true;

    React.useEffect(()=>{
        const fetchItemList = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 itemlist 를 초기화하고
                setError(null);
                setItemList_helpcall(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                // window.alert("목록 불러오는중");   //브라우저에 경고창 띄우기
                //Axios 로 데이터 끌어오기 safenote.tk/api/safenote/
                const response_helpcall = await API.get("helpcall/?na=스웨덴");
                // response.data 안에 Array로 데이터가 있는 것을 값 변화 시킴.
                setItemList_helpcall(response_helpcall.data); 
            }
            catch (e) { setError(e); }
            setLoading(false);
        }
        fetchItemList();
    },[])


    if (Loading) return <div>로딩중..</div>;
    if (Error) return <div> API 주소에서 불러오기 실패</div>;
    if (!ItemList_helpcall) return null;
    

    return(
        <>
            <div className='countryheader'>Korea</div>
            <div className='sosbox'>
                <a href={'tel:'+ ItemList_helpcall[0]['crime']}><button className='btn1'><img className="btnicon" src={police}/><br/>Police</button></a>
                <a href={'tel:'+ ItemList_helpcall[0]['fire']}><button className='btn2'><img className="btnicon" src={fire}/><br/>Fire Station</button></a>
                <a href={'tel:'+ ItemList_helpcall[0]['ambulance']}><button className='btn3'><img className="btnicon" src={amb}/><br/>Ambulance</button></a>
                <Link exact to='/koreamap'><button className='btn4'><img className="btnicon" src={map}/><br/>Map</button></Link>
            </div>
        </>
    )

}
export default Sweden;