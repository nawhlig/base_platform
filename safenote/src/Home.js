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
    
    <p class="blink"><span>{text}</span></p>
    <div class="select">
    <select onChange={selectCountry}>
        <option selected disabled>나라를 선택하세요. / Choose the Country</option>
        <option value="/korea">Korea</option>
        <option value="/Italy">Italy</option>
        <option value="/Spain">Spain</option>
        <option value="/sweden">Sweden</option>
        <option value="/egypt">Egypt</option>
    </select>
    </div>
</>
);
}

export default Home;
