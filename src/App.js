import React, { useState } from "react";
import "./App.css";
import circle from "./images/pattern-circles.svg";
import Box from "./Box";
import An from "./An";
const App = () => {
  return (
    <div>
      <img className="vt" src={circle} />
      <h2 className="head">Simple,traffic based pricing</h2>
      <p className="p">
        Sign-up for our 30-day trial. No credit card required.
      </p>
      <Box />
      <An />
      <button>Dark Mode On</button>
    </div>
  );
};
export default App;
