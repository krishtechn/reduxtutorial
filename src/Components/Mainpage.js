import React from 'react'
import Carosels from './Carosels'
import Imageslider from './ImageSlider'
import Navbar from './Navbar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import Nopage from './Nopage';
import About from './About';
import Shop from "./Shop";

const Mainpage = () => {
  return (
    <Router>
        <Navbar title="Technical krish"/>

        <Routes>
            <Route path="/" element = { <Imageslider />}/>
            <Route path="/About" element = { <About />}/>
            <Route path="*" element = { <Nopage />}/>
            <Route path="/shop" element = { <Shop />}/>
       
        </Routes>
    </Router>
  )
}

export default Mainpage