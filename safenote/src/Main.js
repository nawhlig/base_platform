import React from 'react';
import {Route, Link, Switch } from 'react-router-dom';

import './Main.css';
import Home from './Home'

import logo from './img/logosample.jpg'
import Korea from './Korea';
import USA from './USA';
import UK from './UK';
import Sweden from './Sweden';
import Egypt from './Egypt';
import Map from './Map';

function Main() {
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
                <Route exact path="/map" component={Map}/>
            </Switch>
            </div>
            </main>
            <footer>
            <div>
                <p>SafeNote ©2020 Created by #Import</p>
            </div>
            </footer>
        </div>


        </>
    )
}

export default Main;