import React from 'react';

import './Main.css';
import './index.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';

import { Layout, Menu, Breadcrumb } from 'antd';

import test from './images/sliderImages/1918x954.gif';

const { Header, Content, Footer } = Layout;

function Home() {
  return (
    <>
      
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, backgroundImage: "url(" + test + ")"}}>
            <div id='mainsentece'>
            <p>진정하세요, Calm Down, Beruhigen Sie sich</p>
            </div>
        </Content>
       

    </>
  );
}

export default Home;
