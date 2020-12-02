import React from 'react';
import {Route, Link, Switch } from 'react-router-dom';
import './Main.css';
import Home from './Home'

//import logo from './img/logosample.jpg'
//import logo from './img/logo_safenote3.png'
import logo from './img/logo.jpg'
//import logo from './img/logo_safenote5.png'
//import logo from './img/logo_safenote6.png'

import Korea from './country/Korea';
import Spain from './country/Spain';
import Italy from './country/Italy';
import Sweden from './country/Sweden';
import Egypt from './country/Egypt';
import Thailand from './country/Thailand';
import Austria from './country/Austria';
import Chile from './country/Chile';
import Fiji from './country/Fiji';
import France from './country/France';
import Gabon from './country/Gabon';
import Gambia from './country/Gambia';
import Ghana from './country/Ghana';
import Guyana from './country/Guyana';
import Honduras from './country/Honduras';
import HongKong from './country/HongKong';
import Jordan from './country/Jordan';
import Kenya from './country/Kenya';
import Kosovo from './country/Kosovo';
import NewZealand from './country/NewZealand';
import Oman from './country/Oman';
import Peru from './country/Peru';
import Philippines from './country/Philippines';
import Poland from './country/Poland';
import Togo from './country/Togo';
import Tuvalu from './country/Tuvalu';
import Uganda from './country/Uganda';


