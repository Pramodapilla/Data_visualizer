import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Output from "./components/Output";
import Index from "./components/Index";
import Visul from "./components/Visul";
import Main from "./components/Main";

function App() {
  return (
    <div className="container">
      <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Form" element={<Index/>}/>
        <Route path="/output" element={<Output />} />
        <Route path="/graph" element={<Visul />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
