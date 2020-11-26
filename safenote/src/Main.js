import React from 'react';
import {Route, Link, Switch } from 'react-router-dom';
import Axios from 'axios'
import './Main.css';
import Home from './Home'

/*import logo from './img/logosample.jpg'*/
//import logo from './img/logo_safenote3.png'
import logo from './img/logo_safenote4.png'
//import logo from './img/logo_safenote5.png'
//import logo from './img/logo_safenote6.png'

import Testpage from './country/Testpage';
import Korea from './country/Korea';
import Spain from './country/Spain';
import Italy from './country/Italy';
import Sweden from './country/Sweden';
import Egypt from './country/Egypt';
import MapPage_Korea from './countrymap/MapPage_Korea';
import MapPage_Italy from './countrymap/MapPage_Italy';
import MapPage_Spain from './countrymap/MapPage_Spain';
import MapPage_Sweden from './countrymap/MapPage_Sweden';
import MapPage_Egypt from './countrymap/MapPage_Egypt';


function Main() {   

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
                    <Link exact to='/Italy'>Italy</Link>
                    <Link exact to='/Spain'>Spain</Link>
                    <Link exact to='/sweden'>Sweden</Link>
                    <Link exact to='/egypt'>Egypt</Link>
                    <Link exact to='/testpage'>Testpage</Link>
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
                <Route exact path="/italy" component={Italy}/>
                <Route exact path="/spain" component={Spain}/>
                <Route exact path="/sweden" component={Sweden}/>
                <Route exact path="/egypt" component={Egypt}/>
                <Route exact path="/testpage" component={Testpage}/>
                <Route exact path="/koreamap" component={MapPage_Korea}/>
                <Route exact path="/italymap" component={MapPage_Italy}/>
                <Route exact path="/spainmap" component={MapPage_Spain}/>
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