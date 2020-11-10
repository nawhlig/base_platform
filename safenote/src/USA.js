import React from 'react';
import Maps from './Maps';
import './Korea.css';
import './index.css';
import 'antd/dist/antd.css';

import Icon from '@ant-design/icons';
import { FireOutlined, AlertOutlined, MedicineBoxOutlined, StarFilled, StarTwoTone, ExclamationOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Modal, Button, Space } from 'antd';

import test from './images/sliderImages/1918x954.gif';

const { Header, Content, Footer } = Layout;

function info() {
  Modal.info({
    title: '공지 / Notice',
    content: (
      <div>
        <p>한국은 어떤가요?</p>
        <p>한국은</p>
      </div>
    ),
    onOk() {},
  });
}

function Korea() {
  return (
    <>
     <Content style={{ padding: '0 50px', marginTop: 100}}>
        <section>
              <div>
              <Button><a class="launch" href="tel:112"><AlertOutlined />Police</a></Button>
              <Button><a class="launch" href="tel:119"><FireOutlined />Fire Station</a></Button>
              <Button><a class="launch" href="tel:119"><MedicineBoxOutlined />Ambulance</a></Button>
              <Button onClick={info} danger style={{float: "right"}}>Notice</Button>
              </div>
              <div style={{marginTop:"0.5cm"}}>
              <Maps/>
              </div>
        </section>
    </Content>
    </>
  );
}

export default Korea;
