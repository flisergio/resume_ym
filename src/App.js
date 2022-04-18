import React, { Fragment } from "react";

import Navigation from './components/navigation/Navigation';
import WelcomePage from "./components/welcome_page/WelcomePage"; 

import "./App.css";

const App = () => (
  <Fragment>
    <div className="container_App">
        <Navigation />

        <WelcomePage id="home" />
    </div>
  </Fragment>
);

export default App;
