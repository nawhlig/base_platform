import React, { useEffect, useState } from 'react';
import Korea from './Korea';
import Main from './Main';
import Home from './Home';
import { Link } from 'react-router'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import { UserContext} from './userContext'
function App() {

  const [timedistance, setTimedistance] = useState({ totalTime:'',
                                    totalDistance: ''})
  return (
    <>
    <BrowserRouter>
      <Main/>
    </BrowserRouter>

    </>
  );
}

export default App;
