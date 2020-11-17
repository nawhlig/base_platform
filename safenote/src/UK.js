import React from 'react';
<<<<<<< HEAD
import './Main.css';


function UK(){
    return(
        <>
            <div className='contryheader'>U.K</div>
            <div className='sosbox'>
                <button className='btn1'>Police</button>
                <button className='btn2'>Fire Station</button>
                <button className='btn3'>Ambulance</button>
                <button className='btn3'>Map</button>
            </div>
        </>
    )

}
export default UK;
=======
import Maps from './Maps';
import './Korea.css';
import './index.css';
import 'antd/dist/antd.css';

import Icon from '@ant-design/icons';
import { FireOutlined, AlertOutlined, MedicineBoxOutlined, StarFilled, StarTwoTone, ExclamationOutlined, PhoneOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Modal, Button, Space } from 'antd';

import test from './images/sliderImages/1918x954.gif';

import { Container, Link } from 'react-floating-action-button'

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

function infomedic() {
  Modal.info({
    title: '공지 / Notice',
    content: (
      <div>
        <p>병원?</p>
        <p>한국은</p>
      </div>
    ),
    onOk() {},
  });
}

function Korea() {
  const [ click, setClick ] = React.useState(false)
  const clickevent = () => {
    if (click == true){
      setClick(false)
    }
    else{
      setClick(true)
    }
  } 

  return (
    <>
     <Content style={{ padding: '0 50px', marginTop: 100, position: 'relative'}}>
              <section class='section'>    
                <div style={{marginTop:"0.5cm", zIndex: 0}}>
                <Maps/>
                </div>
              </section>
              <section class='nosection'>
                <table>
                <Container style={{zIndex:100}}>
                  <tb><td><Button onClick={clickevent} style={{minHeight:'50pt', minWidth:'50pt', borderRadius:'50%'}}><PhoneOutlined /></Button></td>
                   <td> { click && <>  
                    <div class="inner">
                    <Button><a class="launch" href="tel:112"><AlertOutlined /> P o l i c e </a></Button>
                    <Button><a class="launch" href="tel:119"><FireOutlined /> Fire Station</a></Button>
                    <Button><a class="launch" href="tel:119"><MedicineBoxOutlined /> Ambulance</a></Button>
                    </div>
                    </>
                    }</td></tb>
                  <Button onClick={info} danger style={{float: "right", minHeight:'50pt', maxWidth:'50pt', borderRadius:'50%'}}>Notice</Button>  
                  <Button onClick={infomedic} danger style={{float: "right", minHeight:'50pt', maxWidth:'50pt', borderRadius:'50%', textAlign:'left', marginRight: 5}}>Medic</Button>
                </Container>
                </table>
              </section>
    </Content>
    </>
  );
}

export default Korea;
>>>>>>> a725e91de4352152e2ad5894d7c50d042a5010bc
