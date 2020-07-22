import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import AboutUS from "./pages/aboutus/AboutUS";
import Gallery from "./pages/gallery/Gallery";
import Events from "./pages/events/Events";
import ContactUS from "./pages/contactus/ContactUS";
import EventDetails from "./pages/events/EventDetails";
import Blog from "./pages/blog/Blog";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <HomePage></HomePage>}></Route>

      <Route exact path="/about" render={() => <AboutUS></AboutUS>}></Route>

      <Route exact path="/contact"render={() => <ContactUS></ContactUS>}></Route>

      <Route exact path="/gallery" render={() => <Gallery></Gallery>}></Route>

      <Route exact path="/events" render={() => <Events></Events>}></Route>

      <Route exact path="/blog" render={() => <Blog></Blog>}></Route>
    </Switch>
  );
}

export default App;
