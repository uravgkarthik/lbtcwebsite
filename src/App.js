import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import ReactDOM from "react-dom";
import HomePage from "./pages/homepage/HomePage";
import AboutUS from "./pages/aboutus/AboutUS";
import Gallery from "./pages/gallery/Gallery";
import Gallery2 from "./pages/gallery/Gallery2";
import Gallery3 from "./pages/gallery/Gallery3";
import Events from "./pages/events/Events";
import ContactUS from "./pages/contactus/ContactUS";
import EventDetails from "./pages/events/EventDetails";
import EventDetails2 from "./pages/events/EventDetails2";
import Blog from "./pages/blog/Blog";
import EventDetails3 from "./pages/events/EventDetails3";
import EventDetails4 from "./pages/events/EventDetails4";
import EventDetails5 from "./pages/events/EventDetails5";
import EventDetails6 from "./pages/events/EventDetails6";
import Events2 from "./pages/events/Events2";
import ScrollToTop from "react-router-scroll-top";
function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <HomePage></HomePage>}></Route>

      <Route exact path="/about" render={() => <AboutUS></AboutUS>}></Route>

      <Route
        exact
        path="/contact"
        render={() => <ContactUS></ContactUS>}
      ></Route>

      <Route exact path="/gallery" render={() => <Gallery></Gallery>}></Route>

      <Route exact path="/events" render={() => <Events></Events>}></Route>

      <Route exact path="/events2" render={() => <Events2></Events2>}></Route>

      <Route
        exact
        path="/events/event-1"
        render={() => <EventDetails></EventDetails>}
      ></Route>

      <Route
        exact
        path="/events/event-2"
        render={() => <EventDetails2></EventDetails2>}
      ></Route>

      <Route
        exact
        path="/events/event-3"
        render={() => <EventDetails3></EventDetails3>}
      ></Route>

      <Route
        exact
        path="/events/event-4"
        render={() => <EventDetails4></EventDetails4>}
      ></Route>

      <Route
        exact
        path="/events/event-5"
        render={() => <EventDetails5></EventDetails5>}
      ></Route>

      <Route
        exact
        path="/events/event-6"
        render={() => <EventDetails6></EventDetails6>}
      ></Route>

      <Route exact path="/blog/" render={() => <Blog></Blog>}></Route>

      <Route
        exact
        path="/gallery-2/"
        render={() => <Gallery2></Gallery2>}
      ></Route>

      <Route
        exact
        path="/gallery-3/"
        render={() => <Gallery3></Gallery3>}
      ></Route>
    </Switch>
  );
}

export default App;
