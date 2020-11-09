import React, { useState } from 'react';

import './Main.css';
import './index.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';

import { Layout, Menu, Breadcrumb, Select } from 'antd';
import {Route, Link, NavLink, Switch } from 'react-router-dom';

import test from './images/sliderImages/1918x954.gif';

const { Header, Content, Footer } = Layout;

function Home() {


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

  const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

  return (
    <>
      
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, backgroundImage: "url(" + test + ")"}}>
            <div id='mainsentece'>
            <p class="blink"><span>{text}</span></p>  
            <Select
            showSearch
            style={{ width: '100%', maxWidth: 450 }}
            placeholder="어느 나라가 궁금하신가요? / Which country are you curious about?"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="korea" href="/korea">Korea</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
            </div>
        </Content>
       

    </>
  );
}

export default Home;
