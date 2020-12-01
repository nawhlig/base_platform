import React from 'react';
import '../Main.css';


import API from '../helper/Api';

import {Link} from 'react-router-dom';


function Italy()
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
                setLoading(true); // loading 상태를 true 로 바꿉니다.
                // window.alert("목록 불러오는중");   //브라우저에 경고창 띄우기
                //Axios 로 데이터 끌어오기 safenote.tk/api/safenote/
                const response_helpcall = await API.get("helpcall/?na=이탈리아");
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
            <div className='countryheader'>Italy</div>
            <div className='sosbox'>
                <a href={'tel:'+ ItemList_helpcall[0]['crime']}><button className='btn1'>Police</button></a>
                <a href={'tel:'+ ItemList_helpcall[0]['fire']}><button className='btn2'>Fire Station</button></a>
                <a href={'tel:'+ ItemList_helpcall[0]['ambulance']}><button className='btn3'>Ambulance</button></a>
                <Link exact to='/italymap'><button className='btn4'>Map</button></Link>
            </div>
        </>
    )

}
export default Italy;