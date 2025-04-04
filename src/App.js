import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import About from "./About";

const App = () => {
  const contactRef = useRef(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage contactRef={contactRef} />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
