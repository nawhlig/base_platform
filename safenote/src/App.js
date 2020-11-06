import React from 'react';
import Korea from './Korea';
import Main from './Main';
import Home from './Home';
import { Link } from 'react-router'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Main/>
    </BrowserRouter>

    </>
  );
}

export default App;
