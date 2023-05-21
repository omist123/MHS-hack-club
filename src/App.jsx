import React, { useState } from "react";
// https://theme.hackclub.com/ for theme assets
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Donate from "./Components/Donate";
import Join from "./Components/Join";
function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/donate":
      component = <Donate />;
      break;
    case "/join":
      component = <Join />;
      break;
  }
  return (
    <div className="App">
      <Navbar />
      {component}
    </div>
  );
}

export default App;