import MapPage_Korea from './countrymap/MapPage_Korea';
import MapPage_Italy from './countrymap/MapPage_Italy';
import MapPage_Spain from './countrymap/MapPage_Spain';
import MapPage_Sweden from './countrymap/MapPage_Sweden';
import MapPage_Egypt from './countrymap/MapPage_Egypt';
import MapPage_Austria from './countrymap/MapPage_Austria';
import MapPage_Chile from './countrymap/MapPage_Chile';
import MapPage_Thailand from './countrymap/MapPage_Thailand';
import MapPage_Fiji from './countrymap/MapPage_Fiji';
import MapPage_France from './countrymap/MapPage_France';
import MapPage_Gabon from './countrymap/MapPage_Gabon';
import MapPage_Gambia from './countrymap/MapPage_Gambia';
import MapPage_Ghana from './countrymap/MapPage_Ghana';
import MapPage_Guyana from './countrymap/MapPage_Guyana';
import MapPage_Honduras from './countrymap/MapPage_Honduras';
import MapPage_HongKong from './countrymap/MapPage_HongKong';
import MapPage_Jordan from './countrymap/MapPage_Jordan';
import MapPage_Kenya from './countrymap/MapPage_Kenya';
import MapPage_Kosovo from './countrymap/MapPage_Kosovo';
import MapPage_NewZealand from './countrymap/MapPage_NewZealand';
import MapPage_Oman from './countrymap/MapPage_Oman';
import MapPage_Peru from './countrymap/MapPage_Peru';
import MapPage_Philippines from './countrymap/MapPage_Philippines';
import MapPage_Poland from './countrymap/MapPage_Poland';
import MapPage_Togo from './countrymap/MapPage_Togo';
import MapPage_Tuvalu from './countrymap/MapPage_Tuvalu';
import MapPage_Uganda from './countrymap/MapPage_Uganda';





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
                    <Link exact to='/austria'>Austria</Link>
                    <Link exact to='/chile'>Chile</Link>
                    <Link exact to='/fiji'>Fiji</Link>
                    <Link exact to='/france'>France</Link>
                    <Link exact to='/gabon'>Gabon</Link>
                    <Link exact to='/gambia'>Gambia</Link>
                    <Link exact to='/ghana'>Ghana</Link>
                    <Link exact to='/guyana'>Guyana</Link>
                    <Link exact to='/honduras'>Honduras</Link>
                    <Link exact to='/hongkong'>HongKong</Link>
                    <Link exact to='/jordan'>Jordan</Link>
                    <Link exact to='/kenya'>Kenya</Link>
                    <Link exact to='/kosovo'>Kosovo</Link>
                    <Link exact to='/newzealand'>NewZealand</Link>
                    <Link exact to='/oman'>Oman</Link>
                    <Link exact to='/peru'>Peru</Link>
                    <Link exact to='/philippines'>Philippines</Link>
                    <Link exact to='/poland'>Poland</Link>
                    <Link exact to='/thailand'>Thailand</Link>
                    <Link exact to='/togo'>Togo</Link>
                    <Link exact to='/tuvalu'>Tuvalu</Link>
                    <Link exact to='/uganda'>Uganda</Link>
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
                <Route exact path="/austria" component={Austria}/>
                <Route exact path="/chile" component={Chile}/>
                <Route exact path="/fiji" component={Fiji}/>
                <Route exact path="/france" component={France}/>
                <Route exact path="/gabon" component={Gabon}/>
                <Route exact path="/gambia" component={Gambia}/>
                <Route exact path="/ghana" component={Ghana}/>
                <Route exact path="/guyana" component={Guyana}/>
                <Route exact path="/honduras" component={Honduras}/>
                <Route exact path="/hongkong" component={HongKong}/>
                <Route exact path="/jordan" component={Jordan}/>
                <Route exact path="/kenya" component={Kenya}/>
                <Route exact path="/kosovo" component={Kosovo}/>
                <Route exact path="/newzealand" component={NewZealand}/>
                <Route exact path="/oman" component={Oman}/>
                <Route exact path="/peru" component={Peru}/>
                <Route exact path="/philippines" component={Philippines}/>
                <Route exact path="/poland" component={Poland}/>
                <Route exact path="/thailand" component={Thailand}/>
                <Route exact path="/togo" component={Togo}/>
                <Route exact path="/tuvalu" component={Tuvalu}/>
                <Route exact path="/uganda" component={Uganda}/>
                
                


                <Route exact path="/koreamap" component={MapPage_Korea}/>
                <Route exact path="/italymap" component={MapPage_Italy}/>
                <Route exact path="/spainmap" component={MapPage_Spain}/>
                <Route exact path="/swedenmap" component={MapPage_Sweden}/>
                <Route exact path="/austriamap" component={MapPage_Austria}/>
                <Route exact path="/chilemap" component={MapPage_Chile}/>
                <Route exact path="/egyptmap" component={MapPage_Egypt}/>
                <Route exact path="/fijimap" component={MapPage_Fiji}/>
                <Route exact path="/francemap" component={MapPage_France}/>
                <Route exact path="/gabonmap" component={MapPage_Gabon}/>
                <Route exact path="/gambiamap" component={MapPage_Gambia}/>
                <Route exact path="/ghanamap" component={MapPage_Ghana}/>
                <Route exact path="/guyanamap" component={MapPage_Guyana}/>
                <Route exact path="/hondurasmap" component={MapPage_Honduras}/>
                <Route exact path="/hongkongmap" component={MapPage_HongKong}/>
                <Route exact path="/jordanmap" component={MapPage_Jordan}/>
                <Route exact path="/kenyamap" component={MapPage_Kenya}/>
                <Route exact path="/kosovomap" component={MapPage_Kosovo}/>
                <Route exact path="/newzealandmap" component={MapPage_NewZealand}/>
                <Route exact path="/omanmap" component={MapPage_Oman}/>
                <Route exact path="/perumap" component={MapPage_Peru}/>
                <Route exact path="/philippinesmap" component={MapPage_Philippines}/>
                <Route exact path="/polandmap" component={MapPage_Poland}/>
                <Route exact path="/thailandmap" component={MapPage_Thailand}/>
                <Route exact path="/tuvalumap" component={MapPage_Tuvalu}/>
                <Route exact path="/togomap" component={MapPage_Togo}/>
                <Route exact path="/ugandamap" component={MapPage_Uganda}/>
                

            
            </Switch>
            </div>
            </main>
            <footer>
            <div>
                <p class='bottombox'>©2020.Hoon Ho All pictures cannot be copied without permission.</p>
            </div>
            </footer>
        </div>


        </>
    )
}

export default Main;