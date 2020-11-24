import React from 'react';
import {Route, Link, Switch } from 'react-router-dom';
import Axios from 'axios'
import './Main.css';
import Home from './Home'

import logo from './img/logosample.jpg'
import Korea from './country/Korea';
import USA from './country/USA';
import UK from './country/UK';
import Sweden from './country/Sweden';
import Egypt from './country/Egypt';
import Api from './helper/Api'
import MapPage_Korea from './countrymap/MapPage_Korea';
import MapPage_USA from './countrymap/MapPage_USA';
import MapPage_UK from './countrymap/MapPage_UK';
import MapPage_Sweden from './countrymap/MapPage_Sweden';
import MapPage_Egypt from './countrymap/MapPage_Egypt';

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
                    <button class="dropbtn">Country 
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
                <Route exact path="/koreamap" component={MapPage_Korea}/>
                <Route exact path="/usamap" component={MapPage_USA}/>
                <Route exact path="/ukmap" component={MapPage_UK}/>
                <Route exact path="/swedenmap" component={MapPage_Sweden}/>
                <Route exact path="/egyptmap" component={MapPage_Egypt}/>
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