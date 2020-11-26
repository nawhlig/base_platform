import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
//import Map  from './Map';
import { UserContext} from './userContext'
import './App.css';
import 'antd/dist/antd.css';
import Main from './Main';


function App() {

  const [timedistance, setTimedistance] = useState({ totalTime:'', totalDistance: ''})

  return (
    <>
    <BrowserRouter>
    <UserContext.Provider value={{timedistance:timedistance, setTimedistance:setTimedistance}}>
      <Main/>
    </UserContext.Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
