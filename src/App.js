import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Settings from "./components/Settings";
import Home from "./components/Home";
import DisableRightClick from "./DisableRightClick";

import "./App.css";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
      <DisableRightClick/>
    </div>
  );
}

export default App;
