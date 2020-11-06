import React from 'react';
import Maps from './Maps';
import './Korea.css';
import './index.css';
import 'antd/dist/antd.css';

import Icon from '@ant-design/icons';
import { FireOutlined, AlertOutlined, MedicineBoxOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';

import test from './images/sliderImages/1918x954.gif';

const { Header, Content, Footer } = Layout;

function Egypt() {
  return (
    <>
     <Content style={{ padding: '0 50px', marginTop: 100}}>
        <section>
          <div>
            <div>
            <div>
              <div>Egypt
              <a class="launch" href="tel:112"><AlertOutlined />Police</a>
              <a class="launch" href="tel:119"><FireOutlined />Fire Station</a>
              <a class="launch" href="tel:119"><MedicineBoxOutlined />Ambulance</a>
              </div>
            </div>
            <div class="noticebox">
              <h1>Detail</h1>
              <p>한국은 사랑스럽다. </p>
              <p>한국은 사랑스럽다. </p>
              <p>한국은 사랑스럽다. </p>
              <p>한국은 사랑스럽다. </p>
              <p>한국은 사랑스럽다. </p>
              <p>한국은 사랑스럽다. </p>
              <p>한국은 사랑스럽다. </p>
            </div>
            <div class="mapbox">
             <Maps/>
            </div>
            </div>
          </div>
        </section>
    </Content>
    </>
  );
}

export default Egypt;
