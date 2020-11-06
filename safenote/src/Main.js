import React from 'react';

import './Main.css';
import './index.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';

import {Route, Link, NavLink, Switch } from 'react-router-dom';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Layout, Menu, Breadcrumb } from 'antd';

import team from './images/team.jpg';
import test from './images/sliderImages/1918x954.gif';
import logo from './images/logosample.jpg'

import Home from './Home';
import Korea from './Korea';
import USA from './USA';
import UK from './UK';
import Sweden from './Sweden';
import Egypt from './Egypt';

const { Header, Content, Footer } = Layout;

function Main() {

    return(
        <>
        
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: "black" }}>
              <div className="logo" style={{float: "left", width: 150, padding: 'auto'}}><img src={logo} /></div>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{float:'right', backgroundColor: "black"}}>
                <Menu.Item key="1"><Link exact to='/'>Home</Link></Menu.Item>
                <SubMenu key="SubMenu" title="Emergency">
                  <Menu.ItemGroup title="Asia / 아시아">
                  <Menu.Item key="setting:1"><Link exact to="/korea">Korea / 한국</Link></Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup title="Europe / 유럽">
                  <Menu.Item key="setting:3">Sweden / 스웨덴</Menu.Item>
                  <Menu.Item key="setting:4">U.K / 영국</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup title="Africa / 아프리카">
                  <Menu.Item key="setting:3">Egypt / 이집트</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup title="America / 아메리카">
                  <Menu.Item key="setting:3">U.S.A / 미국</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
              </Menu>
            </Header>  
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/korea" component={Korea}/>
            </Switch>
            <Footer id='footer'>SafeNote ©2020 Created by #Import</Footer>  
        </Layout>
  
        </>
    );

}

export default Main;
