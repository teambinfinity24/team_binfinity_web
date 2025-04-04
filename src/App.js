import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import About from "./About";
import Navigation from "./Navigation";

const App = () => {
  const contactRef = useRef(null);

  return (
    <BrowserRouter basename="/team_binfinity_web">
      <Routes>
        <Route path="/" element={<LandingPage contactRef={contactRef} />} />
        <Route path="/About" element={<About />} />
        
        <Route path="/Navigation" element={<Navigation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
