import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Donate from "./Components/Donate";
import Join from "./Components/Join";
import Contact from "./Components/Contact";
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
    case "/contact":
      component = <Contact />;
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
