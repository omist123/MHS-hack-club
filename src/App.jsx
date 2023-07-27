import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Donate from "./Components/Donate";
import Join from "./Components/Join";
import Contact from "./Components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    // let component;
    // switch (window.location.pathname) {
    //   case "/":
    //     component = <Home />;
    //     break;
    //   case "/donate":
    //     component = <Donate />;
    //     break;
    //   case "/join":
    //     component = <Join />;
    //     break;
    //   case "/contact":
    //     component = <Contact />;
    //     break;
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="donate" element={<Donate />} />
        <Route path="join" element={<Join />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
