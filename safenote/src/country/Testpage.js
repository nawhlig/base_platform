import React, { useState, useEffect, useRef, Component  } from 'react'
import {Link} from 'react-router-dom';
import Map from '../Map'
import '../Main.css';
import API from '../helper/Api';
import { Button, List} from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';

export default function click_location({clicklati, clicklogi})
{
    console.log('위도 전달', {clicklati}, '경도 전달', {clicklogi});

    return (
    <></>
    )
}