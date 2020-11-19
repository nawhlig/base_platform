import React from 'react';
import {Route, Link, Switch } from 'react-router-dom';
import Axios from 'axios'
import { message, Button } from 'antd';
import './Main.css';
import Home from './Home'
import logo from './img/logosample.jpg'

import Korea from './Korea';
import USA from './USA';
import UK from './UK';
import Sweden from './Sweden';
import Egypt from './Egypt';
import MapPage from './MapPage';
import Map from './Map';
import Api from './helper/Api'
import Modal from 'antd/lib/modal/Modal';

function Main() {
    React.useEffect(()=>{

        Api.get("country/", {
        }).then(res=>{
            const {data} = res;
            console.log(data);
            
            
        })

    },[])
    return(
        <>  
        
        <div class="wrapper">
            <header>
            <div class="wrapper">
                <div class="navbar">
                <Link exact to='/'><img class='logo' src={logo} /></Link>
                <div class="dropdown">
                    <button class="dropbtn">Dropdown 
                    <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                    <Link exact to='/korea'>Korea</Link>
                    <Link exact to='/usa'>U.S.A</Link>
                    <Link exact to='/uk'>U.K</Link>
                    <Link exact to='/sweden'>Sweden</Link>
                    <Link exact to='/egypt'>Egypt</Link>
                    </div>
                </div> 
                <Link exact to='/' className='homemenu'>Home</Link>
                </div>
            </div>
            </header>
            <main>
            <div class="wrapper">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/korea" component={Korea}/>
                <Route exact path="/usa" component={USA}/>
                <Route exact path="/uk" component={UK}/>
                <Route exact path="/sweden" component={Sweden}/>
                <Route exact path="/egypt" component={Egypt}/>
                <Route exact path="/map" component={MapPage}/>
            </Switch>
            </div>
            </main>
            <footer>
            <div>
                <p>©2020.Hoon Ho all rights reserved.</p>
            </div>
            </footer>
        </div>


        </>
    )
}

export default Main;