import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'
import HomePage from './pages/homepage/HomePage';
import AboutUS from './pages/aboutus/AboutUS';
import Gallery from './pages/gallery/Gallery';

function App() {
  return (
    <Switch>
           <Route exact path = '/home' render = {() => <Gallery></Gallery>}></Route>
           <Redirect from = '' to = '/home'></Redirect>
    </Switch>
  );
}

export default App;
