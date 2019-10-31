import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => (
  <div className="home-hero">
    <Link to="/signup" className="btn btn-dark">
      Hier Registrieren
    </Link>
    <h1 className="header-text">
      <span>Got a</span>
      <span>brilliant</span>
      <span className="light">Idea</span>
      <span>to change</span>
      <span>the world?</span>
    </h1>
    <h4 className="header-subtitle"><span>Share it</span><span>with the</span><span>community!</span></h4>
    
  </div>
);

export default Homepage;
