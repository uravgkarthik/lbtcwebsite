import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'
import HomePage from './pages/homepage/HomePage';
import AboutUS from './pages/aboutus/AboutUS';
import Gallery from './pages/gallery/Gallery';
import Events from './pages/events/Events';
import ContactUS from './pages/contactus/ContactUS';

function App() {
  return (
    <Switch>
           <Route exact path = '/home' render = {() => <ContactUS></ContactUS>}></Route>
           <Redirect from = '' to = '/home'></Redirect>
    </Switch>
  );
}

export default App;