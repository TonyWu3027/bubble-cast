import React, {Component} from 'react';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Podcast from './podcast/Podcast';
import Home from './home/Home';


const NavBar = () => {
  return (
    <div>
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path ='/' component={Home} />
           <Route path="/podcast" component={Podcast}/>
        </Switch>
      </div>
    </BrowserRouter>
    </div>

  );
}

export default NavBar;
