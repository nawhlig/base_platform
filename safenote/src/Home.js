import React from 'react'

import {Route, Link, Switch } from 'react-router-dom';

function Home({history}) {

    const [text, setText] = React.useState("진정하세요");
    
    React.useEffect(()=>{
        const sentence = ["Calm Down","Beruhigen Sie sich","진정하세요"]
        let cnt = 0
        setInterval(function()
        {
        // Calm Down, Beruhigen Sie sich
        setText(sentence[cnt]);
        
        if(cnt==2){
            cnt=0
        }
        else {
            cnt += 1;
        }
        },8000);
    },[])

    const selectCountry = (e) => {
        history.push(e.target.value)
        console.log(e.target.value);
    }

return (
<>
    
    <div class="blink"><span>{text}</span></div>
    <div class="select">
    <select onChange={selectCountry}>
        <option selected disabled>나라를 선택하세요. / Choose the Country</option>
        <option value="/korea">Korea</option>
        <option value="/Italy">Italy</option>
        <option value="/Spain">Spain</option>
        <option value="/sweden">Sweden</option>
        <option value="/egypt">Egypt</option>
        <option value="/austria">Austria</option>
        <option value="/chile">Chile</option>
        <option value="/fiji">Fiji</option>
        <option value="/france">France</option>
        <option value="/gabon">Gabon</option>
        <option value="/gambia">Gambia</option>
        <option value="/ghana">Ghana</option>
        {/* <option value="/guyana">Guyana</option> */}
        <option value="/honduras">Honduras</option>
        <option value="/hongkong">HongKong</option>
        {/* <option value="/jordan">Jordan</option> */}
        <option value="/kenya">Kenya</option>
        {/* <option value="/kosovo">Kosovo</option> */}
        <option value="/newzeland">NewZeland</option>
        <option value="/oman">Oman</option>
        <option value="/peru">Peru</option>
        <option value="/philippines">Philippines</option>
        <option value="/poland">Poland</option>
        {/* <option value="/togo">Togo</option> */}
        <option value="/thailand">Thailand</option>
        {/* <option value="/tuvalu">Tuvalu</option> */}
        <option value="/uganda">Uganda</option>
    </select>
    </div>
    </>
);
}

export default Home;
