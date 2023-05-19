import React, { useState } from "react";
// https://theme.hackclub.com/ for theme assets
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar />
        
      </React.Fragment>
      <React.Fragment>
        <Home> </Home>
      </React.Fragment>
    </div>
  );
}

export default App;
